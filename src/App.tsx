import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { WhyUs } from './pages/WhyUs';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';
import { ErrorPage } from './pages/ErrorPage';
import { StudioPage } from './pages/StudioPage';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';

const App: React.FC = () => {
  return (
    <Routes>
      {/* Studio Route - Full Screen, No Layout */}
      <Route path="/studio/*" element={<StudioPage />} />

      {/* Main Site Routes - Wrapped in Layout */}
      <Route
        path="*"
        element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/why-us" element={<WhyUs />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />

              {/* Error Pages */}
              <Route path="/500" element={<ErrorPage code={500} />} />
              <Route path="/503" element={<ErrorPage code={503} />} />
              <Route path="*" element={<ErrorPage code={404} />} />
            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
