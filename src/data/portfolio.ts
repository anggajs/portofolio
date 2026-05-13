export type NavLink = {
  label: string
  href: string
}

export type StatItem = {
  label: string
  value: string
  description: string
}

export type SkillItem = {
  name: string
  type: string
  icon: string
}

export type ExperienceItem = {
  period: string
  role: string
  organization: string
  type: string
  description: string
  highlights: string[]
}

export type ActivityItem = {
  title: string
  date: string
  type: string
  role: string
  location: string
  shortDescription: string
  description: string
  image: string
  highlights: string[]
}

export type ProjectItem = {
  title: string
  category: string
  description: string
  stack: string[]
  status: string
  image?: string
  badge?: string
}

export type AchievementItem = {
  title: string
  year: string
  description: string
}

export const profile = {
  name: 'Angga Jalasena Saputra',
  initials: 'Portofolio Angga JS',
  summary:
    'I am an Information Systems graduate with interests in data analysis, web development, and information systems management. During my studies, I gained experience through internships, organizations, and academic projects that helped me develop my technical, communication, teamwork, and problem-solving skills. I am accustomed to working with discipline, thoroughness, and responsibility, and am highly motivated to continue learning, developing, and making my best contributions in a professional environment.',
  email: 'anggadirga51@gmail.com',
  location: 'Bangkalan, Indonesia',
  cvLabel: 'Download CV',
  cvLink: '/cv/CV Angga JS.pdf',
  instagram: 'https://instagram.com/anggajs._',
  github: 'https://github.com/anggajs',
  linkedin: 'https://linkedin.com/in/angga-js04',
}

export const navLinks: NavLink[] = [
  { label: 'Profile', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Activities', href: '#activities' },
  { label: 'Project', href: '#projects' },
  { label: 'Skill', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const skills: SkillItem[] = [
  { name: 'JavaScript', type: 'Programming Language', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'Python', type: 'Programming Language', icon: 'https://cdn.simpleicons.org/python/3776AB' },
  { name: 'PHP', type: 'Programming Language', icon: 'https://cdn.simpleicons.org/php/777BB4' },
  { name: 'Java', type: 'Programming Language', icon: 'https://cdn.simpleicons.org/openjdk/ED8B00' },
  { name: 'HTML', type: 'Web Technology', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
  { name: 'CSS', type: 'Web Technology', icon: 'https://cdn.simpleicons.org/css/1572B6' },
  { name: 'Vue.js', type: 'Framework / Library', icon: 'https://cdn.simpleicons.org/vuedotjs/4FC08D' },
  { name: 'React.js', type: 'Framework / Library', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Tailwind CSS', type: 'Framework / Library', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'Bootstrap', type: 'Framework / Library', icon: 'https://cdn.simpleicons.org/bootstrap/7952B3' },
  { name: 'MySQL', type: 'Database', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
  { name: 'phpMyAdmin', type: 'Database Tool', icon: 'https://cdn.simpleicons.org/phpmyadmin/6C78AF' },
  { name: 'SQLyog', type: 'Database Tool', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
  { name: 'MySQL Workbench', type: 'Database Tool', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
  { name: 'Google Colab', type: 'Data & Analytics', icon: 'https://cdn.simpleicons.org/googlecolab/F9AB00' },
  { name: 'Figma', type: 'Design Tool', icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
  { name: 'Visual Studio Code', type: 'IDE / Editor', icon: '/icons/visual-studio-code.svg' },
  { name: 'NetBeans', type: 'IDE / Editor', icon: 'https://cdn.simpleicons.org/apachenetbeanside/1B6AC6' },
  { name: 'Git', type: 'Version Control', icon: 'https://cdn.simpleicons.org/git/F05032' },
  { name: 'GitHub', type: 'Version Control', icon: 'https://cdn.simpleicons.org/github/181717' },
  { name: 'Microsoft 365', type: 'Office Tool', icon: '/icons/microsoft.svg' },
  { name: 'Power BI', type: 'Data Visualization', icon: '/icons/power-bi.svg' },
  ]

export const experiences: ExperienceItem[] = [
  {
    period: 'Jan 2025 - Feb 2025',
    role: 'IT Governance Department in the IT Division',
    organization: 'PT. PAL INDONESIA SURABAYA',
    type: 'Internship',
    description:
      'Gained hands-on experience in IT governance frameworks including COBIT 2019, ITIL v4, and ISO/IEC 27001, supporting compliance assessment and policy documentation. Assisted in identifying and mitigating security risks through vulnerability analysis and network security monitoring. Applied NIST Cybersecurity Framework principles to evaluate organizational security posture and support risk management processes.',
    highlights: ['COBIT 2019', 'ITIL v4','ISO/IEC 27001', 'NIST Cybersecurity Framework'],
  },
  {
    period: 'Feb 2025 - Jun 2025',
    role: 'Web Developer ',
    organization: 'BEAD IT Consultant Kediri',
    type: 'Internship',
    description:
      'Create an outbound website in Nganjuk using the WordPress application and make the website become top 1 in Google search using SEO (Search Engine Optimization).',
    highlights: ['WordPress', 'SEO', 'Google Analytics'],
  },
  {
    period: '2024 - 2025',
    role: 'IT Governance Audit Project',
    organization: 'Dinas PU SDA Jawa Timur',
    type: 'Academic Project',
    description:
      'Conducted an IT governance assessment for Dinas PU SDA East Java using the COBIT 2019 framework. The project involved aligning business objectives with IT goals, collecting data through interviews and questionnaires, analyzing current and target maturity levels, identifying governance gaps, and delivering recommendations to strengthen the alignment between technology and organizational objectives.',
    highlights: ['COBIT 2019 Assessment', 'Gap Analysis & Recommendations', 'Field-Based Data Collection'],
  },
]


export const activities: ActivityItem[] = [
{
  title: 'MBKM Community Service in Paseseh Village',
  date: 'Paseseh Village, 2025',
  type: 'Community Service',
  role: 'MBKM Community Service in Paseseh Village',
  location: 'Desa Paseseh, Tanjung Bumi',
  shortDescription:
    'Participating in the MBKM Community Service in Paseseh Village, Tanjung Bumi, Bangkalan.',
  description:
    'Participated in a community service activity organized by LPPM UTM in Paseseh Village, Tanjung Bumi, Bangkalan, on Empowering Batik MSMEs Through Digital Literacy and Optimizing Marketplaces in the Digital Economy Era. This activity aims to improve the digital capabilities of batik MSMEs so they can utilize marketplaces and digital media to expand marketing, increase competitiveness, and boost batik product sales.',
  image: '/activities/mbkm.jpeg',
  highlights: ['Vue.js 2', 'Tailwind CSS', 'UI improvement'],
},
{
  title: 'IT Division Web Developer - BEAD IT Consultant',
  date: 'BEAD IT Consultant Kediri, 2025',
  type: 'Internship',
  role: 'Web Developer - BEAD IT Consultant',
  location: 'Kediri, Jawa Timur',
  shortDescription:
    'Developed and optimized the Outbound Nganjuk promotional website using WordPress and SEO with the Waterfall method, including responsive UI design, plugin configuration, and website performance testing.',
  description:
    'Developed and optimized the Outbound Nganjuk promotional website using WordPress and SEO with the Waterfall method, including responsive UI design, plugin configuration, and website performance testing.',
  image: '/activities/bead.jpeg',
  highlights: ['Vue.js 2', 'Tailwind CSS', 'UI improvement'],
},
{
  title: 'Socialization of the BPJS Employment Program',
  date: 'Tanjung Bumi Village, 2025',
  type: 'Socialization',
  role: 'Socialization of the BPJS Employment Program',
  location: 'Tanjung Bumi Village',
  shortDescription:
    'Conducted community service activities through BPJS Ketenagakerjaan socialization for UMKM Batik workers in Bangkalan to improve awareness of social protection, work safety, and employee welfare..',
  description:
    'Conducted community service activities through BPJS Ketenagakerjaan socialization for UMKM Batik workers in Bangkalan to improve awareness of social protection, work safety, and employee welfare.',
  image: '/activities/bpjs paseseh.jpg',
  highlights: ['Vue.js 2', 'Tailwind CSS', 'UI improvement'],
},
{
  title: 'Information Technology Governance,  Dinas PU SUMBER DAYA AIR',
  date: 'PU SUMBER DAYA AIR Surabaya, 2024',
  type: 'Experience',
  role: 'Information Technology Governance',
  location: 'Lingkup Pemerintahan Provinsi Jawa Timur',
  shortDescription:
    'Conducted IT governance analysis using COBIT 2019, identified governance gaps, dan interviewed relevant stakeholders.',
  description:
    'Conducting IT governance analysis at PU Sumber Daya Air, Surabaya City using COBIT 2019, identifying gaps between current and expected conditions, conducting interviews with relevant parties to gather relevant information, and compiling improvement recommendations to support IT governance enhancement.',
  image: '/activities/PU.jpeg',
  highlights: ['Vue.js 2', 'Tailwind CSS', 'UI improvement'],
},
{
  title: 'Information Technology Division - PT. PAL Indonesia',
  date: 'PT. PAL Surabaya, 2025',
  type: 'Internship',
  role: 'Information Technology Division - PT. PAL Indonesia',
  location: 'Lingkup Pemerintahan Provinsi Jawa Timur',
  shortDescription:
    'Contribute to analyzing the companys information system requirements and documentation and conduct security and information technology governance evaluations in the IT Division.',
  description:
    'Contribute to analyzing the companys information system requirements and documentation and conduct security and information technology governance evaluations in the IT Division.',
  image: '/activities/pal.jpeg',
  highlights: ['Vue.js 2', 'Tailwind CSS', 'UI improvement'],
},
{
  title: 'Head of Public Relations Department - HIMASI UTM 24',
  date: 'HIMASI UTM ,2024',
  type: 'Management',
  role: 'Head of Public Relations Department - HIMASI UTM 24',
  location: 'Lingkup Pemerintahan Provinsi Jawa Timur',
  shortDescription:
    'Establishing internal and external relations of the Information Systems Study Program of Trunodjoyo University, Madura through collaboration with student organizations, media partners, and sponsorships.',
  description:
    'Establishing internal and external relations of the Information Systems Study Program of Trunodjoyo University, Madura through collaboration with student organizations, media partners, and sponsorships.',
  image: '/activities/himasi.JPG',
  highlights: ['Vue.js 2', 'Tailwind CSS', 'UI improvement'],
},
]

export const projects: ProjectItem[] = [
  {
    title: 'Forecasting Tourist Visits To The City Of Surabaya',
    category: 'Final Academic Project (2024)',
    description:
      'An academic project focused on creating a tourist visit forecasting model using the ARIMA method to assist in trend analysis and data-driven decision making.',
    stack: ['Data Analysis', 'Forecasting', 'Excel / Tools Academic'],
    status: 'Forecasting',
    image: '/forcas.png',
    badge: 'new',
  },
  {
    title: 'Student Savings Electronic',
    category: 'Final Academic Project (2023)',
    description:
      'The dashboard displays key information such as the number of active students, total deposits, total withdrawals, and total balance making it easier for administrators to monitor students savings finances in real-time.',
    stack: ['MySQL', 'Database', 'Bootstrap', 'PHP '],
    status: 'Database Management System',
    image: '/etabs.png',
    badge: 'Research',
  },
  {
    title: 'Holigans Marketplace Application Development',
    category: 'Research Methods (2024)',
    description:
      'This project focuses on redesigning the HOOLIGANS marketplace application an original Indonesian football clothing brand to enhance the user shopping experience digitally.',
    stack: ['Figma', 'User Flow', 'Wireframe'],
    status: 'UI/UX',
    image: '/store-holig.png',
    badge: 'Design',
  },
  {
    title: 'Decision Support System Calculation Using the SAW Method',
    category: 'Final Academic Project (2024)',
    description:
      'This website is a decision support system for assessing and determining the best students in the school using the Simple Additive Weighting (SAW) method.',
    stack: ['PHP', 'phpMyAdmin'],
    status: 'SPK',
    image: '/spksaw.png',
    badge: 'New',
  },
  {
    title: 'Tourist Attraction Recommendation App Pasuruan Regency',
    category: 'Final Internship Project (2025)',
    description:
      'A web-based application that recommends tourist destinations in Pasuruan Regency using the Utility Based Recommendation method, helping users find the most suitable attractions based on their preferences and needs.',
    stack: ['Streamlit', 'Data Science'],
    status: 'Data Science',
    image: '/apk-dm.png',
    badge: 'New',
  },
  {
    title: 'Personal Portfolio Website',
    category: 'Personal Projects (2026)',
    description:
      'A personal portfolio website with a modern look to showcase your profile, experience, skills, projects, and contact information professionally.',
    stack: ['Vue.js', 'Tailwind CSS', 'Vite'],
    status: 'Portofolio',
    image: '/porto.png',
    badge: 'New',
  },
  {
  title: 'Nganjuk Outbound Website',
    category: 'Final Internship Project (2025)',
    description:
      'Building a WordPress and SEO-based outbound website using the Waterfall method with package catalog features, galleries, blogs, and WhatsApp integration to enhance digital promotion and user experience.',
    stack: ['WordPrass', 'SEO'],
    status: 'Web Developer',
    image: '/web-outbond.png',
    badge: 'New',
  },
  {
  title: 'Disease Distribution and Health Services Dashboard East Java Province',
    category: 'Final Project Thesis (2026)',
    description:
      'Building a Power BI dashboard based on Data Warehouse and API to visualize the distribution of diseases, health services, and the distribution of health facilities in East Java Province in an interactive and informative manner.',
    stack: ['Power BI', 'Data Werehouse', 'API'],
    status: 'Thesis',
    image: '/bi.png',
    badge: 'New',
  },
]

