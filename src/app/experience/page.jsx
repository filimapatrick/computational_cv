'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaBriefcase, 
  FaCompass, 
  FaRocket, 
  FaCode, 
  FaBrain, 
  FaGlobeAfrica, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaCheckCircle, 
  FaHeartbeat, 
  FaBuilding, 
  FaUsers, 
  FaArrowRight, 
  FaTerminal, 
  FaLayerGroup 
} from 'react-icons/fa';

const fadeInUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const experiences = [
  {
    company: 'Brainlife.io — University of Texas at Austin',
    title: 'Research Software Engineer',
    location: 'Remote / Austin, TX',
    period: '2025 – Present',
    badgeColor: 'text-sky-300 bg-sky-500/10 border-sky-500/20',
    icon: FaBrain,
    context: `Brainlife.io is a free, cloud-based platform for reproducible neuroimaging analysis, enabling researchers worldwide to run standardized workflows across distributed high-performance computing (HPC) and cloud clusters.

My role centers on building tools that improve platform observability, researcher workflow tracking, and failure diagnostics across thousands of automated pipeline executions.`,
    stakeholders: ['Neuroscientists', 'Infrastructure Engineers', 'Platform Maintainers', 'Academic Research Labs'],
    flagshipProjects: [
      {
        name: 'Brainlife Error Monitoring & Diagnostics Dashboard',
        tagline: 'Centralized telemetry, log aggregation, and error classification for distributed pipelines',
        context: 'High-throughput neuroimaging workflows frequently execute thousands of parallel batch jobs across heterogeneous compute resources. When a job failed, researchers previously had to inspect distributed text logs across disconnected nodes to locate the root cause.',
        technicalContributions: [
          'Architected and built the frontend monitoring interface in React and Next.js, integrating backend telemetry powered by Elasticsearch, Logstash, and Kibana (ELK).',
          'Integrated automated log parsing services that classify failure categories (e.g., OOM faults, BIDS format mismatches, Docker container runtime crashes).',
          'Engineered interactive diagnostic views allowing researchers to inspect full execution stack traces, container environment variables, and historical run health.'
        ],
        outcomes: [
          'Centralized failure triage across distributed HPC and cloud compute nodes',
          'Eliminated manual, multi-system log inspection for platform users',
          'Provided actionable error reporting that helps research teams resolve dataset and memory configuration issues quickly'
        ]
      },
      {
        name: 'Brainlife Mobile',
        tagline: 'Real-time mobile companion app for long-running compute job monitoring',
        context: 'Neuroimaging pipelines often run for days across remote clusters. Researchers lacked a practical way to check job progress or receive failure alerts when away from their lab workstations.',
        technicalContributions: [
          'Developed a cross-platform mobile application using React Native, communicating with Brainlife REST APIs.',
          'Built background push notification services for instant alerts on job completions, cluster bottlenecks, and execution aborts.',
          'Designed mobile-optimized diagnostic views to inspect failed job summaries and resource utilization on the go.'
        ],
        outcomes: [
          'Enabled remote 24/7 oversight of long-running computational jobs',
          'Provided researchers with immediate notifications upon execution completion or failure',
          'Reduced idle pipeline waiting time through timely notification alerts'
        ]
      }
    ],
    groupedTechnologies: {
      Frontend: ['React', 'Next.js', 'React Native', 'Tailwind CSS'],
      Backend: ['Node.js', 'Python', 'REST APIs', 'Docker'],
      Observability: ['ELK Stack (Elasticsearch, Logstash, Kibana)'],
      Scientific: ['Neuroinformatics', 'BIDS', 'HPC Workflows']
    }
  },
  {
    company: 'African Brain Data Network (ABDN)',
    title: 'Neuroinformatics & Technical Product Lead',
    location: 'Remote / Pan-African',
    period: '2023 – Present',
    badgeColor: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20',
    icon: FaGlobeAfrica,
    context: `The African Brain Data Network builds research infrastructure, training programs, and digital platforms to strengthen neuroscience and data governance across Africa.

I lead the technical development of digital platforms used by researchers, fellowship applicants, and educators across the continent, working closely with scientific leadership to translate community needs into scalable software.`,
    stakeholders: ['Neuroscience Researchers', 'Teaching Assistants', 'Clinicians', 'Regional Academic Committees'],
    flagshipProjects: [
      {
        name: 'Fellowship Applicant Evaluation Platform',
        tagline: 'Multi-stage candidate review and scoring system for pan-African academic programs',
        context: 'Managing fellowship applications from dozens of African countries involved manual spreadsheet workflows that were prone to inconsistencies and difficult to coordinate across regional reviewer teams.',
        technicalContributions: [
          'Architected and implemented a full-stack candidate evaluation platform using Next.js and Firebase.',
          'Engineered multi-stage candidate scoring rubrics, reviewer assignment matrices, and secure document access controls.',
          'Built real-time administrative dashboards tracking application throughput, reviewer progress, and score distributions.'
        ],
        outcomes: [
          'Digitized admissions workflows for 1,000+ applicants across 50 African countries',
          'Standardized multi-reviewer scoring criteria across distributed academic evaluation teams',
          'Replaced manual spreadsheet tracking with a secure, centralized review portal'
        ]
      },
      {
        name: 'FAIR Data Platform & Community Infrastructure',
        tagline: 'Open science repository and resource hub aligned with international FAIR standards',
        context: 'African neuroscience data and educational resources were historically fragmented across individual institutions, limiting discoverability and cross-border collaboration.',
        technicalContributions: [
          'Developed web infrastructure for sharing neuroscience datasets, educational modules, and technical workshop materials.',
          'Implemented metadata schemas adhering to Findable, Accessible, Interoperable, and Reusable (FAIR) data principles.',
          'Integrated content workflows for community announcements, regional symposiums, and resource discovery.'
        ],
        outcomes: [
          'Established a centralized digital hub connecting neuroscience researchers across the continent',
          'Fostered adoption of FAIR data practices and open-access scientific resources'
        ]
      }
    ],
    groupedTechnologies: {
      Frontend: ['Next.js', 'React', 'Tailwind CSS'],
      Backend: ['Firebase', 'Node.js', 'Python'],
      Domain: ['FAIR Data Principles', 'Neuroinformatics', 'Access Governance']
    }
  },
  {
    company: 'African NeuroData Research Lab (ANR Lab)',
    title: 'Technical Product Lead',
    location: 'Remote / Port Harcourt, Nigeria',
    period: '2025 – Present',
    badgeColor: 'text-indigo-300 bg-indigo-500/10 border-indigo-500/20',
    icon: FaBrain,
    context: `Leading the digital infrastructure for a neuroscience collaboration platform designed to improve scientific communication, resource sharing, and FAIR research practices across regional laboratories.`,
    stakeholders: ['Lab Directors', 'Neuroscience Researchers', 'Institutional Partners'],
    flagshipProjects: [
      {
        name: 'Pan-African Collaboration Portal',
        tagline: 'Standardized dataset cataloging and scientific communication infrastructure',
        context: 'Regional laboratories required a shared platform to catalog local clinical MRI datasets and coordinate multi-center research studies.',
        technicalContributions: [
          'Architected Next.js collaboration portal with standardized data cataloging schemas.',
          'Implemented researcher directory, project workspaces, and secure dataset request workflows.'
        ],
        outcomes: [
          'Created unified repository for multi-center research coordination',
          'Facilitated dataset sharing across regional partner institutions'
        ]
      }
    ],
    groupedTechnologies: {
      Frontend: ['Next.js', 'React'],
      Backend: ['Firebase', 'Python'],
      Domain: ['FAIR Data Standards', 'Dataset Governance']
    }
  },
  {
    company: 'Egyptian Neuroscience Network',
    title: 'Technical Product Lead',
    location: 'Remote / Egypt & MENA',
    period: '2026 – Present',
    badgeColor: 'text-amber-300 bg-amber-500/10 border-amber-500/20',
    icon: FaGlobeAfrica,
    context: `Leading development of the Egyptian Neuroscience Network platform supporting more than 2,100 researchers, clinicians, educators, and students across Egypt and the MENA region.`,
    stakeholders: ['Researchers', 'Clinicians', 'Educators', 'Neuroscience Students'],
    flagshipProjects: [
      {
        name: 'Regional Educational & Community Portal',
        tagline: 'Digital ecosystem for scientific networking, event distribution, and training',
        context: 'Connecting a growing regional community of over 2,100 neuroscientists and clinicians through centralized event management and academic resources.',
        technicalContributions: [
          'Built responsive web platform with member directory search and academic resource hubs.',
          'Integrated event management workflows for webinars, workshops, and regional scientific symposiums.'
        ],
        outcomes: [
          'Connected 2,100+ community members across Egypt and the MENA region',
          'Streamlined event registration and educational material dissemination'
        ]
      }
    ],
    groupedTechnologies: {
      Frontend: ['Next.js', 'React'],
      Backend: ['Node.js', 'PostgreSQL'],
      Domain: ['Community Platforms', 'Educational Technology']
    }
  },
  {
    company: 'Lizard Global',
    title: 'Software Engineer',
    location: 'Remote / Netherlands & Malaysia',
    period: '2022 – 2024',
    badgeColor: 'text-blue-300 bg-blue-500/10 border-blue-500/20',
    icon: FaBuilding,
    context: `Developed commercial web and mobile applications for international startups and enterprise clients in cross-functional agile teams.`,
    stakeholders: ['Product Managers', 'UI/UX Designers', 'Enterprise Clients'],
    flagshipProjects: [
      {
        name: 'Aposto & Flexpackerz Platforms',
        tagline: 'Workforce management and location-based mobile services',
        context: 'Built custom mobile and web tools for real-time staff shift allocation and remote co-working discovery.',
        technicalContributions: [
          'Engineered cross-platform mobile apps in React Native with location APIs and Firebase authentication.',
          'Developed admin dashboards in Next.js for event-day workforce management.'
        ],
        outcomes: [
          'Delivered production applications deployed to international client bases',
          'Integrated geolocation and real-time data sync across platforms'
        ]
      }
    ],
    groupedTechnologies: {
      Mobile: ['React Native', 'Firebase'],
      Web: ['Next.js', 'React.js', 'Ant Design'],
      CMS: ['Strapi']
    }
  }
];

export default function Experience() {
  return (
    <motion.div 
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="w-full space-y-14 pb-16"
    >
      {/* 1. HEADER */}
      <motion.div variants={fadeInUp} className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
            <FaBriefcase className="text-xl" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Experience & Engineering Track Record
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              Research software engineering, platform observability, and digital health
            </p>
          </div>
        </div>

        <div className="bg-[#0F172A]/80 p-6 sm:p-8 rounded-2xl border border-white/10 space-y-3">
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-medium">
            I design and build software systems for scientific research and healthcare organizations.
          </p>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            My experience spans full-stack web and mobile development, distributed pipeline monitoring, telemetry integration with Elasticsearch, and leading digital platforms for pan-African research networks.
          </p>
        </div>
      </motion.div>

      {/* 2. EXPERIENCE TIMELINE */}
      <div className="space-y-10">
        {experiences.map((job, jobIndex) => {
          const JobIcon = job.icon || FaBriefcase;

          return (
            <motion.div key={jobIndex} variants={fadeInUp} className="space-y-5">
              {/* Job Card Header */}
              <div className="bg-[#0F172A]/80 rounded-2xl p-6 sm:p-7 border border-white/10 space-y-5">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-white/10">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${job.badgeColor}`}>
                        {job.company}
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
                      <JobIcon className="text-sky-400 text-lg shrink-0" />
                      {job.title}
                    </h2>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
                    <span className="flex items-center gap-1.5 bg-[#141E33] px-2.5 py-1 rounded-md border border-white/5">
                      <FaMapMarkerAlt className="text-sky-400" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5 bg-[#141E33] px-2.5 py-1 rounded-md border border-white/5 font-mono text-sky-300">
                      <FaCalendarAlt className="text-sky-400" />
                      {job.period}
                    </span>
                  </div>
                </div>

                {/* Organization Context */}
                <div className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line bg-[#141E33]/50 p-4 rounded-xl border border-white/5">
                  {job.context}
                </div>

                {/* Stakeholder tags */}
                {job.stakeholders && (
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Collaborators:
                    </span>
                    {job.stakeholders.map((sh, shIdx) => (
                      <span key={shIdx} className="bg-white/5 text-slate-300 px-2 py-0.5 rounded text-[11px] border border-white/5">
                        {sh}
                      </span>
                    ))}
                  </div>
                )}

                {/* Flagship Projects */}
                {job.flagshipProjects && (
                  <div className="space-y-4 pt-2 border-t border-white/10">
                    <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block">
                      Key Software Contributions
                    </span>

                    <div className="space-y-4">
                      {job.flagshipProjects.map((project, pIndex) => (
                        <div key={pIndex} className="bg-[#141E33]/70 p-5 rounded-xl border border-white/5 space-y-3">
                          <div>
                            <h3 className="text-base font-bold text-white">{project.name}</h3>
                            <p className="text-xs text-sky-300 font-medium">{project.tagline}</p>
                          </div>

                          <p className="text-xs text-slate-300 leading-relaxed">
                            {project.context}
                          </p>

                          {/* Technical Execution */}
                          <div className="space-y-1.5 pt-1">
                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                              Technical Implementation:
                            </span>
                            <ul className="space-y-1 text-xs text-slate-300">
                              {project.technicalContributions.map((tc, tcIdx) => (
                                <li key={tcIdx} className="flex items-start gap-2">
                                  <FaCheckCircle className="text-sky-400 text-[10px] mt-1 shrink-0" />
                                  <span>{tc}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Outcomes */}
                          <div className="space-y-1.5 pt-2 border-t border-white/5">
                            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
                              Outcomes & System Impact:
                            </span>
                            <ul className="space-y-1 text-xs text-slate-300">
                              {project.outcomes.map((oc, ocIdx) => (
                                <li key={ocIdx} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                                  <span>{oc}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies used */}
                {job.groupedTechnologies && (
                  <div className="pt-2 border-t border-white/10 space-y-2">
                    <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider block">
                      Stack & Tools:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {Object.values(job.groupedTechnologies).flat().map((tech, tIdx) => (
                        <span key={tIdx} className="bg-sky-500/10 text-sky-300 px-2 py-0.5 rounded text-[11px] font-medium border border-sky-500/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}