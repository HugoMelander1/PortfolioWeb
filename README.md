# Portfölj – Hugo Melander

Min personliga portföljsida. Byggd med React, TypeScript och Vite, utan backend.

## Sidor

| Adress | Innehåll |
|---|---|
| `/` | Startsida med kort presentation |
| `/explore` | Översikt över projekten |
| `/portfolio/:slug` | En egen sida per projekt |
| `/about` | Om mig, erfarenhet, utbildning och kompetenser |
| `/contact` | Kontaktuppgifter |

Okända adresser visar en 404-sida.

## Kom igång

Kräver [Node.js](https://nodejs.org/) 20.19 eller 22.12 och senare.

```bash
npm install      # installera beroenden
npm run dev      # starta utvecklingsserver på http://localhost:5173
npm run build    # typkontroll + bygg till mappen dist/
npm run preview  # förhandsgranska det byggda resultatet
npm run lint     # kör oxlint
```

## Redigera innehåll

Allt innehåll ligger i två filer, så komponenterna behöver inte ändras:

- `src/data/profile.ts` – presentation, erfarenhet, utbildning, kompetenser och kontakt.
  Kontaktfält som lämnas tomma (`''`) visas inte.
- `src/data/projects.ts` – projekten. Bilder läggs i `public/projects/` och anges som
  `'/projects/filnamn.png'`. Saknas bild, GitHub-länk eller demolänk döljs de automatiskt.
  Ta bort `isPlaceholder: true` när ett projekt är på riktigt.

Färger och mått ändras med CSS-variablerna högst upp i `src/index.css`.

## Struktur

```
src/
├── main.tsx            # startpunkt, kopplar in React Router
├── App.tsx             # alla routes
├── index.css           # all styling
├── data/               # innehållet (profil och projekt)
├── hooks/              # usePageTitle – sätter fliktiteln
├── components/         # Layout, Header, Footer, projektkort m.m.
└── pages/              # en fil per sida
docs/
└── project-readme-template.md   # mall för README i projektrepona
```

## Tekniska val

- **React Router** för riktiga adresser per sida. Det enda beroendet utöver React.
- **Vanlig CSS** med variabler i stället för ett CSS-ramverk – färre beroenden och lätt att följa.
- **Inga externa typsnitt eller ikonbibliotek** – systemtypsnitt och några få inline-SVG.
- **Tillgänglighet:** semantisk HTML, "Hoppa till innehållet"-länk, synlig fokusmarkering,
  fokus flyttas till sidans rubrik vid sidbyte, `aria-current` på aktiv menylänk och
  animationer stängs av vid `prefers-reduced-motion`.

## Publicera på Vercel

1. Lägg upp repot på GitHub.
2. Importera repot på [vercel.com](https://vercel.com). Vercel känner igen Vite automatiskt
   (byggkommando `npm run build`, mapp `dist`).
3. `vercel.json` skickar alla adresser till `index.html`, så att direktlänkar och omladdning
   av t.ex. `/about` fungerar.
