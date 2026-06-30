# Project Brief

---

> **توجه:** اطلاعات ورودی پروژه تعریف نشده‌اند (`undefined`). این Project Brief به‌صورت یک **قالب جامع و استاندارد** تهیه شده است که می‌توانید تمام بخش‌های `[PLACEHOLDER]` را با اطلاعات واقعی پروژه خود جایگزین کنید.

---

## 📋 اطلاعات کلی پروژه | Project Overview

| فیلد | مقدار |
|------|-------|
| **نام پروژه** | `[PROJECT_NAME]` |
| **نسخه** | v1.0.0 |
| **تاریخ تهیه** | `[DATE]` |
| **معمار نرم‌افزار** | `[ARCHITECT_NAME]` |
| **وضعیت** | Draft |

---

## 🎯 هدف پروژه | Project Goal

```
[توضیح کامل هدف پروژه به فارسی]
[Full project goal description in English]
```

### مشکل اصلی | Core Problem
> `[شرح مشکلی که این پروژه حل می‌کند]`

### راه‌حل پیشنهادی | Proposed Solution
> `[شرح راه‌حل ارائه‌شده توسط این پروژه]`

### معیارهای موفقیت | Success Metrics
- [ ] `[Metric 1]`
- [ ] `[Metric 2]`
- [ ] `[Metric 3]`

---

## 👥 مخاطبان هدف | Target Audience

### پرسونای اصلی | Primary Persona
```
نام: [Persona Name]
سن: [Age Range]
شغل: [Occupation]
نیاز اصلی: [Primary Need]
درد اصلی: [Pain Point]
```

### پرسونای ثانویه | Secondary Persona
```
نام: [Persona Name]
سن: [Age Range]
شغل: [Occupation]
نیاز اصلی: [Primary Need]
درد اصلی: [Pain Point]
```

---

## 📄 صفحات و کامپوننت‌ها | Pages & Components

### ساختار کلی مسیرها | Route Structure

```
app/
├── (public)/
│   ├── page.tsx                    # Home / Landing
│   ├── about/page.tsx              # About
│   └── contact/page.tsx            # Contact
├── (auth)/
│   ├── login/page.tsx              # Login
│   ├── register/page.tsx           # Register
│   └── forgot-password/page.tsx    # Forgot Password
├── (dashboard)/
│   ├── layout.tsx                  # Dashboard Layout
│   ├── dashboard/page.tsx          # Main Dashboard
│   ├── profile/page.tsx            # User Profile
│   └── settings/page.tsx          # Settings
└── api/
    ├── auth/[...nextauth]/route.ts
    └── [other-endpoints]/route.ts
```

---

### صفحه ۱: صفحه اصلی | Page 1: Home / Landing Page

**Route:** `/`  
**دسترسی:** عمومی | Public  
**هدف:** جذب کاربر و معرفی محصول

#### کامپوننت‌ها | Components

```typescript
// Layout Components
<Navbar />              // Navigation bar with logo, links, CTA button
<Footer />              // Footer with links, social media, copyright

// Section Components  
<HeroSection />         // Main headline, subheadline, CTA buttons, hero image
<FeaturesSection />     // Grid of feature cards (icon + title + description)
<HowItWorksSection />   // Step-by-step process (numbered steps)
<TestimonialsSection /> // User testimonials carousel
<PricingSection />      // Pricing plans cards
<CTASection />          // Final call-to-action banner
<FAQSection />          // Accordion FAQ list
```

#### Props & State
```typescript
interface HeroSectionProps {
  headline: string;
  subheadline: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  heroImage: string;
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
```

---

### صفحه ۲: ورود | Page 2: Login

**Route:** `/login`  
**دسترسی:** عمومی (redirect if authenticated)  
**هدف:** احراز هویت کاربران موجود

#### کامپوننت‌ها | Components

```typescript
<AuthLayout />          // Centered card layout with brand panel
<LoginForm />           // Email + Password fields with validation
<SocialAuthButtons />   // Google, GitHub OAuth buttons
<RememberMeCheckbox />  // Persist session toggle
<ForgotPasswordLink />  // Link to password reset
<RegisterLink />        // Link to registration page
```

#### Form Schema (Zod)
```typescript
const loginSchema = z.object({
  email: z.string().email("آدرس ایمیل معتبر نیست"),
  password: z.string().min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد"),
  rememberMe: z.boolean().optional(),
});
```

---

### صفحه ۳: ثبت‌نام | Page 3: Register

**Route:** `/register`  
**دسترسی:** عمومی (redirect if authenticated)  
**هدف:** ایجاد حساب کاربری جدید

#### کامپوننت‌ها | Components

```typescript
<AuthLayout />
<RegisterForm />        // Full name, email, password, confirm password
<PasswordStrengthBar /> // Visual password strength indicator
<TermsCheckbox />       // Terms of service agreement
<SocialAuthButtons />   // OAuth alternatives
<LoginLink />           // Link back to login
```

#### Form Schema (Zod)
```typescript
const registerSchema = z.object({
  fullName: z.string().min(2, "نام باید حداقل ۲ کاراکتر باشد"),
  email: z.string().email("آدرس ایمیل معتبر نیست"),
  password: z.string()
    .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد")
    .regex(/[A-Z]/, "باید شامل حرف بزرگ باشد")
    .regex(/[0-9]/, "باید شامل عدد باشد"),
  confirmPassword: z.string(),
  acceptTerms: z.boolean().refine(val => val === true),
}).refine(data => data.password === data.confirmPassword, {
  message: "رمز عبور و تکرار آن مطابقت ندارند",
  path: ["confirmPassword"],
});
```

---

### صفحه ۴: داشبورد | Page 4: Dashboard

**Route:** `/dashboard`  
**دسترسی:** خصوصی | Protected (Auth Required)  
**هدف:** نمای کلی اطلاعات و عملکرد کاربر

#### کامپوننت‌ها | Components

```typescript
// Layout
<DashboardLayout />     // Sidebar + Topbar + Main Content area
<Sidebar />             // Navigation menu with icons and labels
<Topbar />              // User avatar, notifications, search bar

// Content Components
<StatsCards />          // 4-grid metric cards (value + trend + icon)
<RecentActivityTable /> // Paginated table with recent actions
<QuickActionsPanel />   // Shortcut buttons for common tasks
<NotificationsPanel />  // Recent notifications list
<ChartWidget />         // Line/Bar chart for analytics
<ProgressWidget />      // Progress bars for goals/quotas
```

#### Stats Card Interface
```typescript
interface StatCardProps {
  title: string;
  value: string | number;
  trend: {
    value: number;
    direction: "up" | "down" | "neutral";
    period: string;
  };
  icon: React.ReactNode;
  color: "primary" | "success" | "warning" | "danger";
}
```

---

### صفحه ۵: پروفایل کاربر | Page 5: User Profile

**Route:** `/profile`  
**دسترسی:** خصوصی | Protected  
**هدف:** مشاهده و ویرایش اطلاعات شخصی

#### کامپوننت‌ها | Components

```typescript
<ProfileHeader />       // Avatar upload, name, role, join date
<PersonalInfoForm />    // Editable personal information fields
<SecuritySection />     // Change password, 2FA toggle
<NotificationPrefs />   // Email/push notification toggles
<DangerZone />          // Delete account section
<AvatarUploader />      // Drag & drop image upload with crop
```

---

### صفحه ۶: تنظیمات | Page 6: Settings

**Route:** `/settings`  
**دسترسی:** خصوصی | Protected  
**هدف:** پیکربندی کلی اکانت و برنامه

#### کامپوننت‌ها | Components

```typescript
<SettingsTabs />        // Tabbed navigation (General, Security, Billing, Team)
<GeneralSettings />     // Language, timezone, theme toggle
<SecuritySettings />    // Sessions list, 2FA, API keys
<BillingSettings />     // Subscription plan, payment history
<TeamSettings />        // Member management (if applicable)
```

---

## 🗄️ مدل داده‌ای | Data Model

### دیاگرام ERD | Entity Relationship Diagram

```
users ──────┬──── profiles
            │
            ├──── sessions
            │
            ├──── [resource_table] ──── [related_table]
            │
            └──── notifications
```

---

### جداول پایگاه داده | Database Tables

#### جدول: `users` (مدیریت‌شده توسط Supabase Auth)

```sql
-- Managed by Supabase Auth (auth.users)
-- Extended via profiles table
TABLE auth.users (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email           TEXT UNIQUE NOT NULL,
  phone           TEXT,
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  updated_at      TIMESTAMPTZ DEFAULT NOW(),
  last_sign_in_at TIMESTAMPTZ,
  email_confirmed_at TIMESTAMPTZ,
  raw_user_meta_data JSONB
);
```

---

#### جدول: `profiles` (اطلاعات تکمیلی کاربر)

```sql
CREATE TABLE public.profiles (
  id              UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name       TEXT,
  username        TEXT UNIQUE,
  avatar_url      TEXT,
  bio             TEXT,
  phone           TEXT,
  website         TEXT,
  role            TEXT NOT NULL DEFAULT 'user' 
                  CHECK (role IN ('admin', 'moderator', 'user')),
  is_active       BOOLEAN DEFAULT TRUE,
  onboarding_done BOOLEAN DEFAULT FALSE,
  preferences     JSONB DEFAULT '{}',
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  updated_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Auto-create profile on user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'avatar_url'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

---

#### جدول: `[main_resource]` (منبع اصلی پروژه)

```sql
-- Replace [main_resource] with your actual resource name
CREATE TABLE public.[main_resource] (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title       TEXT NOT NULL,
  description TEXT,
  status      TEXT NOT NULL DEFAULT 'draft'
              CHECK (status IN ('draft', 'active', 'archived', 'deleted')),
  metadata    JSONB DEFAULT '{}',
  tags        TEXT[] DEFAULT '{}',
  is_public   BOOLEAN DEFAULT FALSE,
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  updated_at  TIMESTAMPTZ DEFAULT NOW(),
  deleted_at  TIMESTAMPTZ  -- soft delete
);

-- Index for performance
CREATE INDEX idx_[main_resource]_user_id ON public.[main_resource](user_id);
CREATE INDEX idx_[main_resource]_status ON public.[main_resource](status);
CREATE INDEX idx_[main_resource]_created_at ON public.[main_resource](created_at DESC);
```

---

#### جدول: `notifications` (اعلان‌ها)

```sql
CREATE TABLE public.notifications (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  type        TEXT NOT NULL,
  title       TEXT NOT NULL,
  body        TEXT,
  data        JSONB DEFAULT '{}',
  is_read     BOOLEAN DEFAULT FALSE,
  read_at     TIMESTAMPTZ,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_notifications_user_id ON public.notifications(user_id);
CREATE INDEX idx_notifications_is_read ON public.notifications(user_id, is_read);
```

---

#### جدول: `activity_logs` (لاگ فعالیت)

```sql
CREATE TABLE public.activity_logs (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  action      TEXT NOT NULL,
  resource    TEXT,
  resource_id UUID,
  details     JSONB DEFAULT '{}',
  ip_address  INET,
  user_agent  TEXT,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_activity_logs_user_id ON public.activity_logs(user_id);
CREATE INDEX idx_activity_logs_created_at ON public.activity_logs(created_at DESC);
```

---

### Row Level Security (RLS) Policies

```sql
-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.[main_resource] ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);