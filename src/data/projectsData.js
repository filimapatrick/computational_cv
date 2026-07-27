export const projectsData = [
  {
    slug: 'glm-vs-dl-fmri-cognitive-control',
    title: 'GLM vs. Deep Learning Behavior in Small-Sample Task-Based fMRI of Cognitive Control',
    subtitle: 'A Controlled Methodological Study of Predictive Generalization, Overfitting Dynamics, and Spatial Representation Alignment',
    category: 'Functional Neuroimaging & Methodological Machine Learning',
    status: 'Active Methodological Study / Project 8',
    techStack: ['Python 3.8+', 'FSL 6.0+', 'PyTorch', 'TensorFlow', 'Nilearn', 'NiPype', 'OpenNeuro ds000102', 'LOSO CV'],
    featured: true,
    summary: 'Investigating model behavior under small-sample, high-dimensional fMRI conditions (NYU Slow Flanker task, N=26) to compare classical General Linear Models (GLM) and deep learning architectures across cross-subject generalization, statistical stability, and spatial correspondence (Pearson r / Dice).',
    license: 'MIT',
    author: 'Patrick Filima',
    fmriDataset: {
      source: 'OpenNeuro (ds000102 - NYU Slow Flanker Dataset)',
      subjects: '26 healthy adults (ages 19-50)',
      task: 'Eriksen Flanker Task (Cognitive Control paradigm: Congruent vs. Incongruent)',
      scanner: '3T Siemens Allegra (TR=2s, 146 volumes per run, event-related design)'
    },
    novelContributions: [
      { title: '1. Cross-Paradigm Shared Evaluation Framework', detail: 'Both GLM statistical inference and DL predictive classifiers evaluated under identical FSL preprocessing and Leave-One-Subject-Out (LOSO) splits.' },
      { title: '2. Focus on Small-Sample Instability Regimes (N=26)', detail: 'Explicitly characterizing failure modes, fold variance, and degradation under severe sample constraints rather than accuracy optimization.' },
      { title: '3. Quantification of Overfitting as a Comparative Property', detail: 'Measuring training-validation divergence trajectories and learning curves across statistical vs. predictive model classes.' },
      { title: '4. Spatial Representation Correspondence', detail: 'Quantifying spatial alignment between GLM Z-activation maps and DL attribution maps using Pearson r and Dice coefficients.' },
      { title: '5. Representation-Centric Interpretation', detail: 'Framing GLM as hypothesis-driven statistical inference and DL as data-driven representation learning.' },
      { title: '6. Permutation Null Modeling', detail: 'Non-parametric permutation testing (≥1,000 label shuffles) establishing empirical chance performance.' }
    ],
    fmriPhases: [
      { phase: 'Phase 1: Quality Control & MRIQC', detail: 'Framewise Displacement (FD < 0.5mm), DVARS (< 75), and temporal SNR (tSNR > 50) profiling.' },
      { phase: 'Phase 2: FSL Preprocessing', detail: 'BET brain extraction, MCFLIRT motion correction, slice timing, FWHM 5mm smoothing, 100s high-pass filter, MNI152 registration.' },
      { phase: 'Phase 3: Classical GLM Analysis', detail: 'Canonical HRF convolution, first-level contrasts [Incongruent > Congruent], FLAME 1+2 mixed-effects group maps (Z > 3.1, p < 0.05).' },
      { phase: 'Phase 4: Feature Extraction & LOSO', detail: 'Voxel-wise contrast maps, ROI activation summaries, and PCA/ICA embeddings with Leave-One-Subject-Out cross-validation.' },
      { phase: 'Phase 5: Small-Sample Deep Learning', detail: 'Shallow MLPs, 1D CNNs on voxel time series, and 3D CNNs on full-brain volumes with explicit L2 & dropout regularization.' },
      { phase: 'Phase 6: Spatial Attribution Evaluation', detail: 'Pearson spatial correlation & Dice coefficient overlap measuring alignment between GLM Z-maps and DL attributions.' }
    ]
  },
  {
    slug: 'deepaccess-mri',
    title: 'DeepAccess-MRI: AI-Assisted MRI Protocol Optimization via Missing Sequence Reconstruction',
    subtitle: 'Clinically Validated Transfer Learning & Missing Sequence Synthesis for Shorter, Affordable Neuroimaging Protocols in Nigeria',
    category: 'Translational Medical AI & Clinical Protocol Optimization',
    status: 'Active Clinical Translational Study / Project 7',
    techStack: ['Python 3.11+', 'PyTorch', 'MONAI', 'Diffusion Models', 'cGANs', 'U-Net', 'SimpleITK', 'Monte Carlo Dropout', 'Radiologist Audit'],
    featured: true,
    summary: 'Developing and clinically validating a transfer-learning framework that synthesizes missing structural MRI sequences (e.g. T1 -> FLAIR/T2) from heterogeneous Nigerian clinical scans, enabling shorter, non-inferior acquisition protocols without compromising diagnostic confidence.',
    license: 'MIT',
    author: 'Patrick Filima',
    objectives: [
      { name: 'Objective 1: Transfer Learning & Domain Adaptation', detail: 'Fine-tuning international research-grade pre-trained weights (BraTS, IXI, HCP) on local Nigerian clinical datasets.' },
      { name: 'Objective 2: Radiologist Non-Inferiority', detail: 'Evaluating whether AI-assisted reduced protocols match full physical acquisition protocols in diagnostic accuracy.' },
      { name: 'Objective 3: Pathology Preservation & Safety', detail: 'Auditing that synthetic sequences preserve disease-specific pathology (ventriculomegaly, lesions, atrophy) without hallucinations.' },
      { name: 'Objective 4: Quality & Noise Thresholding', detail: 'Locating exact limits of clinical noise, motion blur, and SNR where sequence reconstruction remains safe.' },
      { name: 'Objective 5: Multi-Center Generalization', detail: 'Validating zero-shot transferability across LifeBridge, UPTH, and RSUTH hospital networks.' }
    ],
    prototypeModules: [
      { module: 'Clinical Quality Assessment', description: 'Automated evaluation of input scan quality against minimum safety thresholds.' },
      { module: 'Sequence Inventory Audit', description: 'Automatic identification of present and missing MRI sequence modalities (T1, T2, FLAIR).' },
      { module: 'Missing Sequence Reconstruction', description: 'Clinically validated synthesis of missing target sequences using transfer-learned generators.' },
      { module: 'Voxel-Wise Uncertainty Mapping', description: 'Monte Carlo Dropout spatial confidence maps highlighting low-confidence reconstruction zones.' },
      { module: 'Protocol Optimization Decision Support', description: 'Actionable recommendations for reduced physical scan times without diagnostic confidence loss.' }
    ],
    plannedPapers: [
      'Paper 1: Characterizing Real-World Nigerian Clinical Brain MRI Data for AI Development',
      'Paper 2: Transfer Learning and Domain Adaptation for Multimodal MRI Sequence Synthesis using Clinical Data',
      'Paper 3: Quantifying the Impact of Motion, Noise, and Resolution Degradation on Deep Learning Synthesis Reliability',
      'Paper 4: Pathology Preservation, Hallucination Audits, and Radiologist Non-Inferiority Assessment of AI-Reconstructed MRI Sequences',
      'Paper 5: AI-Assisted Protocol Optimization: Clinical and Economic Evaluation of Shortened MRI Examinations in Nigerian Hospitals'
    ]
  },
  {
    slug: 'image-quality-vs-ai-performance',
    title: 'Quantifying Clinical MRI Quality Effects on Deep Learning Performance',
    subtitle: 'Treating Real-World Image Quality Degradation as a Continuous Independent Variable to Define AI Safety Boundaries',
    category: 'Medical Image Quality & AI Reliability',
    status: 'Active Benchmark / Project 5',
    techStack: ['Python 3.11+', 'PyTorch', 'MONAI', 'SimpleITK', 'OpenCV', 'Scikit-Image', 'ResNet-18', 'DenseNet-121', 'EfficientNet-B0'],
    featured: true,
    summary: 'Systematically quantifying how continuous objective Image Quality Metrics (SNR, CNR, blur, sharpness, edge strength) affect diagnostic accuracy, calibration error (ECE), and Grad-CAM saliency drift across 225 clinical scans.',
    license: 'MIT',
    author: 'Patrick Filima',
    iqmList: [
      { name: 'Sharpness', metric: 'Edge definition measured via the variance of Laplacian.' },
      { name: 'Signal-to-Noise Ratio (SNR)', metric: 'Signal intensity relative to estimated background noise.' },
      { name: 'Contrast-to-Noise Ratio (CNR)', metric: 'Tissue contrast definition relative to image noise.' },
      { name: 'Entropy', metric: 'Information content and spatial image complexity.' },
      { name: 'Blur', metric: 'Estimated via gradient-based and frequency-domain methods.' },
      { name: 'Edge Strength', metric: 'Preservation of anatomical boundaries.' },
      { name: 'Intensity Uniformity', metric: 'Assesses bias field and RF coil inhomogeneity.' },
      { name: 'Resolution Metrics', metric: 'Pixel spacing, slice thickness, and matrix dimensions.' }
    ],
    qualityTiers: [
      { tier: 'High Quality', description: 'High sharpness, high SNR, minimal noise, clean anatomical boundaries.' },
      { tier: 'Moderate Quality', description: 'Mild blur or noise, clinically clean and acceptable.' },
      { tier: 'Low Quality', description: 'Noticeable artifacts, visible motion blur, low contrast.' },
      { tier: 'Very Low Quality', description: 'Significant degradation, severe motion/blur, but still clinically interpretable.' }
    ]
  },
  {
    slug: 'african-brain-mri-benchmark',
    title: 'African Clinical Brain MRI Benchmark (Afri-Brain-Bench)',
    subtitle: 'A Standardized Benchmark Ecosystem for Evaluating AI Generalization, Calibration, and Explainability on African Clinical Scans',
    category: 'Benchmark Ecosystem & Clinical Dataset',
    status: 'Active Benchmark / Project 1',
    techStack: ['Python 3.11+', 'PyTorch', 'MONAI', 'TorchIO', 'ResNet-18', 'DenseNet-121', 'EfficientNet-B0', 'ConvNeXt Tiny', 'Scikit-Learn'],
    featured: true,
    summary: 'Introducing Afri-Brain-Bench—a standardized multi-center benchmark dataset of 225 clinical MRI examinations across 3 Nigerian hospitals providing 7 standardized evaluation tasks, cross-hospital splits, ECE calibration scoring, and Grad-CAM spatial ROI auditing.',
    license: 'MIT',
    author: 'Patrick Filima',
    benchmarkTasks: [
      { name: 'Task 1: Multi-Class Disease Classification', detail: 'Classify scans into 5 categories (Hydrocephalus, Dementia, Parkinson’s, Epilepsy, Control).' },
      { name: 'Task 2: Binary Disease Detection', detail: 'Predict neurological pathology vs. Healthy Control.' },
      { name: 'Task 3: Disease-Specific Experiments', detail: 'Targeted binary classification experiments (e.g., Hydrocephalus vs. Control).' },
      { name: 'Task 4: Cross-Hospital Evaluation', detail: 'Train on LifeBridge, test on UPTH to evaluate direct domain transfer.' },
      { name: 'Task 5: Leave-One-Hospital-Out (LOHO)', detail: 'Train on 2 hospitals, evaluate zero-shot generalization on the 3rd hospital.' },
      { name: 'Task 6: Image Quality Robustness', detail: 'Evaluate performance stratified across High, Moderate, and Low SNR quality cohorts.' },
      { name: 'Task 7: Explainability Evaluation', detail: 'Spatial ROI overlap (IoU) of Grad-CAM attention maps under clinical domain shift.' }
    ],
    baselineSuite: [
      { category: 'Classical Machine Learning', models: 'Logistic Regression, Support Vector Machines (SVM), Random Forest on radiomics/voxel inputs' },
      { category: 'Deep Learning Architectures', models: 'ResNet-18, DenseNet-121, EfficientNet-B0, ConvNeXt Tiny (2D/3D)' }
    ],
    benchmarkMetrics: [
      { axis: 'Classification', metric: 'Accuracy, Precision, Recall, F1-Score, ROC-AUC, PR-AUC' },
      { axis: 'Calibration', metric: 'Expected Calibration Error (ECE), Brier Score' },
      { axis: 'Robustness', metric: 'Cross-hospital accuracy decay (Delta F1-Score)' },
      { axis: 'Generalization', metric: 'Leave-One-Hospital-Out zero-shot degradation' },
      { axis: 'Explainability', metric: 'Grad-CAM Attention Consistency & Spatial ROI Overlap (IoU)' },
      { axis: 'Statistical Stability', metric: '95% Bootstrap Confidence Intervals (1,000 iterations)' }
    ]
  },
  {
    slug: 'explainability-and-clinical-plausibility',
    title: 'Explainability & Clinical Plausibility of Deep Learning on Low-Field African Brain MRI',
    subtitle: 'Evaluating Anatomical Attention vs. Shortcut Learning across Low-Field Scanners with Neuroradiology Expert Auditing',
    category: 'Explainable AI (XAI) & Clinical Plausibility',
    status: 'Active Benchmark / Project 6',
    techStack: ['Python 3.11+', 'PyTorch', 'MONAI', 'Grad-CAM++', 'Integrated Gradients', 'Occlusion Sensitivity', 'KernelSHAP', 'ResNet-18', 'DenseNet-121', 'ConvNeXt Tiny'],
    featured: true,
    summary: 'Evaluating whether deep learning models trained on heterogeneous low-field African clinical MRI base decisions on medically plausible neuroanatomy or spurious imaging shortcuts using a 5-point neuroradiologist rating rubric and quantitative anatomical IoU.',
    license: 'MIT',
    author: 'Patrick Filima',
    xaiMethods: [
      { name: 'Grad-CAM', type: 'Gradient-based', description: 'Coarse class activation mapping from final convolutional layer gradients.' },
      { name: 'Grad-CAM++', type: 'Gradient-based', description: 'Enhanced localization handling multiple object instances of identical classes.' },
      { name: 'Integrated Gradients', type: 'Pixel-Attribution', description: 'Path-integrated gradients relative to a baseline image.' },
      { name: 'Occlusion Sensitivity', type: 'Perturbation-based', description: 'Systematic patch masking to measure prediction probability changes.' },
      { name: 'SHAP (Kernel/Deep)', type: 'Game-Theoretic', description: 'Shapley values assigning exact feature importance weights.' }
    ],
    anatomicalTargets: [
      { disease: 'Hydrocephalus', targetROI: 'Lateral ventricles, third ventricle, periventricular zones', shortcut: 'Skull edges, orbits, neck, background noise' },
      { disease: 'Dementia', targetROI: 'Hippocampal formation, temporal lobes, cortical sulci', shortcut: 'Occipital lobe, skull, cerebellomedullary cistern' },
      { disease: 'Parkinson’s Disease', targetROI: 'Midbrain region, substantia nigra locus', shortcut: 'Frontal cortex, orbits, scanner artifacts' },
      { disease: 'Epilepsy', targetROI: 'Hippocampus, mesial temporal lobes, cortical gyri', shortcut: 'Ventricles, skull, skull base' },
      { disease: 'Healthy Controls', targetROI: 'Distributed, non-focal normal anatomical structures', shortcut: 'Single-voxel spikes, background noise' }
    ],
    scoringRubric: [
      { score: 'Score 1 (Entirely Implausible)', detail: 'Heatmap focuses purely on background, skull, or imaging artifacts.' },
      { score: 'Score 2 (Mostly Implausible)', detail: 'Attention is mostly on non-diagnostic regions with minimal target overlap.' },
      { score: 'Score 3 (Indeterminate)', detail: 'Focus is diffuse across normal brain structures showing no diagnostic preference.' },
      { score: 'Score 4 (Mostly Plausible)', detail: 'Major attention resides on expected diagnostic neuroanatomy with minor distraction.' },
      { score: 'Score 5 (Highly Plausible)', detail: 'Attention maps are strictly confined to pathological structures per diagnostic criteria.' }
    ]
  },
  {
    slug: 'data-centric-ai-low-field-mri',
    title: 'Data-Centric AI: Evaluating MRI Preprocessing on Low-Field African Brain MRI',
    subtitle: 'A Multi-Center Factorial Study of Preprocessing Impact on Model Robustness, Calibration, and Explainability',
    category: 'Data-Centric Medical AI',
    status: 'Active Benchmark / Project 2',
    techStack: ['Python 3.11+', 'PyTorch 2.0+', 'MONAI 1.2+', 'ANTsPy', 'SimpleITK', 'TorchIO', 'ResNet-18', 'DenseNet-121', 'EfficientNet-B0'],
    featured: true,
    summary: 'Evaluating whether optimizing preprocessing quality via factorial experimental design (Pipelines A–G) yields greater classification accuracy, calibration, and cross-hospital generalization than increasing model complexity on 225 low-field African brain MRI scans.',
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
