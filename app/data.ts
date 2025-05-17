import { University } from "lucide-react"

type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type Education = {
  campus: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'PICKLED-CAT | E-Commerce',
    description:
      'A responsive e-commerce platform for cat-related products using MERN stack.',
    link: 'https://jsd9-pickled-cat-frontend.vercel.app/',
    video:
      'https://res.cloudinary.com/dhmwrypox/video/upload/v1747468934/ag1szwfxdrgaonsws4cb.mov',
    id: 'project1',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Generation Thailand',
    title: 'Junior Software Developer (Learner - Cohort9)',
    start: 'Feb 2025',
    end: 'May 2025',
    link: '',
    id: 'work1',
  },
  {
    company: 'Worked at multiple animal hospitals and companies',
    title: 'Veterinarian',
    start: 'Mar 2013',
    end: 'Sep 2024',
    link: '',
    id: 'work2',
  },
]

export const EDUCATION: Education[] = [
  {
    campus: 'Chulalongkorn University',
    title: "Bachelor's degree in veterinary medicine",
    start: 'May 2007',
    end: 'May 2013',
    link: '',
    id: 'education1',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Why I left my job to start a career in tech industry?',
    description: "I’ve had a passion for technology since childhood, but only recently found the opportunity to pursue it seriously. While working at an animal hospital, I saw the need for better digital tools to manage patient records. That experience sparked my motivation to transition into tech. Since then, I’ve been learning full-stack development and building projects to solve real-world problems and create meaningful user experiences.",
    link: '',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/orayachan',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/orayachan',
  },
  {
    label: 'Facebook',
    link: 'https://www.facebook.com/choraya/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/alizstg/',
  },
]

export const EMAIL = 'ochantanawat@gmail.com'
