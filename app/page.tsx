"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronRight, CheckCircle, Users, BarChart, BookOpen, Award, MessageSquare, Globe } from "lucide-react"

// Data for the page in both languages
const content = {
  bm: {
    nav: {
      courses: "Kursus",
      testimonials: "Testimoni",
      faq: "Soalan Lazim",
      login: "Log Masuk",
    },
    hero: {
      title: "Kuasai Strategi BBMA Dari Asas Hingga ke Peringkat Mentor",
      subtitle:
        "Platform pembelajaran BBMA paling komprehensif di Malaysia. Belajar mengikut rentak anda, buka tahap baru, dan sertai komuniti pedagang yang berjaya.",
      mainCta: "Buka Tahap Anda",
      secondaryCta: "Sertai Komuniti Telegram",
    },
    features: {
      title: "Kenapa Pilih Bijak BBMA?",
      subtitle: "Kami menyediakan laluan pembelajaran yang jelas dan terbukti untuk kejayaan anda.",
      items: [
        {
          icon: BookOpen,
          title: "Pembelajaran Berstruktur",
          description: "Kurikulum yang disusun dari Rookie hingga Mentor untuk pemahaman yang mendalam.",
        },
        {
          icon: Award,
          title: "Buka Ganjaran Eksklusif",
          description: "Selesaikan setiap tahap dan dapatkan bonus istimewa sebagai ganjaran.",
        },
        {
          icon: Users,
          title: "Komuniti Aktif",
          description: "Akses seumur hidup ke kumpulan Telegram eksklusif kami untuk sokongan berterusan.",
        },
      ],
    },
    tiers: {
      title: "Buka Tahap Perdagangan Anda",
      subtitle:
        "Mulakan perjalanan anda sebagai Rookie dan maju ke peringkat Mentor. Setiap tahap membuka pengetahuan dan ganjaran baru.",
      levels: [
        {
          name: "Rookie",
          description: "Asas BBMA dan persediaan carta.",
          features: ["Pengenalan Bollinger Bands", "5 Moving Averages Asas", "Setup Asas & Risk Management"],
        },
        {
          name: "Apprentice",
          description: "Setup masuk pasaran dan pengesahan.",
          features: ["Setup Re-entry & MHV", "Zon Extreme & TP Wajib", "Analisis Multi-Timeframe"],
        },
        {
          name: "Pro",
          description: "Teknik lanjutan dan psikologi.",
          features: ["Analisis Top-Down Lengkap", "Pengurusan Risiko Lanjutan", "Psikologi Perdagangan Pro"],
        },
        {
          name: "Mentor",
          description: "Strategi pakar dan membimbing.",
          features: ["Strategi BBMA Lanjutan", "Membina Pelan Dagangan Sendiri", "Ganjaran Bulanan Eksklusif"],
        },
      ],
      cta: "Mula Sekarang",
    },
    testimonials: {
      title: "Apa Kata Pelajar Kami",
      items: [
        {
          name: "Ahmad F.",
          quote: "Struktur kursus sangat jelas. Dari zero, kini saya boleh analisa pasaran dengan yakin. Terbaik!",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          name: "Siti N.",
          quote:
            "Komuniti Telegram sangat membantu. Setiap kali ada soalan, pasti ada sifu yang tolong. Tak rasa keseorangan.",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          name: "Rajesh K.",
          quote:
            "Unlockable levels buat saya lagi semangat nak belajar. Ganjaran bonus tu memang satu motivasi yang hebat!",
          avatar: "/placeholder.svg?height=40&width=40",
        },
      ],
    },
    faq: {
      title: "Soalan Lazim",
      items: [
        {
          q: "Adakah platform ini sesuai untuk orang baru?",
          a: "Ya, sangat sesuai. Modul Rookie kami direka khas untuk mereka yang tiada asas langsung dalam perdagangan atau BBMA.",
        },
        {
          q: "Perlukah saya membayar untuk setiap tahap?",
          a: "Tidak. Semua tahap boleh dibuka secara percuma selepas anda mendaftar dan melengkapkan pelajaran di tahap sebelumnya.",
        },
        {
          q: "Bagaimanakah cara saya menuntut ganjaran bonus?",
          a: "Ganjaran akan dipaparkan secara automatik selepas anda melengkapkan kuiz akhir bagi setiap tahap. Anda boleh menuntutnya melalui papan pemuka profil anda.",
        },
        {
          q: "Adakah saya perlu membuka akaun RoboForex?",
          a: "Ia tidak diwajibkan pada mulanya. Walau bagaimanapun, pautan pendaftaran akan diberikan selepas anda melengkapkan semua tahap sebagai sebahagian daripada program ganjaran kami.",
        },
      ],
    },
    footer: {
      about: "Bijak BBMA adalah platform pendidikan bebas untuk membantu pedagang Malaysia menguasai strategi BBMA.",
      links: "Pautan",
      legal: "Perundangan",
      privacy: "Dasar Privasi",
      terms: "Syarat Penggunaan",
      copyright: "© 2025 Bijak BBMA. Hak Cipta Terpelihara.",
    },
  },
  en: {
    nav: {
      courses: "Courses",
      testimonials: "Testimonials",
      faq: "FAQ",
      login: "Login",
    },
    hero: {
      title: "Master the BBMA Strategy From Rookie to Mentor",
      subtitle:
        "The most comprehensive BBMA learning platform in Malaysia. Learn at your own pace, unlock new levels, and join a community of successful traders.",
      mainCta: "Unlock Your Level",
      secondaryCta: "Join Telegram Community",
    },
    features: {
      title: "Why Choose Bijak BBMA?",
      subtitle: "We provide a clear and proven learning path for your success.",
      items: [
        {
          icon: BookOpen,
          title: "Structured Learning",
          description: "A curated curriculum from Rookie to Mentor for a deep understanding.",
        },
        {
          icon: Award,
          title: "Unlock Exclusive Rewards",
          description: "Complete each tier and claim special bonuses as your reward.",
        },
        {
          icon: Users,
          title: "Active Community",
          description: "Get lifetime access to our exclusive Telegram group for continuous support.",
        },
      ],
    },
    tiers: {
      title: "Unlock Your Trading Level",
      subtitle:
        "Start your journey as a Rookie and advance to Mentor. Each level unlocks new knowledge and new rewards.",
      levels: [
        {
          name: "Rookie",
          description: "BBMA basics and chart setup.",
          features: ["Intro to Bollinger Bands", "5 Basic Moving Averages", "Basic Setup & Risk Management"],
        },
        {
          name: "Apprentice",
          description: "Market entry setups and confirmation.",
          features: ["Re-entry & MHV Setups", "Extreme Zones & Mandatory TP", "Multi-Timeframe Analysis"],
        },
        {
          name: "Pro",
          description: "Advanced techniques and psychology.",
          features: ["Complete Top-Down Analysis", "Advanced Risk Management", "Pro Trading Psychology"],
        },
        {
          name: "Mentor",
          description: "Expert strategies and mentorship.",
          features: ["Advanced BBMA Strategies", "Building Your Own Trading Plan", "Exclusive Monthly Rewards"],
        },
      ],
      cta: "Start Now",
    },
    testimonials: {
      title: "What Our Students Say",
      items: [
        {
          name: "Ahmad F.",
          quote:
            "The course structure is crystal clear. From zero, I can now analyze the market with confidence. Excellent!",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          name: "Siti N.",
          quote:
            "The Telegram community is a game-changer. Whenever I have a question, a senior member always helps. You don't feel alone.",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          name: "Rajesh K.",
          quote: "The unlockable levels kept me motivated to learn. And the bonus rewards are a fantastic incentive!",
          avatar: "/placeholder.svg?height=40&width=40",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "Is this platform suitable for complete beginners?",
          a: "Yes, absolutely. Our Rookie module is designed specifically for those with no prior background in trading or BBMA.",
        },
        {
          q: "Do I have to pay for each level?",
          a: "No. All levels are unlocked for free after you sign up and complete the lessons in the previous tier.",
        },
        {
          q: "How do I claim my bonus rewards?",
          a: "Rewards are automatically revealed after you complete the final quiz for each tier. You can then claim them from your profile dashboard.",
        },
        {
          q: "Do I need to open a RoboForex account?",
          a: "It is not required initially. However, a registration link will be provided after you complete all levels as part of our rewards program.",
        },
      ],
    },
    footer: {
      about: "Bijak BBMA is an independent education platform to help Malaysian traders master the BBMA strategy.",
      links: "Links",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      copyright: "© 2025 Bijak BBMA. All Rights Reserved.",
    },
  },
}

export default function LandingPage() {
  const [lang, setLang] = useState<"bm" | "en">("bm")
  const c = content[lang]

  const toggleLang = () => {
    setLang(lang === "bm" ? "en" : "bm")
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <BarChart className="h-8 w-8 text-green-500" />
              <span className="font-bold text-xl">Bijak BBMA</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#courses" className="text-sm font-medium hover:text-green-500 transition-colors">
                {c.nav.courses}
              </a>
              <a href="#testimonials" className="text-sm font-medium hover:text-green-500 transition-colors">
                {c.nav.testimonials}
              </a>
              <a href="#faq" className="text-sm font-medium hover:text-green-500 transition-colors">
                {c.nav.faq}
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={toggleLang}>
                <Globe className="h-5 w-5" />
                <span className="sr-only">Toggle language</span>
              </Button>
              <Button variant="outline">{c.nav.login}</Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
              {c.hero.title}
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
              {c.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                {c.hero.mainCta} <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                <MessageSquare className="mr-2 h-5 w-5" /> {c.hero.secondaryCta}
              </Button>
            </div>
            <div className="mt-12 max-w-4xl mx-auto">
              <Card className="shadow-2xl dark:bg-gray-800/50">
                <CardContent className="p-2">
                  <img
                    src="/placeholder.svg?height=400&width=800"
                    alt="TradingView Chart with BBMA Indicator"
                    className="rounded-lg w-full"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">{c.features.title}</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">{c.features.subtitle}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {c.features.items.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/50 mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Tiers Section */}
        <section id="courses" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">{c.tiers.title}</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">{c.tiers.subtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {c.tiers.levels.map((level, index) => (
                <Card key={index} className="flex flex-col dark:bg-gray-800/50">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">{level.name}</CardTitle>
                    <CardDescription>{level.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-3">
                      {level.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">{c.tiers.cta}</Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">{c.testimonials.title}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {c.testimonials.items.map((testimonial, index) => (
                <Card key={index} className="dark:bg-gray-900">
                  <CardContent className="pt-6">
                    <p className="mb-4 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">{c.faq.title}</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {c.faq.items.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-medium text-left">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-base text-gray-600 dark:text-gray-400">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <BarChart className="h-8 w-8 text-green-500" />
                <span className="font-bold text-xl">Bijak BBMA</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{c.footer.about}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{c.footer.links}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#courses" className="text-gray-600 dark:text-gray-400 hover:text-green-500">
                    {c.nav.courses}
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-gray-600 dark:text-gray-400 hover:text-green-500">
                    {c.nav.testimonials}
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-gray-600 dark:text-gray-400 hover:text-green-500">
                    {c.nav.faq}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{c.footer.legal}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-green-500">
                    {c.footer.privacy}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-green-500">
                    {c.footer.terms}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{c.hero.secondaryCta}</h3>
              <Button className="w-full bg-gray-800 hover:bg-gray-700 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-white text-white">
                <MessageSquare className="mr-2 h-5 w-5" /> Telegram
              </Button>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>{c.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
