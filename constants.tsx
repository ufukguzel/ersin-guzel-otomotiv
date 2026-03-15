
import { Service, BlogPost, SiteConfig, Testimonial } from './types';

export const SITE_CONFIG: SiteConfig = {
  brandName: "Ersin Güzel Otomotiv",
  slogans: [
    "Güvenli Sürüş, Profesyonel Bakım.",
    "Oto Alım Satım ve Elektrikte Güvenin Adresi.",
    "Kalite ve Güvenin Otomotivdeki Tek Adresi."
  ],
  phone: "0532 650 01 73",
  whatsapp: "905326500173",
  email: "iletisim@ersinguzelotomotiv.com",
  address: "Atatürk Oto Sanayi Sitesi İkinci Kısım 26. Sokak 995 Maslak",
  workingHours: "Pzt - Cmt: 08:30 - 19:00",
  socials: {
    instagram: "https://instagram.com/ersinguzelotomotiv",
    facebook: "https://facebook.com/ersinguzelotomotiv"
  }
};

export const SERVICES: Service[] = [
  {
    id: "1",
    slug: "yedek-parca",
    title: "Yedek Parça Satışı",
    shortDescription: "Akü, ampül, silecek, korna ve geniş yedek parça stoğumuzla hizmetinizdeyiz.",
    longDescription: "Geniş raf sistemimizde binlerce çeşit yedek parça bulunduruyoruz. Yiğit Akü, Varta, Bosch gibi dünya markalarının bayiliğini yapıyoruz.",
    icon: "fa-box-open",
    benefits: ["Zengin stok", "Orijinal markalar", "Hızlı montaj"],
    process: ["Parça tespiti", "Stok kontrol", "Montaj"],
    averageDuration: "Anında",
    faqs: []
  },
  {
    id: "2",
    slug: "oto-elektrik",
    title: "Oto Elektrik & Elektronik",
    shortDescription: "Aracınızın tüm elektrik tesisatı, aydınlatma ve elektronik arıza çözümleri.",
    longDescription: "Uzman elektrik ekibimizle; tesisat onarımı, ampül değişimi, akü ölçümü ve şarj işlemleri yapıyoruz.",
    icon: "fa-bolt",
    benefits: ["Hassas ölçüm", "Garantili işçilik"],
    process: ["Arıza tespiti", "Onarım"],
    averageDuration: "1-4 Saat",
    faqs: []
  },
  {
    id: "3",
    slug: "oto-alim-satim",
    title: "Oto Alım Satım",
    shortDescription: "İkinci el araç alım satımında şeffaf ve güvenilir aracılık hizmeti.",
    longDescription: "Ekspertizi yapılmış, bakımları tam ikinci el araçların alım ve satım süreçlerini yönetiyoruz.",
    icon: "fa-handshake",
    benefits: ["Şeffaf süreç", "Değerinde alım"],
    process: ["İnceleme", "Fiyatlandırma", "Noter"],
    averageDuration: "Aynı Gün",
    faqs: []
  },
  {
    id: "4",
    slug: "periyodik-bakim",
    title: "Periyodik Bakım",
    shortDescription: "Yağ değişimi ve filtre bakımlarıyla aracınızın performansını koruyun.",
    longDescription: "Motor yağı ve filtre değişimlerini en kaliteli sarf malzemeleriyle yapıyoruz.",
    icon: "fa-oil-can",
    benefits: ["Motor ömrü", "Yakıt tasarrufu"],
    process: ["Kontrol", "Değişim"],
    averageDuration: "1 Saat",
    faqs: []
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Ahmet Yılmaz",
    vehicle: "Volkswagen Passat",
    comment: "Ersin Bey gerçekten işinin ehli. Akü değişimi ve elektrik tesisatı için gitmiştim, yarım saatte her şeyi halletti. Fiyatlar da gayet makul. Kesinlikle tavsiye ederim.",
    rating: 5
  },
  {
    id: "t2",
    name: "Murat Can",
    vehicle: "Ford Focus",
    comment: "İkinci el araç alım satımında çok yardımcı oldular. Ekspertiz konusunda çok şeffaflar, gözünüz kapalı güvenebilirsiniz. İstanbul'da nadir bulunan dürüst esnaflardan.",
    rating: 5
  },
  {
    id: "t3",
    name: "Selin Demir",
    vehicle: "Renault Clio",
    comment: "Silecek ve ampül değişimi için uğradım. Stoklarında her şey var, beklemeden işimi halledip çıktım. Güleryüzlü hizmet için teşekkürler.",
    rating: 5
  },
  {
    id: "t4",
    name: "Caner Özkan",
    vehicle: "BMW 3.20i",
    comment: "Aracımın elektronik arızasını servisin bile çözemediği bir noktada Ersin Bey kısa sürede tespit edip onardı. Teknik bilgisi gerçekten üst düzey.",
    rating: 5
  },
  {
    id: "t5",
    name: "Elif Aksoy",
    vehicle: "Hyundai i20",
    comment: "Periyodik bakım için geldim. Kullanılan malzemeler kaliteli ve işçilik çok temiz. Bekleme salonu konforlu, her şey profesyonelce düşünülmüş.",
    rating: 5
  },
  {
    id: "t6",
    name: "Hakan Yıldız",
    vehicle: "Mercedes C180",
    comment: "Akü takviyesi ve yeni akü alımı için iletişime geçtim. Çok hızlı aksiyon aldılar. Maslak bölgesinde güvenilir bir servis arayanlara öneririm.",
    rating: 5
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b1",
    slug: "aku-bakimi-ve-degisimi",
    title: "Akü Değişimi Yaparken Nelere Dikkat Edilmelidir?",
    excerpt: "Aracınızın kalbi olan akünün ömrünü nasıl uzatabilirsiniz? Ersin Güzel Otomotiv olarak tavsiyelerimiz...",
    content: "Akünüzün ömrü ortalama 3-5 yıldır. Ancak kullanım koşulları, kısa mesafe sürüşleri ve aşırı sıcak ya da soğuk havalar bu süreyi önemli ölçüde kısaltabilir. Ersin Güzel Otomotiv olarak, aracınızın aküsünü en az yılda bir kez kontrol ettirmenizi öneriyoruz.\n\nMarş basmada zayıflık, farlarda soluklaşma, ışıkların titremesi veya klima performansında düşüş gibi belirtiler, akü değişim zamanının yaklaştığını gösterebilir. Bu işaretleri görmezden gelmek, yolda kalmanıza veya marş motorunun aşırı zorlanmasına neden olabilir.\n\nDoğru kapasitede (Ah) ve taze üretim akü kullanımı güvenli sürüş için kritiktir. Kullanılan veya uzun süre depoda beklemiş aküler hem kısa ömürlü olur hem de soğuk kış günlerinde sizi yarı yolda bırakabilir. Akü değişiminde mutlaka garantili ve orijinal ürün tercih edin.",
    author: "Ersin Güzel",
    date: "15 Mayıs 2024",
    category: "Teknik Bilgiler",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "b2",
    slug: "periyodik-bakim-ne-zaman-yapilmali",
    title: "Periyodik Bakım Ne Zaman Yapılmalı?",
    excerpt: "Motor yağı, filtre değişimi ve bakım aralıkları hakkında bilmeniz gerekenler. Aracınızın ömrünü uzatın.",
    content: "Üreticiler genellikle 10.000 km veya 1 yılda bir periyodik bakım yapılmasını önerir. Bazı modern araçlarda bu süre 15.000–20.000 km'ye çıkabiliyor. Önemli olan, aracınızın bakım kitapçığındaki kilometre ve zaman aralıklarına uymaktır.\n\nMotor yağı ve yağ filtresi değişimi periyodik bakımın temelini oluşturur. Hava filtresi ve polen filtresi de düzenli aralıklarla kontrol edilip gerektiğinde değiştirilmelidir. Fren sıvısı genelde 2 yılda bir, antifriz ise 3–5 yılda bir yenilenir. Dişli yağı ve şanzıman yağı da bakım planında yer almalıdır.\n\nDüzenli periyodik bakım, motor ömrünü uzatır, yakıt tüketimini azaltır ve sürüş güvenliğini artırır. Bakımları atlamak, ileride çok daha yüksek onarım maliyetlerine yol açabilir.",
    author: "Ersin Güzel",
    date: "22 Mayıs 2024",
    category: "Bakım Rehberi",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "b3",
    slug: "ikinci-el-arac-alirken-ekspertiz",
    title: "İkinci El Araç Alırken Ekspertiz Neden Önemli?",
    excerpt: "Alım öncesi yapılan ekspertiz, sizi gizli hasarlardan ve maddi kayıplardan korur. Nelere dikkat etmelisiniz?",
    content: "Ekspertiz raporu, aracın geçmiş hasarları, kilometre gerçekliği, motor ve şanzıman durumu hakkında detaylı bilgi sunar. Özellikle boyalı parça, kaynak izi, çerçeve ve gövde hasarı tespiti çok kritiktir. Hasarlı ve tamir edilmiş bir aracı bilmeden almak, hem güvenlik hem de maliyet açısından risk taşır.\n\nKendi bünyemizde satılan araçlarda tüm bu kontrolleri şeffaf bir şekilde paylaşıyoruz. Alım öncesi bağımsız bir ekspertiz yaptırmak, sizi beklenmedik masraflardan korur ve güvenle alışveriş yapmanızı sağlar.\n\nEkspertizde dikkat edilmesi gereken başlıca noktalar: Kaput, bagaj ve kapı contalarındaki boya izleri, kasanın geometrik hizalama durumu, motor ve aktarma organlarındaki sızıntılar ve elektronik sistemlerin çalışma durumudur.",
    author: "Ersin Güzel",
    date: "5 Haziran 2024",
    category: "Alım Satım",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "b4",
    slug: "oto-elektrik-arisalari-neden-olur",
    title: "Oto Elektrik Arızaları Neden Olur ve Nasıl Önlenir?",
    excerpt: "Far sönmesi, akü bitmesi, alternatör arızaları... Oto elektrik sorunlarının nedenleri ve çözüm yolları.",
    content: "Oto elektrik arızaları genellikle eskiyen kablolar, gevşek bağlantılar veya su/yarıntı girişi nedeniyle ortaya çıkar. Far sönmesi, sinyal lambalarının çalışmaması, klima kompresörünün devreye girmemesi gibi belirtiler elektrik sisteminde bir sorun olduğunu gösterir.\n\nAlternatör arızası akünün şarj olmamasına ve sık sık marş basamamaya yol açar. Marş motoru sorunları ise akü iyi olsa bile aracın çalışmamasına neden olabilir. Elektrik arızalarını ertelemek, yangın riskini de artırabilir.\n\nPeriyodik kontrollerde elektrik tesisatının kontrol edilmesi, bağlantı noktalarının temiz tutulması ve doğru amperajda sigorta kullanılması önemlidir. Şüpheli bir durumda Ersin Güzel Otomotiv ekibimize danışabilirsiniz.",
    author: "Ersin Güzel",
    date: "18 Haziran 2024",
    category: "Teknik Bilgiler",
    image: "/oto-elektrik-blog.png"
  },
  {
    id: "b5",
    slug: "yedek-parca-secerken-dikkat-edilecekler",
    title: "Yedek Parça Seçerken Nelere Dikkat Edilmelidir?",
    excerpt: "Orijinal, yan sanayi, taklit parça... Doğru yedek parça seçimi aracınızın ömrünü ve güvenliğini etkiler.",
    content: "Yedek parçalarda orijinal (OEM), yan sanayi ve taklit olmak üzere üç ana kategori vardır. Orijinal parçalar aracı üreten marka tarafından veya lisanslı tedarikçilerce üretilir; performans ve dayanıklılık açısından en güvenilir seçenektir.\n\nYan sanayi parçalar ise kaliteli üreticilerce üretilir, genelde daha uygun fiyatlıdır. Fren balata, filtre veya silecek gibi parçalarda kaliteli yan sanayi kullanımı yaygındır. Ancak her parça için uygun değildir; özellikle güvenlikle ilgili parçalarda orijinal tercih etmek önemlidir.\n\nTaklit veya sahte parçalardan kesinlikle kaçının. Ucuz fiyatları cazip gelse de kısa ömürlüdür ve güvenlik riski taşır. Ersin Güzel Otomotiv'den, fatura ve garanti belgesiyle alışveriş yapabilirsiniz.",
    author: "Ersin Güzel",
    date: "2 Temmuz 2024",
    category: "Yedek Parça",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "b6",
    slug: "kis-aylarinda-arac-bakimi",
    title: "Kış Aylarında Araç Bakımında Dikkat Edilecekler",
    excerpt: "Antifriz, lastik, akü ve cam sıvısı... Kışa hazırlık için yapılması gereken bakım işlemleri.",
    content: "Kış öncesi aracınızı hazırlamak hem güvenliğiniz hem de aracın ömrü için kritiktir. Antifriz seviyesi ve donma noktası mutlaka kontrol edilmelidir. Seyreltilmiş veya bayat antifriz soğukta donabilir ve motorda ciddi hasarlara yol açabilir.\n\nKış lastiği kullanımı, özellikle 7°C altındaki havalarda zorunludur. Diş derinliği yeterli olmayan lastikler kayma riskini artırır. Cam sıvısı da donmayan tip ile doldurulmalı, silecek lastikleri yıpranmışsa değiştirilmelidir.\n\nAkü soğuk havalarda daha çabuk biter. Kış öncesi akü testi yaptırmak, yolda kalmanızı önler. Ayrıca bagajınızda zincir, çekme halatı ve acil durum kiti bulundurmanızı öneririz.",
    author: "Ersin Güzel",
    date: "15 Kasım 2024",
    category: "Bakım Rehberi",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop"
  }
];
