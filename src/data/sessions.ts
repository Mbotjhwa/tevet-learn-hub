import { SessionCategory, SessionType } from "../components/shared/SessionCard";

export interface Question {
  id: number;
  text: string;
  options: string[];
  correct: number;
}

export interface SessionData {
  id: string;
  title: string;
  category: SessionCategory;
  type: SessionType;
  subject: string;
  duration: string;
  level: string;
  thumbnail: string;
  author: string;
  authorBio: string;
  description: string;
  outcomes: string[];
  curriculum: { title: string; dur: string; completed: boolean }[];
  questions: Question[];
}

export const SESSIONS_DATA: SessionData[] = [
  {
    id: "s-comp-basic",
    title: "Computer Basic Skills: Introduction to Digital Literacy",
    category: "TVET College",
    type: "Video",
    subject: "Information Technology",
    duration: "55m",
    level: "Foundational",
    thumbnail: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/b53ffe8d-30b6-41d4-a87d-9f10360d6ca5/computer-basic-skills-thumbnail-45c7d9ea-1775330936290.webp",
    author: "Mr. David Mbeki",
    authorBio: "David is a certified ICT specialist with 10 years of experience in vocational training and community digital literacy programs.",
    description: "Master the essentials of computing. This course covers everything from hardware basics to navigating an operating system and essential keyboard shortcuts. Perfect for beginners or those looking to refresh their digital knowledge.",
    outcomes: [
      "Identify key hardware components of a computer system.",
      "Navigate the Windows operating system efficiently.",
      "Master essential keyboard shortcuts for productivity.",
      "Understand basic file management and folder structures."
    ],
    curriculum: [
      { title: "Introduction to Hardware", dur: "12:15", completed: false },
      { title: "Understanding Operating Systems", dur: "15:40", completed: false },
      { title: "File Management Basics", dur: "14:20", completed: false },
      { title: "Essential Productivity Shortcuts", dur: "12:45", completed: false },
    ],
    questions: [
      {
        id: 1,
        text: "What is the primary function of an Operating System?",
        options: ["To browse the internet", "To manage computer hardware and software", "To create documents", "To play games"],
        correct: 1
      },
      {
        id: 2,
        text: "Which keyboard shortcut is commonly used to COPY selected text?",
        options: ["Ctrl + V", "Ctrl + X", "Ctrl + C", "Ctrl + Z"],
        correct: 2
      },
      {
        id: 3,
        text: "Which of these is an example of an INPUT device?",
        options: ["Monitor", "Printer", "Keyboard", "Speakers"],
        correct: 2
      },
      {
        id: 4,
        text: "What does CPU stand for?",
        options: ["Computer Processing Unit", "Central Power Unit", "Central Processing Unit", "Control Power Utility"],
        correct: 2
      }
    ]
  },
  {
    id: "1",
    title: "Introduction to Thermodynamics",
    category: "TVET College",
    type: "Video",
    subject: "Engineering Studies",
    duration: "45m",
    level: "N3",
    thumbnail: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/b53ffe8d-30b6-41d4-a87d-9f10360d6ca5/tvet-learning-d2d0acec-1775329458657.webp",
    author: "Eng. Robert Smith",
    authorBio: "Robert is a mechanical engineer with over 15 years of experience in the field and 5 years as a TVET lecturer.",
    description: "This comprehensive session covers the core concepts of thermodynamics required for the N3 Engineering curriculum. We will explore energy transformation, the laws of thermodynamics, and practical heat engine applications.",
    outcomes: [
      "Understand the Zero, First, and Second laws of thermodynamics.",
      "Calculate energy transfers in closed systems.",
      "Define enthalpy, entropy, and internal energy.",
      "Solve basic heat engine efficiency problems."
    ],
    curriculum: [
      { title: "Introduction to Energy", dur: "08:12", completed: true },
      { title: "The First Law of Thermodynamics", dur: "12:45", completed: true },
      { title: "Phase Diagrams and Water Properties", dur: "10:20", completed: false },
      { title: "Entropy and the Second Law", dur: "13:43", completed: false },
    ],
    questions: [
      {
        id: 1,
        text: "Which law of thermodynamics states that energy cannot be created or destroyed, only transformed?",
        options: ["Zero Law", "First Law", "Second Law", "Third Law"],
        correct: 1
      },
      {
        id: 2,
        text: "What is the primary difference between a closed and an open system in thermodynamics?",
        options: [
          "Open systems allow mass exchange, closed don't", 
          "Closed systems allow mass exchange, open don't",
          "Both allow mass exchange",
          "Neither allow energy exchange"
        ],
        correct: 0
      },
      {
        id: 3,
        text: "In an adiabatic process, what value is equal to zero?",
        options: ["Pressure change", "Work done", "Heat transfer", "Temperature change"],
        correct: 2
      },
      {
        id: 4,
        text: "Enthalpy is defined as the sum of internal energy and:",
        options: ["Entropy", "Product of pressure and volume", "Heat capacity", "Kinetic energy"],
        correct: 1
      }
    ]
  },
  {
    id: "s1",
    title: "Official TVET College Syllabus: Mechanical Engineering N1-N6",
    category: "TVET College",
    type: "Syllabus",
    subject: "Engineering Studies",
    duration: "Syllabus",
    level: "N1 - N6",
    thumbnail: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/b53ffe8d-30b6-41d4-a87d-9f10360d6ca5/tvet-college-syllabus-175b8509-1775330320045.webp",
    author: "Dept. of Higher Education",
    authorBio: "Official Department of Higher Education curriculum board responsible for TVET standards across South Africa.",
    description: "Comprehensive curriculum framework for mechanical engineering studies in South African TVET colleges.",
    outcomes: ["Full curriculum mapping", "Subject requirements", "Assessment standards"],
    curriculum: [],
    questions: []
  },
  {
    id: "s2",
    title: "Public School Curriculum Statement: Grade 12 Physical Sciences",
    category: "Public School",
    type: "Syllabus",
    subject: "Physical Sciences",
    duration: "Syllabus",
    level: "Grade 12",
    thumbnail: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/b53ffe8d-30b6-41d4-a87d-9f10360d6ca5/public-school-syllabus-66eb6093-1775330320508.webp",
    author: "Dept. of Basic Education",
    authorBio: "The national department responsible for primary and secondary education in South Africa.",
    description: "Official CAPS document outlining the standards and content for Matric Physical Sciences.",
    outcomes: ["CAPS Compliance", "Topic breakdown", "Practical assessment tasks"],
    curriculum: [],
    questions: []
  },
  {
    id: "s3",
    title: "Private School Advanced Program: Grade 11 Mathematics",
    category: "Private School",
    type: "Syllabus",
    subject: "Mathematics",
    duration: "Syllabus",
    level: "Grade 11",
    thumbnail: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/b53ffe8d-30b6-41d4-a87d-9f10360d6ca5/private-school-syllabus-525aa50c-1775330320459.webp",
    author: "Independent Examinations Board",
    authorBio: "The IEB is an independent assessment body offering international benchmarking.",
    description: "Elite curriculum standards for IEB certified schools focusing on advanced problem solving.",
    outcomes: ["IEB Standards", "Advanced calculus prep", "Analytical geometry concepts"],
    curriculum: [],
    questions: []
  },
  {
    id: "2",
    title: "Grade 12 Mathematics: Calculus",
    category: "Public School",
    type: "Video",
    subject: "Mathematics",
    duration: "1h 15m",
    level: "Grade 12",
    thumbnail: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/b53ffe8d-30b6-41d4-a87d-9f10360d6ca5/school-learning-e05910ce-1775329458759.webp",
    author: "Ms. Sarah Johnson",
    authorBio: "Sarah is a lead mathematics educator with a focus on preparing students for National Senior Certificate exams.",
    description: "Deep dive into differentiation, integration, and their real-world applications for matric exams.",
    outcomes: ["Master limits and continuity", "Apply differentiation rules", "Solve optimization problems"],
    curriculum: [],
    questions: []
  },
  {
    id: "s4",
    title: "Business Management N4-N6 Comprehensive Syllabus",
    category: "TVET College",
    type: "Syllabus",
    subject: "Business Studies",
    duration: "Syllabus",
    level: "N4 - N6",
    thumbnail: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    author: "TVET Academic Board",
    authorBio: "Academic committee for business studies within the TVET sector.",
    description: "Detailed breakdown of management principles, accounting, and communication for TVET learners.",
    outcomes: ["Business fundamentals", "Accounting basics", "Strategic management"],
    curriculum: [],
    questions: []
  },
  {
    id: "s5",
    title: "IEB Physics Syllabus for Grade 10-12",
    category: "Private School",
    type: "Syllabus",
    subject: "Physics",
    duration: "Syllabus",
    level: "Grade 10-12",
    thumbnail: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800&q=80",
    author: "Private School Council",
    authorBio: "Advisory council for science education in top-tier private schools.",
    description: "Modernized physics curriculum including electronics and sustainable energy modules.",
    outcomes: ["Electronics foundations", "Sustainable energy", "Mechanics"],
    curriculum: [],
    questions: []
  },
  {
    id: "s6",
    title: "Civil Technology: Bricklaying & Plastering Theory",
    category: "TVET College",
    type: "Video",
    subject: "Civil Engineering",
    duration: "1h 05m",
    level: "N2",
    thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    author: "Joseph Sithole",
    authorBio: "Joseph is a trade specialist with 20 years in the construction industry and technical education.",
    description: "Master the technical aspects of masonry construction and quality control standards.",
    outcomes: ["Masonry techniques", "Quality control", "Site safety"],
    curriculum: [],
    questions: []
  }
];