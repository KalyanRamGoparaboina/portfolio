"use client";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import {
  ArrowRight, Download, Github, Linkedin, Mail, MapPin, Phone,
  ExternalLink, GraduationCap, Award, Briefcase, Code2, Terminal,
  Database, Brain, Zap, TrendingUp, Target, Sparkles, Sun, Battery,
  Leaf, X, MessageCircle, Calendar, CheckCircle, Send, User, Clock,
  Star, Shield, Rocket, Users, Lightbulb, Hourglass
} from "lucide-react";

export default function Home() {
  // --- STATE ---
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [whatsappPopup, setWhatsappPopup] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [chatName, setChatName] = useState("");

  // Hydration fix for random particles
  const [particles, setParticles] = useState<Array<{ left: string, top: string, delay: string, duration: string }>>([]);

  // --- REFS (PERFORMANCE FIX) ---
  const backgroundRef = useRef<HTMLDivElement>(null);

  // --- EFFECT: PERFORMANCE OPTIMIZED MOUSE TRACKING (GLOBAL BACKGROUND) ---
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (backgroundRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        backgroundRef.current.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
      }
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  // --- EFFECT: INITIALIZATION & SCROLL ---
  useEffect(() => {
    setIsVisible(true);

    const newParticles = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${5 + Math.random() * 10}s`
    }));
    setParticles(newParticles);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      const sections = ["about", "education", "projects", "skills", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    setTimeout(() => setShowWhatsApp(true), 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleWhatsAppSend = () => {
    const name = chatName || "there";
    const message = chatMessage || "Hi Kalyan, I visited your portfolio and would like to connect!";
    const whatsappUrl = `https://wa.me/918106142645?text=${encodeURIComponent(`Hi, I'm ${name}. ${message}`)}`;
    window.open(whatsappUrl, '_blank');
    setWhatsappPopup(false);
    setChatMessage("");
    setChatName("");
  };

  const seoData = {
    title: "Kalyan Ram Goparaboina - Data Scientist & AI Specialist | Python Full-Stack Developer Portfolio",
    description: "Kalyan Ram Goparaboina - Computer Science Graduate from Telangana specializing in Data Science, AI/ML, Deep Learning, and Python Full-Stack Development. Expert in Machine Learning, OpenCV, Flask, React, Computer Vision, and Cloud Technologies. Available for hire - Fresh Graduate 2025.",
    keywords: "Kalyan Ram Goparaboina, Kalyanram Goparaboina, Kalyan Goparaboina, Data Scientist India, AI Specialist, Machine Learning Engineer, Python Developer, Flask Developer, React Developer, Computer Vision Expert, Deep Learning, Data Science, AI ML Developer, Full Stack Python Developer, Telangana Developer, Fresh Graduate 2025, Kamala Institute Alumni, AI Jobs India, Data Science Jobs, Python Jobs",
    url: "https://kalyanramgoparaboina.com",
    image: "/og-image.jpg"
  };

  const certificates = [
    {
      name: "Generative AI Professional",
      issuer: "Oracle University",
      year: "2025",
      level: "Professional",
      date: "October 28, 2025",
      description: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional"
    },
    {
      name: "Data Science using ML with R & Python",
      issuer: "ExcelR Solutions",
      year: "2025",
      level: "Advanced",
      date: "2025",
      description: "Comprehensive training in Machine Learning, R, and Python for Data Science applications"
    },
    {
      name: "AI Vector Certification",
      issuer: "Oracle University",
      year: "2025",
      level: "Certified",
      date: "2025",
      description: "Advanced AI and Machine Learning certification program"
    },
    {
      name: "Data Science & Machine Learning Workshop",
      issuer: "Kamala Institute & Brain O Vision",
      year: "2024",
      level: "Certified",
      date: "April 18-20, 2024",
      description: "Three-day intensive workshop on Data Science & Machine Learning"
    },
    {
      name: "Python Full Stack Developer",
      issuer: "Brain O Vision",
      year: "2023",
      level: "Certified",
      date: "2023",
      description: "Complete Python Full Stack Development including Flask, Django, and modern web technologies"
    }
  ];

  const softSkills = [
    { name: "Communication Skills", level: 95, color: "#10B981" },
    { name: "Teamwork & Collaboration", level: 95, color: "#8B5CF6" },
    { name: "Problem-Solving Ability", level: 75, color: "#F59E0B" },
    { name: "Adaptability & Quick Learning", level: 89, color: "#3B82F6" },
    { name: "Time Management", level: 95, color: "#EC4899" },
    { name: "Positive Attitude & Professionalism", level: 85, color: "#F43F5E" }
  ];

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="title" content={seoData.title} />
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta name="author" content="Kalyan Ram Goparaboina" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href={seoData.url} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.url} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:site_name" content="Kalyan Ram Goparaboina Portfolio" />
        <meta property="og:locale" content="en_US" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={seoData.url} />
        <meta property="twitter:title" content={seoData.title} />
        <meta property="twitter:description" content={seoData.description} />
        <meta property="twitter:image" content={seoData.image} />
        <meta property="twitter:creator" content="@KalyanRamG" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Telangana" />
        <meta name="geo.position" content="17.3850;78.4867" />
        <meta name="ICBM" content="17.3850, 78.4867" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Kalyan Ram Goparaboina",
            "alternateName": ["Kalyanram Goparaboina", "Kalyan Goparaboina"],
            "url": seoData.url,
            "image": seoData.image,
            "jobTitle": "Data Scientist & AI Specialist",
            "worksFor": { "@type": "Organization", "name": "Freelance" },
            "address": { "@type": "PostalAddress", "addressLocality": "Telangana", "addressCountry": "IN" },
            "email": "goparaboinakalyanram@gmail.com",
            "telephone": "+91-81061-42645",
            "alumniOf": { "@type": "Organization", "name": "Kamala Institute of Technology and Science" },
            "knowsAbout": ["Python", "Flask", "React", "Machine Learning", "Deep Learning", "Computer Vision", "Data Science", "Full Stack Development", "AI/ML", "OpenCV", "TensorFlow", "Neural Networks"],
            "sameAs": ["https://github.com/KalyanRamGoparaboina", "https://www.linkedin.com/in/kalyan-ram-goparaboina-90719435a"]
          })}
        </script>
        <style jsx global>{`
          html { scroll-behavior: smooth; }
          * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        `}</style>
      </Head>

      <main className="min-h-screen w-full bg-black text-white relative overflow-hidden">

        {/* Loading Animation */}
        {!isVisible && (
          <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-400 text-sm">Loading Portfolio...</p>
            </div>
          </div>
        )}

        {/* WhatsApp Chat Popup */}
        {whatsappPopup && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setWhatsappPopup(false)}>
            <div className="relative max-w-md w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl border border-green-500/30" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={(e) => { e.stopPropagation(); setWhatsappPopup(false); }}
                className="absolute -top-3 -right-3 p-2.5 rounded-full bg-red-500 hover:bg-red-600 transition-all z-[60] shadow-2xl border-4 border-black hover:scale-110"
                aria-label="Close WhatsApp popup"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              <div className="bg-gradient-to-r from-green-600 to-green-500 p-5 rounded-t-3xl relative">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <User className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">Kalyan Ram</h3>
                    <div className="flex items-center gap-2 text-green-100">
                      <div className="w-2 h-2 rounded-full bg-green-300 animate-pulse"></div>
                      <span className="text-sm">Typically replies instantly</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-800 rounded-2xl rounded-tl-sm p-4 shadow-lg border border-gray-700">
                      <p className="text-sm text-gray-200 leading-relaxed">
                        Hi! 👋 Thanks for visiting my portfolio. I'd love to hear from you. Send me a message and let's connect!
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>Just now</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 pt-2">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={chatName}
                      onChange={(e) => setChatName(e.target.value)}
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all"
                      aria-label="Enter your name"
                    />
                  </div>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                    <textarea
                      placeholder="Type your message..."
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      rows={3}
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all resize-none"
                      aria-label="Enter your message"
                    />
                  </div>
                  <button
                    onClick={handleWhatsAppSend}
                    className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-green-500/50 transition-all hover:scale-105 group"
                    aria-label="Send message on WhatsApp"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <span>Send Message on WhatsApp</span>
                  </button>
                  <p className="text-xs text-center text-gray-500">
                    🔒 Your message is private and secure
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* WhatsApp Floating Button */}
        {showWhatsApp && (
          <button
            onClick={() => setWhatsappPopup(true)}
            className="fixed bottom-6 right-6 z-40 group"
            aria-label="Open WhatsApp chat"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
              <div className="relative w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer border-4 border-green-400/30">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-black flex items-center justify-center">
                <span className="text-xs font-bold text-white">1</span>
              </div>
            </div>
            <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-gray-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap shadow-xl border border-green-500/30">
                💬 Chat with me
              </div>
            </div>
          </button>
        )}

        {/* Scroll Progress Bar */}
        <div className="fixed top-0 left-0 right-0 h-1 bg-white/10 z-50">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Animated Background */}
        <div
          ref={backgroundRef}
          className="fixed inset-0 opacity-30 pointer-events-none transition-none ease-out"
          style={{
            background: `radial-gradient(600px at 50% 50%, rgba(29, 78, 216, 0.15), transparent 80%)`
          }}
        />

        {/* Floating Particles */}
        {isVisible && (
          <div className="fixed inset-0 pointer-events-none overflow-hidden" suppressHydrationWarning>
            {particles.map((p, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-blue-500/30 rounded-full animate-float"
                style={{
                  left: p.left,
                  top: p.top,
                  animationDelay: p.delay,
                  animationDuration: p.duration
                }}
                suppressHydrationWarning
              />
            ))}
          </div>
        )}

        {/* Hero Section */}
        <section id="about" className="relative px-4 sm:px-6 pt-12 sm:pt-16 pb-8 sm:pb-12 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">

            {/* Status Badges */}
            <div className={`flex flex-wrap items-center gap-2 mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
              <div className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 hover:scale-105 transition-all duration-300 cursor-default backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs sm:text-sm text-emerald-300 font-semibold">Available for Hire</span>
                <Zap className="w-3 sm:w-4 h-3 sm:h-4 text-emerald-400 group-hover:rotate-12 transition-transform" />
              </div>
              <div className="px-3 py-1.5 rounded-full border border-blue-500/40 bg-blue-500/10 hover:scale-105 transition-all duration-300 cursor-default backdrop-blur-sm">
                <span className="text-xs sm:text-sm text-blue-300 font-semibold">🎓 Fresh Graduate 2025</span>
              </div>
              <div className="px-3 py-1.5 rounded-full border border-purple-500/40 bg-purple-500/10 hover:scale-105 transition-all duration-300 cursor-default backdrop-blur-sm">
                <span className="text-xs sm:text-sm text-purple-300 font-semibold flex items-center gap-1">
                  <Star className="w-3 h-3 fill-purple-400 text-purple-400" />
                  Top Performer
                </span>
              </div>
            </div>

            {/* Name */}
            <h1 className={`text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-4 sm:mb-6 leading-none transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="block text-white hover:text-blue-400 transition-colors duration-300 cursor-default drop-shadow-2xl">Kalyan Ram</span>
              <span className="block bg-gradient-to-r from-gray-500 to-gray-700 bg-clip-text text-transparent hover:from-blue-500 hover:to-purple-500 transition-all duration-500 cursor-default">Goparaboina</span>
            </h1>

            {/* Bento Grid */}
            <div className={`grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

              {/* Left Column */}
              <div className="md:col-span-7 space-y-3">

                {/* Professional Card */}
                <div
                  className="group relative p-4 rounded-xl bg-gradient-to-br from-blue-950/60 via-purple-950/60 to-blue-950/60 border border-blue-500/40 hover:border-blue-500/70 hover:scale-105 transition-all duration-500 overflow-hidden backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 rounded-lg bg-blue-500/20 border border-blue-500/40">
                        <Code2 className="w-4 h-4 text-blue-400" />
                      </div>
                      <h2 className="text-base sm:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-pulse">
                        Data Scientist & AI Specialist
                      </h2>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      Building <span className="text-purple-400 font-bold">production-grade AI systems</span> and <span className="text-blue-400 font-bold">scalable web applications</span> with proven results
                    </p>
                  </div>
                </div>

                {/* Education Card */}
                <div
                  className="group relative p-4 rounded-xl bg-gradient-to-br from-emerald-950/60 to-teal-950/60 border border-emerald-500/40 hover:border-emerald-500/70 hover:scale-105 transition-all duration-500 overflow-hidden backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 grid grid-cols-3 gap-3">
                    <div className="col-span-2">
                      <div className="flex items-center gap-2 mb-1.5">
                        <GraduationCap className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-bold text-emerald-300 uppercase tracking-wide">Education</span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-white mb-0.5">B.E. Computer Science & Engineering</h3>
                      <p className="text-xs text-gray-400">Kamala Institute of Technology and Science, Telangana</p>
                      <p className="text-xs text-gray-500 mt-0.5">2021 - 2025</p>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="text-center p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
                        <p className="text-2xl font-black text-white">6.5</p>
                        <p className="text-xs text-emerald-400 font-bold">CGPA</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { icon: Brain, label: "AI Accuracy", value: "90%", color: "rose" },
                    { icon: Zap, label: "ML", value: "95%", color: "blue" },
                    { icon: TrendingUp, label: "Projects", value: "5+", color: "purple" }
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className={`group relative p-3 rounded-xl bg-gradient-to-br from-${item.color}-950/60 to-${item.color}-950/30 border border-${item.color}-500/40 hover:border-${item.color}-500/70 hover:scale-110 hover:-translate-y-1 transition-all duration-500 cursor-default text-center backdrop-blur-sm overflow-hidden`}
                    >
                      <div className="relative z-10">
                        <item.icon className={`w-5 h-5 text-${item.color}-400 mx-auto mb-1.5 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`} />
                        <p className="text-xl font-black text-white">{item.value}</p>
                        <p className="text-xs text-gray-400 font-medium">{item.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column */}
              <div className="md:col-span-5 space-y-2.5">

                {/* Contact Cards */}
                {[
                  { icon: Mail, text: "goparaboinakalyanram@gmail.com", color: "blue", href: "mailto:goparaboinakalyanram@gmail.com" },
                  { icon: Phone, text: "+91 81061-42645", color: "emerald", href: "tel:+918106142645" },
                  { icon: MapPin, text: "Telangana, India", color: "purple", href: "#" }
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className={`block relative p-3 rounded-xl border border-${item.color}-500/30 bg-${item.color}-950/40 hover:bg-${item.color}-950/60 hover:scale-105 hover:border-${item.color}-500/60 transition-all duration-300 group backdrop-blur-sm overflow-hidden`}
                  >
                    <div className="relative z-10 flex items-center gap-2.5">
                      <div className={`p-2 rounded-lg bg-${item.color}-500/10 border border-${item.color}-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <item.icon className={`w-4 h-4 text-${item.color}-400`} />
                      </div>
                      <span className="text-xs text-gray-300 break-all">{item.text}</span>
                    </div>
                  </a>
                ))}

                {/* Social */}
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { icon: Github, href: "https://github.com/KalyanRamGoparaboina", label: "GitHub", color: "purple" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/kalyan-ram-goparaboina-90719435a", label: "LinkedIn", color: "blue" }
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative p-3 rounded-xl border border-${social.color}-500/30 bg-${social.color}-950/40 hover:bg-${social.color}-950/60 hover:scale-110 hover:rotate-2 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm overflow-hidden`}
                    >
                      <div className="relative z-10 flex items-center gap-2">
                        <social.icon className="w-4 h-4 group-hover:scale-125 transition-transform" />
                        <span className="text-xs font-semibold">{social.label}</span>
                      </div>
                    </a>
                  ))}
                </div>

                {/* CTAs */}
                <div className="space-y-2.5 pt-1">
                  <a
                    href="#contact"
                    className="group relative w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105 flex items-center justify-center gap-2 hover:-translate-y-1 text-xs sm:text-sm overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Contact Me
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </a>
                  <a
                    href="/Kalyan_Ram_Resume.pdf"
                    download
                    className="group relative w-full px-4 py-3 border-2 border-white/30 rounded-xl font-bold hover:bg-white hover:text-black transition-all hover:scale-105 flex items-center justify-center gap-2 text-xs sm:text-sm backdrop-blur-sm overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Download className="w-4 h-4 group-hover:animate-bounce" />
                      Download Resume
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Tech Marquee */}
            <div className="overflow-hidden py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="flex animate-marquee">
                {["Python", "Excel", "SQL", "Tableau", "Power BI", "Pandas", "OpenCV", "Flask", "React", "Git", "Python", "Excel", "SQL", "Tableau", "Power BI", "Pandas"].map((tech, idx) => (
                  <span key={idx} className="mx-3 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-300 font-semibold text-xs whitespace-nowrap">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="py-10 sm:py-16 px-4 sm:px-6 border-t border-white/10 bg-black/50 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-500/5 blur-3xl pointer-events-none"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-black p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Left: Avatar/Icon */}
                <div className="relative group flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gray-800 border-4 border-gray-700 flex items-center justify-center relative z-10 overflow-hidden group-hover:scale-105 transition-transform">
                    <User className="w-12 h-12 text-gray-400" />
                  </div>
                </div>
                {/* Right: Text */}
                <div className="text-center md:text-left flex-1">
                  <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 flex items-center justify-center md:justify-start gap-2">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">About Me</span>
                    <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
                  </h2>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                    I am a detail-oriented <strong>Computer Science Engineering graduate</strong> with a strong foundation in Python, Data Science, and Data Analytics. I have a proven track record of building functional applications, ranging from AI-based detection systems to full-stack web platforms.
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Passionate about leveraging Machine Learning and software engineering principles to solve real-world problems. Currently based in Telangana, India, and eager to drive innovation in the tech industry.
                  </p>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-4">
                    {["Python", "Data Science", "Analytics", "AI/ML"].map((tag, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-semibold text-blue-300 bg-blue-500/10 border border-blue-500/30 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="py-8 sm:py-12 px-4 sm:px-6 border-y border-white/10 bg-gradient-to-b from-black via-neutral-950 to-black">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: Code2, label: "Major Projects", value: "5+", color: "blue" },
                { icon: Award, label: "Certifications", value: "5", color: "purple" },
                { icon: TrendingUp, label: "AI Accuracy", value: "90%+", color: "emerald" },
                { icon: Rocket, label: "Dedication", value: "100%", color: "orange" }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`group relative p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-${item.color}-950/50 to-${item.color}-950/20 border border-${item.color}-500/30 hover:border-${item.color}-500/60 hover:scale-110 hover:-translate-y-2 transition-all duration-500 cursor-default backdrop-blur-sm overflow-hidden`}
                >
                  <div className="relative z-10">
                    <item.icon className={`w-6 sm:w-7 h-6 sm:h-7 text-${item.color}-400 mb-2 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`} />
                    <p className="text-3xl sm:text-4xl font-black text-white mb-1">{item.value}</p>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Experience */}
        <section id="education" className="py-12 sm:py-16 px-4 sm:px-6 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-10 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 transition-all duration-500 inline-block cursor-default">
              Education & Experience
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">

              {/* Row 1: College (2/3) & SSC (1/3) */}
              <div
                className="group md:col-span-2 relative p-5 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-900/40 via-blue-950/40 to-purple-950/40 border border-blue-500/20 hover:border-blue-500/50 hover:scale-[1.02] transition-all duration-500 overflow-hidden backdrop-blur-xl shadow-2xl shadow-blue-500/5"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                    <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-blue-500/20">
                      <GraduationCap className="w-8 h-8 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-black text-white mb-2 tracking-tight">B.E. Computer Science & Engineering</h3>
                      <p className="text-base sm:text-lg text-blue-300 font-bold mb-1">Kamala Institute of Technology and Science</p>
                      <div className="flex flex-wrap items-center gap-3 mt-3">
                        <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 text-xs font-black uppercase tracking-wider">2021 - 2025</span>
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                          <span className="text-lg font-black text-white">CGPA: 6.5</span>
                          <span className="text-xs text-blue-400 font-bold">/ 10</span>
                        </div>
                        <span className="text-xs text-blue-400/80 italic font-medium">(Affiliated to JNTUH)</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-black text-blue-400 mb-3 uppercase tracking-[0.2em]">Core Specializations</p>
                      <div className="flex flex-wrap gap-2">
                        {["Data Structures", "Algorithms", "Machine Learning", "Database Systems", "Web Tech", "Networks"].map(course => (
                          <span key={course} className="px-3 py-1.5 rounded-xl bg-blue-500/5 border border-blue-500/10 text-blue-200 text-xs font-bold hover:bg-blue-500/20 hover:border-blue-500/40 transition-all cursor-default">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 border-t border-white/5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          "Excellence in AI & Software Eng.",
                          "Hands-on ML Implementation"
                        ].map((text, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-gray-400">
                            <CheckCircle className="w-4 h-4 text-blue-500" />
                            {text}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="group relative p-5 sm:p-8 rounded-3xl bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/20 hover:border-purple-500/50 hover:scale-[1.02] transition-all duration-500 overflow-hidden backdrop-blur-xl shadow-2xl shadow-purple-500/5"
              >
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/30 w-fit mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Award className="w-7 h-7 text-purple-400" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-white mb-2">Intermediate (MPC)</h3>
                    <p className="text-purple-300 font-bold mb-4">SR Junior College</p>
                    <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-black mb-6">2019 - 2021</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-black/20 border border-white/5 group-hover:bg-black/40 transition-colors">
                    <p className="text-2xl font-black text-white mb-1">8.6 <span className="text-sm font-bold text-purple-400">/ 10</span></p>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">GPA Achievement</p>
                  </div>
                </div>
              </div>

              {/* Row 2: SSC (1/3) & Networking (2/3) */}
              <div
                className="group relative p-5 sm:p-8 rounded-3xl bg-gradient-to-br from-cyan-900/40 to-blue-950/40 border border-cyan-500/20 hover:border-cyan-500/50 hover:scale-[1.02] transition-all duration-500 overflow-hidden backdrop-blur-xl shadow-2xl shadow-cyan-500/5"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-[60px] group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 w-fit mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <GraduationCap className="w-7 h-7 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-black text-white mb-1">Secondary School (SSC)</h3>
                    <p className="text-cyan-300 text-sm font-bold mb-4">Saketha High School</p>
                    <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-black mb-6">2018 - 2019</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-white">9.0</span>
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">GPA Achievement</span>
                  </div>
                </div>
              </div>

              <div
                className="group md:col-span-2 relative p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-900/40 via-teal-950/40 to-emerald-950/40 border border-emerald-500/20 hover:border-emerald-500/50 hover:scale-[1.01] transition-all duration-500 overflow-hidden backdrop-blur-xl shadow-2xl shadow-emerald-500/5"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/5 blur-[120px] pointer-events-none"></div>
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-12 lg:col-span-5">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-emerald-500/20">
                        <Briefcase className="w-8 h-8 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-white line-clamp-1">Networking Intern</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Virtual Experience</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-xl font-black text-white mb-2">Juniper Networks</p>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-sm font-black">2024</span>
                  </div>

                  <div className="md:col-span-12 lg:col-span-7">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { title: "Protocols", desc: "Routing/Switching" },
                        { title: "Security", desc: "Secure Transmission" },
                        { title: "Network", desc: "Troubleshooting" },
                        { title: "Architecture", desc: "Enterprise Infra" }
                      ].map((item, idx) => (
                        <div key={idx} className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all group/item">
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5" />
                            <div>
                              <p className="text-xs font-black text-white">{item.title}</p>
                              <p className="text-[10px] text-gray-400 group-hover/item:text-gray-300">{item.desc}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3: Data Science Intern (Full Width) */}
              <div
                className="group md:col-span-3 relative p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-indigo-900/40 via-violet-950/40 to-indigo-950/40 border border-indigo-500/20 hover:border-indigo-500/50 hover:scale-[1.02] transition-all duration-500 overflow-hidden backdrop-blur-xl shadow-2xl shadow-indigo-500/5"
              >
                <div className="absolute -top-10 -left-10 w-48 h-48 bg-indigo-500/10 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-indigo-500/20">
                        <Brain className="w-8 h-8 text-indigo-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-white">Data Science Intern</h3>
                        <p className="text-indigo-300 font-bold uppercase text-xs tracking-widest mt-1">AI Variant • Remote</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p className="text-3xl font-black text-white mb-1">Impactful ML Solutions</p>
                      <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-sm font-black">2025</span>
                    </div>
                  </div>

                  <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { title: "Predictive Analytics", desc: "Built ML models with 85%+ accuracy for business foresight", icon: Target },
                      { title: "Data Engineering", desc: "Automated cleaning & processing via Pandas pipelines", icon: CheckCircle },
                      { title: "Visualization", desc: "Developed interactive dashboards for stakeholders", icon: Sparkles },
                      { title: "Strategic Insights", desc: "Extracted actionable intelligence from complex datasets", icon: Brain }
                    ].map((item, idx) => (
                      <div key={idx} className="p-5 rounded-3xl bg-white/5 border border-white/10 hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all flex gap-4">
                        <item.icon className="w-6 h-6 text-indigo-400 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-black text-white mb-1">{item.title}</p>
                          <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-12 sm:py-16 px-4 sm:px-6 border-t border-white/10 bg-neutral-950/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 transition-all duration-500 inline-block cursor-default">
              Featured Projects
            </h2>
            <p className="text-sm text-gray-400 mb-8">Production-ready applications showcasing Data Science, AI and Python Full-Stack</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

              {/* Project 1: Invoice Fraud Detection */}
              <div
                className="group relative p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-red-950/40 via-rose-950/40 to-red-950/40 border border-red-500/20 hover:border-red-500/50 hover:scale-[1.03] transition-all duration-500 overflow-hidden backdrop-blur-xl shadow-2xl shadow-red-500/5 h-full flex flex-col"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-[60px] group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-red-500/10 border border-red-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-red-500/20">
                      <Shield className="w-6 h-6 text-red-400" />
                    </div>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 rounded-lg bg-red-500/20 border border-red-500/40 text-red-300 text-[10px] font-black tracking-tighter uppercase animate-pulse">
                        Secure
                      </span>
                      <a href="https://github.com/KalyanRamGoparaboina" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-black/40 border border-white/10 hover:bg-black/60 hover:scale-110 transition-all">
                        <ExternalLink className="w-4 h-4 text-white/70" />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-white mb-2 leading-tight group-hover:text-red-300 transition-colors">Invoice Fraud Detection</h3>
                  <p className="text-xs text-gray-400 mb-6 leading-relaxed flex-grow">Advanced anomaly detection system identifying fraudulent patterns using XGBoost. Achieved 95% precision.</p>

                  <div className="mt-auto space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-2xl bg-black/30 border border-red-500/10 group-hover:border-red-500/30 transition-colors">
                      <div className="text-center flex-1 border-r border-red-500/10">
                        <p className="text-sm font-black text-white">95%</p>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Precision</p>
                      </div>
                      <div className="text-center flex-1">
                        <p className="text-sm font-black text-white">AI/ML</p>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Core Tech</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {["Python", "XGBoost", "ML"].map(tech => (
                        <span key={tech} className="px-2 py-1 rounded-md bg-red-500/5 border border-red-500/10 text-red-300/80 text-[10px] font-bold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 2: Solar Power Generation */}
              <div
                className="group relative p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-yellow-950/40 via-orange-950/40 to-yellow-950/40 border border-yellow-500/20 hover:border-yellow-500/50 hover:scale-[1.03] transition-all duration-500 overflow-hidden backdrop-blur-xl shadow-2xl shadow-yellow-500/5 h-full flex flex-col"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-[60px] group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-yellow-500/10 border border-yellow-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-yellow-500/20">
                      <Sun className="w-6 h-6 text-yellow-400" />
                    </div>
                    <a href="https://github.com/KalyanRamGoparaboina" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-black/40 border border-white/10 hover:bg-black/60 hover:scale-110 transition-all">
                      <ExternalLink className="w-4 h-4 text-white/70" />
                    </a>
                  </div>

                  <h3 className="text-lg font-black text-white mb-2 leading-tight group-hover:text-yellow-300 transition-colors">Solar Power Generation</h3>
                  <p className="text-xs text-gray-400 mb-6 leading-relaxed flex-grow">IoT-based solar panel monitoring with ML predictive maintenance for optimized energy harvesting.</p>

                  <div className="mt-auto space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-2xl bg-black/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-colors">
                      <div className="text-center flex-1 border-r border-yellow-500/10">
                        <p className="text-sm font-black text-white">40%</p>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Efficiency</p>
                      </div>
                      <div className="text-center flex-1">
                        <p className="text-sm font-black text-white">IoT</p>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Domain</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {["Python", "ESP32", "IoT"].map(tech => (
                        <span key={tech} className="px-2 py-1 rounded-md bg-yellow-500/5 border border-yellow-500/10 text-yellow-300/80 text-[10px] font-bold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 3: Resume Classification */}
              <div
                className="group relative p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-blue-900/40 via-indigo-950/40 to-blue-950/40 border border-blue-500/20 hover:border-blue-500/50 hover:scale-[1.03] transition-all duration-500 overflow-hidden backdrop-blur-xl shadow-2xl shadow-blue-500/5 h-full flex flex-col"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[60px] group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-blue-500/20">
                      <Briefcase className="w-6 h-6 text-blue-400" />
                    </div>
                    <a href="https://github.com/KalyanRamGoparaboina" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-black/40 border border-white/10 hover:bg-black/60 hover:scale-110 transition-all">
                      <ExternalLink className="w-4 h-4 text-white/70" />
                    </a>
                  </div>

                  <h3 className="text-lg font-black text-white mb-2 leading-tight group-hover:text-blue-300 transition-colors">Resume Classification</h3>
                  <p className="text-xs text-gray-400 mb-6 leading-relaxed flex-grow">NLP-powered recruitment engine categorizing resumes into sectors using advanced TF-IDF analysis.</p>

                  <div className="mt-auto space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-2xl bg-black/30 border border-blue-500/10 group-hover:border-blue-500/30 transition-colors">
                      <div className="text-center flex-1 border-r border-blue-500/10">
                        <p className="text-sm font-black text-white">92%</p>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Accuracy</p>
                      </div>
                      <div className="text-center flex-1">
                        <p className="text-sm font-black text-white">NLP</p>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Field</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {["Python", "NLTK", "NLP"].map(tech => (
                        <span key={tech} className="px-2 py-1 rounded-md bg-blue-500/5 border border-blue-500/10 text-blue-300/80 text-[10px] font-bold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 4: Bus Booking System */}
              <div
                className="group relative p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-purple-900/40 via-violet-950/40 to-purple-950/40 border border-purple-500/20 hover:border-purple-500/50 hover:scale-[1.03] transition-all duration-500 overflow-hidden backdrop-blur-xl shadow-2xl shadow-purple-500/5 h-full flex flex-col"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[60px] group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-purple-500/20">
                      <Terminal className="w-6 h-6 text-purple-400" />
                    </div>
                    <a href="https://github.com/KalyanRamGoparaboina" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-black/40 border border-white/10 hover:bg-black/60 hover:scale-110 transition-all">
                      <ExternalLink className="w-4 h-4 text-white/70" />
                    </a>
                  </div>

                  <h3 className="text-lg font-black text-white mb-2 leading-tight group-hover:text-purple-300 transition-colors">Bus Booking System</h3>
                  <p className="text-xs text-gray-400 mb-6 leading-relaxed flex-grow">Full-stack Flask application with real-time availability tracking and secure dashboard interface.</p>

                  <div className="mt-auto space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-2xl bg-black/30 border border-purple-500/10 group-hover:border-purple-500/30 transition-colors">
                      <div className="text-center flex-1 border-r border-purple-500/10">
                        <p className="text-sm font-black text-white">SQL</p>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Database</p>
                      </div>
                      <div className="text-center flex-1">
                        <p className="text-sm font-black text-white">Flask</p>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Backend</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {["Python", "Flask", "SQL"].map(tech => (
                        <span key={tech} className="px-2 py-1 rounded-md bg-purple-500/5 border border-purple-500/10 text-purple-300/80 text-[10px] font-bold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 5: Handwritten to Text */}
              <div
                className="group relative p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-emerald-900/40 via-teal-950/40 to-emerald-950/40 border border-emerald-500/20 hover:border-emerald-500/50 hover:scale-[1.03] transition-all duration-500 overflow-hidden backdrop-blur-xl shadow-2xl shadow-emerald-500/5 h-full flex flex-col"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[60px] group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-emerald-500/20">
                      <Code2 className="w-6 h-6 text-emerald-400" />
                    </div>
                    <a href="https://github.com/KalyanRamGoparaboina" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-black/40 border border-white/10 hover:bg-black/60 hover:scale-110 transition-all">
                      <ExternalLink className="w-4 h-4 text-white/70" />
                    </a>
                  </div>

                  <h3 className="text-lg font-black text-white mb-2 leading-tight group-hover:text-emerald-300 transition-colors">Handwritten to Text</h3>
                  <p className="text-xs text-gray-400 mb-6 leading-relaxed flex-grow">OCR-based extraction engine using Tesseract to convert cursive handwriting into digitised text.</p>

                  <div className="mt-auto space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-2xl bg-black/30 border border-emerald-500/10 group-hover:border-emerald-500/30 transition-colors">
                      <div className="text-center flex-1 border-r border-emerald-500/10">
                        <p className="text-sm font-black text-white">90%</p>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">OCR Accuracy</p>
                      </div>
                      <div className="text-center flex-1">
                        <p className="text-sm font-black text-white">Vision</p>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">AI Type</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {["Python", "Tesseract", "OpenCV"].map(tech => (
                        <span key={tech} className="px-2 py-1 rounded-md bg-emerald-500/5 border border-emerald-500/10 text-emerald-300/80 text-[10px] font-bold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 6: Restaurant Menu System */}
              <div
                className="group relative p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-pink-900/40 via-rose-950/40 to-pink-950/40 border border-pink-500/20 hover:border-pink-500/50 hover:scale-[1.03] transition-all duration-500 overflow-hidden backdrop-blur-xl shadow-2xl shadow-pink-500/5 h-full flex flex-col"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-[60px] group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-pink-500/10 border border-pink-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-pink-500/20">
                      <Database className="w-6 h-6 text-pink-400" />
                    </div>
                    <a href="https://github.com/KalyanRamGoparaboina/Restaurant-Menu" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-black/40 border border-white/10 hover:bg-black/60 hover:scale-110 transition-all">
                      <ExternalLink className="w-4 h-4 text-white/70" />
                    </a>
                  </div>

                  <h3 className="text-lg font-black text-white mb-2 leading-tight group-hover:text-pink-300 transition-colors">Restaurant POS System</h3>
                  <p className="text-xs text-gray-400 mb-6 leading-relaxed flex-grow">Digital inventory and ordering system for restaurants with dynamic price tracking and POS reports.</p>

                  <div className="mt-auto space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-2xl bg-black/30 border border-pink-500/10 group-hover:border-pink-500/30 transition-colors">
                      <div className="text-center flex-1 border-r border-pink-500/10">
                        <p className="text-sm font-black text-white">POS</p>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">System</p>
                      </div>
                      <div className="text-center flex-1">
                        <p className="text-sm font-black text-white">Data</p>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Visuals</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {["Python", "GUI", "Visuals"].map(tech => (
                        <span key={tech} className="px-2 py-1 rounded-md bg-pink-500/5 border border-pink-500/10 text-pink-300/80 text-[10px] font-bold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Project Spotlight: Mana Aaharam (Live Demo) */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 border-t border-white/10 bg-black/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-green-500/10 rounded-full blur-[90px] pointer-events-none"></div>

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Section Header */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-emerald-400 hover:to-green-500 transition-all duration-500 inline-block cursor-default">
              Dream App to Build
            </h2>
            <p className="text-sm text-gray-400 mb-10">Production-ready applications showcasing Data Science, AI and Python Full-Stack</p>

            <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-14">

              {/* Left: Project Info */}
              <div className="flex-1 space-y-6 sm:space-y-8 text-center lg:text-left">

                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
                    Mana Aaharam
                  </h2>
                  <h3 className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-500">
                    Food Waste Reduction Platform
                  </h3>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  A comprehensive ecosystem connecting restaurants, event organizers, and donors with NGOs to redistribute excess food. Features <span className="text-white font-bold">real-time geolocation tracking</span>, automated inventory alerts, and a dynamic dashboard for seamless logistics tracking.
                </p>

                <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all group">
                    <Target className="w-6 h-6 text-emerald-400 mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Latency</p>
                    <p className="text-lg font-black text-white">Real-time</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all group">
                    <Users className="w-6 h-6 text-emerald-400 mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Impact</p>
                    <p className="text-lg font-black text-white">Community</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                  <a href="#mana-demo" className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-1 transition-all flex items-center gap-2.5 group">
                    <ExternalLink className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                    <span>View Prototype</span>
                  </a>
                  <a href="https://github.com/KalyanRamGoparaboina/Mana-Aaharam" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold hover:-translate-y-1 transition-all flex items-center gap-2.5">
                    <Github className="w-5 h-5" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>

              {/* Right: Mock Browser / Live Demo Visual */}
              <div className="flex-1 w-full max-w-xl mx-auto perspective-1000">
                <div className="relative rounded-xl bg-gray-900 border border-gray-800 shadow-2xl overflow-hidden transform hover:rotate-y-2 transition-transform duration-700">
                  {/* Browser Toolbar styling for consistency */}
                  <div className="flex items-center gap-3 px-4 py-3 bg-black/50 border-b border-white/5">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="px-4 py-1 rounded-md bg-white/5 text-[10px] text-gray-500 font-mono border border-white/5 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        mana-aaharam.live/dashboard
                      </div>
                    </div>
                  </div>

                  {/* Mock Screen Content */}
                  <div className="relative aspect-[4/3] bg-[#0f1115] p-4 flex flex-col gap-3 group">
                    {/* Mock Header */}
                    <div className="flex justify-between items-center mb-2">
                      <div className="w-24 h-6 rounded-md bg-white/10"></div>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-full bg-white/10"></div>
                        <div className="w-8 h-8 rounded-full bg-white/10"></div>
                      </div>
                    </div>

                    {/* Mock Dashboard Grid */}
                    <div className="flex h-full bg-[#0f1115] text-white overflow-hidden font-sans">

                      {/* Sidebar */}
                      <div className="w-16 sm:w-20 bg-[#1a1d24] border-r border-white/5 flex flex-col items-center py-4 gap-4 flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center mb-2">
                          <Leaf className="w-4 h-4 text-white" />
                        </div>
                        <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                          <Target className="w-5 h-5" />
                        </div>
                        <div className="p-2 rounded-lg hover:bg-white/5 text-gray-400">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div className="p-2 rounded-lg hover:bg-white/5 text-gray-400">
                          <TrendingUp className="w-5 h-5" />
                        </div>
                        <div className="mt-auto p-2 rounded-lg hover:bg-white/5 text-gray-400">
                          <User className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Main Content */}
                      <div className="flex-1 flex flex-col min-w-0">
                        {/* Header */}
                        <div className="h-12 border-b border-white/5 flex items-center justify-between px-4">
                          <span className="text-xs font-bold text-gray-400">Live Dashboard</span>
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-[10px] uppercase font-bold text-green-500 tracking-wider">System Online</span>
                          </div>
                        </div>

                        {/* Content Scroll Area */}
                        <div className="flex-1 p-4 overflow-hidden relative">

                          {/* Stats Row */}
                          <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className="p-3 rounded-xl bg-[#1a1d24] border border-white/5 relative overflow-hidden group">
                              <div className="absolute right-0 top-0 p-3 opacity-10">
                                <Leaf className="w-12 h-12 text-emerald-500" />
                              </div>
                              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">Food Saved</p>
                              <p className="text-xl font-black text-white">1,240 <span className="text-xs font-medium text-emerald-500">kg</span></p>
                            </div>
                            <div className="p-3 rounded-xl bg-[#1a1d24] border border-white/5 relative overflow-hidden">
                              <div className="absolute right-0 top-0 p-3 opacity-10">
                                <Users className="w-12 h-12 text-blue-500" />
                              </div>
                              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">Active NGOs</p>
                              <p className="text-xl font-black text-white">42</p>
                            </div>
                          </div>

                          {/* Map & List Split */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 h-32 sm:h-40">

                            {/* Live Map Area */}
                            <div className="sm:col-span-2 rounded-xl bg-[#1a1d24] border border-white/5 relative overflow-hidden flex flex-col">
                              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(16,185,129,0.1),_transparent_70%)]"></div>
                              <div className="absolute inset-0 p-4">
                                {/* Map Pins */}
                                <div className="absolute top-1/4 left-1/4 flex flex-col items-center gap-1 group/pin cursor-default">
                                  <div className="relative">
                                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping absolute inset-0"></div>
                                    <div className="w-3 h-3 bg-emerald-500 rounded-full relative border-2 border-[#1a1d24]"></div>
                                  </div>
                                  <div className="px-2 py-0.5 rounded bg-black/80 text-[8px] font-bold text-white opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
                                    Donation #128
                                  </div>
                                </div>
                                <div className="absolute bottom-1/3 right-1/3 flex flex-col items-center gap-1 group/pin cursor-default" style={{ animationDelay: '1s' }}>
                                  <div className="relative">
                                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-ping absolute inset-0" style={{ animationDelay: '0.5s' }}></div>
                                    <div className="w-3 h-3 bg-orange-500 rounded-full relative border-2 border-[#1a1d24]"></div>
                                  </div>
                                  <div className="px-2 py-0.5 rounded bg-black/80 text-[8px] font-bold text-white opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
                                    Request #094
                                  </div>
                                </div>
                              </div>
                              <div className="mt-auto p-2 bg-black/20 backdrop-blur-sm border-t border-white/5 flex justify-between items-center px-3">
                                <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                                  <MapPin className="w-3 h-3" /> Live Tracking
                                </span>
                              </div>
                            </div>

                            {/* Recent Activity List */}
                            <div className="hidden sm:flex col-span-1 rounded-xl bg-[#1a1d24] border border-white/5 flex-col p-3 overflow-hidden">
                              <p className="text-[10px] text-gray-500 font-bold uppercase mb-2">Recent</p>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                  <div>
                                    <p className="text-[10px] font-bold text-white">Rice Packs</p>
                                    <p className="text-[8px] text-gray-500">2m ago • Hyderabad</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                  <div>
                                    <p className="text-[10px] font-bold text-white">Pickup Done</p>
                                    <p className="text-[8px] text-gray-500">15m ago • NGO</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                  <div>
                                    <p className="text-[10px] font-bold text-white">Veg Curries</p>
                                    <p className="text-[8px] text-gray-500">45m ago • Banquet</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Expertise */}
        <section id="skills" className="py-12 sm:py-16 px-4 sm:px-6 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 sm:mb-10 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 transition-all duration-500 inline-block cursor-default">
              Technical Expertise
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-8 sm:mb-10">
              {[
                {
                  category: "Programming & Databases",
                  skills: [
                    { name: "Python", level: 80, color: "#3B82F6" },
                    { name: "SQL", level: 85, color: "#A855F7" },
                    { name: "Excel", level: 90, color: "#10B981" },
                    { name: "Power BI", level: 85, color: "#FACC15" }
                  ]
                },
                {
                  category: "AI & Data Science",
                  skills: [
                    { name: "Machine Learning", level: 80, color: "#3B82F6" },
                    { name: "Tableau", level: 80, color: "#EC4899" },
                    { name: "Deep Learning", level: 75, color: "#F43F5E" },
                    { name: "Data Science (Pandas/NumPy)", level: 80, color: "#3B82F6" }
                  ]
                }
              ].map((section, idx) => (
                <div
                  key={idx}
                  className="group relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 border border-white/10 hover:border-white/20 hover:scale-105 transition-all duration-500 overflow-hidden backdrop-blur-sm"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="relative z-10">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500">
                      {section.category}
                    </h3>
                    <div className="space-y-4">
                      {section.skills.map((skill, i) => (
                        <div key={i} className="group/skill">
                          <div className="flex justify-between items-center mb-1.5">
                            <span className="text-xs sm:text-sm font-semibold text-gray-300 group-hover/skill:text-white transition-colors">{skill.name}</span>
                            <span className="text-xs font-bold group-hover/skill:scale-125 transition-transform" style={{ color: skill.color }}>{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-neutral-800 rounded-full overflow-hidden group-hover/skill:shadow-lg transition-all">
                            <div
                              className="h-full rounded-full transition-all duration-1000 ease-out group-hover/skill:animate-pulse"
                              style={{
                                width: `${skill.level}%`,
                                background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`,
                                animation: 'slideIn 2s ease-out'
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Soft Skills Section */}
            <div
              className="group relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 border border-white/10 hover:border-white/20 hover:scale-[1.02] transition-all duration-500 overflow-hidden backdrop-blur-sm mb-12"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-teal-400 transition-all duration-500 flex items-center gap-2">
                  <Users className="w-5 h-5 text-green-400" />
                  Soft Skills Expertise
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {softSkills.map((skill, i) => (
                    <div key={i} className="group/skill">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-xs sm:text-sm font-semibold text-gray-300 group-hover/skill:text-white transition-colors">{skill.name}</span>
                        <span className="text-xs font-bold group-hover/skill:scale-125 transition-transform" style={{ color: skill.color }}>{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-neutral-800 rounded-full overflow-hidden group-hover/skill:shadow-lg transition-all">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out group-hover/skill:animate-pulse"
                          style={{
                            width: `${skill.level}%`,
                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`,
                            animation: 'slideIn 2s ease-out'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-yellow-500/10 border border-yellow-500/30">
                    <Award className="w-6 sm:w-7 h-6 sm:h-7 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white">Professional Certifications</h3>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {certificates.map((cert, idx) => (
                  <div
                    key={idx}
                    className="group/cert relative p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-yellow-950/30 via-orange-950/30 to-red-950/30 border border-yellow-500/20 hover:border-yellow-500/60 transition-all duration-500 cursor-default overflow-hidden hover:scale-105 hover:-translate-y-2 backdrop-blur-sm"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-orange-500/0 group-hover/cert:from-yellow-500/10 group-hover/cert:to-orange-500/10 transition-all duration-500"></div>

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-3">
                        <div className="p-2.5 rounded-xl bg-yellow-500/10 border border-yellow-500/30 group-hover/cert:scale-110 group-hover/cert:rotate-12 transition-all duration-300">
                          <Award className="w-5 h-5 text-yellow-400" />
                        </div>
                        <span className="px-2 py-1 rounded-md bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-bold group-hover/cert:animate-pulse">
                          {cert.year}
                        </span>
                      </div>

                      <h4 className="text-sm sm:text-base font-bold text-white mb-2 leading-tight group-hover/cert:text-yellow-300 transition-colors">
                        {cert.name}
                      </h4>

                      <div className="flex items-center gap-1.5 mb-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <p className="text-xs text-gray-400">{cert.issuer}</p>
                      </div>

                      <div className="flex items-center gap-1.5 mb-3">
                        <Calendar className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                        <p className="text-xs text-gray-500">{cert.date}</p>
                      </div>

                      <p className="text-xs text-gray-400 leading-relaxed mb-3 line-clamp-2">
                        {cert.description}
                      </p>

                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3 h-3 text-yellow-400 group-hover/cert:rotate-180 transition-transform duration-500" />
                        <span className="text-xs font-semibold text-yellow-400">{cert.level}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CHAT BOX STYLE CONTACT SECTION */}
        <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6 border-t border-white/10 bg-gradient-to-b from-neutral-950/50 to-black">
          <div className="max-w-5xl mx-auto">

            {/* Chat Header */}
            <div className="relative rounded-t-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-8 overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
              <div className="relative z-10 text-center">
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-2xl">
                      <Rocket className="w-10 h-10 text-purple-600" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-blue-600 animate-pulse"></div>
                  </div>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">
                  Let's Build Something Amazing
                </h2>
                <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto">
                  Open to <span className="font-bold text-white">Data Science</span> and <span className="font-bold text-white">Machine Learning</span> opportunities
                </p>
              </div>
            </div>

            {/* Chat Body */}
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-b-3xl p-6 sm:p-8 border-x border-b border-white/10 backdrop-blur-sm">

              {/* Incoming Messages */}
              <div className="space-y-4 mb-6">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl rounded-tl-sm p-4 shadow-lg border border-gray-600">
                      <p className="text-sm text-gray-200 leading-relaxed">
                        👋 Hey there! I'm actively looking for exciting opportunities in Data Science and AI. Let's connect and create something impactful together!
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>Online now</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {[
                  {
                    icon: Mail,
                    title: "Email Me",
                    value: "goparaboinakalyanram@gmail.com",
                    href: "mailto:goparaboinakalyanram@gmail.com",
                    gradient: "from-blue-600 to-cyan-600",
                    iconBg: "from-blue-500 to-cyan-500"
                  },
                  {
                    icon: Phone,
                    title: "Call Me",
                    value: "+91 81061-42645",
                    href: "tel:+918106142645",
                    gradient: "from-emerald-600 to-teal-600",
                    iconBg: "from-emerald-500 to-teal-500"
                  },
                  {
                    icon: Linkedin,
                    title: "LinkedIn",
                    value: "Let's network professionally",
                    href: "https://www.linkedin.com/in/kalyan-ram-goparaboina-90719435a",
                    gradient: "from-blue-600 to-indigo-600",
                    iconBg: "from-blue-500 to-indigo-500"
                  },
                  {
                    icon: Github,
                    title: "GitHub",
                    value: "Explore my repositories",
                    href: "https://github.com/KalyanRamGoparaboina",
                    gradient: "from-purple-600 to-pink-600",
                    iconBg: "from-purple-500 to-pink-500"
                  },
                  {
                    icon: MessageCircle,
                    title: "WhatsApp",
                    value: "Chat instantly",
                    href: "#",
                    gradient: "from-green-600 to-emerald-600",
                    iconBg: "from-green-500 to-emerald-500",
                    onClick: () => setWhatsappPopup(true)
                  },
                  {
                    icon: MapPin,
                    title: "Location",
                    value: "Telangana, India 🇮🇳",
                    href: "#",
                    gradient: "from-rose-600 to-pink-600",
                    iconBg: "from-rose-500 to-pink-500"
                  }
                ].map((contact, idx) => (
                  <a
                    key={idx}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    onClick={contact.onClick}
                    className={`group relative p-5 rounded-2xl bg-gradient-to-br ${contact.gradient} overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer`}
                    aria-label={`Contact via ${contact.title}`}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500"></div>
                    <div className="relative z-10">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${contact.iconBg} shadow-lg flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-base font-bold text-white mb-1">
                        {contact.title}
                      </h3>
                      <p className="text-xs text-white/80 break-words leading-relaxed">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Download Resume CTA */}
              <div className="text-center space-y-4">
                <a
                  href="/Kalyan_Ram_Resume.pdf"
                  download
                  className="group inline-flex items-center gap-3 px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl font-black text-base sm:text-lg hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-110 transition-all duration-500 relative overflow-hidden"
                  aria-label="Download resume"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Download className="w-5 sm:w-6 h-5 sm:h-6 group-hover:animate-bounce relative z-10" />
                  <span className="relative z-10">Download Complete Resume</span>
                  <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 group-hover:rotate-180 transition-transform duration-500 relative z-10" />
                </a>
                <div className="flex items-center justify-center gap-4 text-xs text-gray-400 flex-wrap">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Available for immediate joining</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4 text-blue-400" />
                    <span>Open to relocation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="mt-12 py-6 border-t border-white/10 text-center bg-black">
          <p className="text-xs sm:text-sm text-gray-500 hover:text-gray-300 transition-colors duration-300">
            © 2025 Kalyan Ram Goparaboina • Crafted with ❤️
          </p>
        </div>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          @keyframes slideIn {
            0% { width: 0%; }
          }
          @keyframes fadeIn {
            0% { opacity: 0; transform: scale(0.95); }
            100% { opacity: 1; transform: scale(1); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
            50% { transform: translateY(-20px) translateX(10px); opacity: 0.6; }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }
          .animate-float {
            animation: float linear infinite;
          }
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </main>
    </>
  );
}