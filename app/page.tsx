"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Phone, ExternalLink, GraduationCap, Award, Briefcase, Code2, Terminal, Database, Brain, Zap, TrendingUp, Target, Sparkles, Sun, Battery, Leaf, Send, Users, Lightbulb, CheckCircle2, Star, Trophy, Rocket, Shield, Flame, Clock, Activity } from "lucide-react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleMouse = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Calculate scroll progress
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
    window.addEventListener('mousemove', handleMouse);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const seoData = {
    title: "Kalyan Ram Goparaboina - Data Scientist & AI Specialist | Portfolio",
    description: "Computer Science Graduate specializing in Data Science, AI/ML, and Full-Stack Development. Expert in Python, Flask, React, Deep Learning, and Cloud Technologies. Available for hire.",
    keywords: "Kalyan Ram Goparaboina, Data Scientist, AI Specialist, Machine Learning Engineer, Python Developer, Flask Developer, React Developer, Computer Vision, Data Science, Telangana Developer, Fresh Graduate 2025",
    url: "https://kalyanramgoparaboina.com",
    image: "/og-image.jpg"
  };

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="title" content={seoData.title} />
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta name="author" content="Kalyan Ram Goparaboina" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href={seoData.url} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.url} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.image} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={seoData.url} />
        <meta property="twitter:title" content={seoData.title} />
        <meta property="twitter:description" content={seoData.description} />
        <meta property="twitter:image" content={seoData.image} />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Telangana" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Kalyan Ram Goparaboina",
            "url": seoData.url,
            "image": seoData.image,
            "jobTitle": "Data Scientist & AI Specialist",
            "worksFor": { "@type": "Organization", "name": "Freelance" },
            "address": { "@type": "PostalAddress", "addressLocality": "Telangana", "addressCountry": "IN" },
            "email": "goparaboinakalyanram@gmail.com",
            "telephone": "+91-81061-42645",
            "alumniOf": { "@type": "Organization", "name": "Kamala Institute of Technology and Science" },
            "knowsAbout": ["Python", "Flask", "React", "Machine Learning", "Deep Learning", "Computer Vision", "Data Science", "Full Stack Development"],
            "sameAs": ["https://github.com/KalyanRamGoparaboina", "https://linkedin.com/in/kalyanramgoparaboina"]
          })}
        </script>

        <style jsx global>{`
          html {
            scroll-behavior: smooth;
          }
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

        {/* Scroll Progress Bar */}
        <div className="fixed top-0 left-0 right-0 h-1 bg-white/10 z-50">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Animated Background - EXACT THEME */}
        <div className="fixed inset-0 opacity-30 pointer-events-none transition-all duration-1000 ease-out"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
          }}
        />

        {/* Hero Section - EXACT THEME */}
        <section id="about" className="relative px-4 sm:px-6 pt-12 sm:pt-16 pb-8 sm:pb-12 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">
            
            {/* Status Badges */}
            <div className={`flex flex-wrap items-center gap-2 mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
              <div className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 hover:scale-105 transition-all duration-300 cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs sm:text-sm text-emerald-300 font-semibold">Available for Hire</span>
                <Zap className="w-3 sm:w-4 h-3 sm:h-4 text-emerald-400 group-hover:rotate-12 transition-transform" />
              </div>
              <div className="px-3 py-1.5 rounded-full border border-blue-500/40 bg-blue-500/10 hover:scale-105 transition-all duration-300 cursor-default">
                <span className="text-xs sm:text-sm text-blue-300 font-semibold">🎓 Fresh Graduate 2025</span>
              </div>
            </div>

            {/* Name */}
            <h1 className={`text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-4 sm:mb-6 leading-none transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="block text-white hover:text-blue-400 transition-colors duration-300 cursor-default">Kalyan Ram</span>
              <span className="block bg-gradient-to-r from-gray-500 to-gray-700 bg-clip-text text-transparent hover:from-blue-500 hover:to-purple-500 transition-all duration-500 cursor-default">Goparaboina</span>
            </h1>

            {/* Bento Grid */}
            <div className={`grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              
              {/* Left Column */}
              <div className="md:col-span-7 space-y-3">
                
                {/* Professional Card - UPDATED TITLE */}
                <div className="group p-4 rounded-xl bg-gradient-to-br from-blue-950/60 via-purple-950/60 to-blue-950/60 border border-blue-500/40 hover:border-blue-500/70 hover:scale-105 transition-all duration-500 relative overflow-hidden">
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
                <div className="group p-4 rounded-xl bg-gradient-to-br from-emerald-950/60 to-teal-950/60 border border-emerald-500/40 hover:border-emerald-500/70 hover:scale-105 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 grid grid-cols-3 gap-3">
                    <div className="col-span-2">
                      <div className="flex items-center gap-2 mb-1.5">
                        <GraduationCap className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-bold text-emerald-300 uppercase tracking-wide">Education</span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-white mb-0.5">B.E. Computer Science</h3>
                      <p className="text-xs text-gray-400">Kamala Institute, Telangana</p>
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
                    { icon: Zap, label: "OCR Engine", value: "95%", color: "blue" },
                    { icon: TrendingUp, label: "Projects", value: "5+", color: "purple" }
                  ].map((item, idx) => (
                    <div key={idx} className={`group p-3 rounded-xl bg-gradient-to-br from-${item.color}-950/60 to-${item.color}-950/30 border border-${item.color}-500/40 hover:border-${item.color}-500/70 hover:scale-110 hover:-translate-y-1 transition-all duration-500 cursor-default text-center`}>
                      <item.icon className={`w-5 h-5 text-${item.color}-400 mx-auto mb-1.5 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`} />
                      <p className="text-xl font-black text-white">{item.value}</p>
                      <p className="text-xs text-gray-400 font-medium">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - WITH PHONE */}
              <div className="md:col-span-5 space-y-2.5">
                
                {/* Contact Cards - ADDED PHONE */}
                {[
                  { icon: Mail, text: "goparaboinakalyanram@gmail.com", color: "blue", href: "mailto:goparaboinakalyanram@gmail.com" },
                  { icon: Phone, text: "+91 81061-42645", color: "emerald", href: "tel:+918106142645" },
                  { icon: MapPin, text: "Telangana, India", color: "purple", href: "#" }
                ].map((item, idx) => (
                  <a key={idx} href={item.href} className={`block p-3 rounded-xl border border-${item.color}-500/30 bg-${item.color}-950/40 hover:bg-${item.color}-950/60 hover:scale-105 hover:border-${item.color}-500/60 transition-all duration-300 group`}>
                    <div className="flex items-center gap-2.5">
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
                    { icon: Linkedin, href: "https://linkedin.com/in/kalyanramgoparaboina", label: "LinkedIn", color: "blue" }
                  ].map((social) => (
                    <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                      className={`group p-3 rounded-xl border border-${social.color}-500/30 bg-${social.color}-950/40 hover:bg-${social.color}-950/60 hover:scale-110 hover:rotate-2 transition-all duration-300 flex items-center justify-center gap-2`}>
                      <social.icon className="w-4 h-4 group-hover:scale-125 transition-transform" />
                      <span className="text-xs font-semibold">{social.label}</span>
                    </a>
                  ))}
                </div>

                {/* CTAs - UPDATED RESUME PATH */}
                <div className="space-y-2.5 pt-1">
                  <a href="#contact" className="group w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105 flex items-center justify-center gap-2 hover:-translate-y-1 text-xs sm:text-sm">
                    Contact Me
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </a>
                  <a href="/KalyanRamGoparaboina.pdf" download className="group w-full px-4 py-3 border-2 border-white/30 rounded-xl font-bold hover:bg-white hover:text-black transition-all hover:scale-105 flex items-center justify-center gap-2 text-xs sm:text-sm">
                    <Download className="w-4 h-4 group-hover:animate-bounce" />
                    Download Resume
                  </a>
                </div>
              </div>
            </div>

            {/* Tech Marquee */}
            <div className="overflow-hidden py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="flex animate-marquee">
                {["Python", "Flask", "React", "Next.js", "OpenCV", "TensorFlow", "Pandas", "SQL", "Git", "Docker", "Python", "Flask", "React", "Next.js"].map((tech, idx) => (
                  <span key={idx} className="mx-3 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-300 font-semibold text-xs whitespace-nowrap">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Highlights - FIXED COLORS */}
        <section className="py-8 sm:py-12 px-4 sm:px-6 border-y border-white/10 bg-gradient-to-b from-black via-neutral-950 to-black">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {/* Major Projects */}
              <div className="group p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-blue-950/50 to-blue-950/20 border border-blue-500/30 hover:border-blue-500/60 hover:scale-110 hover:-translate-y-2 transition-all duration-500 cursor-default">
                <Code2 className="w-6 sm:w-7 h-6 sm:h-7 text-blue-400 mb-2 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                <p className="text-3xl sm:text-4xl font-black text-white mb-1">5+</p>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Major Projects</p>
              </div>

              {/* Certifications */}
              <div className="group p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-purple-950/50 to-purple-950/20 border border-purple-500/30 hover:border-purple-500/60 hover:scale-110 hover:-translate-y-2 transition-all duration-500 cursor-default">
                <Award className="w-6 sm:w-7 h-6 sm:h-7 text-purple-400 mb-2 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                <p className="text-3xl sm:text-4xl font-black text-white mb-1">4</p>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Major Certifications</p>
              </div>

              {/* AI Accuracy */}
              <div className="group p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-emerald-950/50 to-emerald-950/20 border border-emerald-500/30 hover:border-emerald-500/60 hover:scale-110 hover:-translate-y-2 transition-all duration-500 cursor-default">
                <TrendingUp className="w-6 sm:w-7 h-6 sm:h-7 text-emerald-400 mb-2 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                <p className="text-3xl sm:text-4xl font-black text-white mb-1">90%+</p>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">AI Accuracy</p>
              </div>

              {/* Dedication */}
              <div className="group p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-orange-950/50 to-orange-950/20 border border-orange-500/30 hover:border-orange-500/60 hover:scale-110 hover:-translate-y-2 transition-all duration-500 cursor-default">
                <Zap className="w-6 sm:w-7 h-6 sm:h-7 text-orange-400 mb-2 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                <p className="text-3xl sm:text-4xl font-black text-white mb-1">100%</p>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Dedication</p>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Experience - WITH DATA SCIENCE INTERN */}
        <section id="education" className="py-12 sm:py-16 px-4 sm:px-6 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-10 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 transition-all duration-500 inline-block cursor-default">
              Education & Experience
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
              
              {/* College */}
              <div className="group md:col-span-2 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-blue-950/50 to-purple-950/50 border border-blue-500/30 hover:border-blue-500/60 hover:scale-105 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <GraduationCap className="w-6 sm:w-7 h-6 sm:h-7 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">B.E. Computer Science Engineering</h3>
                      <p className="text-sm sm:text-base text-blue-300 font-semibold mb-1">Kamala Institute of Technology, Telangana</p>
                      <p className="text-xs text-blue-400/80 italic mb-1">(Affiliated by JNTUH)</p>
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="px-2.5 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 text-xs font-bold">2021 - 2025</span>
                        <span className="text-lg sm:text-xl font-black text-white">CGPA: 6.5/10</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <p className="text-xs font-bold text-blue-300 mb-2 uppercase tracking-wide">Key Subjects</p>
                    <div className="flex flex-wrap gap-1.5">
                      {["Data Structures", "Algorithms", "Machine Learning", "Database Systems", "Web Technologies", "Networks"].map(course => (
                        <span key={course} className="px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs hover:bg-blue-500/20 hover:scale-110 transition-all duration-300 cursor-default">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-blue-500/20">
                    <ul className="space-y-1 text-xs text-gray-300">
                      <li className="flex items-start gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>Strong foundation in software engineering & AI</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>Hands-on projects in AI and Full-Stack Development</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Intermediate */}
              <div className="group p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-purple-950/50 to-pink-950/50 border border-purple-500/30 hover:border-purple-500/60 hover:scale-105 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-28 h-28 bg-purple-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/30 w-fit mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <GraduationCap className="w-6 sm:w-7 h-6 sm:h-7 text-purple-400" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1.5">Intermediate (MPC)</h3>
                  <p className="text-sm text-purple-300 font-semibold mb-2">SR Junior College</p>
                  <span className="block px-2.5 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-bold w-fit mb-1.5">2019 - 2021</span>
                  <p className="text-xl font-black text-white mb-1.5">GPA: 8.6/10</p>
                  <p className="text-xs text-gray-400">Math, Physics, Chemistry</p>
                </div>
              </div>

              {/* SSC - FIXED GPA */}
              <div className="group p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-cyan-950/50 to-blue-950/50 border border-cyan-500/30 hover:border-cyan-500/60 hover:scale-105 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-28 h-28 bg-cyan-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 w-fit mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <GraduationCap className="w-6 sm:w-7 h-6 sm:h-7 text-cyan-400" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1.5">Secondary School (SSC)</h3>
                  <p className="text-sm text-cyan-300 font-semibold mb-2">Z.P.H School, Telangana</p>
                  <span className="block px-2.5 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-bold w-fit mb-1.5">2018 - 2019</span>
                  <p className="text-xl font-black text-white mb-1.5">GPA: 9.0/10</p>
                  <p className="text-xs text-gray-400">10th Standard</p>
                </div>
              </div>

              {/* Data Science Intern - AI VARIANT - UPDATED YEAR */}
              <div className="group md:col-span-2 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-950/50 to-violet-950/50 border border-indigo-500/30 hover:border-indigo-500/60 hover:scale-105 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Brain className="w-6 sm:w-7 h-6 sm:h-7 text-indigo-400" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">Data Science Intern</h3>
                        <p className="text-xs text-indigo-300 font-semibold">Remote</p>
                      </div>
                    </div>
                    <p className="text-base sm:text-lg font-bold text-indigo-300 mb-2">AI Variant</p>
                    <span className="inline-block px-2.5 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-bold">2025</span>
                  </div>

                  <div className="md:col-span-2">
                    <p className="text-xs font-bold text-indigo-300 mb-2.5 uppercase tracking-wide">Key Contributions</p>
                    <ul className="space-y-2.5 text-gray-300">
                      {[
                        "Built ML models for predictive analytics with 85%+ accuracy",
                        "Automated data pipelines using Python & Pandas",
                        "Developed interactive dashboards for data visualization"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-indigo-500/5 border border-indigo-500/10 hover:bg-indigo-500/10 hover:scale-105 transition-all duration-300 cursor-default">
                          <Target className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                          <span className="text-xs">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Networking Internship - Juniper - FULL WIDTH */}
              <div className="group md:col-span-3 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-950/50 to-teal-950/50 border border-emerald-500/30 hover:border-emerald-500/60 hover:scale-105 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Briefcase className="w-6 sm:w-7 h-6 sm:h-7 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">Networking Intern</h3>
                        <p className="text-xs text-emerald-300 font-semibold">Virtual</p>
                      </div>
                    </div>
                    <p className="text-base sm:text-lg font-bold text-emerald-300 mb-2">Juniper Networks</p>
                    <span className="inline-block px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold">2024</span>
                  </div>

                  <div className="md:col-span-2">
                    <p className="text-xs font-bold text-emerald-300 mb-2.5 uppercase tracking-wide">Key Learnings</p>
                    <ul className="space-y-2.5 text-gray-300">
                      {[
                        "Networking fundamentals: routing protocols & switching",
                        "Network security & secure data transmission",
                        "Network configuration & troubleshooting"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-emerald-500/5 border border-emerald-500/10 hover:bg-emerald-500/10 hover:scale-105 transition-all duration-300 cursor-default">
                          <Target className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span className="text-xs">{item}</span>
                        </li>
                      ))}
                    </ul>
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
            <p className="text-sm text-gray-400 mb-8">Production-ready applications showcasing AI, IoT, and Full-Stack expertise</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              
              {/* Solar Project */}
              <div className="group md:col-span-2 relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-yellow-950/50 via-orange-950/50 to-yellow-950/50 border border-yellow-500/30 hover:border-yellow-500/60 hover:scale-105 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 flex-shrink-0">
                        <Sun className="w-6 sm:w-7 h-6 sm:h-7 text-yellow-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-400 transition-all duration-300">
                            Smart Solar Energy Monitoring
                          </h3>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold animate-pulse whitespace-nowrap">
                            🌱 ECO
                          </span>
                        </div>
                        <p className="text-xs text-yellow-300 font-semibold">IoT-Based Renewable Energy Platform</p>
                      </div>
                    </div>
                    <a href="https://github.com/KalyanRamGoparaboina" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-black/50 border border-white/10 hover:bg-black/70 hover:scale-125 hover:rotate-12 transition-all duration-300 flex-shrink-0">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-300 mb-4 leading-relaxed">
                    IoT-enabled solar panel monitoring with real-time tracking, ML predictive maintenance, and mobile dashboard. ESP32 integration with cloud analytics reduces maintenance costs by 40%.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4 py-3 border-y border-yellow-500/20">
                    {[
                      { label: "Cost Cut", value: "40%", icon: Battery },
                      { label: "Monitor", value: "Real-time", icon: null },
                      { label: "Predictive", value: "ML", icon: Leaf },
                      { label: "Cloud", value: "IoT", icon: null }
                    ].map((stat, i) => (
                      <div key={i} className="group/stat hover:scale-110 transition-transform duration-300 cursor-default text-center">
                        <p className="text-base sm:text-lg font-bold text-white group-hover/stat:animate-pulse flex items-center justify-center gap-1">
                          {stat.icon && <stat.icon className="w-3.5 h-3.5 text-yellow-400" />}
                          {stat.value}
                        </p>
                        <p className="text-xs text-gray-400">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {["Python", "IoT (ESP32)", "ML", "Flask", "Cloud Analytics", "Dashboard"].map(tech => (
                      <span key={tech} className="px-2.5 py-1 rounded-lg bg-black/30 border border-yellow-500/20 text-yellow-300 text-xs font-medium hover:bg-black/50 hover:scale-110 transition-all duration-300 cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* AI Emotion Detection */}
              <div className="group relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-rose-950/50 to-rose-950/20 border border-rose-500/30 hover:border-rose-500/60 hover:scale-105 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Brain className="w-5 sm:w-6 h-5 sm:h-6 text-rose-400" />
                    </div>
                    <a href="https://github.com/KalyanRamGoparaboina" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-black/50 border border-white/10 hover:bg-black/70 hover:scale-125 hover:rotate-12 transition-all duration-300">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2.5">AI Emotion Detection</h3>
                  <p className="text-xs text-gray-300 mb-3 leading-relaxed">Real-time facial expression analyzer using OpenCV and Deep Learning. Achieves 90%+ accuracy.</p>

                  <div className="grid grid-cols-3 gap-2 mb-3 py-2.5 border-y border-rose-500/20">
                    {[
                      { label: "Accuracy", value: "90%" },
                      { label: "Latency", value: "<100ms" },
                      { label: "Emotions", value: "7" }
                    ].map((stat, i) => (
                      <div key={i} className="hover:scale-110 transition-transform duration-300 cursor-default text-center">
                        <p className="text-sm sm:text-base font-bold text-white">{stat.value}</p>
                        <p className="text-xs text-gray-400">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {["Python", "OpenCV", "Deep Learning", "CV"].map(tech => (
                      <span key={tech} className="px-2 py-0.5 rounded-lg bg-black/30 border border-rose-500/20 text-rose-300 text-xs font-medium hover:bg-black/50 hover:scale-110 transition-all duration-300 cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bus Booking System */}
              <div className="group relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-blue-950/50 to-blue-950/20 border border-blue-500/30 hover:border-blue-500/60 hover:scale-105 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Terminal className="w-5 sm:w-6 h-5 sm:h-6 text-blue-400" />
                    </div>
                    <a href="https://github.com/KalyanRamGoparaboina" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-black/50 border border-white/10 hover:bg-black/70 hover:scale-125 hover:rotate-12 transition-all duration-300">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2.5">Bus Booking System</h3>
                  <p className="text-xs text-gray-300 mb-3 leading-relaxed">Full-stack web app with real-time seat availability and secure authentication using Flask.</p>

                  <div className="grid grid-cols-2 gap-2 mb-3 py-2.5 border-y border-blue-500/20">
                    {[
                      { label: "Updates", value: "Real-time" },
                      { label: "Auth", value: "Secure" }
                    ].map((stat, i) => (
                      <div key={i} className="hover:scale-110 transition-transform duration-300 cursor-default text-center">
                        <p className="text-sm sm:text-base font-bold text-white">{stat.value}</p>
                        <p className="text-xs text-gray-400">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {["Python", "Flask", "SQL", "REST API"].map(tech => (
                      <span key={tech} className="px-2 py-0.5 rounded-lg bg-black/30 border border-blue-500/20 text-blue-300 text-xs font-medium hover:bg-black/50 hover:scale-110 transition-all duration-300 cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* OCR Text Converter */}
              <div className="group relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-950/50 to-emerald-950/20 border border-emerald-500/30 hover:border-emerald-500/60 hover:scale-105 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Code2 className="w-5 sm:w-6 h-5 sm:h-6 text-emerald-400" />
                    </div>
                    <a href="https://github.com/KalyanRamGoparaboina" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-black/50 border border-white/10 hover:bg-black/70 hover:scale-125 hover:rotate-12 transition-all duration-300">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2.5">OCR Text Converter</h3>
                  <p className="text-xs text-gray-300 mb-3 leading-relaxed">Handwritten-to-text engine using Tesseract OCR achieving 95%+ accuracy.</p>

                  <div className="grid grid-cols-2 gap-2 mb-3 py-2.5 border-y border-emerald-500/20">
                    {[
                      { label: "Accuracy", value: "95%" },
                      { label: "Interface", value: "Web UI" }
                    ].map((stat, i) => (
                      <div key={i} className="hover:scale-110 transition-transform duration-300 cursor-default text-center">
                        <p className="text-sm sm:text-base font-bold text-white">{stat.value}</p>
                        <p className="text-xs text-gray-400">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {["Python", "Tesseract", "Image Processing", "NLP"].map(tech => (
                      <span key={tech} className="px-2 py-0.5 rounded-lg bg-black/30 border border-emerald-500/20 text-emerald-300 text-xs font-medium hover:bg-black/50 hover:scale-110 transition-all duration-300 cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Restaurant Menu Platform */}
              <div className="group relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-violet-950/50 to-violet-950/20 border border-violet-500/30 hover:border-violet-500/60 hover:scale-105 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Database className="w-5 sm:w-6 h-5 sm:h-6 text-violet-400" />
                    </div>
                    <a href="https://github.com/KalyanRamGoparaboina/Restaurant-Menu" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-black/50 border border-white/10 hover:bg-black/70 hover:scale-125 hover:rotate-12 transition-all duration-300">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2.5">Restaurant Menu Platform</h3>
                  <p className="text-xs text-gray-300 mb-3 leading-relaxed">Digital menu system with POS integration and dynamic order tracking.</p>

                  <div className="grid grid-cols-2 gap-2 mb-3 py-2.5 border-y border-violet-500/20">
                    {[
                      { label: "System", value: "POS" },
                      { label: "Updates", value: "Dynamic" }
                    ].map((stat, i) => (
                      <div key={i} className="hover:scale-110 transition-transform duration-300 cursor-default text-center">
                        <p className="text-sm sm:text-base font-bold text-white">{stat.value}</p>
                        <p className="text-xs text-gray-400">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {["Python", "POS", "Orders", "Web"].map(tech => (
                      <span key={tech} className="px-2 py-0.5 rounded-lg bg-black/30 border border-violet-500/20 text-violet-300 text-xs font-medium hover:bg-black/50 hover:scale-110 transition-all duration-300 cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Expertise - WITH TABLEAU */}
        <section id="skills" className="py-12 sm:py-16 px-4 sm:px-6 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 sm:mb-10 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 transition-all duration-500 inline-block cursor-default">
              Technical Expertise
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-8 sm:mb-10">
              {[
                {
                  category: "Programming & Scripting",
                  skills: [
                    { name: "Python", level: 75, color: "blue" },
                    { name: "SQL", level: 70, color: "purple" },
                    { name: "JavaScript", level: 65, color: "yellow" },
                    { name: "HTML/CSS", level: 80, color: "orange" }
                  ]
                },
                {
                  category: "AI & Machine Learning",
                  skills: [
                    { name: "Deep Learning", level: 70, color: "rose" },
                    { name: "Tableau", level: 70, color: "pink" },
                    { name: "NLP & OCR", level: 65, color: "purple" },
                    { name: "Data Science (Pandas/NumPy)", level: 75, color: "blue" }
                  ]
                }
              ].map((section, idx) => (
                <div key={idx} className="group p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 border border-white/10 hover:border-white/20 hover:scale-105 transition-all duration-500 relative overflow-hidden">
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
                            <span className={`text-xs font-bold text-${skill.color}-400 group-hover/skill:scale-125 transition-transform`}>{skill.level}%</span>
                          </div>
                          <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden group-hover/skill:shadow-lg transition-all">
                            <div 
                              className={`h-full bg-gradient-to-r from-${skill.color}-600 to-${skill.color}-400 rounded-full transition-all duration-1000 ease-out group-hover/skill:animate-pulse`}
                              style={{ width: `${skill.level}%`, animation: 'slideIn 2s ease-out' }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-yellow-950/30 via-orange-950/30 to-red-950/30 border border-yellow-500/30 hover:border-yellow-500/60 hover:scale-105 transition-all duration-500 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-yellow-500/10 border border-yellow-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Award className="w-6 sm:w-7 h-6 sm:h-7 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">Professional Certifications</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: "Generative AI Professional", issuer: "Oracle University", year: "2024", level: "Professional" },
                    { name: "Data Science using ML with R & Python", issuer: "ExcelR Solutions", year: "2024", level: "Advanced" },
                    { name: "Python Full Stack Developer", issuer: "Brain O Vision", year: "2023", level: "Certified" },
                    { name: "Data Science & Machine Learning", issuer: "Brain O Vision", year: "2023", level: "Certified" }
                  ].map((cert, idx) => (
                    <div key={idx} className="group/cert p-4 sm:p-5 rounded-xl bg-black/40 border border-yellow-500/20 hover:border-yellow-500/50 hover:bg-black/60 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default">
                      <div className="flex items-start justify-between mb-2.5">
                        <p className="font-bold text-white text-xs sm:text-sm leading-tight flex-1 group-hover/cert:text-yellow-300 transition-colors">{cert.name}</p>
                        <span className="px-2 py-0.5 rounded-md bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-bold ml-2 group-hover/cert:animate-pulse flex-shrink-0">{cert.year}</span>
                      </div>
                      <p className="text-gray-400 text-xs mb-1.5">{cert.issuer}</p>
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-yellow-400 group-hover/cert:rotate-180 transition-transform duration-500" />
                        <p className="text-yellow-400 text-xs font-semibold">{cert.level}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact - WITH PHONE */}
        <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6 border-t border-white/10 bg-gradient-to-b from-neutral-950/50 to-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-3xl sm:text-5xl font-black mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                Let&apos;s Build Something Amazing
              </h2>
              <p className="text-sm sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Open to <span className="text-blue-400 font-bold">Data Science</span> and <span className="text-purple-400 font-bold">Machine Learning</span> opportunities. Let&apos;s turn ideas into reality!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                { icon: Mail, title: "Email Me", value: "goparaboinakalyanram@gmail.com", href: "mailto:goparaboinakalyanram@gmail.com", color: "blue", gradient: "from-blue-600 to-cyan-600" },
                { icon: Phone, title: "Call Me", value: "+91 81061-42645", href: "tel:+918106142645", color: "emerald", gradient: "from-emerald-600 to-teal-600" },
                { icon: Linkedin, title: "Connect on LinkedIn", value: "Let's network professionally", href: "https://linkedin.com/in/kalyanramgoparaboina", color: "blue", gradient: "from-blue-600 to-indigo-600" },
                { icon: Github, title: "Check My Code", value: "Explore my repositories", href: "https://github.com/KalyanRamGoparaboina", color: "purple", gradient: "from-purple-600 to-pink-600" },
                { icon: MapPin, title: "Location", value: "Telangana, India 🇮🇳", href: "#", color: "rose", gradient: "from-rose-600 to-pink-600" }
              ].map((contact, idx) => (
                <a key={idx} href={contact.href} target={contact.href.startsWith('http') ? "_blank" : undefined} rel="noopener noreferrer"
                  className={`group relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-${contact.color}-950/50 via-${contact.color}-950/30 to-black/50 border border-${contact.color}-500/30 hover:border-${contact.color}-400/60 overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-${contact.color}-500/30`}>
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))' }}></div>
                  <div className="relative z-10 flex items-start gap-3 sm:gap-4">
                    <div className={`p-3 sm:p-4 rounded-2xl bg-gradient-to-br ${contact.gradient} shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                      <contact.icon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-xl font-black text-white mb-1.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                        {contact.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-300 break-words group-hover:text-white transition-colors">{contact.value}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center space-y-5">
              <a href="/KalyanRamGoparaboina.pdf" download className="group inline-flex items-center gap-3 px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl font-black text-base sm:text-lg hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-110 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Download className="w-5 sm:w-6 h-5 sm:h-6 group-hover:animate-bounce relative z-10" />
                <span className="relative z-10">Download Complete Resume</span>
                <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 group-hover:rotate-180 transition-transform duration-500 relative z-10" />
              </a>
              <p className="text-xs text-gray-400 italic">✅ Available for immediate joining • Open to relocation</p>
            </div>

            <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10 text-center">
              <p className="text-xs sm:text-sm text-gray-500 hover:text-gray-300 transition-colors duration-300">
                © 2025 Kalyan Ram Goparaboina • Crafted with ❤️ using Next.js & TypeScript
              </p>
            </div>
          </div>
        </section>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          @keyframes slideIn {
            0% { width: 0%; }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}</style>
      </main>
    </>
  );
}
