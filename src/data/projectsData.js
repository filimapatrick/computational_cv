export const projectsData = [
  {
    slug: 'data-centric-ai-low-field-mri',
    title: 'Data-Centric AI: Evaluating MRI Preprocessing on Low-Field African Brain MRI',
    subtitle: 'A Multi-Center Factorial Study of Preprocessing Impact on Model Robustness, Calibration, and Explainability',
    category: 'Data-Centric Medical AI',
    status: 'Active Benchmark / Project 2',
    techStack: ['Python 3.11+', 'PyTorch 2.0+', 'MONAI 1.2+', 'ANTsPy', 'SimpleITK', 'TorchIO', 'ResNet-18', 'DenseNet-121', 'EfficientNet-B0'],
    featured: true,
    summary: 'Evaluating whether optimizing preprocessing quality via factorial experimental design (Pipelines A–G) yields greater classification accuracy, calibration, and cross-hospital generalization than increasing neural network complexity on 225 low-field African brain MRI scans.',
    license: 'MIT',
    author: 'Patrick Filima',
    hospitalCohorts: [
      { name: 'LifeBridge Hospital', type: 'Private Diagnostic Centre', location: 'Abuja, Nigeria', specs: '1.5T Scanner' },
      { name: 'University of Port Harcourt Teaching Hospital (UPTH)', type: 'Federal Teaching Hospital', location: 'Port Harcourt, Nigeria', specs: '0.2T - 1.5T Scanners' },
      { name: 'Rivers State University Teaching Hospital (RSUTH)', type: 'State Teaching Hospital', location: 'Port Harcourt, Nigeria', specs: '1.5T Scanner' }
    ],
    diseaseDistribution: [
      { disease: 'Hydrocephalus', subjects: 70, pathology: 'Marked ventricular enlargement, thinning of the corpus callosum' },
      { disease: 'Dementia', subjects: 40, pathology: 'Generalized cortical atrophy, hippocampal volume loss' },
      { disease: 'Parkinson’s Disease', subjects: 35, pathology: 'Subtle structural alterations, structural exclusion' },
      { disease: 'Epilepsy', subjects: 30, pathology: 'Hippocampal sclerosis, structural lesions' },
      { disease: 'Healthy Controls', subjects: 50, pathology: 'Age-matched controls, no structural abnormalities' }
    ],
    pipelines: [
      { name: 'Pipeline A (Minimal Baseline)', description: 'DICOM to NIfTI, RAS coordinate alignment, spatial resampling to 256x256x32, min-max scaling [0,1].' },
      { name: 'Pipeline B (+N4 Bias Field)', description: 'Pipeline A + N4 Bias Field Correction (ANTsPy/SimpleITK) to remove RF coil non-uniformity.' },
      { name: 'Pipeline C (+Skull Stripping)', description: 'Pipeline B + Deep learning brain extraction (HD-BET / MONAI UNet) to isolate brain parenchyma.' },
      { name: 'Pipeline D (+Intensity Z-Score)', description: 'Pipeline C + Z-score standardization (mu=0, sigma=1) & histogram matching.' },
      { name: 'Pipeline E (+NLM Denoising)', description: 'Pipeline D + Non-Local Means / Anisotropic Diffusion filtering to attenuate noise.' },
      { name: 'Pipeline F (+CLAHE Contrast)', description: 'Pipeline E + Adaptive contrast enhancement (CLAHE) for tissue-contrast definition.' },
      { name: 'Pipeline G (Complete Unified Workflow)', description: 'Full sequential pipeline: Orientation -> N4 Bias -> Brain Extract -> Denoise -> CLAHE -> Z-Score.' }
    ],
    experimentalSetup: {
      split: 'Stratified patient-level 60/20/20 split preventing slice-level data leakage',
      crossValidation: 'Leave-One-Hospital-Out (LOHO) cross-validation for external generalization testing',
      models: 'ResNet-18 (primary), DenseNet-121, EfficientNet-B0 (secondary)',
      optimizer: 'AdamW (lr=1e-4, Cosine Annealing, Cross-Entropy Loss, batch size 32)'
    }
  },
  {
    slug: 'african-brain-mri-ai-ecosystem',
    title: 'African Brain MRI AI Research Ecosystem',
    subtitle: 'A Multi-Project Research Program for Robust, Explainable & Clinically Validated AI in African Neuroimaging',
    category: 'Scientific AI Ecosystem & Infrastructure',
    status: 'Active 7-Phase Roadmap',
    techStack: ['Python', 'PyTorch', 'MONAI', 'SimpleITK', 'Docker', 'afri_brain_core', 'BIDS', 'Bayesian Models'],
    featured: true,
    summary: 'Documents the architecture, dependency matrix, and 7-phase roadmap of a comprehensive research ecosystem designed to bridge the gap between idealized research MRI and real-world low-resource African clinical environments.',
    license: 'MIT',
    author: 'Patrick Filima',
    phases: [
      {
        phase: 'Phase 1: Foundation Infrastructure',
        projects: [
          {
            name: 'Project 1: African Clinical Brain MRI Benchmark',
            purpose: 'Establish the foundational benchmark ecosystem for evaluating AI models on heterogeneous African clinical MRI data.',
            contributions: 'Multi-centre Nigerian dataset, standardized preprocessing, patient-level splits, ML & deep learning baselines, calibration & robustness testing.'
          },
          {
            name: 'Project 2: Data-Centric AI for Low-Field MRI',
            purpose: 'Investigate how data quality, intensity normalization, augmentation, and preprocessing influence AI performance in low-field MRI.',
            contributions: 'Optimized preprocessing recommendations, data quality framework, and low-field MRI AI best practices.'
          }
        ]
      },
      {
        phase: 'Phase 2: Biological & Statistical Understanding',
        projects: [
          {
            name: 'Project 3: Bayesian Hierarchical Modeling of Brain Morphometry',
            purpose: 'Develop uncertainty-aware statistical models for structural brain differences across neurological disorders in Nigerian populations.',
            contributions: 'Population-specific brain biomarkers, uncertainty-aware inference, site variance estimation, and disease-specific morphometric patterns.'
          }
        ]
      },
      {
        phase: 'Phase 3: AI Reliability Evaluation',
        projects: [
          {
            name: 'Project 4: Robust Cross-Hospital Generalization',
            purpose: 'Evaluate whether AI models trained in one clinical environment safely generalize across different scanners and hospital protocols.',
            contributions: 'Leave-one-hospital-out validation, domain shift analysis, and deployment readiness framework.'
          },
          {
            name: 'Project 5: Quantifying MRI Image Quality Effects on AI Performance',
            purpose: 'Measure how progressive SNR, blur, sharpness, and motion artifacts affect AI classification reliability boundaries.',
            contributions: 'AI failure thresholds, quality-performance relationships, and operational safety limits.'
          },
          {
            name: 'Project 6: Explainability and Clinical Plausibility',
            purpose: 'Audit whether AI models learn true anatomical pathology or misleading scanner-specific shortcuts using Grad-CAM & saliency stability.',
            contributions: 'Grad-CAM localization, anatomical consistency, saliency stability, and clinical plausibility evaluation.'
          }
        ]
      },
      {
        phase: 'Phase 4: Clinical Translation',
        projects: [
          {
            name: 'Project 7: DeepAccess-MRI',
            purpose: 'Develop AI-assisted MRI protocol optimization through clinically validated missing sequence reconstruction to reduce scan time.',
            contributions: 'Sequence reconstruction, transfer learning, uncertainty estimation, pathology preservation testing, and clinical validation.'
          }
        ]
      }
    ],
    sharedArchitecture: [
      'preprocessing/ — N4 bias correction, resampling, reorientation',
      'datasets/ — Subject-level PyTorch Dataset loaders for T1, T2, FLAIR',
      'evaluation/ — Calibration (ECE), RRI, AURC, and DeLong statistical tests',
      'quality_control/ — MRIQC signal-to-noise (SNR), CNR, EFC, and FWHM profiling',
      'explainability/ — Grad-CAM localization & attribution stability',
      'morphometry/ — Automated segmentation & subcortical nuclei volume extraction'
    ]
  },
  {
    slug: 'clinical-mri-ai-robustness',
    title: 'Beyond Research-Grade MRI: AI Robustness on Nigerian Clinical Scans',
    subtitle: 'A Methodological Study of Model Calibration, Robustness, and Explainability under Real-World MRI Quality Constraints',
    category: 'Neuroimaging & Medical AI',
    status: 'Active Benchmark / Phase 3B',
    techStack: ['Python 3.11+', 'PyTorch', 'MONAI', 'SimpleITK', 'PyRadiomics', 'Scikit-Learn', 'ResNet-18', 'DenseNet-121'],
    featured: true,
    summary: 'Systematically characterizing AI model robustness, calibration error, and explainability maps across progressive real-world MRI degradations using a Nigerian clinical brain dataset.',
    license: 'MIT',
    datasetSpecs: {
      subjects: '88 subjects (33 Control [37.5%], 33 Dementia [37.5%], 22 Parkinson’s [25.0%])',
      scans: '787 structural images (T1w, T2w, FLAIR) acquired using 1.5T and sub-Tesla clinical scanners',
      heterogeneity: 'Variable modality coverage, multiple orientations (Axial, Coronal, Sagittal), real-world clinical quality variability'
    },
    modalityAvailability: [
      { sequence: 'T1w', subjects: 88, percentage: '100.0%' },
      { sequence: 'T2w', subjects: 82, percentage: '93.2%' },
      { sequence: 'FLAIR', subjects: 44, percentage: '50.0%' },
      { sequence: 'T1w + T2w', subjects: 82, percentage: '93.2%' },
      { sequence: 'T1w + FLAIR', subjects: 44, percentage: '50.0%' },
      { sequence: 'T2w + FLAIR', subjects: 44, percentage: '50.0%' },
      { sequence: 'T1w + T2w + FLAIR', subjects: 44, percentage: '50.0%' }
    ],
    tasks: [
      { name: 'Task 1: Control vs. Dementia', description: 'Separation of normal aging from cognitive decline.' },
      { name: 'Task 2: Control vs. Parkinson’s', description: 'Sensitivity to subcortical Parkinsonian structural alterations.' },
      { name: 'Task 3: Dementia vs. Parkinson’s', description: 'Differential diagnostics between distinct neurodegenerative pathways.' },
      { name: 'Task 4 (Primary): 3-Class Classification', description: 'Simultaneous multi-class categorisation (Control vs. Dementia vs. Parkinson’s).' }
    ],
    degradations: [
      { type: 'Gaussian Blur', physics: 'Simulates spatial resolution limits and hardware reconstruction smoothing.' },
      { type: 'Rician Noise', physics: 'Signal-dependent magnitude noise modeling real-world MRI magnitude physics.' },
      { type: 'Slice Downsampling', physics: 'Anisotropic resolution reduction (z-spacing 2.0mm–5.0mm) simulating thick clinical slices.' },
      { type: 'Motion Ringing', physics: 'k-space phase perturbations generating realistic subject motion ghosting.' }
    ],
    radiomicsResults: [
      { tier: 'Clean Baseline (L0)', f1: '0.5518', rri: '1.0000', impact: 'Clean reference baseline' },
      { tier: 'Gaussian Blur L1', f1: '0.4019', rri: '0.7283', impact: 'Mild decay (-27.2%)' },
      { tier: 'Gaussian Blur L2', f1: '0.2394', rri: '0.4338', impact: 'Steep decay (-56.6%)' },
      { tier: 'Gaussian Blur L3', f1: '0.2139', rri: '0.3876', impact: 'Floor performance (-61.2%)' },
      { tier: 'Motion Ringing L1-L3', f1: '0.1898', rri: '0.3439', impact: 'Catastrophic performance drop (-65.6%)' },
      { tier: 'Rician Noise L1', f1: '0.4005', rri: '0.7257', impact: 'Moderate decay (-27.4%)' }
    ]
  },
  {
    slug: 'brainlife-observability',
    title: 'Brainlife.io Workflow Observability & Diagnostic Engine',
    subtitle: 'Automated Pipeline Diagnostic & Performance Observability Platform for Distributed Scientific Workflows',
    category: 'Distributed Scientific Infrastructure',
    status: 'In Production',
    techStack: ['Node.js', 'Python', 'React', 'ELK Stack', 'REST APIs', 'Docker', 'HPC Cluster Integration'],
    featured: true,
    summary: 'Building observability tools that monitor, diagnose, and auto-triage HPC neuroimaging pipeline errors across thousands of distributed compute executions on Brainlife.io.',
    license: 'Proprietary / Open Access'
  },
  {
    slug: 'african-brain-data-network',
    title: 'African Brain Data Network (ABDN) Platform',
    subtitle: 'FAIR Data Management, Capacity Building & Participant Evaluation Platform for African Neuroscience',
    category: 'Digital Research Platform',
    status: 'In Production',
    techStack: ['Next.js', 'Python', 'PostgreSQL', 'Appwrite', 'Tailwind CSS', 'FAIR Data Protocols'],
    featured: true,
    summary: 'A digital research platform enabling neuroscientists across 50+ African institutions to collaborate, share FAIR datasets, and manage computational workshops.',
    license: 'Open Access'
  }
];
