import { createBrowserRouter, RouterProvider, Navigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/layout/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Governance from './pages/Governance';
import WhatWeDo from './pages/WhatWeDo';
import DivisionPage from './pages/divisions/DivisionPage';
import Programmes from './pages/Programmes';
import Research from './pages/Research';
import GetInvolved from './pages/GetInvolved';
import OpenSource from './pages/OpenSource';
import SupportOurWork from './pages/SupportOurWork';
import News from './pages/News';
import Contact from './pages/Contact';
import Security from './pages/Security';
import Credits from './pages/Credits';
import ThankYou from './pages/ThankYou';
import NotFound from './pages/NotFound';
import HumanRights from './pages/HumanRights';
import CivilSociety from './pages/CivilSociety';
import ChildrenYoungPeople from './pages/ChildrenYoungPeople';
import { Privacy, Cookies, Terms, Safeguarding } from './pages/legal/LegalPages';

/* The previous site used .html extensions throughout. Search engines, saved
   bookmarks and the links inside Godfrey's email signature all still point at
   /security.html and /legal/privacy.html, so those must not 404. GitHub Pages
   serves 404.html (a copy of index.html) for unknown paths, which loads the
   router here; this sends the reader to the modern equivalent. */
const LEGACY_ROUTES = new Set([
  '/', '/about', '/human-rights', '/governance', '/what-we-do', '/programmes',
  '/research', '/open-source', '/civil-society', '/children-young-people',
  '/get-involved', '/support-our-work', '/news', '/contact', '/security',
  '/credits', '/thank-you',
  '/legal/privacy', '/legal/cookies', '/legal/terms', '/legal/safeguarding',
  '/divisions/dpi-trust-lab', '/divisions/open-digital-commons',
  '/divisions/policy-evidence-centre', '/divisions/skills-academy',
  '/divisions/cyber-safety-centre',
]);

function LegacyHtmlRedirect() {
  const { pathname, search, hash } = useLocation();
  if (pathname.endsWith('.html')) {
    const clean = pathname.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
    const target = clean === '' ? '/' : clean;
    if (LEGACY_ROUTES.has(target)) {
      return <Navigate to={`${target}${search}${hash}`} replace />;
    }
  }
  return <NotFound />;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'governance', element: <Governance /> },
      { path: 'what-we-do', element: <WhatWeDo /> },
      { path: 'divisions/:slug', element: <DivisionPage /> },
      { path: 'programmes', element: <Programmes /> },
      { path: 'research', element: <Research /> },
      { path: 'get-involved', element: <GetInvolved /> },
      { path: 'open-source', element: <OpenSource /> },
      { path: 'support-our-work', element: <SupportOurWork /> },
      { path: 'news', element: <News /> },
      { path: 'contact', element: <Contact /> },
      { path: 'security', element: <Security /> },
      { path: 'credits', element: <Credits /> },
      { path: 'human-rights', element: <HumanRights /> },
      { path: 'civil-society', element: <CivilSociety /> },
      { path: 'children-young-people', element: <ChildrenYoungPeople /> },
      { path: 'thank-you', element: <ThankYou /> },
      { path: 'legal/privacy', element: <Privacy /> },
      { path: 'legal/cookies', element: <Cookies /> },
      { path: 'legal/terms', element: <Terms /> },
      { path: 'legal/safeguarding', element: <Safeguarding /> },
      { path: '404', element: <NotFound /> },
      // Catches old .html URLs and redirects them; anything else is a 404.
      { path: '*', element: <LegacyHtmlRedirect /> },
    ],
  },
]);

export default function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}
