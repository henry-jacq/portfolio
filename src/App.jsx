import React, { useEffect, useRef, useState } from 'react';
import {
  Menu, X, Github, Linkedin, Mail, Phone, MapPin,
  ChevronRight, Sparkles
} from 'lucide-react';

/* ===================== SEO ===================== */
const injectSEO = () => {
  document.title = 'Henry J M | Backend Developer & ML Engineer';
  [
    { name: 'description', content: 'Backend Developer & ML Engineer building secure, scalable systems and AI-driven products.' },
    { property: 'og:title', content: 'Henry J M | Backend & ML Engineer' },
    { property: 'og:description', content: 'Portfolio of backend systems, ML projects, and real-world engineering.' },
    { property: 'og:type', content: 'website' }
  ].forEach(t => {
    const m = document.createElement('meta');
    Object.entries(t).forEach(([k, v]) => m.setAttribute(k, v));
    document.head.appendChild(m);
  });
};

/* ===================== Reveal Hook ===================== */
const useReveal = () => {
  const [v, setV] = useState({});
  useEffect(() => {
    const io = new IntersectionObserver(
      entries =>
        entries.forEach(e => {
          if (e.isIntersecting) {
            setV(s => ({ ...s, [e.target.id]: true }));
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15 }
    );
    document.querySelectorAll('[data-section]').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return v;
};

/* ===================== MAIN ===================== */
const Portfolio = () => {
  const visible = useReveal();
  const [menu, setMenu] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    injectSEO();
    const move = e => {
      if (raf.current) return;
      raf.current = requestAnimationFrame(() => {
        setMouse({ x: e.clientX, y: e.clientY });
        raf.current = null;
      });
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, []);

  const scrollTo = id =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const sectionClass = id =>
    `py-28 px-6 transition-all duration-700 ease-out ${visible[id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`;

  return (
    <div className="bg-[#0B0F1A] text-[#E5E7EB]">
      {/* Cursor glow */}
      <div
        className="fixed inset-0 z-30 pointer-events-none"
        style={{
          background: `radial-gradient(500px at ${mouse.x}px ${mouse.y}px, rgba(99,102,241,0.18), transparent 80%)`
        }}
      />

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-[#0B0F1A]/80 backdrop-blur border-b border-white/5">
        <div className="flex items-center justify-between h-20 px-6 mx-auto max-w-7xl">
          <span className="font-semibold tracking-wide">Henry J M</span>
          <div className="hidden md:flex gap-8 text-sm text-[#9CA3AF]">
            {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map(i => (
              <button key={i} onClick={() => scrollTo(i)} className="hover:text-white">
                {i.toUpperCase()}
              </button>
            ))}
          </div>
          <button className="md:hidden" onClick={() => setMenu(!menu)}>
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="flex items-center justify-center min-h-screen pt-24 text-center">
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-[#9CA3AF]">
            <Sparkles size={14} /> Backend Developer & ML Engineer
          </span>
          <h1 className="mt-8 text-5xl font-semibold tracking-tight md:text-7xl">
            Building <span className="text-[#6366F1]">Reliable Systems</span><br />
            with Intelligence
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-[#9CA3AF]">
            I design backend systems and applied ML solutions that scale cleanly,
            stay secure, and solve real problems.
          </p>
          <div className="flex justify-center gap-4 mt-10">
            <button onClick={() => scrollTo('contact')}
              className="px-8 py-4 rounded-xl bg-[#6366F1] text-white font-medium hover:opacity-90">
              Contact Me
            </button>
            <button onClick={() => scrollTo('projects')}
              className="px-8 py-4 rounded-xl border border-white/10 text-[#E5E7EB] hover:bg-white/5">
              View Work
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" data-section className={sectionClass('about')}>
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-6 text-3xl font-semibold">About</h2>
          <p className="text-[#9CA3AF] leading-relaxed">
            I’m currently pursuing Information Technology and working deeply in backend
            engineering, workflow systems, and applied ML. I enjoy building systems
            that are understandable, maintainable, and secure by design.
          </p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" data-section className={`bg-[#111827] ${sectionClass('experience')}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-3xl font-semibold">Experience</h2>
          <div className="p-8 border border-white/10 rounded-2xl bg-white/5">
            <h3 className="text-xl font-medium">
              SDE Intern — NIT Tiruchirappalli
            </h3>
            <ul className="mt-4 space-y-2 text-[#9CA3AF]">
              <li className="flex gap-2"><ChevronRight size={16} /> Built NPFS for 600+ users</li>
              <li className="flex gap-2"><ChevronRight size={16} /> Dynamic RBAC + workflows</li>
              <li className="flex gap-2"><ChevronRight size={16} /> Secure backend APIs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" data-section className={sectionClass('projects')}>
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-10 text-3xl font-semibold">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              ['Digital Outpass System', 'Production-ready institutional workflow system'],
              ['DDoS Detection (ML)', 'GNN-based detection pipeline with live agents'],
              ['Satellite Image Captioning', 'Fine-tuned vision-language models'],
              ['Personal Journal Manager', 'Private, distraction-free journaling app']
            ].map(p => (
              <div key={p[0]}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#6366F1]/40 transition">
                <h3 className="font-medium">{p[0]}</h3>
                <p className="mt-2 text-sm text-[#9CA3AF]">{p[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" data-section className={`bg-[#111827] ${sectionClass('skills')}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-10 text-3xl font-semibold">Skills</h2>
          <div className="grid md:grid-cols-4 gap-6 text-sm text-[#9CA3AF]">
            {['Python, Java, C++', 'React, FastAPI, Flask', 'ML, PyTorch, Pandas', 'Linux, Git, Docker']
              .map(s => (
                <div key={s} className="p-6 border rounded-2xl bg-white/5 border-white/10">
                  {s}
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" data-section className={sectionClass('contact')}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-4 text-3xl font-semibold">Contact</h2>
          <p className="text-[#9CA3AF]">henryjm@example.com · Chennai, India</p>
          <div className="flex justify-center gap-6 mt-6">
            <a href="#" className="hover:text-[#6366F1]"><Github /></a>
            <a href="#" className="hover:text-[#6366F1]"><Linkedin /></a>
            <a href="#" className="hover:text-[#6366F1]"><Mail /></a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-sm text-[#9CA3AF] border-t border-white/5">
        © {new Date().getFullYear()} Henry J M
      </footer>
    </div>
  );
};

export default Portfolio;
