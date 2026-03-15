
import React, { useState } from 'react';
import { SITE_CONFIG, SERVICES, TESTIMONIALS } from '../constants';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Periyodik bakımda neler yapılıyor?",
      a: "Periyodik bakımda motor yağı ve yağ filtresi değişimi, hava ve polen filtresi kontrolleri/değişimi, fren sistemi kontrolü, ön takım ve süspansiyon muayenesi gibi 20'den fazla nokta kontrol edilir."
    },
    {
      q: "Akü değişiminde hangi markaları kullanıyorsunuz?",
      a: "Yiğit Akü ve Varta yetkili bayii olarak orijinal, garantili ve taze üretim akülerin satış ve montajını gerçekleştiriyoruz."
    },
    {
      q: "İkinci el araç alırken ekspertiz yapıyor musunuz?",
      a: "Kendi bünyemizdeki araçların tüm ekspertiz süreçlerini şeffaf bir şekilde paylaşıyoruz. Ayrıca alım-satım öncesi teknik kontrol desteği sağlıyoruz."
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section - Dükkan tam görünür, ince alt bar */}
      <section className="relative min-h-[85vh] md:h-[90vh] flex flex-col justify-end pt-24 pb-0">
        <div className="absolute inset-0 z-0 bg-slate-900 overflow-hidden">
          <img 
            src="/dukkan-arkaplan.png" 
            alt="Ersin Güzel Otomotiv Dükkan Görünümü" 
            className="w-full h-full object-cover object-center scale-[1.02] brightness-[0.5] saturate-110"
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full px-4 pb-6 md:pb-8">
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <p className="text-white/95 text-sm md:text-base font-medium">Oto Alım Satım · Elektrik · Yedek Parça</p>
            <a 
              href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
              className="bg-sky-500 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg hover:bg-sky-600 transition-all flex items-center gap-2"
            >
              <i className="fas fa-phone-alt"></i> {SITE_CONFIG.phone}
            </a>
            <a 
              href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
              className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold text-sm shadow-lg hover:bg-slate-50 transition-all flex items-center gap-2"
            >
              <i className="fab fa-whatsapp text-emerald-500"></i> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Araç Odaklı İçerik Bölümü */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="grid grid-cols-2 gap-4 md:gap-5 order-2 lg:order-1">
              <div className="space-y-4 md:space-y-5">
                <img src="/galeri-1.png" alt="Ersin Güzel Otomotiv Dükkan Ön Cephe" className="rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl transition-shadow object-cover w-full h-48 md:h-64" />
                <img src="/galeri-2.png" alt="Mağaza İçi Raflar ve Ürünler" className="rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl transition-shadow object-cover w-full h-36 md:h-48" />
              </div>
              <div className="pt-10 md:pt-16 space-y-4 md:space-y-5">
                <img src="/galeri-4.png" alt="Danışma Masası ve Ofis" className="rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl transition-shadow object-cover w-full h-36 md:h-48" />
                <img src="/galeri-5.png" alt="Akü ve Yedek Parça Stoku" className="rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl transition-shadow object-cover w-full h-48 md:h-64" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block text-sky-600 font-bold uppercase tracking-[0.15em] text-xs mb-4">Geniş Araç Portföyü & Uzman Hizmet</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight font-display">Her Model Araca <br className="hidden sm:block" />Profesyonel Dokunuş</h2>
              <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed">
                Ersin Güzel Otomotiv olarak, binek otomobillerden ticari araçlara kadar her marka ve modelin bakım, onarım ve alım-satım süreçlerini yönetiyoruz.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  "Her Marka ve Model Araç Bakımı",
                  "Ekspertiz Garantili Alım Satım",
                  "Araç Yazılım ve Elektrik Çözümleri",
                  "Orijinal Parça Garantili Onarım"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-check text-xs"></i>
                    </div>
                    <span className="font-semibold text-slate-800 text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => onNavigate('contact')} className="bg-slate-900 text-white w-full sm:w-auto px-10 py-4 rounded-xl font-bold hover:bg-slate-800 hover:-translate-y-0.5 transition-all shadow-xl text-center">
                Randevu & Bilgi Al
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(14,165,233,0.08)_0%,_transparent_50%)] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-14 md:mb-20">
            <span className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/30 px-4 py-2 rounded-full mb-6">
              <span className="text-sky-400 font-bold uppercase tracking-wider text-xs">Gerçek Müşteri Deneyimleri</span>
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-4 font-display">Müşterilerimiz Ne Dedi?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">Maslak bölgesindeki uzmanlığımız yüzlerce mutlu müşterimiz tarafından onaylanmıştır.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <div key={t.id} className="bg-slate-800/60 backdrop-blur-sm p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-700/50 flex flex-col h-full hover:border-sky-500/30 transition-colors group">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star text-sm"></i>
                    ))}
                  </div>
                </div>
                <div className="mb-6 flex-grow">
                  <p className="text-slate-200 leading-relaxed text-base md:text-lg">&ldquo;{t.comment}&rdquo;</p>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-slate-700/50">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-sky-500/20 text-sky-400 rounded-xl flex items-center justify-center font-black text-lg group-hover:bg-sky-500/30 transition-colors">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">{t.name}</h4>
                    <p className="text-slate-400 text-xs">{t.vehicle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 md:mt-20 flex justify-center">
            <div className="bg-slate-800/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl md:rounded-3xl max-w-3xl w-full flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-slate-700/50">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Müşteri" className="w-10 h-10 rounded-full border-2 border-slate-800 object-cover" />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-0.5 text-yellow-500 text-xs">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="text-slate-300 text-xs font-bold">4.9 / 5 Google Puanı</p>
                </div>
              </div>
              <a 
                href={`https://www.google.com/maps`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-slate-900 w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm text-center shadow-xl hover:bg-slate-50 hover:-translate-y-0.5 transition-all"
              >
                TÜM YORUMLAR
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 font-display text-slate-900">Sık Sorulan Sorular</h2>
            <p className="text-slate-600 text-base">Müşterilerimizin aklındaki en yaygın sorular.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-center p-5 md:p-6 text-left hover:bg-slate-50/50 transition-colors"
                >
                  <span className="font-bold text-slate-800 pr-4 text-left">{faq.q}</span>
                  <i className={`fas fa-chevron-down flex-shrink-0 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180 text-sky-600' : 'text-slate-400'}`}></i>
                </button>
                <div className={`transition-all duration-300 ease-out ${activeFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <p className="text-slate-600 leading-relaxed border-t border-slate-100 px-5 md:px-6 pb-5 md:pb-6 pt-3 text-sm md:text-base">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-sky-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.1)_0%,_transparent_60%)] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-2xl md:text-4xl font-black text-white mb-6 md:mb-8 font-display">Aracınız İçin Uzman Desteği</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`} className="bg-white text-sky-600 px-8 py-4 rounded-xl font-bold shadow-xl hover:bg-slate-50 hover:-translate-y-0.5 transition-all text-base">HEMEN ARA</a>
            <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} className="bg-white/10 backdrop-blur border border-white/30 text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:bg-white/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-base">
              <i className="fab fa-whatsapp text-xl"></i> WHATSAPP
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
