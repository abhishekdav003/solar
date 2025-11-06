// src/App.jsx
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white relative webfont">
      <Header />
      <main className="pb-24"> {/* Prevents footer from covering button */}
        <Hero />
        <About />
        <Services />
        <Partners />
        <Contact />
      </main>
      <Footer />
      
      {/* WhatsApp Button – Now truly floating */}
      <WhatsAppButton />
    </div>
  );
}