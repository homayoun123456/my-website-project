'use client';
import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', date: '', service: '', message: '' });
  const [formSent, setFormSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: 'سنگ شکن کلیه چیست؟', a: 'سنگ شکن کلیه (ESWL) روشی غیر تهاجمی است که با استفاده از امواج صوتی، سنگ‌های کلیه را خرد می‌کند تا از طریق دستگاه ادراری دفع شوند.' },
    { q: 'آیا سنگ شکن دردناک است؟', a: 'در اکثر موارد سنگ شکن بدون بیهوشی کامل انجام می‌شود و بیمار فقط ناراحتی خفیفی احساس می‌کند. داروهای مسکن قبل از عمل تجویز می‌شود.' },
    { q: 'چه مدت طول می‌کشد؟', a: 'هر جلسه سنگ شکن معمولاً ۴۵ تا ۶۰ دقیقه طول می‌کشد و بیمار در همان روز مرخص می‌شود.' },
    { q: 'بعد از سنگ شکن چه کارهایی باید انجام دهم؟', a: 'نوشیدن مقدار زیادی آب، استراحت کافی و پرهیز از فعالیت‌های سنگین توصیه می‌شود. پزشک دستورالعمل‌های دقیق را در اختیار شما قرار خواهد داد.' },
    { q: 'چه سنگ‌هایی با سنگ شکن قابل درمان هستند؟', a: 'سنگ‌های کلیه و حالب فوقانی با قطر ۵ تا ۲۰ میلی‌متر بهترین کاندید سنگ شکن هستند. نوع سنگ و موقعیت آن نیز مهم است.' },
  ];

  const services = [
    { icon: '🫘', title: 'سنگ شکن کلیه', desc: 'درمان سنگ‌های کلیه با پیشرفته‌ترین دستگاه‌های سنگ شکن برون‌اندامی (ESWL)' },
    { icon: '🔬', title: 'سنگ شکن حالب', desc: 'درمان سنگ‌های حالب با دقت و تکنولوژی روز دنیا' },
    { icon: '🩺', title: 'ویزیت تخصصی', desc: 'مشاوره و ویزیت تخصصی ارولوژی و تشخیص بیماری‌های کلیه و مجاری ادراری' },
    { icon: '📋', title: 'بررسی سونوگرافی', desc: 'تفسیر سونوگرافی و تصویربرداری کلیه و مجاری ادراری' },
    { icon: '💊', title: 'تجویز درمان دارویی', desc: 'برنامه درمانی دارویی برای پیشگیری از بازگشت سنگ کلیه' },
    { icon: '🏥', title: 'پیگیری درمان', desc: 'برنامه پیگیری منظم و جلسات کنترل پس از درمان سنگ شکن' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">ف</div>
            <div>
              <div className="font-bold text-blue-600 text-lg leading-tight">دکتر اصغر فرهادی</div>
              <div className="text-xs text-teal-600">متخصص ارولوژی | سنگ شکن</div>
            </div>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
            <a href="#services" className="hover:text-blue-500 transition-colors">خدمات</a>
            <a href="#about" className="hover:text-blue-500 transition-colors">درباره دکتر</a>
            <a href="#appointment" className="hover:text-blue-500 transition-colors">رزرو نوبت</a>
            <a href="#faq" className="hover:text-blue-500 transition-colors">سوالات متداول</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">تماس</a>
          </div>
          <a href="#appointment" className="hidden md:inline-block bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold px-5 py-2 rounded-full transition-colors">رزرو نوبت</a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-700 text-2xl">{menuOpen ? '✕' : '☰'}</button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
            {['#services:خدمات','#about:درباره دکتر','#appointment:رزرو نوبت','#faq:سوالات متداول','#contact:تماس'].map(item => {
              const [href, label] = item.split(':');
              return <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block py-2 text-gray-700 hover:text-blue-500 text-sm">{label}</a>;
            })}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-teal-500 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white"></div>
          <div className="absolute bottom-0 right-20 w-96 h-96 rounded-full bg-white"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-right">
            <div className="inline-block bg-white bg-opacity-20 rounded-full px-4 py-1 text-sm mb-6 font-medium">🏅 بیش از ۱۵ سال تجربه تخصصی</div>
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
              سنگ شکن کلیه<br />
              <span className="text-yellow-300">دکتر اصغر فرهادی</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              درمان سنگ‌های کلیه و حالب با پیشرفته‌ترین تکنولوژی سنگ شکن<br />
              بدون جراحی، بدون بستری، با بیشترین اثربخشی
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#appointment" className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-black px-8 py-4 rounded-full text-lg transition-all shadow-lg hover:shadow-xl">📅 رزرو نوبت آنلاین</a>
              <a href="tel:+98XXXXXXXXXX" className="bg-white bg-opacity-20 hover:bg-opacity-30 border border-white text-white font-bold px-8 py-4 rounded-full text-lg transition-all">📞 تماس مستقیم</a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 justify-center md:justify-start text-sm">
              <div className="flex items-center gap-2"><span className="text-yellow-300 text-xl">✓</span> بدون جراحی</div>
              <div className="flex items-center gap-2"><span className="text-yellow-300 text-xl">✓</span> سرپایی</div>
              <div className="flex items-center gap-2"><span className="text-yellow-300 text-xl">✓</span> بدون بیهوشی کامل</div>
              <div className="flex items-center gap-2"><span className="text-yellow-300 text-xl">✓</span> پوشش بیمه</div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-white bg-opacity-20 border-4 border-white border-opacity-40 flex items-center justify-center text-9xl shadow-2xl">
              🩺
            </div>
          </div>
        </div>
        {/* Stats */}
        <div className="relative bg-white bg-opacity-10 backdrop-blur-sm border-t border-white border-opacity-20">
          <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[{n:'۱۵+',l:'سال تجربه'},{n:'۵۰۰۰+',l:'بیمار موفق'},{n:'۹۵٪',l:'نرخ موفقیت'},{n:'۲۴/۷',l:'پشتیبانی'}].map(s=>(
              <div key={s.l}>
                <div className="text-2xl md:text-3xl font-black text-yellow-300">{s.n}</div>
                <div className="text-sm text-blue-100">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-3">خدمات ما</h2>
            <p className="text-gray-500 text-lg">جامع‌ترین خدمات تخصصی سنگ شکن و ارولوژی</p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Doctor */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0 flex flex-col items-center gap-4">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-8xl shadow-xl">
                👨‍⚕️
              </div>
              <div className="text-center">
                <div className="font-black text-xl text-gray-800">دکتر اصغر فرهادی</div>
                <div className="text-teal-600 font-medium">متخصص ارولوژی</div>
              </div>
            </div>
            <div className="flex-1">
              <div className="inline-block bg-blue-50 text-blue-600 rounded-full px-4 py-1 text-sm font-medium mb-4">درباره دکتر فرهادی</div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">متخصص برجسته<br /><span className="text-blue-500">سنگ شکن کلیه</span></h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                دکتر اصغر فرهادی با بیش از ۱۵ سال تجربه در حوزه ارولوژی و سنگ شکن کلیه، یکی از معتبرترین متخصصان در این زمینه می‌باشد. ایشان با استفاده از جدیدترین تکنولوژی‌های سنگ شکن برون‌اندامی، هزاران بیمار را با موفقیت درمان نموده‌اند.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  {icon:'🎓', title:'تحصیلات', desc:'دکترای تخصصی ارولوژی از دانشگاه علوم پزشکی تهران'},
                  {icon:'🏆', title:'عضویت‌ها', desc:'عضو انجمن ارولوژی ایران و اروپا'},
                  {icon:'📚', title:'مقالات علمی', desc:'بیش از ۳۰ مقاله علمی در مجلات معتبر بین‌المللی'},
                  {icon:'🔬', title:'تخصص ویژه', desc:'سنگ شکن ESWL، لیزر درمانی، و اندواورولوژی'},
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 bg-gray-50 rounded-xl p-4">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <div className="font-bold text-gray-800 text-sm">{item.title}</div>
                      <div className="text-gray-500 text-xs leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <a href="#appointment" className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-full transition-colors">رزرو نوبت</a>
                <a href="#contact" className="border border-blue-500 text-blue-500 hover:bg-blue-50 font-bold px-6 py-3 rounded-full transition-colors">تماس با ما</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 bg-gradient-to-br from-blue-500 to-teal-500 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-2">چرا دکتر فرهادی؟</h2>
            <p className="text-blue-100">دلایلی که بیماران ما را انتخاب می‌کنند</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {icon:'⚡',title:'تشخیص سریع',desc:'تشخیص دقیق و سریع با مدرن‌ترین تجهیزات'},
              {icon:'💙',title:'مراقبت کامل',desc:'همراهی بیمار از ابتدا تا انتهای درمان'},
              {icon:'🛡️',title:'ایمن و مطمئن',desc:'استانداردهای بین‌المللی در تمام مراحل'},
              {icon:'💰',title:'قیمت مناسب',desc:'پوشش بیمه‌های طرف قرارداد'},
            ].map((item,i)=>(
              <div key={i} className="bg-white bg-opacity-10 rounded-2xl p-6 text-center hover:bg-opacity-20 transition-all">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="font-bold text-lg mb-2">{item.title}</div>
                <div className="text-blue-100 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section id="appointment" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-3">رزرو نوبت آنلاین</h2>
            <p className="text-gray-500">فرم زیر را تکمیل کنید. کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت</p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mt-4 rounded-full"></div>
          </div>
          {formSent ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-black text-green-700 mb-2">درخواست شما ثبت شد!</h3>
              <p className="text-green-600">کارشناسان ما به زودی با شماره {form.phone} با شما تماس خواهند گرفت.</p>
              <button onClick={() => { setFormSent(false); setForm({ name: '', phone: '', date: '', service: '', message: '' }); }} className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full transition-colors">ثبت درخواست جدید</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">نام و نام خانوادگی *</label>
                  <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="مثال: علی رضایی" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">شماره تماس *</label>
                  <input type="tel" required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="۰۹۱۲۳۴۵۶۷۸۹" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">نوع خدمت</label>
                  <select value={form.service} onChange={e => setForm({...form, service: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all bg-white">
                    <option value="">انتخاب کنید</option>
                    <option value="kidney">سنگ شکن کلیه</option>
                    <option value="ureter">سنگ شکن حالب</option>
                    <option value="visit">ویزیت تخصصی</option>
                    <option value="followup">پیگیری درمان</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">تاریخ مورد نظر</label>
                  <input type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">توضیحات بیشتر</label>
                <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={4} placeholder="اگر سوال یا توضیح خاصی دارید اینجا بنویسید..." className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-black text-lg py-4 rounded-xl transition-all shadow-lg hover:shadow-xl">
                📅 ثبت درخواست نوبت
              </button>
              <p className="text-center text-xs text-gray-400">با ارسال این فرم با قوانین و شرایط سایت موافقت می‌کنید</p>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-3">سوالات متداول</h2>
            <p className="text-gray-500">پاسخ به رایج‌ترین سوالات بیماران</p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-200 transition-colors">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-right bg-white hover:bg-gray-50 transition-colors">
                  <span className="font-bold text-gray-800 text-sm md:text-base">{faq.q}</span>
                  <span className={`text-blue-500 text-xl font-bold transition-transform duration-300 flex-shrink-0 mr-4 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 bg-blue-50">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-800 mb-2">اطلاعات تماس</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {icon:'📍', title:'آدرس مطب', desc:'تهران، خیابان ولیعصر، پلاک ۱۲۳، طبقه دوم، واحد ۴'},
              {icon:'📞', title:'تلفن تماس', desc:'۰۲۱-۸۸۸۸-۱۲۳۴\n۰۹۱۲-۳۴۵-۶۷۸۹'},
              {icon:'🕐', title:'ساعات کاری', desc:'شنبه تا چهارشنبه: ۹ تا ۱۷\nپنجشنبه: ۹ تا ۱۳'},
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm whitespace-pre-line">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 border border-blue-100">
            <div>
              <div className="font-black text-lg text-gray-800">نیاز به مشاوره فوری دارید؟</div>
              <div className="text-gray-500 text-sm">کارشناسان ما آماده پاسخگویی هستند</div>
            </div>
            <a href="tel:+9802188881234" className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-3 rounded-full transition-colors whitespace-nowrap">📞 تماس فوری</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">ف</div>
                <div>
                  <div className="font-bold text-white">دکتر اصغر فرهادی</div>
                  <div className="text-xs text-teal-400">متخصص ارولوژی | سنگ شکن</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">ارائه بهترین خدمات سنگ شکن کلیه و حالب با بیشترین اثربخشی و کمترین درد</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gray-200">دسترسی سریع</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#services" className="hover:text-teal-400 transition-colors">خدمات ما</a></li>
                <li><a href="#about" className="hover:text-teal-400 transition-colors">درباره دکتر</a></li>
                <li><a href="#appointment" className="hover:text-teal-400 transition-colors">رزرو نوبت</a></li>
                <li><a href="#faq" className="hover:text-teal-400 transition-colors">سوالات متداول</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gray-200">خدمات تخصصی</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>سنگ شکن کلیه (ESWL)</li>
                <li>سنگ شکن حالب</li>
                <li>ویزیت تخصصی ارولوژی</li>
                <li>درمان دارویی سنگ کلیه</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">
            <div>© ۱۴۰۳ تمامی حقوق محفوظ است - دکتر اصغر فرهادی</div>
            <div className="flex gap-4">
              <span className="hover:text-gray-300 cursor-pointer">سنگ شکن کلیه</span>
              <span>|</span>
              <span className="hover:text-gray-300 cursor-pointer">سنگ شکن حالب</span>
              <span>|</span>
              <span className="hover:text-gray-300 cursor-pointer">دکتر فرهادی</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}