
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import { SITE_CONFIG, BLOG_POSTS } from './constants';
import type { BlogPost } from './types';

const updateMeta = (title: string, description: string) => {
  document.title = title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', description);
  } else {
    const meta = document.createElement('meta');
    meta.name = "description";
    meta.content = description;
    document.head.appendChild(meta);
  }
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
    switch (currentPage) {
      case 'home':
        updateMeta(
          `${SITE_CONFIG.brandName} | Oto Alım Satım, Elektrik & Yedek Parça - Maslak`,
          "Ersin Güzel Otomotiv: Maslak Atatürk Oto Sanayi Sitesi'nde oto alım satım, yedek parça ve oto elektrik. 0532 650 01 73."
        );
        break;
      case 'services':
        updateMeta(
          `Hizmetlerimiz | ${SITE_CONFIG.brandName}`,
          "Maslak'ta akü, ampül, silecek, oto elektrik ve araç alım satım. Ersin Güzel Otomotiv hizmet kataloğu."
        );
        break;
      case 'blog':
        updateMeta(
          `Blog - Oto Bakım Rehberi | ${SITE_CONFIG.brandName}`,
          "Akü, periyodik bakım ve ikinci el araç ipuçları. Ersin Güzel Otomotiv blog - Maslak oto rehberi."
        );
        break;
      case 'gallery':
        updateMeta(
          `Galeri | ${SITE_CONFIG.brandName}`,
          "Ersin Güzel Otomotiv dükkan ve mağaza fotoğrafları. Maslak Atatürk Oto Sanayi Sitesi."
        );
        break;
      case 'about':
        updateMeta(
          `Hakkımızda | ${SITE_CONFIG.brandName}`,
          "20 yılı aşkın tecrübesiyle Ersin Güzel Otomotiv: İstanbul Maslak'ta güvenilir oto servis, yedek parça ve araç alım satım. Atatürk Oto Sanayi Sitesi."
        );
        break;
      case 'contact':
        updateMeta(
          `İletişim | ${SITE_CONFIG.brandName}`,
          "Ersin Güzel Otomotiv iletişim: Atatürk Oto Sanayi Sitesi İkinci Kısım 26. Sokak 995, Maslak. Tel: 0532 650 01 73."
        );
        break;
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={setCurrentPage} />;
      case 'about': return <AboutPage />;
      case 'services': return <ServicesPage onNavigate={setCurrentPage} />;
      case 'contact': return <ContactPage />;
      case 'gallery': return <GalleryPage />;
      case 'blog': return <BlogPage />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
};

const AboutPage = () => (
  <div className="pt-24 md:pt-32 pb-20 md:pb-28 container mx-auto px-4 animate-fade-in">
    <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
      <div className="order-2 md:order-1">
        <span className="text-sky-600 font-bold uppercase tracking-wider text-xs mb-4 block">Kurumsal</span>
        <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900 font-display">Ersin Güzel Kimdir?</h2>
        <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-6 font-medium">
          Sektörde 20 yılı aşkın dürüst ticaret ve kaliteli hizmet anlayışıyla yer alan Ersin Güzel, İstanbul'un otomotiv kalbinde hizmet vermektedir.
        </p>
        <p className="text-slate-600 leading-relaxed mb-8 text-sm md:text-base">
          Kendi ismini taşıyan işletmesinde; oto elektrikten zengin yedek parça stoğuna, araç alım satımından periyodik bakıma kadar her noktada şahsen ilgilenerek müşterilerine güven aşılamaktadır.
        </p>
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          <div className="bg-sky-50 p-5 md:p-6 rounded-2xl border border-sky-100">
            <h4 className="font-black text-2xl md:text-3xl text-sky-600 mb-1 font-display">20+</h4>
            <p className="text-xs text-slate-600 font-semibold uppercase tracking-wider">Yıllık Tecrübe</p>
          </div>
          <div className="bg-sky-50 p-5 md:p-6 rounded-2xl border border-sky-100">
            <h4 className="font-black text-2xl md:text-3xl text-sky-600 mb-1 font-display">1000+</h4>
            <p className="text-xs text-slate-600 font-semibold uppercase tracking-wider">Mutlu Müşteri</p>
          </div>
        </div>
      </div>
      <div className="order-1 md:order-2 relative min-h-[280px] md:min-h-[400px]">
        <img
          src="/dukkan-arkaplan.png"
          alt="Ersin Güzel Otomotiv Dükkan Ön Cephe"
          className="rounded-2xl md:rounded-3xl shadow-2xl w-full h-auto object-cover min-h-[280px] md:min-h-[400px]"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://picsum.photos/seed/ersinguzel-oto/800/600";
            target.onerror = () => { target.style.display = "none"; (target.nextElementSibling as HTMLElement)?.classList.remove("hidden"); };
          }}
        />
        <div className="hidden absolute inset-0 bg-slate-100 rounded-2xl md:rounded-3xl flex items-center justify-center text-slate-500">
          <span className="text-center px-4 text-sm">Görsel yüklenemedi</span>
        </div>
      </div>
    </div>
  </div>
);

const GALLERY_ITEMS = [
  { src: "/galeri-1.png", title: "Dükkan Ön Cephe" },
  { src: "/galeri-2.png", title: "Mağaza İçi - Raflar ve Ürünler" },
  { src: "/galeri-3.png", title: "Servis Alanı ve Ekipmanlar" },
  { src: "/galeri-4.png", title: "Danışma Masası ve Ofis" },
  { src: "/galeri-5.png", title: "Akü ve Yedek Parça Stoku" },
  { src: "/galeri-6.png", title: "Vitrin ve Sokak Görünümü" },
  { src: "/galeri-7.png", title: "Parça Dolapları ve Tezgah" },
  { src: "/galeri-8.png", title: "Raflar ve Ürün Çeşitleri" },
  { src: "/galeri-9.png", title: "Mağaza İçi Genel Görünüm" },
];

const GalleryPage = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="pt-24 md:pt-32 pb-20 md:pb-28 container mx-auto px-4 animate-fade-in">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-black mb-4 font-display text-slate-900">Görsellerle Servisimiz</h2>
        <p className="text-slate-600 mb-10 text-base">Dükkanımız ve mağaza içi kareler.</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
        {GALLERY_ITEMS.map((item, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setLightboxIndex(i)}
            className="group relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl aspect-[4/3] hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          >
            <img src={item.src} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 md:p-5">
              <span className="text-white font-bold text-sm md:text-base">{item.title}</span>
            </div>
            <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <i className="fas fa-search-plus text-slate-700 text-sm"></i>
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xl z-10 transition-colors"
            aria-label="Kapat"
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={GALLERY_ITEMS[lightboxIndex].src}
              alt={GALLERY_ITEMS[lightboxIndex].title}
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
            <p className="text-white text-center mt-4 text-sm md:text-base font-medium">{GALLERY_ITEMS[lightboxIndex].title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const ServicesPage = ({ onNavigate }: { onNavigate: (page: string) => void }) => (
  <div className="pt-24 md:pt-32 pb-20 md:pb-28 container mx-auto px-4 animate-fade-in">
    <div className="text-center mb-12 md:mb-16">
      <span className="text-sky-600 font-bold uppercase tracking-wider text-xs mb-4 block">Hizmetlerimiz</span>
      <h2 className="text-3xl md:text-5xl font-black mb-4 font-display text-slate-900">Hizmet Kataloğu</h2>
      <p className="text-slate-600 max-w-2xl mx-auto text-base">Profesyonel ekipmanlarla her marka araç için uzman çözümler.</p>
    </div>
    <div className="grid md:grid-cols-2 gap-8 md:gap-10">
       <div className="bg-white p-6 md:p-10 rounded-2xl md:rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <i className="fas fa-box-open text-xl md:text-2xl"></i>
            </div>
            <h3 className="text-xl md:text-2xl font-bold font-display text-slate-900">Yedek Parça</h3>
          </div>
          <p className="text-slate-600 mb-6 text-base md:text-lg">Tüm sarf malzemelerini Bosch, Varta ve Yiğit Akü kalitesiyle sunuyoruz.</p>
          <ul className="space-y-3 mb-8 text-slate-700 text-sm md:text-base">
            <li className="flex items-center gap-3"><i className="fas fa-check-circle text-sky-500"></i> Her çeşit araç ampülü</li>
            <li className="flex items-center gap-3"><i className="fas fa-check-circle text-sky-500"></i> Orijinal Silecek Setleri</li>
            <li className="flex items-center gap-3"><i className="fas fa-check-circle text-sky-500"></i> Akü Yetkili Bayi Satış</li>
            <li className="flex items-center gap-3"><i className="fas fa-check-circle text-sky-500"></i> Seger Korna Çeşitleri</li>
          </ul>
          <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`} className="block text-center bg-sky-500 text-white font-bold py-4 rounded-xl hover:bg-sky-600 hover:-translate-y-0.5 transition-all">Hemen Fiyat Al</a>
       </div>
       <div className="bg-slate-900 p-6 md:p-10 rounded-2xl md:rounded-3xl text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="flex items-center gap-4 mb-6 relative">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-sky-500 text-white rounded-2xl flex items-center justify-center flex-shrink-0">
              <i className="fas fa-handshake text-xl md:text-2xl"></i>
            </div>
            <h3 className="text-xl md:text-2xl font-bold font-display">Oto Alım Satım</h3>
          </div>
          <p className="text-slate-300 mb-6 text-base md:text-lg relative">Şeffaf, güvenilir ve değerinde araç alım-satım işlemleri.</p>
          <ul className="space-y-3 mb-6 text-sm md:text-base relative">
            <li className="flex items-center gap-3 text-slate-300"><i className="fas fa-star text-sky-400"></i> Güncel araç stoğu</li>
            <li className="flex items-center gap-3 text-slate-300"><i className="fas fa-star text-sky-400"></i> Hızlı devir ve ödeme</li>
            <li className="flex items-center gap-3 text-slate-300"><i className="fas fa-star text-sky-400"></i> Ekspertizli araçlar</li>
          </ul>
          <a href="https://guzelotomotivv.sahibinden.com" target="_blank" rel="noopener noreferrer" className="block text-center bg-amber-500 text-white font-bold py-4 rounded-xl hover:bg-amber-600 hover:-translate-y-0.5 transition-all relative mb-3">
            <i className="fas fa-external-link-alt mr-2"></i> Sahibinden İlanlarımız
          </a>
          <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} className="block text-center bg-emerald-500 text-white font-bold py-4 rounded-xl hover:bg-emerald-600 hover:-translate-y-0.5 transition-all relative">WhatsApp Bilgi</a>
       </div>
    </div>
  </div>
);

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  if (selectedPost) {
    return (
      <div className="pt-24 md:pt-32 pb-20 md:pb-28 container mx-auto px-4 animate-fade-in max-w-4xl">
        <button onClick={() => setSelectedPost(null)} className="flex items-center gap-2 text-sky-600 font-semibold mb-8 hover:text-sky-700 transition-colors">
          <i className="fas fa-arrow-left"></i> Blog listesine dön
        </button>
        <article className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border border-slate-100">
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 bg-sky-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold uppercase">{selectedPost.category}</div>
          </div>
          <div className="p-8 md:p-12">
            <div className="text-slate-400 text-sm font-semibold mb-3 uppercase tracking-wider">{selectedPost.date} · {selectedPost.author}</div>
            <h1 className="text-2xl md:text-4xl font-black mb-6 text-slate-900 font-display leading-tight">{selectedPost.title}</h1>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">{selectedPost.excerpt}</p>
            <div className="text-slate-600 text-base md:text-lg leading-relaxed space-y-4">
              {selectedPost.content.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="pt-24 md:pt-32 pb-20 md:pb-28 container mx-auto px-4 animate-fade-in">
      <div className="text-center mb-12 md:mb-16">
        <span className="text-sky-600 font-bold uppercase tracking-wider text-xs mb-4 block">Rehber</span>
        <h2 className="text-3xl md:text-5xl font-black mb-4 font-display text-slate-900">Blog & Haberler</h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-base">Teknik tavsiyeler ve bakım ipuçları.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.id}
            onClick={() => setSelectedPost(post)}
            className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col h-full group cursor-pointer"
          >
            <div className="relative h-52 md:h-60 overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 left-4 bg-sky-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold uppercase">{post.category}</div>
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <div className="text-slate-400 text-xs font-semibold mb-3 uppercase tracking-wider">{post.date}</div>
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900 leading-tight font-display group-hover:text-sky-600 transition-colors">{post.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">{post.excerpt}</p>
              <div className="mt-auto">
                <span className="text-sky-600 font-bold text-sm flex items-center gap-2">
                  DEVAMINI OKU <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

const ContactPage = () => (
  <div className="pt-24 md:pt-32 pb-20 md:pb-28 container mx-auto px-4 animate-fade-in">
    <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
      <div>
        <span className="text-sky-600 font-bold uppercase tracking-wider text-xs mb-4 block">Bize Ulaşın</span>
        <h2 className="text-3xl md:text-5xl font-black mb-10 font-display text-slate-900">İletişim & Konum</h2>
        <div className="space-y-6 md:space-y-8">
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center flex-shrink-0"><i className="fas fa-map-marker-alt text-lg"></i></div>
            <div>
              <h4 className="font-bold text-base md:text-lg text-slate-800">Adresimiz</h4>
              <p className="text-slate-500 text-sm md:text-base">{SITE_CONFIG.address}</p>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0"><i className="fas fa-phone text-lg"></i></div>
            <div>
              <h4 className="font-bold text-base md:text-lg text-slate-800">Telefon & WhatsApp</h4>
              <p className="text-slate-500 font-bold text-xl md:text-2xl">{SITE_CONFIG.phone}</p>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-100 text-slate-600 rounded-2xl flex items-center justify-center flex-shrink-0"><i className="fas fa-clock text-lg"></i></div>
            <div>
              <h4 className="font-bold text-base md:text-lg text-slate-800">Mesai Saatleri</h4>
              <p className="text-slate-500 text-sm md:text-base">{SITE_CONFIG.workingHours}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 p-6 md:p-8 bg-white rounded-2xl md:rounded-3xl border border-slate-200 shadow-xl">
           <h4 className="font-bold text-lg md:text-xl mb-6 text-slate-900">Hızlı İletişim</h4>
           <div className="space-y-4">
              <input type="text" placeholder="Ad Soyad" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all" />
              <input type="tel" placeholder="Telefon" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all" />
              <textarea placeholder="Sorunuz..." rows={4} className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all resize-none"></textarea>
              <button className="w-full bg-sky-500 text-white font-bold py-4 rounded-xl hover:bg-sky-600 transition-colors">GÖNDER</button>
           </div>
        </div>
      </div>
      <div className="h-[400px] md:h-[600px] bg-slate-100 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 md:p-12 bg-gradient-to-br from-sky-50 to-slate-50">
           <div className="w-20 h-20 md:w-24 md:h-24 bg-sky-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-sky-500/30">
             <i className="fas fa-map-marked-alt text-3xl md:text-4xl"></i>
           </div>
           <p className="text-2xl md:text-3xl font-black text-slate-900 mb-2 font-display">Maslak&apos;tayız</p>
           <p className="font-medium text-slate-600 mb-8 text-base max-w-sm">Atatürk Oto Sanayi Sitesi&apos;ndeki servisimize bekliyoruz.</p>
           <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE_CONFIG.address)}`} target="_blank" rel="noopener noreferrer" className="bg-sky-500 text-white px-10 py-4 rounded-xl font-bold shadow-xl shadow-sky-500/30 flex items-center gap-3 hover:bg-sky-600 hover:-translate-y-0.5 transition-all">
             <i className="fas fa-directions"></i> YOL TARİFİ AL
           </a>
        </div>
      </div>
    </div>
  </div>
);

export default App;
