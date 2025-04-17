import React, { Suspense, useEffect } from 'react';
import { useLocation, Routes, Route, Navigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

// Import components
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Facility } from './components/Facility';
import { Plans } from './components/Plans';
import { Projects } from './components/Projects';
import { Founder } from './components/Founder';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

// Fallback components
const NotFound = () => <div className="container py-5 text-center"><h2>Page Not Found</h2></div>;
const LoadingSpinner = () => <div className="d-flex justify-content-center py-5"><div className="spinner-border text-primary"></div></div>;

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="error-boundary text-center py-5">
      <h2 className="text-brand">Oops! Something went wrong</h2>
      <p className="text-danger my-3">{error.message}</p>
      <button onClick={resetErrorBoundary} className="btn btn-primary">
        Try Again
      </button>
    </div>
  );
}

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <>
      <Banner />
      <Skills />
      <Facility />
      <Plans />
      <Projects />
      <Founder />
      <Contact />
    </>
  );
}

function App() {
  const location = useLocation();
  const currentUrl = `https://www.avdevelopment.in${location.pathname}`;

  // SEO configuration
  const seoConfig = {
    '/': {
      title: 'AV Development | Web Design Company in Delhi',
      description: 'Professional web design and development services in Delhi. Custom websites starting at ₹5,999 with free hosting.',
    },
    '/services': {
      title: 'Our Services | AV Development Delhi',
      description: 'Complete web solutions including MERN stack development, e-commerce websites, and SEO services in Delhi.',
    },
    '/founder': {
      title: 'Our Team | AV Development Delhi',
      description: 'Meet the founders behind AV Development - your trusted web development partners in Delhi.',
    },
  };

  const currentSeo = seoConfig[location.pathname] || {
    title: 'AV Development - Web Solutions',
    description: 'Delhi based web development company offering custom digital solutions',
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <HelmetProvider>
        <Helmet>
          <title>{currentSeo.title}</title>
          <meta name="description" content={currentSeo.description} />
          <link rel="canonical" href={currentUrl} />
          <meta property="og:title" content={currentSeo.title} />
          <meta property="og:description" content={currentSeo.description} />
          <meta property="og:url" content={currentUrl} />
        </Helmet>

        <ScrollToTopOnRouteChange />
        <NavBar />

        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* Main single-page app route */}
            <Route path="/" element={<HomePage />} />
            
            {/* Hash-based navigation */}
            <Route path="/#founder" element={<Navigate to="/" replace />} />
            
            {/* Direct routes that still show full page */}
            <Route path="/founder" element={<HomePage />} />
            <Route path="/services" element={<HomePage />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        <Footer />
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;