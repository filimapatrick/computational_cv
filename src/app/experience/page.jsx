'use client';

import { motion } from 'framer-motion';
import { 
  FaBriefcase, 
  FaCompass, 
  FaRocket, 
  FaUserCheck, 
  FaCode, 
  FaChartLine, 
  FaBrain, 
  FaGlobeAfrica, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaCheckCircle, 
  FaLayerGroup,
  FaHeartbeat,
  FaBuilding,
  FaUsers,
  FaArrowRight,
  FaTerminal,
  FaFlask,
  FaExternalLinkAlt
} from 'react-icons/fa';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const experiences = [
  {
    company: 'Brainlife.io — University of Texas at Austin',
    title: 'Research Software Engineer & Technical Product Lead',
    location: 'Remote',
    period: '2025 – Present',
    badgeColor: 'from-blue-500/20 to-cyan-500/20 text-cyan-300 border-cyan-500/30',
    icon: FaBrain,
    mission: `At Brainlife.io, I work at the intersection of research software engineering and technical product leadership, building tools that improve how neuroscientists process, monitor, and manage large-scale neuroimaging workflows.

My role extends beyond software development. I work closely with neuroscientists, infrastructure engineers, and scientific stakeholders to understand challenges within computational neuroscience workflows, translate those needs into product requirements, and lead the design and implementation of solutions that improve researcher productivity and platform reliability.`,
    stakeholders: ['Neuroscientists', 'Research Software Engineers', 'Cloud Infrastructure Engineers', 'Platform Maintainers'],
    flagshipProjects: [
      {
        name: 'Brainlife Mobile',
        tagline: 'Real-time Mobile Observability for Distributed Neuroimaging Pipelines',
        mission: 'Researchers often run neuroimaging pipelines that execute for hours—or even days—across distributed cloud infrastructure. Despite this, there was no convenient way to monitor ongoing analyses away from a desktop environment. I identified this gap through researcher workflows and proposed Brainlife Mobile, a companion application designed to provide real-time visibility into computational pipelines.',
        productLeadership: [
          'Chose a mobile-first monitoring experience after observing researchers frequently leaving long-running jobs unattended outside the lab.',
          'Decided to prioritize notification reliability and instant pipeline alert delivery over feature breadth for the initial release.',
          'Worked directly with neuroscientists to translate day-to-day workflow pain points into product requirements prioritizing remote status tracking over desktop-only views.'
        ],
        technicalContributions: [
          'Led technical implementation using React Native and Brainlife REST APIs.',
          'Built real-time status tracking and push notification services for pipeline completions, bottlenecks, and execution failures.',
          'Developed mobile diagnostic views to inspect failed job stack traces and execution logs away from desktop environments.'
        ],
        scaleImpact: [
          'Enabled 24/7 remote visibility into multi-day neuroimaging pipeline executions across distributed HPC/cloud clusters',
          'Reduced unmonitored job failures and delayed pipeline intervention times for active research teams',
          'Increased researcher mobility and flexibility across high-performance compute environments'
        ]
      },
      {
        name: 'Brainlife Error Monitoring Dashboard',
        tagline: 'Centralized Observability & Failure Diagnostics',
        mission: 'Large neuroimaging workflows generate thousands of jobs across distributed infrastructure. Diagnosing failures required researchers to manually inspect logs across multiple systems, making debugging slow and inefficient. I led the design and delivery of a centralized observability dashboard that transformed how execution failures are monitored across Brainlife.',
        productLeadership: [
          'Prioritized workflow visibility and rapid failure diagnosis before predictive analytics because immediate error inspection was the highest pain point for researchers.',
          'Conducted workflow analysis with research teams to identify friction points in diagnosing pipeline failures across distributed systems.',
          'Defined dashboard specifications and UX layout for error classification and job status reporting.'
        ],
        technicalContributions: [
          'Collaborated with infrastructure engineers to deliver a centralized observability dashboard, building the React/Next.js frontend experience and integrating with backend APIs powered by the ELK stack.',
          'Integrated backend log parsing and failure classification services into an intuitive monitoring interface that simplified diagnosis.',
          'Built interactive dashboards using React, Next.js, and Node.js for browsing execution history, inspecting logs, and tracking pipeline health.'
        ],
        scaleImpact: [
          'Dashboard monitoring thousands of distributed neuroimaging jobs across cloud computing clusters',
          'Reduced debugging time by 70%',
          'Reduced issue triage and manual log investigation by 90%',
          'Increased researcher productivity and reduced wasted cloud computing resources'
        ]
      }
    ],
    compressedInitiatives: [
      {
        name: 'Platform Migration & Research Infrastructure',
        tagline: 'Strategic Cloud Transition from Osiri Infrastructure to AWS',
        leadershipContributions: [
          'Partnered with cloud infrastructure engineers and platform maintainers to support Brainlife\'s transition from legacy Osiri infrastructure to AWS.',
          'Balanced researcher usability with infrastructure scalability when translating pipeline requirements into technical specifications.',
          'Developed custom internal research software utilities and streamlined developer and researcher onboarding processes.'
        ],
        impact: [
          'Accelerated cloud migration timeline while maintaining continuous uptime for active research teams',
          'Enhanced system reliability and scalability for high-throughput scientific computing'
        ]
      }
    ],
    groupedTechnologies: {
      Frontend: ['React', 'Next.js', 'React Native'],
      Backend: ['Node.js', 'Python', 'REST APIs', 'Docker'],
      Infrastructure: ['AWS', 'ELK Stack'],
      Scientific: ['Neuroinformatics', 'MRI', 'Scientific Computing']
    }
  },
  {
    company: 'African Brain Data Network (ABDN)',
    title: 'Neuroinformatics Lead & Technical Product Lead',
    location: 'Remote',
    period: '2023 – Present',
    badgeColor: 'from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/30',
    icon: FaGlobeAfrica,
    mission: `The African Brain Data Network builds research infrastructure, training programs, and digital platforms that strengthen neuroscience across Africa.

My work combines product management, software engineering, and scientific leadership to create digital platforms used by researchers, educators, and neuroscience organizations across the continent.

I work directly with researchers, teaching assistants, clinicians, and scientific leaders to identify workflow challenges and transform those insights into scalable digital products.`,
    stakeholders: ['Researchers', 'Educators', 'Clinicians', 'Teaching Assistants', 'Regional Scientific Leaders'],
    flagshipProjects: [
      {
        name: 'Fellowship Evaluation Platform',
        tagline: 'Pan-African Applicant Assessment & Review Digitization',
        mission: 'Managing fellowship applications across dozens of African countries involved manual review processes that became increasingly difficult to scale. I initiated and led the development of a comprehensive evaluation platform that digitized candidate assessment workflows.',
        productLeadership: [
          'Prioritized evaluation efficiency and standardized candidate review workflows after identifying manual spreadsheet review as the primary scaling bottleneck.',
          'Conducted stakeholder interviews with teaching teams and review committees to map candidate assessment workflows.',
          'Defined product vision and roadmap, balancing scoring standardization with reviewer flexibility.'
        ],
        technicalContributions: [
          'Architected and built full-stack candidate evaluation platform using Next.js and Firebase.',
          'Engineered multi-stage candidate scoring workflows, reviewer assignment tools, and secure applicant data management.',
          'Built administrative dashboards for real-time tracking of review progress across regional evaluation teams.'
        ],
        scaleImpact: [
          'Supported digital assessment of 1,000+ applicants across approximately 50 African countries',
          'Improved evaluation efficiency by 70% and standardized review processes for teaching teams',
          'Eliminated manual spreadsheet tracking for multi-stage academic program admissions'
        ]
      },
      {
        name: 'FAIR Research Platform',
        tagline: 'Open Data & FAIR Neuroscience Community Infrastructure',
        mission: 'I led redevelopment of the organization\'s digital infrastructure around FAIR data principles, creating a modern platform for African neuroscience communities.',
        productLeadership: [
          'Prioritized open-access dataset discovery and community collaboration features based on regional researcher surveys.',
          'Defined product strategy and information architecture to make scientific resources and educational materials findable and accessible.',
          'Collaborated with scientific leadership to align platform features with international FAIR data standards.'
        ],
        technicalContributions: [
          'Developed Next.js web application with Firebase backend services for research resource sharing, educational content, and community hubs.',
          'Built administrative content management workflows and metadata tagging schemas adhering to FAIR data standards.'
        ],
        scaleImpact: [
          'Increased platform engagement by 65% across African neuroscience institutions',
          'Improved researcher accessibility and expanded adoption of FAIR neuroscience data practices'
        ]
      }
    ],
    compressedInitiatives: [
      {
        name: 'Fellowship Delivery & Scientific Capacity Building',
        tagline: 'Pan-African Scientific Training & Open Science Advocacy',
        leadershipContributions: [
          'Coordinated with teaching assistants and scientific leaders to design and deliver hands-on neuroscience training programs across Africa.',
          'Taught reproducible neuroimaging workflows, Docker containerization, and Python scientific computing pipelines.',
          'Mentored 200+ researchers across 15+ African countries in research software engineering, version control, and FAIR data practices.'
        ],
        impact: [
          'Mentored 200+ researchers across 15+ African countries',
          'Increased adoption of reproducible neuroimaging workflows and open-science practices'
        ]
      }
    ],
    groupedTechnologies: {
      Frontend: ['Next.js', 'React'],
      Backend: ['Python', 'PostgreSQL', 'Firebase'],
      Scientific: ['FAIR Data', 'MRI', 'Neuroinformatics', 'Scientific Computing']
    }
  },
  {
    company: 'African NeuroData Research Lab',
    title: 'Technical Product Lead',
    location: 'Remote',
    period: '2025 – Present',
    badgeColor: 'from-purple-500/20 to-indigo-500/20 text-purple-300 border-purple-500/30',
    icon: FaBrain,
    mission: `I lead product strategy and technical delivery for a pan-African neuroscience collaboration platform designed to improve scientific communication, resource sharing, and FAIR research practices.

Working closely with researchers and organizational leadership, I transformed fragmented collaboration workflows into a unified digital platform.`,
    stakeholders: ['Lab Directors', 'Neuroscience Researchers', 'Institutional Partners', 'Scientific Leadership'],
    compressedInitiatives: [
      {
        name: 'Pan-African Neuroscience Collaboration Platform',
        tagline: 'Unified Digital Infrastructure for Dataset Sharing & Scientific Networking',
        leadershipContributions: [
          'Decided to focus the initial platform release on resource discovery and dataset sharing to quickly address scientific communication fragmentation across institutions.',
          'Conducted user interviews with researchers across institutions to define product vision and roadmap.',
          'Architected and built full-stack Next.js collaboration portal with FAIR-compliant data cataloging.'
        ],
        impact: [
          'Unified fragmented collaboration workflows into a single digital platform',
          'Facilitated cross-institutional dataset sharing and scientific communication',
          'Promoted FAIR research data standards across pan-African neuroscience labs'
        ]
      }
    ],
    groupedTechnologies: {
      Frontend: ['Next.js', 'React'],
      Backend: ['Firebase', 'Python'],
      Domain: ['FAIR Data', 'Neuroinformatics']
    }
  },
  {
    company: 'Egyptian Neuroscience Network',
    title: 'Technical Product Lead',
    location: 'Remote',
    period: '2026 – Present',
    badgeColor: 'from-amber-500/20 to-yellow-500/20 text-amber-300 border-amber-500/30',
    icon: FaGlobeAfrica,
    mission: `I lead development of the Egyptian Neuroscience Network collaboration platform supporting more than 2,100 researchers, clinicians, educators, and students across Egypt and the MENA region.

Working alongside scientific leadership, I translated community needs into product strategy and coordinated implementation of a digital ecosystem supporting education, collaboration, and scientific networking.`,
    stakeholders: ['Researchers', 'Clinicians', 'Educators', 'Neuroscience Students', 'Scientific Leadership'],
    compressedInitiatives: [
      {
        name: 'Egyptian Neuroscience Digital Ecosystem',
        tagline: 'Regional Collaboration & Educational Program Platform',
        leadershipContributions: [
          'Partnered with scientific leadership to translate regional community feedback into a structured product strategy for scientific networking and educational programs.',
          'Defined product strategy and platform layout for scientific collaboration, educational programs, and event distribution.',
          'Designed and built responsive web platform, researcher directory search, and event management portals.'
        ],
        impact: [
          'Collaboration platform serving more than 2,100 neuroscientists, clinicians, educators, and students across Egypt and MENA',
          'Streamlined scientific networking and resource discovery across the region',
          'Increased community engagement with educational programs and scientific events'
        ]
      }
    ],
    groupedTechnologies: {
      Frontend: ['Next.js', 'React'],
      Backend: ['Node.js', 'PostgreSQL'],
      Domain: ['Community Platform', 'Scientific Networking']
    }
  },
  {
    company: 'Lighthouse Counselling Hub',
    title: 'Technical Product Lead (Digital Health)',
    location: 'Remote • Kenya',
    period: '2024 – 2025',
    badgeColor: 'from-rose-500/20 to-pink-500/20 text-rose-300 border-rose-500/30',
    icon: FaHeartbeat,
    mission: `I led development of a digital mental healthcare platform designed to improve access to professional counselling services.

Working with therapists and healthcare stakeholders, I defined the product vision, user journeys, and MVP roadmap before leading engineering delivery.`,
    stakeholders: ['Therapists', 'Patients', 'Clinic Administrators', 'Digital Health Stakeholders'],
    compressedInitiatives: [
      {
        name: 'Digital Mental Healthcare Platform',
        tagline: 'Therapist Discovery, Scheduling & Administrative Analytics',
        leadershipContributions: [
          'Intentionally limited the initial MVP to therapist discovery and appointment scheduling before expanding into patient engagement features.',
          'Conducted user journey mapping with therapists and patients to define feature priorities.',
          'Built full-stack Next.js web application with therapist search and discovery functionality and appointment scheduling features.',
          'Developed administrative dashboards for monitoring booking activity, patient engagement, and platform analytics.'
        ],
        impact: [
          'Digitized therapy discovery and appointment booking workflows',
          'Improved patient access to certified mental healthcare professionals',
          'Provided real-time platform analytics and administrative operational insights'
        ]
      }
    ],
    groupedTechnologies: {
      Frontend: ['Next.js', 'React'],
      Backend: ['Node.js', 'Analytics Integration'],
      Domain: ['Digital Health', 'Booking Systems', 'SEO']
    }
  },
  {
    company: 'Lizard Global',
    title: 'Software Engineer',
    location: 'Remote • Netherlands & Malaysia',
    period: '2022 – 2024',
    badgeColor: 'from-blue-500/20 to-indigo-500/20 text-blue-300 border-blue-500/30',
    icon: FaBuilding,
    mission: `At Lizard Global, I developed commercial web and mobile applications for startups and enterprise clients across workforce management, collaboration, and digital products.

Working in cross-functional product teams, I collaborated closely with product managers, UI/UX designers, QA engineers, and clients to translate business requirements into scalable software.`,
    stakeholders: ['Product Managers', 'UI/UX Designers', 'QA Engineers', 'Enterprise Clients'],
    compressedInitiatives: [
      {
        name: 'Aposto',
        tagline: 'Workforce Management & Event Operational Platform',
        leadershipContributions: [
          'Collaborated with product managers and client stakeholders to build real-time staff scheduling tools, event-day management dashboards, and knowledge transfer modules.'
        ],
        impact: [
          'Improved event-day operational communication efficiency by 40%',
          'Built real-time staff scheduling and shift allocation workflows'
        ]
      },
      {
        name: 'Flexpackerz',
        tagline: 'Location-Based Mobile Platform for Co-working Spaces',
        leadershipContributions: [
          'Developed cross-platform mobile application using React Native and Firebase, integrating location services and map APIs for co-working space discovery, user authentication, and booking.'
        ],
        impact: [
          'Delivered intuitive location-based booking UX for remote workers on mobile'
        ]
      },
      {
        name: 'Award Platform & Corporate Website',
        tagline: 'Enterprise CMS & Digital Web Optimization',
        leadershipContributions: [
          'Built scalable awards management web application with dynamic category administration; optimized corporate website for performance, SEO indexation, and maintainability using Next.js.'
        ],
        impact: [
          'Enhanced website performance, accessibility scores, and client lead conversion'
        ]
      }
    ],
    groupedTechnologies: {
      Mobile: ['React Native', 'Firebase'],
      Web: ['React.js', 'Next.js', 'Ant Design'],
      CMS: ['Strapi']
    }
  }
];

const technicalExpertise = {
  productLeadership: [
    'Product Strategy',
    'Product Discovery',
    'User Research',
    'Roadmapping',
    'Feature Prioritization',
    'Stakeholder Management',
    'Agile Delivery',
    'Technical Leadership'
  ],
  engineering: [
    'Python',
    'React',
    'React Native',
    'Next.js',
    'Node.js',
    'TypeScript',
    'Docker',
    'Firebase',
    'PostgreSQL',
    'MongoDB',
    'REST APIs',
    'Cloud Infrastructure'
  ],
  scientificComputing: [
    'Neuroinformatics',
    'MRI',
    'Medical Imaging',
    'Scientific Software',
    'FAIR Data',
    'Research Infrastructure',
    'AI for Healthcare',
    'Computational Neuroscience'
  ]
};

export default function Experience() {
  return (
    <motion.div 
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="mx-auto space-y-12 max-w-6xl pb-16"
    >
      {/* Top Positioning Summary (Hero Statement) */}
      <motion.div variants={fadeInUp} className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20">
            <FaBriefcase className="text-2xl" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Experience & Technical Product Leadership
            </h1>
            <p className="text-blue-400 font-medium text-sm sm:text-base">
              Research Software Engineer & Technical Product Lead • Neuroinformatics • Digital Health
            </p>
          </div>
        </div>

        {/* Framing Executive Summary */}
        <div className="bg-gradient-to-r from-blue-950/60 via-purple-950/40 to-gray-900 p-6 sm:p-8 rounded-3xl border border-blue-800/40 backdrop-blur-md shadow-2xl space-y-6">
          <p className="text-gray-100 text-base sm:text-lg lg:text-xl font-medium leading-relaxed">
            I build scientific software products that help researchers work more efficiently. Across neuroinformatics, AI, and digital health, I lead product discovery, define technical strategy, and collaborate with engineering teams to deliver scalable platforms. While I continue to contribute as a hands-on software engineer, my primary focus is translating complex scientific workflows into products that create measurable impact for researchers and healthcare organizations.
          </p>

          {/* "How I Work" Section */}
          <div className="space-y-3 pt-4 border-t border-gray-800/80">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block">How I Work</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gray-800/60 p-4 rounded-xl border border-gray-700/50 space-y-1">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm uppercase tracking-wider">
                  <FaCompass className="text-base" />
                  <span>Discover</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300">
                  Understand researcher workflows through interviews, observation, and collaboration with scientific teams.
                </p>
              </div>

              <div className="bg-gray-800/60 p-4 rounded-xl border border-gray-700/50 space-y-1">
                <div className="flex items-center gap-2 text-purple-400 font-bold text-sm uppercase tracking-wider">
                  <FaUsers className="text-base" />
                  <span>Prioritize</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300">
                  Translate scientific requirements into product roadmaps that balance user value, engineering effort, and infrastructure constraints.
                </p>
              </div>

              <div className="bg-gray-800/60 p-4 rounded-xl border border-gray-700/50 space-y-1">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wider">
                  <FaCode className="text-base" />
                  <span>Deliver</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300">
                  Partner with engineers while contributing hands-on code to ship scalable research software and digital health platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* FEATURED CASE STUDY PROJECT CARD */}
      <motion.section id="projects" variants={fadeInUp} className="bg-gradient-to-br from-purple-950/60 via-gray-900 to-blue-950/60 p-8 sm:p-10 rounded-3xl border border-purple-800/40 shadow-2xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-gradient-to-tr from-purple-600 to-blue-500 text-white shadow-lg shadow-purple-500/20">
              <FaFlask className="text-xl" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider block">Featured Methodological Case Study</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">Beyond Research-Grade MRI: AI Robustness on Clinical Scans</h2>
            </div>
          </div>

          <Link
            href="/projects/clinical-mri-ai-robustness"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-xs font-bold shadow-lg shadow-purple-500/20 flex items-center gap-2 transition-all shrink-0"
          >
            <span>View Full Technical Case Study</span>
            <FaExternalLinkAlt className="text-[10px]" />
          </Link>
        </div>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed bg-gray-950/60 p-5 rounded-2xl border border-gray-800/80">
          A systematic empirical benchmark investigating how classical radiomics (PyRadiomics) and 3D deep learning models (MONAI ResNet-18 & DenseNet-121) degrade under real-world clinical MRI quality constraints (Gaussian blur, Rician noise, slice downsampling, and motion ringing) on an 88-subject Nigerian brain MRI dataset.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
          <div className="bg-gray-900/80 p-4 rounded-xl border border-gray-800 space-y-1">
            <span className="text-[10px] text-purple-400 uppercase font-semibold block">Cohort</span>
            <span className="text-xs font-bold text-white">88 Subjects / 787 Scans</span>
          </div>
          <div className="bg-gray-900/80 p-4 rounded-xl border border-gray-800 space-y-1">
            <span className="text-[10px] text-blue-400 uppercase font-semibold block">Models</span>
            <span className="text-xs font-bold text-white">ResNet-18, DenseNet-121, PyRadiomics</span>
          </div>
          <div className="bg-gray-900/80 p-4 rounded-xl border border-gray-800 space-y-1">
            <span className="text-[10px] text-cyan-400 uppercase font-semibold block">Metrics</span>
            <span className="text-xs font-bold text-white">RRI, AURC, ECE, Grad-CAM</span>
          </div>
          <div className="bg-gray-900/80 p-4 rounded-xl border border-gray-800 space-y-1">
            <span className="text-[10px] text-emerald-400 uppercase font-semibold block">Frameworks</span>
            <span className="text-xs font-bold text-white">Python 3.11+, PyTorch, MONAI</span>
          </div>
        </div>
      </motion.section>

      {/* Experience List */}
      <div className="space-y-12">
        {experiences.map((job, jobIndex) => {
          const JobIcon = job.icon || FaBriefcase;

          return (
            <motion.div key={jobIndex} variants={fadeInUp} className="space-y-6">
              {/* Job Header Card */}
              <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-700/70 hover:border-blue-500/40 transition-all duration-300 space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-700/60">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border bg-gradient-to-r ${job.badgeColor}`}>
                        {job.company}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                      <JobIcon className="text-blue-400 text-xl shrink-0" />
                      {job.title}
                    </h2>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                    <span className="flex items-center gap-1.5 bg-gray-800/80 px-3 py-1.5 rounded-lg border border-gray-700">
                      <FaMapMarkerAlt className="text-blue-400" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5 bg-gray-800/80 px-3 py-1.5 rounded-lg border border-gray-700 font-medium text-blue-300">
                      <FaCalendarAlt className="text-blue-400" />
                      {job.period}
                    </span>
                  </div>
                </div>

                {/* The Mission */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                    <FaCompass className="text-sm" />
                    <span>The Mission</span>
                  </div>
                  <div className="text-gray-300 text-base leading-relaxed whitespace-pre-line bg-gray-900/50 p-5 rounded-xl border border-gray-800">
                    {job.mission}
                  </div>
                </div>

                {/* Stakeholders Partnered With */}
                {job.stakeholders && (
                  <div className="pt-2">
                    <span className="text-xs text-purple-400 uppercase tracking-wider font-semibold flex items-center gap-1.5 mb-2.5">
                      <FaUsers className="text-sm" />
                      Stakeholders & Teams Partnered With
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {job.stakeholders.map((sh, shIdx) => (
                        <span key={shIdx} className="bg-purple-950/50 text-purple-300 px-3 py-1 rounded-lg text-xs font-medium border border-purple-800/40">
                          {sh}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Grouped Technology Stack */}
                {job.groupedTechnologies && (
                  <div className="pt-3 border-t border-gray-800 space-y-2">
                    <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold block">Technology Stack</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                      {Object.entries(job.groupedTechnologies).map(([category, techs]) => (
                        <div key={category} className="bg-gray-900/60 p-3 rounded-xl border border-gray-800">
                          <span className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider block mb-1.5">{category}</span>
                          <div className="flex flex-wrap gap-1.5">
                            {techs.map((t, idx) => (
                              <span key={idx} className="bg-blue-950/60 text-blue-300 px-2.5 py-1 rounded-md text-xs font-medium border border-blue-800/40">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Flagship Case-Study Projects (Detailed Format) */}
              {job.flagshipProjects && (
                <div className="grid grid-cols-1 gap-6 pl-0 md:pl-4">
                  {job.flagshipProjects.map((project, pIndex) => (
                    <div key={pIndex} className="bg-gradient-to-br from-gray-800/70 to-gray-900/80 p-6 sm:p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 shadow-xl space-y-6">
                      <div className="flex items-start gap-3">
                        <div className="p-2.5 rounded-xl bg-blue-900/40 text-blue-400 border border-blue-800/50 shrink-0 mt-0.5">
                          <FaRocket className="text-lg" />
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Flagship Product</span>
                          <h3 className="text-xl sm:text-2xl font-bold text-white">{project.name}</h3>
                          {project.tagline && (
                            <p className="text-sm text-blue-300 font-medium mt-0.5">{project.tagline}</p>
                          )}
                        </div>
                      </div>

                      {/* Problem & Context */}
                      <div className="bg-gray-900/60 p-4 rounded-xl border border-gray-800/80 space-y-1">
                        <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold block">
                          Problem & Mission Context
                        </span>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                          {project.mission}
                        </p>
                      </div>

                      {/* Leadership vs Engineering Columns */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Product Leadership & Decisions */}
                        <div className="space-y-3 bg-gray-900/40 p-5 rounded-xl border border-gray-800/60">
                          <span className="text-xs text-purple-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                            <FaUserCheck className="text-sm" />
                            Product Leadership & Decisions
                          </span>
                          <ul className="space-y-2.5">
                            {project.productLeadership.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                                <FaCheckCircle className="text-purple-400 text-xs mt-1 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Hands-On Technical Contributions */}
                        <div className="space-y-3 bg-gray-900/40 p-5 rounded-xl border border-gray-800/60">
                          <span className="text-xs text-cyan-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                            <FaCode className="text-sm" />
                            Technical Implementation & Execution
                          </span>
                          <ul className="space-y-2.5">
                            {project.technicalContributions.map((cap, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-300">
                                <FaTerminal className="text-cyan-400 text-xs mt-1 shrink-0" />
                                <span>{cap}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Scale & Impact */}
                      {project.scaleImpact && (
                        <div className="pt-4 border-t border-gray-800/80 space-y-3">
                          <span className="text-xs text-emerald-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                            <FaChartLine className="text-sm" />
                            Scale & Measurable Impact
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {project.scaleImpact.map((imp, impIdx) => (
                              <div key={impIdx} className="bg-emerald-950/30 border border-emerald-800/40 p-3.5 rounded-xl flex items-center gap-2.5">
                                <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                                <span className="text-xs sm:text-sm text-emerald-200 font-medium">{imp}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Compressed Secondary Initiatives (Dynamic Two-Column Layout) */}
              {job.compressedInitiatives && (
                <div className="grid grid-cols-1 gap-4 pl-0 md:pl-4">
                  {job.compressedInitiatives.map((init, initIdx) => (
                    <div key={initIdx} className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 p-6 rounded-2xl border border-gray-800/90 hover:border-gray-700/80 transition-all duration-300 space-y-4">
                      <div className="flex items-center gap-2.5">
                        <FaArrowRight className="text-blue-400 text-xs shrink-0" />
                        <div>
                          <h4 className="text-lg font-bold text-white">{init.name}</h4>
                          {init.tagline && <p className="text-xs text-blue-300 font-medium">{init.tagline}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Leadership & Implementation */}
                        <div className="space-y-2 bg-gray-900/50 p-4 rounded-xl border border-gray-800/80">
                          <span className="text-xs text-purple-400 font-semibold uppercase tracking-wider block">Leadership & Implementation</span>
                          <ul className="space-y-2">
                            {init.leadershipContributions.map((lc, lcIdx) => (
                              <li key={lcIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                                <FaCheckCircle className="text-purple-400 text-xs mt-1 shrink-0" />
                                <span>{lc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Impact & Results */}
                        <div className="space-y-2 bg-gray-900/50 p-4 rounded-xl border border-gray-800/80">
                          <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider block">Scale & Results</span>
                          <ul className="space-y-2">
                            {init.impact.map((imp, impIdx) => (
                              <li key={impIdx} className="flex items-start gap-2 text-xs sm:text-sm text-emerald-200 font-medium">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                                <span>{imp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Technical Expertise Section */}
      <motion.div variants={fadeInUp} className="pt-8">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700/80 shadow-2xl space-y-8">
          <div className="flex items-center gap-3 pb-6 border-b border-gray-700">
            <div className="p-3 rounded-2xl bg-purple-900/50 text-purple-300 border border-purple-800/50">
              <FaLayerGroup className="text-2xl" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Technical & Product Expertise</h2>
              <p className="text-gray-400 text-sm">Core competencies across product leadership, full-stack software development, and scientific computing</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product Leadership */}
            <div className="bg-gray-900/70 p-6 rounded-2xl border border-purple-900/40 space-y-4">
              <div className="flex items-center gap-2 text-purple-300 font-bold text-lg">
                <FaCompass className="text-purple-400" />
                <h3>Product Leadership</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {technicalExpertise.productLeadership.map((item, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-950/60 text-purple-300 px-3 py-1.5 rounded-lg text-xs font-medium border border-purple-800/40"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Engineering Stack */}
            <div className="bg-gray-900/70 p-6 rounded-2xl border border-blue-900/40 space-y-4">
              <div className="flex items-center gap-2 text-blue-300 font-bold text-lg">
                <FaCode className="text-blue-400" />
                <h3>Software Engineering</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {technicalExpertise.engineering.map((item, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-950/60 text-blue-300 px-3 py-1.5 rounded-lg text-xs font-medium border border-blue-800/40"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Scientific Computing */}
            <div className="bg-gray-900/70 p-6 rounded-2xl border border-emerald-900/40 space-y-4">
              <div className="flex items-center gap-2 text-emerald-300 font-bold text-lg">
                <FaBrain className="text-emerald-400" />
                <h3>Scientific Computing</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {technicalExpertise.scientificComputing.map((item, idx) => (
                  <span
                    key={idx}
                    className="bg-emerald-950/60 text-emerald-300 px-3 py-1.5 rounded-lg text-xs font-medium border border-emerald-800/40"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}