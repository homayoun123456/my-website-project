```tsx
"use client";
import React, { useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const faqs = [
    {
      q: "سنگ شکن کلیه چیست و چگونه انجام می‌شود؟",
      a: "سنگ شکن کلیه یا ESWL روشی غیرتهاجمی است که در آن امواج صوتی با انرژی بالا به سنگ‌های کلیه شلیک می‌شوند تا آن‌ها را به قطعات کوچک‌تری تبدیل کنند که به راحتی از مجاری ادراری خارج شوند.",
    },
    {
      q: "آیا سنگ شکن دردناک است؟",
      a: "سنگ شکن معمولاً بدون بیهوشی عمومی انجام می‌شود و ممکن است کمی ناراحتی ایجاد کند. در برخی موارد از داروهای آرام‌بخش یا بی‌حسی موضعی استفاده می‌شود.",
    },
    {
      q: "چه اندازه‌ای از سنگ کلیه را می‌توان با سنگ شکن درمان کرد؟",
      a: "معمولاً سنگ‌های با قطر کمتر از ۲ سانتیمتر بهترین کاندید برای سنگ شکن هستند. دکتر فرهادی پس از بررسی تصاویر تشخیصی بهترین روش درمانی را توصیه می‌کنند.",
    },
    {
      q: "چند جلسه سنگ شکن نیاز است؟",
      a: "تعداد جلسات بستگی به اندازه، تعداد و محل سنگ دارد. معمولاً یک تا سه جلسه کافی است، اما این موضوع توسط پزشک تعیین می‌شود.",
    },
    {
      q: "پس از سنگ شکن چه مراقبت‌هایی لازم است؟",
      a: "نوشیدن آب فراوان، استراحت کافی، اجتناب از فعالیت‌های سنگین و مراجعه به پزشک در صورت تب یا درد شدید از مهم‌ترین مراقبت‌های بعد از سنگ شکن است.",
    },
    {
      q: "چه افرادی نمی‌توانند سنگ شکن انجام دهند؟",
      a: "افراد باردار، بیماران با اختلالات انعقادی، کسانی که پیس‌میکر دارند و بیماران با عفونت فعال ادراری از جمله افرادی هستند که برای آن‌ها سنگ شکن توصیه نمی‌شود.",
    },
  ];

  const services = [
    {
      icon: "🫘",
      title: "سنگ شکن کلیه",
      desc: "درمان غیرتهاجمی سنگ‌های کلیه با استفاده از پیشرفته‌ترین تجهیزات سنگ شکن امواج صوتی (ESWL)",
    },
    {
      icon: "🔬",
      title: "سنگ شکن حالب",
      desc: "تخصصی‌ترین روش‌های درمانی برای سنگ‌های حالب با حداقل درد و سریع‌ترین زمان بهبودی",
    },
    {
      icon: "💊",
      title: "سنگ شکن مثانه",
      desc: "درمان موثر سنگ‌های مثانه با استفاده از تکنیک‌های نوین و تجهیزات پیشرفته پزشکی",
    },
    {
      icon: "🏥",
      title: "ویزیت تخصصی",
      desc: "مشاوره و معاینه تخصصی توسط دکتر فرهادی برای تشخیص دقیق و برنامه‌ریزی درمانی مناسب",
    },
    {
      icon: "📋",
      title: "پیگیری درمان",
      desc: "پیگیری مستمر وضعیت بیمار پس از انجام سنگ شکن و اطمینان از خروج کامل سنگ‌ها",
    },
    {
      icon: "🧪",
      title: "آزمایشات تشخیصی",
      desc: "انجام آزمایشات تخصصی ادراری و تصویربرداری برای تشخیص دقیق و برنامه درمانی اختصاصی",
    },
  ];

  return (
    <div dir="rtl" style={{ fontFamily: "Tahoma, Arial, sans-serif" }} className="bg-slate-50 text-slate-800">
      {/* Navbar */}
      <nav className="fixed top-0 right-0 left-0 z-50 bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
              ف
            </div>
            <div>
              <div className="font-bold text-slate-800 text-sm">دکتر اصغر فرهادی</div>
              <div className="text-xs text-blue-500">متخصص سنگ شکن</div>
            </div>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-blue-500 transition-colors">خدمات</a>
            <a href="#about" className="hover:text-blue-500 transition-colors">درباره دکتر</a>
            <a href="#appointment" className="hover:text-blue-500 transition-colors">رزرو نوبت</a>
            <a href="#faq" className="hover:text-blue-500 transition-colors">سوالات متداول</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">تماس</a>
          </div>
          <a
            href="#appointment"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
          >
            رزرو نوبت
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 min-h-screen bg-gradient-to-bl from-blue-600 via-blue-500 to-teal-500 flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-white"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-white"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full bg-white"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-white">
            <div className="inline-block bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              🏆 بیش از ۱۵ سال تجربه تخصصی
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              سنگ شکن تخصصی
              <span className="block text-teal-200">دکتر اصغر فرهادی</span>
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              درمان غیرتهاجمی سنگ‌های کلیه، حالب و مثانه با پیشرفته‌ترین تکنولوژی روز دنیا. سلامت شما اولویت ماست.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#appointment"
                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                رزرو نوبت آنلاین
              </a>
              <a
                href="#services"
                className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                خدمات ما
              </a>
            </div>
            <div className="flex gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold">+5000</div>
                <div className="text-blue-200 text-sm">بیمار درمان شده</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">+15</div>
                <div className="text-blue-200 text-sm">سال تجربه</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-blue-200 text-sm">رضایت بیماران</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-white bg-opacity-30 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-white flex items-center justify-center shadow-2xl">
                    <div className="text-center">
                      <div className="text-6xl mb-2">🏥</div>
                      <div className="text-blue-600 font-bold text-sm">سنگ شکن تخصصی</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-teal-400 text-white px-3 py-2 rounded-lg text-sm font-bold shadow-lg">
                ✓ بدون جراحی
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-bold shadow-lg">
                ✓ سریع و ایمن
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-50 text-blue-500 px-4 py-2 rounded-full text-sm font-medium mb-4">
              خدمات تخصصی
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              خدمات درمانی ما
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              با استفاده از پیشرفته‌ترین تجهیزات و تکنولوژی روز، بهترین خدمات درمانی را ارائه می‌دهیم
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{service.desc}</p>
                <a
                  href="#appointment"
                  className="inline-block mt-4 text-blue-500 font-medium text-sm hover:text-blue-700 transition-colors"
                >
                  رزرو نوبت ←
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Doctor Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-3xl p-1">
                <div className="bg-white rounded-3xl p-8">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-teal-400 mx-auto flex items-center justify-center text-white text-5xl font-bold mb-6">
                    ف
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-slate-800 mb-1">دکتر اصغر فرهادی</h3>
                    <p className="text-blue-500 font-medium mb-4">متخصص اورولوژی و سنگ شکن</p>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-blue-50 rounded-xl p-3 text-center">
                        <div className="text-2xl font-bold text-blue-600">+15</div>
                        <div className="text-xs text-slate-500">سال تجربه</div>
                      </div>
                      <div className="bg-teal-50 rounded-xl p-3 text-center">
                        <div className="text-2xl font-bold text-teal-600">+5000</div>
                        <div className="text-xs text-slate-500">بیمار</div>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-3 text-center">
                        <div className="text-2xl font-bold text-blue-600">98%</div>
                        <div className="text-xs text-slate-500">رضایت</div>
                      </div>
                      <div className="bg-teal-50 rounded-xl p-3 text-center">
                        <div className="text-2xl font-bold text-teal-600">+50</div>
                        <div className="text-xs text-slate-500">مقاله علمی</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="inline-block bg-blue-50 text-blue-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
                درباره دکتر فرهادی
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                تخصص و تجربه در خدمت سلامت شما
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                دکتر اصغر فرهادی با بیش از ۱۵ سال تجربه در حوزه اورولوژی و سنگ‌شکنی، یکی از برجسته‌ترین متخصصان این حوزه در کشور است. ایشان دوره‌های تخصصی خود را در بهترین مراکز پزشکی ایران و اروپا گذرانده‌اند.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                با استفاده از پیشرفته‌ترین تکنولوژی‌های موجود در دنیا و رویکرد انسانی در درمان بیماران، دکتر فرهادی موفق به درمان بیش از ۵۰۰۰ بیمار شده‌اند.
              </p>
              <div className="space-y-4">
                {[
                  "فوق تخصص اورولوژی از دانشگاه تهران",
                  "فلوشیپ سنگ‌شکنی از آلمان",
                  "عضو انجمن اورولوژی ایران",
                  "مدرس دانشگاه علوم پزشکی",
                  "نویسنده بیش از ۵۰ مقاله علمی",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment CTA Section */}
      <section id="appointment" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-3xl p-12">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="text-white">
                <div className="inline-block bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  📅 رزرو نوبت آنلاین
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  همین الان نوبت خود را رزرو کنید
                </h2>
                <p className="text-blue-100 leading-relaxed mb-8">
                  برای رزرو نوبت ویزیت یا سنگ شکن با دکتر فرهادی، فرم زیر را تکمیل کنید. کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: "📞", text: "تماس: ۰۲۱-۸۸۱۲۳۴۵۶" },
                    { icon: "📱", text: "واتساپ: ۰۹۱۲۳۴۵۶۷۸۹" },
                    { icon: "🕐", text: "ساعات کاری: شنبه تا چهارشنبه ۸-۱۶" },
                    { icon: "📍", text: "تهران، خیابان ولیعصر، کلینیک فرهادی" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-blue-100">
                      <span className="text-xl">{item.icon}</span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-6">فرم رزرو نوبت</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">نام و نام خانوادگی</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="نام خود را وارد کنید"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">شماره تماس</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">نوع خدمت</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                    >
                      <option value="">انتخاب کنید</option>
                      <option value="kidney">سنگ شکن کلیه</option>
                      <option value="ureter">سنگ شکن حالب</option>
                      <option value="bladder">سنگ شکن مثانه</option>
                      <option value="visit">ویزیت تخصصی</option>
                      <option value="consult">مشاوره</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">توضیحات (اختیاری)</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="شرح مختصری از وضعیت خود بنویسید..."
                      rows={3}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                    ></textarea>
                  </div>
                  <button
                    onClick={() => alert("درخواست شما با موفقیت ثبت شد. کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت.")}
                    className="w-full bg-blue-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl"
                  >
                    ثبت درخواست نوبت
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-50 text-blue-500 px-4 py-2 rounded-full text-sm font-medium mb-4">
              سوالات متداول
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              پاسخ به سوالات شما
            </h2>
            <p className="text-slate-500 text-lg">
              پاسخ سوالات رایج درباره سنگ شکن و خدمات درمانی
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-right hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-800 text-base">{faq.q}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4 transition-all duration-300 ${
                      openFaq === index ? "bg-blue-500 text-white rotate-45" : "bg-blue-50 text-blue-500"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <div className="border-t border-slate-100 pt-4">
                      <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-teal-50 text-teal-500 px-4 py-2 rounded-full text-sm font-medium mb-4">
              نظرات بیماران
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              تجربه بیماران ما
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "محمد احمدی",
                text: "پس از مراجعه به دکتر فرهادی، سنگ کلیه‌ام در یک جلسه درمان شد. بسیار حرفه‌ای و دلسوز هستند.",
                stars: 5,
              },
              {
                name: "زهرا محمدی",
                text: "روش سنگ شکن کاملاً بدون درد بود و نتیجه عالی گرفتم. از کادر پزشکی و پرستاری کلینیک بسیار راضی هستم.",
                stars: 5,
              },
              {
                name: "علی رضایی",
                text: "دکتر فرهادی با دقت و حوصله وضعیت من را توضیح دادند و بهترین راه درمان را انتخاب کردند. واقعاً ممنونم.",
                stars: 5,
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, j) => (
                    <span key={j} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-teal-400 flex items-center justify-center text-white font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm">{testimonial.name}</div>
                    <div className="text-xs text-slate-400">بیمار</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-50 text-blue-500 px-4 py-2 rounded-full text-sm font-medium mb-4">
              ارتباط با ما
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              تماس با کلینیک دکتر فرهادی
            </h2>
            <p className="text-slate-500 text-lg">
              برای کسب اطلاعات بیشتر یا رزرو نوبت با ما در تماس باشید
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: "📍",
                title: "آدرس",
                lines: ["تهران، خیابان ولیعصر", "بالاتر از میدان ونک", "کلینیک تخصصی فرهادی، طبقه سوم"],
              },
              {
                icon: "📞",
                title: "تلفن تماس",
                lines: ["۰۲۱-۸۸۱۲۳۴۵۶", "۰۲۱-۸۸۹۸۷۶۵۴", "واتساپ: ۰۹۱۲۳۴۵۶۷۸۹"],
              },
              {
                icon: "🕐",
                title: "ساعات کاری",
                lines: ["شنبه تا چهارشنبه: ۸-۱۶", "پنجشنبه: ۸-۱۳", "جمعه: تعطیل"],
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center border border-slate-100 shadow-sm">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-slate-800 text-lg mb-4">{item.title}</h3>
                {item.lines.map((line, j) => (
                  <p key={j} className="text-slate-500 text-sm mb-1">{line}</p>
                ))}
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
            <div className="bg-slate-200 h-64 flex items-center justify-center">
              <div className="text-center text-slate-500">
                <div className="text-5xl mb-4">🗺️</div>
                <div className="font-medium">نقشه موقعیت کلینیک</div>
                <div className="text-sm mt-2">تهران، خیابان ولیعصر، کلینیک تخصصی فرهادی</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                  ف
                </div>
                <div>
                  <div className="font-bold text-white text-sm">دکتر اصغر فرهادی</div>
                  <div className="text-xs text-blue-400">متخصص سنگ شکن</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                ارائه بهترین خدمات درمانی سنگ شکن با پیشرفته‌ترین تکنولوژی
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">خدمات</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-blue-400 transition-colors">سنگ شکن کلیه</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition-colors">سنگ شکن حالب</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition-colors">سنگ شکن مثانه</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition-colors">ویزیت تخصصی</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">لینک‌های سریع</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-blue-400 transition-colors">درباره دکتر فرهادی</a></li>
                <li><a href="#appointment" className="hover:text-blue-400 transition-colors">رزرو نوبت</a></li>
                <li><a href="#faq" className="hover:text-blue-400 transition-colors">سوالات متداول</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors">تماس با ما</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">تماس سریع</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <span>📞</span>
                  <span dir="ltr">021-88123456</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📱</span>
                  <span dir="ltr">09123456789</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📧</span>
                  <span dir="ltr">info@drfarhadi.ir</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400">
              © ۱۴۰۳ کلینیک تخصصی دکتر اصغر فرهادی. تمام حقوق محفوظ است.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center hover:bg-blue-500 transition-colors text-sm">
                t
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center hover:bg-pink-500 transition-colors text-sm">
                i
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center hover:bg-green-500 transition-colors text-sm">
                w
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <div className="fixed bottom-6 left-6 z-50">
        <a
          href="#appointment"
          className="bg-blue-500 text-white px-6 py-3 rounded-full font-bold shadow-xl hover:bg-blue-600 transition-all hover:scale-105 flex items-center gap-2"
        >
          <span>📅</span>
          <span>رزرو نوبت</span>
        </a>
      </div>
    </div>
  );
}
```