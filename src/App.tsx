import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SourceCode from './components/SourceCode';
import WebServices from './components/WebServices';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero />;
      case 'source-code':
        return <SourceCode />;
      case 'web-services':
        return <WebServices />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;