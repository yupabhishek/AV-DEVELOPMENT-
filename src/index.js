import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function ErrorFallback({ error }) {
  return (
    <div className="error-fallback" style={{
      padding: '2rem',
      textAlign: 'center',
      fontFamily: 'sans-serif'
    }}>
      <h2 style={{ color: '#0c0950' }}>Something went wrong</h2>
      <p style={{ color: '#d32f2f', margin: '1rem 0' }}>
        {error.message}
      </p>
      <button 
        onClick={() => window.location.reload()}
        style={{
          background: '#0c0950',
          color: 'white',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Refresh Page
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <HelmetProvider>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <App />
        </ErrorBoundary>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// Performance monitoring (optional)
reportWebVitals(console.log);