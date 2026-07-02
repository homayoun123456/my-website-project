'use client';
import { useState } from 'react';

const services = [
  { icon: '🫘', title: 'سنگ شکن کلیه', desc: 'درمان سنگ‌های کلیه با پیشرفته‌ترین دستگاه‌های سنگ شکن بدون جراحی و با کمترین درد.' },
  { icon: '🔗', title: 'سنگ شکن حالب', desc: 'شکستن سنگ‌های حالب با روش‌های نوین و دقیق جهت رفع انسداد مجاری ادراری.' },
  { icon: '💧', title: 'سنگ شکن مثانه', desc: 'درمان سنگ‌های مثانه با تکنولوژی روز و تجربه بالینی گسترده دکتر فرهادی.' },
  { icon: '🩺', title: 'ویزیت تخصصی', desc: 'مشاوره و ویزیت تخصصی بیماران سنگ کلیه، تشخیص دقیق و ارائه بهترین درمان.' },
  { icon: '📋', title: 'مقالات علمی', desc: 'دسترسی به مقالات و راهنماهای علمی در زمینه سنگ کلیه و روش‌های پیشگیری.' },
  { icon: '📞', title: 'پشتیبانی ۲۴ ساعته', desc: 'پاسخگویی به سوالات بیماران در طول شبانه‌روز از طریق تلفن و پیام.' }
];

const faqs = [
  { q: 'سنگ شکنی چیست و چگونه انجام می‌شود؟', a: 'سنگ شکنی یا لیتوتریپسی روشی غیر تهاجمی است که در آن امواج شوک از خارج بدن به سنگ‌های کلیه، حالب یا مثانه هدایت شده و آن‌ها را خرد می‌کند. قطعات کوچک از طریق ادرار دفع می‌شوند.' },
  { q: 'آیا سنگ شکنی دردناک است؟', a: 'در اکثر موارد سنگ شکنی با بی‌حسی موضعی یا بیهوشی سبک انجام می‌شود و بیمار درد قابل توجهی احساس نمی‌کند. پس از عمل نیز ناراحتی خفیفی ممکن است وجود داشته باشد.' },
  { q: 'چه اندازه سنگی قابل درمان با سنگ شکن است؟', a: 'معمولاً سنگ‌های تا ۲ سانتیمتر با سنگ شکن قابل درمان هستند. دکتر فرهادی پس از بررسی تصویربرداری، بهترین روش درمانی را توصیه می‌کنند.' },
  { q: 'چند جلسه سنگ شکنی لازم است؟', a: 'بسته به اندازه، تعداد و موقعیت سنگ، ۱ تا ۳ جلسه سنگ شکنی ممکن است لازم باشد. هر جلسه معمولاً ۳۰ تا ۶۰ دقیقه طول می‌کشد.' },
  { q: 'پس از سنگ شکنی چه مراقبت‌هایی لازم است؟', a: 'نوشیدن آب فراوان، استراحت کافی، مصرف داروهای تجویز شده و پیگیری با پزشک از مهم‌ترین اقدامات پس از سنگ شکنی هستند.' }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: '', phone: '', date: '', type: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', phone: '', date: '', type: '', message: '' });
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* NAVBAR */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏥</span>
            <div>
              <p className="font-bold text-blue-600 text-sm leading-tight">دکتر اصغر فرهادی</p>
              <p className="text-xs text-teal-600">متخصص سنگ شکنی</p>
            </div>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            {['خانه','خدمات','درباره دکتر','رزرو نوبت','سوالات'].map((item,i) => (
              <a key={i} href={`#${['home','services','about','appointment','faq'][i]}`} className="text-gray-700 hover:text-blue-600 transition-colors">{item}</a>
            ))}
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-700 text-2xl">☰</button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t px-4 pb-4 flex flex-col gap-3 text-sm">
            {['خانه','خدمات','درباره دکتر','رزرو نوبت','سوالات'].map((item,i) => (
              <a key={i} href={`#${['home','services','about','appointment','faq'][i]}`} onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-blue-600">{item}</a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative bg-gradient-to-bl from-blue-700 via-blue-500 to-teal-500 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-300 rounded-full"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-right">
            <span className="inline-block bg-white/20 rounded-full px-4 py-1 text-sm mb-4">🏆 بیش از ۲۰ سال تجربه تخصصی</span>
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4">
              سنگ شکن<br />
              <span className="text-yellow-300">دکتر اصغر فرهادی</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              رزرو نوبت سنگ شکنی و ویزیت تخصصی بیماران سنگ کلیه، حالب و مثانه با پیشرفته‌ترین تجهیزات روز
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#appointment" className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-3 rounded-xl shadow-lg transition-all transform hover:scale-105">
                📅 رزرو نوبت
              </a>
              <a href="#services" className="bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-3 rounded-xl border border-white/40 transition-all">
                خدمات ما
              </a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-white/20 rounded-full flex items-center justify-center border-4 border-white/40 shadow-2xl">
              <span className="text-8xl md:text-9xl">👨‍⚕️</span>
            </div>
          </div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 pb-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[['۵۰۰۰+','بیمار درمان شده'],['۲۰+','سال تجربه'],['۳','مرکز تخصصی'],['۹۸٪','رضایت بیماران']].map(([n,l],i) => (
            <div key={i} className="bg-white/15 backdrop-blur rounded-xl p-4 text-center border border-white/20">
              <p className="text-2xl md:text-3xl font-black text-yellow-300">{n}</p>
              <p className="text-xs md:text-sm text-blue-100 mt-1">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-teal-600 font-semibold text-sm">خدمات تخصصی ما</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mt-2">درمان‌های تخصصی سنگ</h2>
            <div className="w-16 h-1 bg-gradient-to-l from-blue-500 to-teal-500 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default">
                <div className="w-14 h-14 bg-gradient-to-bl from-blue-100 to-teal-100 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT DOCTOR */}
      <section id="about" className="py-20 bg-gradient-to-bl from-blue-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-56 h-56 md:w-72 md:h-72 bg-gradient-to-bl from-blue-400 to-teal-400 rounded-3xl flex items-center justify-center shadow-2xl">
                  <span className="text-8xl">👨‍⚕️</span>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-yellow-400 rounded-2xl px-4 py-2 shadow-lg">
                  <p className="font-black text-gray-800 text-sm">۲۰+ سال تجربه</p>
                </div>
              </div>
            </div>
            <div className="flex-1 text-right">
              <span className="text-teal-600 font-semibold text-sm">درباره دکتر</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-800 mt-2 mb-6">دکتر اصغر فرهادی</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                دکتر اصغر فرهادی متخصص برجسته در زمینه سنگ شکنی و درمان بیماری‌های کلیوی با بیش از ۲۰ سال تجربه بالینی، یکی از پیشگامان درمان غیر تهاجمی سنگ‌های دستگاه ادراری در کشور هستند.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                ایشان با استفاده از پیشرفته‌ترین دستگاه‌های سنگ شکن و اعمال جدیدترین پروتکل‌های درمانی، هزاران بیمار را در طول دوران خدمت خود درمان کرده‌اند. دکتر فرهادی همچنین مقالات علمی متعددی در مجلات معتبر پزشکی منتشر کرده‌اند.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[['🎓','فوق تخصص اورولوژی'],['🏥','عضو هیئت علمی دانشگاه'],['📚','مولف مقالات علمی'],['🏆','جایزه پزشک برتر']].map(([icon, text], i) => (
                  <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm">
                    <span className="text-xl">{icon}</span>
                    <span className="text-sm font-medium text-gray-700">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPOINTMENT FORM */}
      <section id="appointment" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm">رزرو آنلاین</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mt-2">رزرو نوبت</h2>
            <div className="w-16 h-1 bg-gradient-to-l from-blue-500 to-teal-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 mt-4">فرم زیر را پر کنید تا در اسرع وقت با شما تماس بگیریم</p>
          </div>
          {submitted && (
            <div className="bg-teal-50 border border-teal-300 text-teal-700 rounded-xl p-4 mb-6 text-center font-semibold">
              ✅ درخواست شما با موفقیت ثبت شد. به زودی با شما تماس خواهیم گرفت.
            </div>
          )}
          <form onSubmit={handleSubmit} className="bg-white border border-gray-100 rounded-3xl shadow-xl p-8 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">نام و نام خانوادگی <span className="text-red-500">*</span></label>
                <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="نام خود را وارد کنید" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition text-right" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">شماره تماس <span className="text-red-500">*</span></label>
                <input required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="۰۹۱۲۳۴۵۶۷۸۹" type="tel" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition text-right" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">تاریخ مورد نظر</label>
                <input value={form.date} onChange={e => setForm({...form, date: e.target.value})} type="date" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">نوع خدمت <span className="text-red-500">*</span></label>
                <select required value={form.type} onChange={e => setForm({...form, type: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition text-right bg-white">
                  <option value="">انتخاب کنید</option>
                  <option value="kidney">سنگ شکن کلیه</option>
                  <option value="ureter">سنگ شکن حالب</option>
                  <option value="bladder">سنگ شکن مثانه</option>
                  <option value="visit">ویزیت تخصصی</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">توضیحات</label>
              <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={4} placeholder="شرح مختصری از وضعیت بیماری خود بنویسید..." className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition text-right resize-none"></textarea>
            </div>
            <button type="submit" className="w-full bg-gradient-to-l from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:scale-[1.02] text-base">
              📅 ثبت درخواست نوبت
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-gradient-to-bl from-blue-50 to-teal-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-teal-600 font-semibold text-sm">راهنما</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mt-2">سوالات متداول</h2>
            <div className="w-16 h-1 bg-gradient-to-l from-blue-500 to-teal-500 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-right font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                  <span className="flex-1">{faq.q}</span>
                  <span className={`mr-4 text-blue-500 text-xl transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}>⌄</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div className="text-right">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🏥</span>
                <div>
                  <p className="font-bold text-white">دکتر اصغر فرهادی</p>
                  <p className="text-xs text-teal-400">متخصص سنگ شکنی</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                ارائه خدمات تخصصی سنگ شکنی و درمان بیماری‌های دستگاه ادراری با بالاترین استانداردهای پزشکی.
              </p>
            </div>
            <div className="text-right">
              <h4 className="font-bold text-white mb-4">خدمات</h4>
              <ul className="space-y-2 text-sm">
                {['سنگ شکن کلیه','سنگ شکن حالب','سنگ شکن مثانه','ویزیت تخصصی','مقالات علمی'].map((item,i) => (
                  <li key={i}><a href="#services" className="hover:text-teal-400 transition-colors">← {item}</a></li>
                ))}
              </ul>
            </div>
            <div className="text-right">
              <h4 className="font-bold text-white mb-4">تماس با ما</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2"><span>📞</span><span>۰۲۱-۱۲۳۴۵۶۷۸</span></li>
                <li className="flex items-center gap-2"><span>📱</span><span>۰۹۱۲-۱۲۳-۴۵۶۷</span></li>
                <li className="flex items-center gap-2"><span>📍</span><span>تهران، خیابان ولیعصر، پلاک ۱۲۳</span></li>
                <li className="flex items-center gap-2"><span>🕐</span><span>شنبه تا چهارشنبه: ۸ تا ۱۶</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">© ۱۴۰۳ تمامی حقوق محفوظ است - سنگ شکن دکتر اصغر فرهادی</p>
            <div className="flex gap-4">
              <a href="#home" className="text-xs text-gray-500 hover:text-teal-400 transition-colors">خانه</a>
              <a href="#services" className="text-xs text-gray-500 hover:text-teal-400 transition-colors">خدمات</a>
              <a href="#appointment" className="text-xs text-gray-500 hover:text-teal-400 transition-colors">رزرو نوبت</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}