import { Route, Routes } from 'react-router'
import Layout from './components/Layout.tsx'
import AboutPage from './pages/AboutPage.tsx'
import ContactPage from './pages/ContactPage.tsx'
import ExplorePage from './pages/ExplorePage.tsx'
import HomePage from './pages/HomePage.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'
import ProjectPage from './pages/ProjectPage.tsx'

// Alla sidor ligger inuti Layout, som ritar menyn och sidfoten.
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="explore" element={<ExplorePage />} />
        <Route path="portfolio/:slug" element={<ProjectPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
