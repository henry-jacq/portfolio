import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import {
  SiGithub,
  SiLinkedin,
  SiMaildotru,
} from "react-icons/si";

/* ===================== SEO ===================== */
const injectSEO = () => {
  document.title = "Henry J M | Backend Developer & ML Engineer";
  [
    {
      name: "description",
      content:
        "Backend Developer & ML Engineer building secure, scalable systems and applied ML.",
    },
    { property: "og:title", content: "Henry J M | Backend & ML Engineer" },
    {
      property: "og:description",
      content:
        "Portfolio of backend systems, workflows, and machine learning projects.",
    },
    { property: "og:type", content: "website" },
  ].forEach((t) => {
    const m = document.createElement("meta");
    Object.entries(t).forEach(([k, v]) => m.setAttribute(k, v));
    document.head.appendChild(m);
  });
};

/* ===================== ANIMATIONS ===================== */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

/* ===================== COMPONENTS ===================== */
const Section = ({ id, className = "", children }) => (
  <motion.section
    id={id}
    variants={stagger}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    className={`py-28 px-6 ${className}`}
  >
    {children}
  </motion.section>
);

const MagneticButton = ({ children, onClick, primary }) => (
  <motion.button
    whileHover={{ scale: 1.06 }}
    whileTap={{ scale: 0.96 }}
    onClick={onClick}
    className={`px-8 py-4 rounded-xl font-medium transition
      ${primary
        ? "bg-[#6366F1] text-white"
        : "border border-white/10 hover:bg-white/5"}
    `}
  >
    {children}
  </motion.button>
);

/* ===================== MAIN ===================== */
const Portfolio = () => {
  const [menu, setMenu] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    injectSEO();
    const move = (e) => {
      if (raf.current) return;
      raf.current = requestAnimationFrame(() => {
        setMouse({ x: e.clientX, y: e.clientY });
        raf.current = null;
      });
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="bg-[#0B0F1A] text-[#E5E7EB] relative overflow-hidden">

      {/* Cursor Glow */}
      <div
        className="fixed inset-0 z-30 pointer-events-none"
        style={{
          background: `radial-gradient(500px at ${mouse.x}px ${mouse.y}px, rgba(99,102,241,0.18), transparent 80%)`,
        }}
      />

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-[#0B0F1A]/80 backdrop-blur border-b border-white/5">
        <div className="flex items-center justify-between h-20 px-6 mx-auto max-w-7xl">
          <span className="font-semibold tracking-wide">Henry J M</span>
          <div className="hidden md:flex gap-8 text-sm text-[#9CA3AF]">
            {[
              "home",
              "about",
              "experience",
              "projects",
              "skills",
              "contact",
            ].map((i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className="hover:text-white"
              >
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
      <section
        id="home"
        className="relative flex items-center justify-center min-h-screen pt-24 text-center"
      >
        <motion.div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#6366F1]/20 blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-[#9CA3AF]"
          >
            Backend Developer Specializing in AI-powered Workflows
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 text-5xl font-semibold tracking-tight md:text-7xl"
          >
            Building <span className="text-[#6366F1]">Reliable Systems</span><br />
            with Scalable Intelligence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 max-w-xl mx-auto text-[#9CA3AF]"
          >
            I design secure backend architectures and applied AI solutions that
            solve real-world challenges with a focus on clarity, performance,
            and reliability.
          </motion.p>

          <div className="flex justify-center gap-4 mt-10">
            <MagneticButton primary onClick={() => scrollTo("contact")}>
              Contact Me
            </MagneticButton>
            <MagneticButton onClick={() => scrollTo("projects")}>
              View Work
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about">
        <div className="max-w-4xl mx-auto">
          <motion.h2 variants={fadeUp} className="mb-6 text-3xl font-semibold">
            About Me
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#9CA3AF] leading-relaxed">
            I’m in my final year of B.Tech in Information Technology with a deep
            focus on backend engineering and workflow platforms. I prioritize
            clear design, robust security, and long-term maintainability in
            every project. I continuously improve my expertise in distributed
            systems, cloud infrastructure, and containerized deployments. I also
            have practical experience with cloud platforms like GCP, Linux system
            administration, and Docker workflows.
          </motion.p>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" className="bg-[#111827]">
        <div className="max-w-4xl mx-auto">
          <motion.h2 variants={fadeUp} className="mb-10 text-3xl font-semibold">
            Experience
          </motion.h2>

          <div className="relative pl-8 border-l border-white/10">
            <motion.div variants={fadeUp}>
              <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-[#6366F1]" />
              <h3 className="text-xl font-medium">
                SDE Intern — NIT Tiruchirappalli
              </h3>
              <ul className="mt-4 space-y-2 text-[#9CA3AF]">
                <li className="flex gap-2">
                  <ChevronRight size={16} /> Worked as a Backend Developer
                  Intern within administrative systems at NIT Trichy.
                </li>
                <li className="flex gap-2">
                  <ChevronRight size={16} /> Built the NIT Paperless File System,
                  a scalable procurement workflow platform used by 600+ users.
                </li>
                <li className="flex gap-2">
                  <ChevronRight size={16} /> Implemented dynamic authorization
                  with role-based and group-based access control components.
                </li>
                <li className="flex gap-2">
                  <ChevronRight size={16} /> Developed a flexible multi-phase
                  approval engine tailored to complex workflows.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects">
        <div className="max-w-6xl mx-auto">
          <motion.h2 variants={fadeUp} className="mb-10 text-3xl font-semibold">
            Projects
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              [
                "Digital Outpass System",
                "Institution-scale approval workflow platform.",
                "https://github.com/henry-jacq/passito",
              ],
              [
                "DDoS Detection (ML)",
                "GNN-based traffic analysis with autonomous agents.",
                "https://github.com/henry-jacq/ddos-detection",
              ],
              [
                "Satellite Image Captioning",
                "Vision-language model fine-tuning for automated descriptions.",
                "https://huggingface.co/henry-07/geochat_finetuned",
              ],
              [
                "Journal Manager",
                "Private minimal journaling React app.",
                "https://github.com/henry-jacq/journal-manager",
              ],
            ].map(([title, desc, link]) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#6366F1]/40"
              >
                <h3 className="font-medium">{title}</h3>
                <p className="mt-2 text-sm text-[#9CA3AF]">{desc}</p>
                <a
                  href={link}
                  className="mt-4 inline-block text-[#6366F1] hover:text-[#6366F1]/80 cursor-pointer font-medium"
                >
                  <SiGithub className="inline mr-2" />
                  View Project →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" className="bg-[#111827]">
        <div className="max-w-6xl mx-auto">
          <motion.h2 variants={fadeUp} className="mb-10 text-3xl font-semibold">
            Skills
          </motion.h2>

          <div className="flex flex-wrap gap-4">
            {[
              "Python",
              "Java",
              "C++",
              "React",
              "FastAPI",
              "Flask",
              "Machine Learning",
              "PyTorch",
              "Linux",
              "Docker",
              "Git",
            ].map((s) => (
              <motion.div
                key={s}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-sm text-[#9CA3AF]"
              >
                {s}
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 variants={fadeUp} className="mb-4 text-3xl font-semibold">
            Contact
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#9CA3AF]">
            henryjm@example.com · Chennai, India
          </motion.p>
          <motion.div variants={fadeUp} className="flex justify-center gap-6 mt-6">
            <a href="https://github.com/henry-jacq" className="hover:text-[#6366F1]">
              <SiGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/henry-jacq" className="hover:text-[#6366F1]">
              <SiLinkedin size={24} />
            </a>
            <a href="mailto:henryjm@example.com" className="hover:text-[#6366F1]">
              <SiMaildotru size={24} />
            </a>
          </motion.div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-sm text-[#9CA3AF] border-t border-white/5">
        © {new Date().getFullYear()} Henry J M
      </footer>
    </div>
  );
};

export default Portfolio;
