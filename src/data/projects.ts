// All projektdata samlas här. Komponenterna läser bara från den här filen.
// Lämna ett fält tomt ('' eller utelämna det) så döljs bild/knapp automatiskt.

export type ProjectStatus = 'Kommer snart' | 'Pågående' | 'Klart'

export type Project = {
  /** Används i adressen: /portfolio/<slug>. Bara små bokstäver, siffror och bindestreck. */
  slug: string
  title: string
  /** En till två meningar som visas på projektkortet. */
  summary: string
  problem: string
  solution: string
  role: string
  technologies: string[]
  status: ProjectStatus
  /** Bilden läggs i public/projects/ och anges som '/projects/filnamn.png'. */
  image?: {
    src: string
    alt: string
  }
  githubUrl?: string
  demoUrl?: string
  /** true = platshållare som ska bytas ut mot ett riktigt projekt. */
  isPlaceholder?: boolean
}

export const projects: Project[] = [
  {
    slug: 'projekt-1',
    title: 'Projekt 1',
    summary: 'Platshållare. Här kommer en kort beskrivning av projektet.',
    problem: 'Platshållare. Beskriv vilket problem projektet löser och för vem.',
    solution: 'Platshållare. Beskriv hur lösningen fungerar och varför du valde den.',
    role: 'Platshållare. Beskriv vad du själv gjorde i projektet.',
    technologies: [],
    status: 'Kommer snart',
    isPlaceholder: true,
  },
  {
    slug: 'projekt-2',
    title: 'Projekt 2',
    summary: 'Platshållare. Här kommer en kort beskrivning av projektet.',
    problem: 'Platshållare. Beskriv vilket problem projektet löser och för vem.',
    solution: 'Platshållare. Beskriv hur lösningen fungerar och varför du valde den.',
    role: 'Platshållare. Beskriv vad du själv gjorde i projektet.',
    technologies: [],
    status: 'Kommer snart',
    isPlaceholder: true,
  },
]

export function findProject(slug: string | undefined): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
