// Personlig information som visas på sidorna. Redigera texterna här.
// Kontaktfält som lämnas tomma ('') visas inte på sidan.

export type TimelineItem = {
  title: string
  organisation: string
  location?: string
  period: string
  description: string[]
  technologies?: string[]
}

export type SkillGroup = {
  category: string
  items: string[]
}

const presentation =
  'Nyutexaminerad systemvetare från Högskolan i Borås med stort intresse för systemutveckling och problemlösning. Har erfarenhet av C#, .NET och WPF från arbete på Volvo Trucks, samt av integrationer och API:er från studier och egna projekt.'

export const profile = {
  name: 'Hugo Melander',
  role: 'Systemvetare',
  intro: presentation,
  about: [
    presentation,
    'Jag uppskattar särskilt utvecklingsprocesser där lösningar byggs stegvis och i nära samarbete med andra.',
  ],
}

export const experience: TimelineItem[] = [
  {
    title: 'Applikationsutvecklare',
    organisation: 'Volvo Trucks',
    location: 'Göteborg',
    period: 'Juni – aug. 2025',
    description: [
      'Utvecklade en applikation i C# och .NET med gränssnitt i WPF för inläsning och visualisering av CAN-data i realtid vid fordonstester.',
      'Felsökte och förbättrade applikationen utifrån återkoppling från min handledare.',
      'Applikationen gjorde det möjligt för verkstadsingenjörer att tydligt visa kunder den faktiska prestandan under körning.',
    ],
    technologies: ['C#', '.NET', 'WPF', 'CAN'],
  },
]

export const education: TimelineItem[] = [
  {
    title: 'Systemvetenskap',
    organisation: 'Högskolan i Borås',
    period: '2023 – juni 2026',
    description: [
      'Fokus på systemutveckling, programmering och databaser, inklusive ett systemutvecklingsprojekt från kravinsamling och kundkontakt till design, implementation och test av ett färdigt system, kurs i databasteknik med SQL och relationsdatabaser samt projekt i C#, Python och webbutveckling med HTML och CSS.',
    ],
  },
]

export const skills: SkillGroup[] = [
  { category: 'Programmering', items: ['C#', 'Python'] },
  { category: 'Ramverk', items: ['.NET', 'WPF'] },
  { category: 'Webb', items: ['React', 'HTML', 'CSS'] },
  { category: 'Databaser', items: ['SQL'] },
  { category: 'Verktyg', items: ['Git'] },
  { category: 'Tekniskt', items: ['Objektorienterad programmering', 'Realtidsdata (CAN)', 'Felsökning'] },
  { category: 'Språk', items: ['Svenska (modersmål)', 'Engelska (flytande)'] },
]

export const contact = {
  email: 'hugomelander@live.se',
  linkedin: 'https://www.linkedin.com/in/hugo-melander-0212682b4',
  github: 'https://github.com/HugoMelander1',
}
