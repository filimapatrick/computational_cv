export const projectsData = [
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
