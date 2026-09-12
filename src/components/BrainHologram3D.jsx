'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function BrainHologram3D({ className = '' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 300;
    const height = container.clientHeight || 300;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for the entire brain
    const brainGroup = new THREE.Group();
    scene.add(brainGroup);

    // 1. Generate Anatomical Brain Point Cloud
    // Dual hemispheres with frontal, parietal, occipital, temporal, and cerebellum lobes
    const nodeCount = 1200;
    const positions = [];
    const colors = [];
    const nodeVectors = [];

    const color1 = new THREE.Color('#38bdf8'); // Sky Cyan
    const color2 = new THREE.Color('#818cf8'); // Indigo
    const color3 = new THREE.Color('#c084fc'); // Purple
    const color4 = new THREE.Color('#34d399'); // Emerald

    for (let i = 0; i < nodeCount; i++) {
      const hemisphere = Math.random() > 0.5 ? 1 : -1;
      
      // Spherical coordinates with anatomical deformation
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      
      const r = 2.0 + (Math.sin(theta * 4) * Math.cos(phi * 3)) * 0.25;
      
      let x = r * Math.sin(phi) * Math.cos(theta);
      let y = r * Math.sin(phi) * Math.sin(theta);
      let z = r * Math.cos(phi);

      // Shape into brain proportions (elongated in Z, flattened at base, split at X=0)
      x = (Math.abs(x) * 0.75 + 0.15) * hemisphere;
      y = y * 0.9;
      z = z * 1.25;

      // Temporal lobe dip & cerebellum bulge
      if (y < -0.5 && z < -0.2) {
        y *= 1.2;
        z *= 1.1;
      }
      // Sulci / gyri undulating noise
      const sulci = Math.sin(x * 5) * Math.cos(y * 5) * Math.sin(z * 4) * 0.08;
      x += sulci;
      y += sulci;
      z += sulci;

      positions.push(x, y, z);
      nodeVectors.push(new THREE.Vector3(x, y, z));

      // Gradient color based on position
      const mixedColor = new THREE.Color();
      const t = (y + 2) / 4;
      if (t < 0.33) {
        mixedColor.copy(color1).lerp(color2, t / 0.33);
      } else if (t < 0.66) {
        mixedColor.copy(color2).lerp(color3, (t - 0.33) / 0.33);
      } else {
        mixedColor.copy(color3).lerp(color4, (t - 0.66) / 0.34);
      }

      colors.push(mixedColor.r, mixedColor.g, mixedColor.b);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    // Custom Canvas Circular Particle Texture
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.3, 'rgba(56, 189, 248, 0.8)');
      gradient.addColorStop(0.7, 'rgba(99, 102, 241, 0.2)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);

      const texture = new THREE.Texture(canvas);
      texture.needsUpdate = true;
      return texture;
    };

    const particleTexture = createParticleTexture();

    const nodeMaterial = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const nodesMesh = new THREE.Points(geometry, nodeMaterial);
    brainGroup.add(nodesMesh);

    // 2. Connectome Fiber Tracts (Lines connecting nearest neighbors)
    const linePositions = [];
    const lineColors = [];
    const maxDistance = 0.55;

    for (let i = 0; i < nodeVectors.length; i++) {
      let connections = 0;
      for (let j = i + 1; j < nodeVectors.length; j++) {
        if (connections >= 3) break;
        const dist = nodeVectors[i].distanceTo(nodeVectors[j]);
        if (dist < maxDistance) {
          linePositions.push(
            nodeVectors[i].x, nodeVectors[i].y, nodeVectors[i].z,
            nodeVectors[j].x, nodeVectors[j].y, nodeVectors[j].z
          );

          const r = (colors[i * 3] + colors[j * 3]) * 0.5;
          const g = (colors[i * 3 + 1] + colors[j * 3 + 1]) * 0.5;
          const b = (colors[i * 3 + 2] + colors[j * 3 + 2]) * 0.5;

          lineColors.push(r, g, b, r, g, b);
          connections++;
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending
    });

    const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    brainGroup.add(linesMesh);

    // 3. Synaptic Signal Pulses (Traveling particles along fibers)
    const pulseCount = 30;
    const pulsePositions = new Float32Array(pulseCount * 3);
    const pulseIndices = [];

    for (let i = 0; i < pulseCount; i++) {
      const randomLineIndex = Math.floor(Math.random() * (linePositions.length / 6));
      pulseIndices.push({
        lineIndex: randomLineIndex,
        progress: Math.random(),
        speed: 0.005 + Math.random() * 0.01
      });
    }

    const pulseGeometry = new THREE.BufferGeometry();
    pulseGeometry.setAttribute('position', new THREE.BufferAttribute(pulsePositions, 3));

    const pulseMaterial = new THREE.PointsMaterial({
      size: 0.22,
      color: new THREE.Color('#ffffff'),
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const pulsesMesh = new THREE.Points(pulseGeometry, pulseMaterial);
    brainGroup.add(pulsesMesh);

    // 4. Subtle Outer Holographic Data Ring
    const ringGeo = new THREE.RingGeometry(2.8, 2.85, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.25,
      side: THREE.DoubleSide
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.5;
    brainGroup.add(ring);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 2;
      mouseY = y * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Continuous rotation + mouse inertia
      targetRotationY = mouseX * 0.5;
      targetRotationX = mouseY * 0.3;

      brainGroup.rotation.y += 0.006;
      brainGroup.rotation.x += (targetRotationX - brainGroup.rotation.x) * 0.05;
      brainGroup.rotation.z = Math.sin(elapsedTime * 0.5) * 0.05;

      ring.rotation.z += 0.003;

      // Update synaptic pulses
      const posAttr = pulseGeometry.attributes.position;
      for (let i = 0; i < pulseCount; i++) {
        const item = pulseIndices[i];
        item.progress += item.speed;
        if (item.progress > 1) {
          item.progress = 0;
          item.lineIndex = Math.floor(Math.random() * (linePositions.length / 6));
        }

        const lIdx = item.lineIndex * 6;
        const x1 = linePositions[lIdx];
        const y1 = linePositions[lIdx + 1];
        const z1 = linePositions[lIdx + 2];
        const x2 = linePositions[lIdx + 3];
        const y2 = linePositions[lIdx + 4];
        const z2 = linePositions[lIdx + 5];

        const cx = x1 + (x2 - x1) * item.progress;
        const cy = y1 + (y2 - y1) * item.progress;
        const cz = z1 + (z2 - z1) * item.progress;

        posAttr.setXYZ(i, cx, cy, cz);
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      if (newWidth === 0 || newHeight === 0) return;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      nodeMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      pulseGeometry.dispose();
      pulseMaterial.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`w-full h-full relative overflow-hidden pointer-events-auto ${className}`}
    />
  );
}
