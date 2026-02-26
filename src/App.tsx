import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import ComparisonSection from './components/ComparisonSection';
import Services from './components/Services';
import Membership from './components/Membership';
import Footer from './components/Footer';
import ThemeSwitcher from './components/ThemeSwitcher';

export default function App() {
  return (
    // overflow-x: clip previene scroll horizontal SIN romper position:sticky
    // (a diferencia de overflow-x: hidden que crea un scroll container)
    <div style={{ overflowX: 'clip' }}>
      {/* Switcher de temas — vive fuera del flujo del DOM */}
      <ThemeSwitcher />

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Philosophy />
        <ComparisonSection />
        <Services />
        <Membership />
      </main>
      <Footer />
    </div>
  );
}
