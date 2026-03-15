
import React, { useState, useEffect } from 'react';
import { SITE_CONFIG, SERVICES } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isSolidHeader = isScrolled || currentPage !== 'home';

  const menuItems = [
    { name: 'Anasayfa', id: 'home' },
    { name: 'Kurumsal', id: 'about' },
    { name: 'Hizmetler', id: 'services' },
    { name: 'Galeri', id: 'gallery' },
    { name: 'Blog', id: 'blog' },
    { name: 'İletişim', id: 'contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 overflow-x-hidden">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isSolidHeader ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4 md:py-5'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl mr-3 transition-all duration-300 ${isSolidHeader ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25' : 'bg-white/10 backdrop-blur-sm text-white border border-white/20'}`}>
              <i className="fas fa-car-side text-lg md:text-2xl group-hover:scale-110 transition-transform"></i>
            </div>
            <div className="flex flex-col">
              <h1 className={`text-base md:text-xl font-extrabold leading-tight font-display transition-colors ${isSolidHeader ? 'text-slate-900' : 'text-white drop-shadow-sm'}`}>ERSİN GÜZEL</h1>
              <p className={`text-[9px] md:text-[10px] tracking-[0.2em] uppercase font-bold transition-colors ${isSolidHeader ? 'text-sky-600' : 'text-sky-200'}`}>OTOMOTİV</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`font-semibold text-sm transition-all duration-200 relative ${currentPage === item.id ? 'text-sky-600' : isSolidHeader ? 'text-slate-600 hover:text-sky-600' : 'text-white/90 hover:text-white'}`}
              >
                {item.name}
                {currentPage === item.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-sky-500 rounded-full"></span>
                )}
              </button>
            ))}
            <a 
              href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
              className="bg-sky-500 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-sky-500/30 hover:bg-sky-600 hover:shadow-sky-500/40 transition-all flex items-center gap-2 hover:-translate-y-0.5"
            >
              <i className="fas fa-phone-alt"></i> Hemen Ara
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className={`lg:hidden w-11 h-11 flex items-center justify-center rounded-xl transition-all ${isMenuOpen ? 'bg-slate-100' : isSolidHeader ? 'bg-slate-100 text-slate-800' : 'bg-white/10 text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menüyü Aç/Kapat"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-lg transition-transform duration-300`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden bg-white border-t border-slate-200 shadow-xl absolute top-full w-full left-0 py-5 px-4 flex flex-col gap-1 transition-all duration-300 ease-out ${
            isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-3 invisible pointer-events-none'
          }`}
        >
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { onNavigate(item.id); setIsMenuOpen(false); }}
              className={`text-left font-semibold py-3.5 px-5 rounded-xl transition-all ${currentPage === item.id ? 'bg-sky-50 text-sky-600 border-l-4 border-sky-500' : 'text-slate-700 hover:bg-slate-50 active:scale-[0.99]'}`}
            >
              {item.name}
            </button>
          ))}
          <div className="pt-4 mt-2 border-t border-slate-200/50">
            <a 
              href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
              className="bg-emerald-500 text-white py-4 rounded-xl font-bold text-center flex justify-center items-center gap-2 shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 hover:shadow-emerald-500/40 transition-all w-full"
            >
              <i className="fab fa-whatsapp text-xl"></i> WhatsApp'tan Yaz
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow" role="main">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-10 md:pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(14,165,233,0.08)_0%,_transparent_50%)] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-sky-500/20 rounded-xl flex items-center justify-center">
                  <i className="fas fa-car-side text-xl text-sky-400"></i>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white font-display tracking-tight">ERSİN GÜZEL <span className="text-sky-400">OTOMOTİV</span></h2>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
                Sektördeki tecrübemiz ve uzman kadromuzla aracınızın tüm bakım onarım ihtiyaçlarında güvenilir çözüm ortağınızız.
              </p>
              <div className="flex gap-3">
                <a href={SITE_CONFIG.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800/80 rounded-xl flex items-center justify-center hover:bg-sky-500 hover:scale-110 transition-all"><i className="fab fa-instagram"></i></a>
                <a href={SITE_CONFIG.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800/80 rounded-xl flex items-center justify-center hover:bg-sky-500 hover:scale-110 transition-all"><i className="fab fa-facebook-f"></i></a>
              </div>
            </div>

            <div className="hidden sm:block">
              <h3 className="text-white font-bold text-base mb-6 pl-4 border-l-4 border-sky-500">Hizmetlerimiz</h3>
              <ul className="space-y-3 text-sm">
                {SERVICES.map(s => (
                  <li key={s.id}><button onClick={() => onNavigate('services')} className="hover:text-sky-400 transition-colors py-1">{s.title}</button></li>
                ))}
              </ul>
            </div>

            <div className="hidden sm:block">
              <h3 className="text-white font-bold text-base mb-6 pl-4 border-l-4 border-sky-500">Kurumsal</h3>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => onNavigate('about')} className="hover:text-sky-400 transition-colors py-1">Hakkımızda</button></li>
                <li><button onClick={() => onNavigate('blog')} className="hover:text-sky-400 transition-colors py-1">Blog</button></li>
                <li><button onClick={() => onNavigate('home')} className="hover:text-sky-400 transition-colors py-1">SSS</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-base mb-6 pl-4 border-l-4 border-sky-500">İletişim</h3>
              <ul className="space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <i className="fas fa-map-marker-alt text-sky-400 mt-1 flex-shrink-0"></i>
                  <span>{SITE_CONFIG.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-phone-alt text-sky-400 flex-shrink-0"></i>
                  <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-white transition-colors">{SITE_CONFIG.phone}</a>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-clock text-sky-400 flex-shrink-0"></i>
                  <span>{SITE_CONFIG.workingHours}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col items-center text-center space-y-2 text-[10px] md:text-xs text-slate-500">
            <p>© 2024 {SITE_CONFIG.brandName}. Tüm Hakları Saklıdır.</p>
            <p><a href="https://ufukguzel.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">Designed by Ufuk Güzel</a></p>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
        <a 
          href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-500 text-white w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-500/40 hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 animate-float"
          aria-label="WhatsApp üzerinden iletişim kurun"
        >
          <i className="fab fa-whatsapp text-2xl md:text-3xl"></i>
        </a>
        <a 
          href={`tel:${SITE_CONFIG.phone}`}
          className="lg:hidden bg-sky-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl shadow-sky-500/40 hover:scale-110 transition-all"
          aria-label="Hemen arayın"
        >
          <i className="fas fa-phone-alt text-xl md:text-2xl"></i>
        </a>
      </div>
    </div>
  );
};

export default Layout;
