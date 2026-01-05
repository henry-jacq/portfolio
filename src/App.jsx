import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SiUpwork, SiGithub, SiLinkedin, SiMaildotru, SiX, SiMedium } from "react-icons/si";

import TimelineItem from "./components/TimelineItem";
import TimelineLine from "./components/TimelineLine";
import ProjectCard from "./components/ProjectCard";

import { PROFILE } from "./config/profile";
import { PROJECTS } from "./config/projects";
import { SKILLS } from "./config/skills";
import { EXPERIENCE } from "./config/experience";

/* ================= SEO ================= */
const injectSEO = () => {
  document.title = `${PROFILE.name} - ${PROFILE.role}`;
};

/* ================= ANIMATIONS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const Section = ({ id, className = "", children }) => (
  <motion.section
    id={id}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    className={`py-28 px-6 ${className}`}
  >
    {children}
  </motion.section>
);

/* ================= MAIN ================= */
export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${PROFILE.formspreeKey}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  useEffect(() => {
    injectSEO();
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen text-[#E5E7EB] overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#0B0F1A] via-[#111827] to-[#1E1B4B]" />

      {/* NAV */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0B0F1A]/75 backdrop-blur-md"
      >
        <div className="flex items-center justify-between h-20 px-6 mx-auto max-w-7xl">
          {/* Brand */}
          <motion.div
            onClick={() => scrollTo("home")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex flex-col cursor-pointer select-none"
          >
            <span className="text-lg font-semibold tracking-wide text-white">
              {PROFILE.name}
            </span>
            <span className="text-xs text-gray-500">{PROFILE.role}</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="relative items-center hidden gap-8 text-sm md:flex">
            {["home", "about", "experience", "skills", "projects", "contact"].map(
              (s) => (
                <button
                  key={s}
                  onClick={() => scrollTo(s)}
                  className="relative text-gray-400 transition hover:text-white group hover:cursor-pointer"
                >
                  {s.toUpperCase()}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-500 transition-all duration-300 group-hover:w-full" />
                </button>
              )
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 transition border rounded-lg md:hidden border-white/10 hover:bg-white/10"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="md:hidden px-6 py-6 space-y-4 bg-[#0B0F1A]/95 border-t border-white/5"
          >
            {["home", "about", "experience", "skills", "projects", "contact"].map(
              (s) => (
                <button
                  key={s}
                  onClick={() => scrollTo(s)}
                  className="block w-full text-left text-gray-400 hover:text-white"
                >
                  {s.toUpperCase()}
                </button>
              )
            )}
          </motion.div>
        )}
      </nav>

      <main>
        {/* HERO */}
        <motion.section
          id="home"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          animate="visible"
          className="flex items-center min-h-screen pt-28"
        >
          <div className="grid items-center gap-16 px-6 mx-auto max-w-7xl md:grid-cols-2">
            <motion.div variants={fadeUp}>
              <motion.span
                variants={fadeUp}
                className="inline-block px-4 py-2 text-sm text-gray-400 border rounded-full bg-white/5 border-white/10"
              >
                {PROFILE.role}
              </motion.span>

              <motion.h1
                variants={fadeUp}
                className="mt-6 text-5xl font-semibold md:text-6xl"
              >
                {PROFILE.name}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="max-w-xl mt-6 text-lg text-gray-400"
              >
                Crafting secure, scalable backend platforms and AI-assisted
                systems with clarity, integrity and long-term thinking.
              </motion.p>

              <motion.div variants={fadeUp} className="flex gap-4 mt-10">
                <button
                  onClick={() => scrollTo("contact")}
                  className="px-8 py-4 transition-all bg-indigo-600 rounded-xl hover:bg-indigo-500 hover:cursor-pointer"
                >
                  Get in Touch
                </button>
                <button
                  onClick={() => scrollTo("projects")}
                  className="px-8 py-4 transition-all border rounded-xl border-white/10 hover:bg-white/5 hover:cursor-pointer"
                >
                  View Projects
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="flex justify-center"
            >
              <img
                src="/assets/image.svg"
                alt="Profile"
                className="w-72 h-72 md:w-96 md:h-96 opacity-90"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* ABOUT */}
        <Section id="about">
          <div className="max-w-6xl mx-auto">
            <motion.h2 variants={fadeUp} className="mb-6 text-3xl font-semibold">
              About Me
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-gray-400">
              My journey began with curiosity about how things work behind the scenes, from games to complex web applications. I started programming at age of 16, enjoy playing CTFs to understand security deeply, and have base knowledge about low-level systems. I focus on scalable backend systems, secure architecture and AI integrations, prioritizing long-term maintainability over shortcuts.
            </motion.p>
          </div>
        </Section>

        {/* EXPERIENCE + EDUCATION */}
        <Section id="experience" className="bg-[#0F172A]">
          <div className="grid max-w-6xl gap-16 mx-auto md:grid-cols-2">

            {/* EXPERIENCE */}
            <div>
              <motion.h3 variants={fadeUp} className="mb-10 text-2xl font-semibold">
                Experience
              </motion.h3>

              <div className="relative space-y-14">
                <TimelineLine />

                {EXPERIENCE.work.map((exp, index) => (
                  <TimelineItem
                    key={index}
                    fadeUp={fadeUp}
                    color="indigo"
                    date={exp.duration}
                    title={`${exp.position} (${exp.company})`}
                    description={exp.description}
                  />
                ))}
              </div>
            </div>

            {/* EDUCATION */}
            <div>
              <motion.h3 variants={fadeUp} className="mb-10 text-2xl font-semibold">
                Education
              </motion.h3>

              <div className="relative space-y-14">
                <TimelineLine />

                {EXPERIENCE.education.map((edu, index) => (
                  <TimelineItem
                    key={index}
                    fadeUp={fadeUp}
                    color="purple"
                    date={edu.duration}
                    title={edu.degree}
                    description={`${edu.institution}\n${edu.description}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" className="bg-[#0F172A]">
          <div className="max-w-6xl mx-auto">
            <motion.h2 variants={fadeUp} className="mb-10 text-3xl font-semibold">
              Skills
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2">
              {SKILLS.map((group) => (
                <motion.div key={group.category} variants={fadeUp}>
                  <h3 className="mb-4 text-lg font-medium">{group.category}</h3>
                  {group.items.map((s) => (
                    <div key={s.name} className="mb-3">
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>{s.name}</span>
                        <span>{s.level}%</span>
                      </div>
                      <div className="h-2 rounded bg-white/10">
                        <div
                          className="h-full rounded bg-gradient-to-r from-indigo-500 to-purple-500"
                          style={{ width: `${s.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects">
          <div className="max-w-6xl mx-auto">
            <motion.h2 variants={fadeUp} className="mb-10 text-3xl font-semibold">
              Projects
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2">
              {PROJECTS.map((p) => (
                <motion.div key={p.title} variants={fadeUp}>
                  <ProjectCard {...p} />
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-14">
              <motion.h2
                variants={fadeUp}
                className="mb-4 text-3xl font-semibold md:text-4xl"
              >
                Let’s Work Together
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="max-w-2xl mx-auto text-lg text-gray-400"
              >
                Have a project in mind, need backend expertise, or want to collaborate?
                <br className="hidden md:block" />
                Drop a message or hire me directly.
              </motion.p>
            </div>

            {/* Card */}
            <motion.div
              variants={fadeUp}
              className="grid gap-10 p-8 border rounded-2xl bg-white/5 border-white/10 backdrop-blur
                 md:grid-cols-[1fr_auto_1fr]"
            >
              {/* LEFT: Upwork */}
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="flex items-center mb-6 text-xl font-semibold">
                    <SiUpwork size={28} className="mr-3 text-green-500" />
                    Hire Me on Upwork
                  </h3>

                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-400">•</span>
                      Production-grade software systems
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-400">•</span>
                      Secure backend & authorization models
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-400">•</span>
                      AI & system integrations
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-400">•</span>
                      Full-stack web applications
                    </li>
                  </ul>
                </div>

                <a
                  href={PROFILE.links.upwork}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 mt-8 text-lg font-medium
                     transition border rounded-xl border-white/10
                     hover:bg-white/10 hover:scale-[1.02]"
                >
                  Hire Me
                </a>
              </div>

              <div className="hidden w-px md:block bg-white/10" />

              {/* ===== Form: feature wired, UI unchanged ===== */}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-between space-y-5"
              >
                <h3 className="mb-6 text-xl font-semibold">Contact Me</h3>

                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 text-sm rounded-xl
                      bg-[#0B0F1A]/60 border border-white/10
                      focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="w-full px-4 py-3 text-sm rounded-xl
                      bg-[#0B0F1A]/60 border border-white/10
                      focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 text-sm rounded-xl
                     bg-[#0B0F1A]/60 border border-white/10
                     focus:outline-none focus:ring-2 focus:ring-indigo-500
                     transition"
                />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full px-6 py-3 text-lg font-medium transition bg-indigo-600 rounded-xl hover:bg-indigo-500 disabled:opacity-50 hover:cursor-pointer"
                >
                  {status === "sending" ? "Sending..." : "Submit"}
                </button>

                {status === "success" && (
                  <p className="text-sm text-green-400">Message sent successfully.</p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-400">Something went wrong.</p>
                )}
              </form>
            </motion.div>
          </div>
        </Section>

      </main>

      {/* FOOTER */}
      <footer className="py-8 border-t border-white/5 bg-[#0B0F1A]/70">
        <div className="mx-auto text-center text-gray-500 max-w-7xl">
          <div className="flex justify-center gap-6 mb-4">
            <a
              href={PROFILE.links.github}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              <SiGithub size={22} />
            </a>

            <a
              href={PROFILE.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              <SiLinkedin size={22} />
            </a>

            <a
              href={PROFILE.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              <SiX size={22} />
            </a>

            <a
              href={PROFILE.links.medium}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              <SiMedium size={22} />
            </a>
          </div>

          © {new Date().getFullYear()} All rights reserved.
        </div>
      </footer>

    </div>
  );
}
