# Design System

---

> **نام پروژه:** `[PROJECT_NAME]` | **نسخه:** v1.0.0 | **وضعیت:** Draft

---

## فهرست محتوا | Table of Contents

1. [اصول بنیادین](#-اصول-بنیادین--design-principles)
2. [پالت رنگ](#-پالت-رنگ--color-palette)
3. [تایپوگرافی](#-تایپوگرافی--typography)
4. [Spacing Scale](#-spacing-scale)
5. [سایه و عمق](#-سایه-و-عمق--shadows--elevation)
6. [Border Radius](#-border-radius)
7. [Breakpoints](#-breakpoints--responsive)
8. [آیکون‌ها](#-آیکون‌ها--iconography)
9. [کامپوننت‌های UI](#-کامپوننت‌های-ui--components)
   - [Button](#1-button)
   - [Input](#2-input--form-fields)
   - [Card](#3-card)
   - [Navbar](#4-navbar)
   - [Footer](#5-footer)
   - [Sidebar](#6-sidebar)
   - [Badge](#7-badge)
   - [Avatar](#8-avatar)
   - [Modal / Dialog](#9-modal--dialog)
   - [Toast / Notification](#10-toast--notification)
   - [Dropdown / Menu](#11-dropdown--menu)
   - [Tabs](#12-tabs)
   - [Accordion / FAQ](#13-accordion--faq)
   - [Table](#14-table)
   - [Pagination](#15-pagination)
   - [Stat Card](#16-stat-card)
   - [Progress Bar](#17-progress-bar)
   - [Toggle / Switch](#18-toggle--switch)
   - [Checkbox & Radio](#19-checkbox--radio)
   - [Alert / Banner](#20-alert--banner)
   - [Skeleton Loader](#21-skeleton-loader)
   - [Empty State](#22-empty-state)
   - [Auth Layout](#23-auth-layout)
   - [Dashboard Layout](#24-dashboard-layout)
   - [Password Strength Bar](#25-password-strength-bar)
   - [Avatar Uploader](#26-avatar-uploader)
   - [Chart Widget](#27-chart-widget)
10. [رفرنس‌های بصری](#-رفرنس‌های-بصری--visual-references)
11. [توکن‌های طراحی](#-توکن‌های-طراحی--design-tokens)
12. [الگوهای دسترس‌پذیری](#-دسترس‌پذیری--accessibility)

---

## 🎨 اصول بنیادین | Design Principles

| اصل | توضیح |
|-----|-------|
| **Clarity اول** | هر المان باید هدف خود را بدون ابهام منتقل کند |
| **سلسله‌مراتب بصری** | اطلاعات از مهم به کم‌اهمیت به‌صورت لایه‌بندی نمایش داده می‌شوند |
| **سازگاری** | رنگ، فضا و تایپوگرافی در تمام صفحات یکنواخت است |
| **دسترس‌پذیری** | حداقل contrast ratio 4.5:1 برای متن، پشتیبانی از keyboard nav |
| **واکنش‌گرا** | Mobile-first، سازگار با تمام breakpoints |
| **RTL-Ready** | پشتیبانی کامل از زبان فارسی و جهت راست‌به‌چپ |

---

## 🎨 پالت رنگ | Color Palette

### رنگ‌های اصلی | Primary Colors

```
Primary Brand
├── primary-50:   #EEF2FF   (خیلی روشن - backgrounds)
├── primary-100:  #E0E7FF   (روشن - hover states)
├── primary-200:  #C7D2FE   (light borders)
├── primary-300:  #A5B4FC   (disabled states)
├── primary-400:  #818CF8   (secondary actions)
├── primary-500:  #6366F1   (base / default)  ← MAIN
├── primary-600:  #4F46E5   (hover)
├── primary-700:  #4338CA   (active/pressed)
├── primary-800:  #3730A3   (dark variant)
└── primary-900:  #312E81   (خیلی تیره - headings)
```

### رنگ‌های تکمیلی | Secondary Colors

```
Secondary (Cyan/Teal Accent)
├── secondary-50:  #ECFEFF
├── secondary-100: #CFFAFE
├── secondary-200: #A5F3FC
├── secondary-300: #67E8F9
├── secondary-400: #22D3EE
├── secondary-500: #06B6D4   ← MAIN
├── secondary-600: #0891B2
├── secondary-700: #0E7490
├── secondary-800: #155E75
└── secondary-900: #164E63
```

### رنگ‌های وضعیت | Semantic / Status Colors

```
Success (سبز)
├── success-50:   #F0FDF4
├── success-100:  #DCFCE7
├── success-500:  #22C55E   ← MAIN
├── success-600:  #16A34A
└── success-900:  #14532D

Warning (زرد/نارنجی)
├── warning-50:   #FFFBEB
├── warning-100:  #FEF3C7
├── warning-500:  #F59E0B   ← MAIN
├── warning-600:  #D97706
└── warning-900:  #78350F

Danger / Error (قرمز)
├── danger-50:    #FFF1F2
├── danger-100:   #FFE4E6
├── danger-500:   #EF4444   ← MAIN
├── danger-600:   #DC2626
└── danger-900:   #7F1D1D

Info (آبی)
├── info-50:      #EFF6FF
├── info-100:     #DBEAFE
├── info-500:     #3B82F6   ← MAIN
├── info-600:     #2563EB
└── info-900:     #1E3A8A
```

### رنگ‌های خنثی | Neutral / Gray Scale

```
Neutral (پایه تمام UI)
├── neutral-0:    #FFFFFF   (سفید خالص)
├── neutral-50:   #F9FAFB   (پس‌زمینه صفحات)
├── neutral-100:  #F3F4F6   (پس‌زمینه card)
├── neutral-200:  #E5E7EB   (border ملایم)
├── neutral-300:  #D1D5DB   (border)
├── neutral-400:  #9CA3AF   (placeholder text)
├── neutral-500:  #6B7280   (متن ثانویه)
├── neutral-600:  #4B5563   (متن معمولی)
├── neutral-700:  #374151   (متن تیره)
├── neutral-800:  #1F2937   (متن اصلی)
├── neutral-900:  #111827   (عناوین)
└── neutral-950:  #030712   (خیلی تیره)
```

### رنگ‌های Dark Mode

```
Dark Mode Surface
├── dark-bg:        #0F172A   (پس‌زمینه اصلی)
├── dark-surface:   #1E293B   (کارت‌ها، پنل‌ها)
├── dark-elevated:  #334155   (hover states)
├── dark-border:    #475569   (خطوط جداکننده)
├── dark-muted:     #94A3B8   (متن فرعی)
└── dark-text:      #F1F5F9   (متن اصلی)
```

### کاربرد رنگ | Color Usage Guide

| توکن | مقدار | کاربرد |
|------|-------|--------|
| `--color-bg-page` | `#F9FAFB` | پس‌زمینه کلی صفحه |
| `--color-bg-card` | `#FFFFFF` | پس‌زمینه card/panel |
| `--color-bg-input` | `#FFFFFF` | فیلدهای فرم |
| `--color-text-primary` | `#111827` | عناوین و متن اصلی |
| `--color-text-secondary` | `#6B7280` | متن توضیحی |
| `--color-text-disabled` | `#D1D5DB` | المان‌های غیرفعال |
| `--color-border` | `#E5E7EB` | خطوط جداکننده |
| `--color-border-focus` | `#6366F1` | حالت focus |
| `--color-action-primary` | `#6366F1` | دکمه اصلی |
| `--color-action-hover` | `#4F46E5` | hover دکمه |

---

## ✍️ تایپوگرافی | Typography

### فونت‌های پروژه | Font Families

```
فونت فارسی (RTL)
└── Vazirmatn
    ├── منبع: fonts.googleapis.com/css2?family=Vazirmatn
    ├── وزن‌ها: 300 (Light), 400 (Regular), 500 (Medium), 
    │          600 (SemiBold), 700 (Bold), 800 (ExtraBold)
    └── کاربرد: تمام متون فارسی، عناوین، UI

فونت انگلیسی (LTR)
└── Inter
    ├── منبع: fonts.googleapis.com/css2?family=Inter
    ├── وزن‌ها: 300, 400, 500, 600, 700, 800
    └── کاربرد: متون انگلیسی، کد، اعداد

فونت Monospace (کد)
└── JetBrains Mono
    ├── منبع: fonts.googleapis.com/css2?family=JetBrains+Mono
    ├── وزن‌ها: 400, 500, 700
    └── کاربرد: نمایش کد، API keys، hash ها
```

### مقیاس تایپوگرافی | Type Scale

```
Display / Hero
├── display-2xl:  72px / 4.5rem  | Line-height: 1.1 | Weight: 800 | Tracking: -0.02em
├── display-xl:   60px / 3.75rem | Line-height: 1.1 | Weight: 800 | Tracking: -0.02em
└── display-lg:   48px / 3rem    | Line-height: 1.2 | Weight: 700 | Tracking: -0.01em

Heading
├── h1:  40px / 2.5rem   | Line-height: 1.2 | Weight: 700 | Tracking: -0.01em
├── h2:  32px / 2rem     | Line-height: 1.3 | Weight: 700 | Tracking: -0.005em
├── h3:  28px / 1.75rem  | Line-height: 1.35| Weight: 600 | Tracking: 0
├── h4:  24px / 1.5rem   | Line-height: 1.4 | Weight: 600 | Tracking: 0
├── h5:  20px / 1.25rem  | Line-height: 1.5 | Weight: 600 | Tracking: 0
└── h6:  18px / 1.125rem | Line-height: 1.5 | Weight: 600 | Tracking: 0

Body
├── body-xl:   18px / 1.125rem | Line-height: 1.75 | Weight: 400
├── body-lg:   16px / 1rem     | Line-height: 1.75 | Weight: 400  ← DEFAULT
├── body-md:   15px / 0.9375rem| Line-height: 1.6  | Weight: 400
└── body-sm:   14px / 0.875rem | Line-height: 1.6  | Weight: 400

Label / UI
├── label-lg:  14px / 0.875rem | Line-height: 1.4 | Weight: 500
├── label-md:  13px / 0.8125rem| Line-height: 1.4 | Weight: 500
└── label-sm:  12px / 0.75rem  | Line-height: 1.4 | Weight: 500

Caption / Helper
├── caption:   12px / 0.75rem  | Line-height: 1.5 | Weight: 400
└── overline:  11px / 0.6875rem| Line-height: 1.5 | Weight: 600 | Tracking: 0.08em | UPPERCASE

Code
└── code:      14px / 0.875rem | Line-height: 1.7 | Weight: 400 | Font: JetBrains Mono
```

### استفاده تایپوگرافی | Typography Usage

| المان | توکن | مثال کاربرد |
|-------|------|-------------|
| Hero headline | `display-xl` | عنوان اصلی landing |
| Section title | `h2` | عنوان بخش‌ها |
| Card title | `h4` یا `h5` | عنوان card |
| Body text | `body-lg` | پاراگراف معمولی |
| Form label | `label-md` | برچسب فیلد |
| Helper text | `caption` | راهنمای زیر فیلد |
| Button text | `label-lg` | متن دکمه |
| Nav links | `label-lg` | آیتم‌های منو |
| Badge text | `label-sm` | نشانه‌ها |
| Code block | `code` | API key، کد |

---

## 📐 Spacing Scale

> **پایه:** `4px` (0.25rem) — تمام مقادیر مضربی از ۴ هستند

```
Spacing Tokens
├── space-0:    0px
├── space-px:   1px     (خطوط ظریف)
├── space-0.5:  2px     (0.125