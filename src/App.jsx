import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ExternalLink } from "lucide-react";
import { SiGithub, SiLinkedin, SiMaildotru } from "react-icons/si";

import { PROFILE } from "./config/profile";
import { PROJECTS } from "./data/projects";
import { SKILLS } from "./data/skills";

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
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    injectSEO();
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="relative min-h-screen text-[#E5E7EB] overflow-hidden">

      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#0B0F1A] via-[#111827] to-[#1E1B4B]" />

      {/* NAV */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0B0F1A]/70 backdrop-blur">
        <div className="flex items-center justify-between h-20 px-6 mx-auto max-w-7xl">
          <span className="font-semibold tracking-wide">{PROFILE.name}</span>

          <div className="hidden gap-8 text-sm text-gray-400 md:flex">
            {["home", "about", "experience", "projects", "skills", "contact"].map(
              (s) => (
                <button
                  key={s}
                  onClick={() => scrollTo(s)}
                  className="transition hover:text-white"
                >
                  {s.toUpperCase()}
                </button>
              )
            )}
          </div>

          <button className="md:hidden" onClick={() => setMenu(!menu)}>
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="flex items-center min-h-screen pt-28">
        <div className="grid items-center gap-16 px-6 mx-auto max-w-7xl md:grid-cols-2">

          {/* TEXT */}
          <div>
            <motion.span
              variants={fadeUp}
              className="inline-block px-4 py-2 text-sm text-gray-400 border rounded-full bg-white/5 border-white/10"
            >
              {PROFILE.role}
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-5xl font-semibold tracking-tight md:text-6xl"
            >
              {PROFILE.name}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-xl mt-6 text-lg leading-relaxed text-gray-400"
            >
              Crafting systems that think about everyone.
              I value clarity and integrity while building secure,
              scalable backend platforms and AI-assisted systems.
            </motion.p>

            <motion.div variants={fadeUp} className="flex gap-4 mt-10">
              <button
                onClick={() => scrollTo("contact")}
                className="px-8 py-4 transition bg-indigo-600 rounded-xl hover:bg-indigo-500"
              >
                Get in Touch
              </button>
              <button
                onClick={() => scrollTo("projects")}
                className="px-8 py-4 transition border rounded-xl border-white/10 hover:bg-white/5"
              >
                View Projects
              </button>
            </motion.div>
          </div>

          {/* IMAGE */}
          <motion.div variants={fadeUp} className="flex justify-center">
            <img
              src="/src/assets/image.svg"
              alt="Henry"
              className="object-contain w-72 h-72 md:w-96 md:h-96 opacity-90"
            />
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about">
        <div className="max-w-6xl mx-auto">
          <motion.h2 variants={fadeUp} className="mb-6 text-3xl font-semibold">
            About Me
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg leading-relaxed text-gray-400">
            My journey began with curiosity about how things work behind the scenes,
            from games to complex web applications. I started programming at 16,
            enjoy playing CTFs to understand security deeply, and have grown through
            a Diploma in Electrical & Electronics Engineering followed by a B.Tech
            in Information Technology.
            Today, I focus on backend systems, authorization models, background workers,
            and AI integrations, prioritizing long-term maintainability over shortcuts.
          </motion.p>
        </div>
      </Section>
      
      {/* EXPERIENCE + EDUCATION */}
      <Section id="experience" className="bg-[#0F172A]">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-16 md:grid-cols-2">
            {/* EXPERIENCE */}
            <div>
              <motion.h3 variants={fadeUp} className="mb-10 text-2xl font-semibold">
                Experience
              </motion.h3>

              <div className="relative border-l border-white/10 space-y-14">
                {/* ITEM */}
                <motion.div variants={fadeUp} className="grid grid-cols-[auto_1fr] gap-x-6">
                  {/* DOT */}
                  <div className="relative">
                    {/* Centered dot container */}
                    <div className="absolute left-0 -translate-x-1/2 -translate-y-1/2 top-7">
                      <div
                        className="relative w-3.5 h-3.5">
                        {/* OUTWARD PULSE */}
                        <motion.span
                          className="absolute inset-0 bg-indigo-400 rounded-full"
                          style={{ transformOrigin: "50% 50%"}}
                          initial={false}
                          animate={{
                            scale: [1, 1.6],
                            opacity: [0.4, 0],
                          }}
                          transition={{
                            duration: 2,
                            ease: "easeOut",
                            repeat: Infinity,
                            repeatDelay: 0.4,
                          }}
                        />

                        {/* STATIC DOT */}
                        <span className="absolute inset-0 z-10 bg-indigo-500 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div>
                    <p className="mb-1 text-xs text-gray-500">
                      2024 - Present
                    </p>
                    <h4 className="text-lg font-medium leading-snug">
                      Freelance Developer - Upwork
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-gray-400">
                      Designing backend systems, workflow engines, and APIs for multiple
                      clients with a focus on security, clarity, and scalability.
                    </p>
                  </div>
                </motion.div>

                {/* ITEM */}
                <motion.div variants={fadeUp} className="grid grid-cols-[auto_1fr] gap-x-6">
                  <div className="relative">
                    {/* Dot wrapper centered on border */}
                    <div className="absolute -left-[7px] top-6.5">
                      <div className="relative w-3.5 h-3.5">
                        {/* OUTWARD PULSE */}
                        <motion.span
                          className="absolute inset-0 bg-indigo-400 rounded-full"
                          initial={false}
                          animate={{
                            scale: [1, 1.6],
                            opacity: [0.4, 0],
                          }}
                          transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatDelay: 0.4,
                          }}
                        />

                        {/* STATIC DOT */}
                        <span className="absolute inset-0 z-10 bg-indigo-500 rounded-full" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="mb-1 text-xs text-gray-500">
                      Jun 2025 - Jul 2025
                    </p>
                    <h4 className="text-lg font-medium leading-snug">
                      Summer Intern - NIT Tiruchirappalli
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-gray-400">
                      Highly Configurable Procurement System and multi-phase approval workflow engines used institution-wide.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* EDUCATION */}
            <div>
              <motion.h3 variants={fadeUp} className="mb-10 text-2xl font-semibold">
                Education
              </motion.h3>

              <div className="relative pl-0.5 border-l border-white/10 space-y-14">
                {/* ITEM */}
                <motion.div variants={fadeUp} className="grid grid-cols-[auto_1fr] gap-x-6">
                  <div className="relative">
                    {/* Dot wrapper centered on border */}
                    <div className="absolute -left-[9px] top-6.5">
                      <div className="relative w-3.5 h-3.5">
                        {/* OUTWARD PULSE */}
                        <motion.span
                          className="absolute inset-0 bg-purple-400 rounded-full"
                          initial={false}
                          animate={{
                            scale: [1, 1.6],
                            opacity: [0.4, 0],
                          }}
                          transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatDelay: 0.4,
                          }}
                        />

                        {/* STATIC DOT */}
                        <span className="absolute inset-0 z-10 bg-purple-500 rounded-full" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="mb-1 text-xs text-gray-500">
                      2023 - Present
                    </p>
                    <h4 className="text-lg font-medium leading-snug">
                      B.Tech Information Technology
                    </h4>
                    <p className="mt-2 text-sm text-gray-400">
                      SSN College of Engineering
                    </p>
                  </div>
                </motion.div>

                {/* ITEM */}
                <motion.div variants={fadeUp} className="grid grid-cols-[auto_1fr] gap-x-6">
                  <div className="relative">
                    {/* Dot wrapper centered on border */}
                    <div className="absolute -left-[9px] top-6.5">
                      <div className="relative w-3.5 h-3.5">
                        {/* OUTWARD PULSE */}
                        <motion.span
                          className="absolute inset-0 bg-purple-400 rounded-full"
                          initial={false}
                          animate={{
                            scale: [1, 1.6],
                            opacity: [0.4, 0],
                          }}
                          transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatDelay: 0.4,
                          }}
                        />

                        {/* STATIC DOT */}
                        <span className="absolute inset-0 z-10 bg-purple-500 rounded-full" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="mb-1 text-xs text-gray-500">
                      2020 - 2023
                    </p>
                    <h4 className="text-lg font-medium leading-snug">
                      Diploma in Electrical & Electronics Engineering
                    </h4>
                    <p className="mt-2 text-sm text-gray-400">
                      Shanmugha Polytechnic College
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
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
              <motion.div
                key={p.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="p-6 border rounded-2xl bg-white/5 border-white/10"
              >
                <h3 className="text-xl font-medium">{p.title}</h3>
                <p className="mt-2 text-gray-400">{p.description}</p>

                <div className="flex gap-4 mt-6">
                  {p.links.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300"
                    >
                      <ExternalLink size={16} /> {l.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" className="bg-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.h2 variants={fadeUp} className="mb-10 text-3xl font-semibold">
            Skills
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2">
            {SKILLS.map((group) => (
              <motion.div key={group.category} variants={fadeUp}>
                <h3 className="mb-4 font-medium">{group.category}</h3>
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

      {/* CONTACT */}
      <Section id="contact">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 variants={fadeUp} className="mb-4 text-3xl font-semibold">
            Let's Work Together
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400">
            Open to freelance, consulting and backend-focused roles.
          </motion.p>

          <a
            href={PROFILE.links.upwork}
            className="inline-block px-10 py-4 mt-10 text-lg transition bg-indigo-600 rounded-xl hover:bg-indigo-500"
          >
            Hire Me
          </a>
        </div>
      </Section>

      {/* CONTACT FORM */}
      <Section id="contact" className="bg-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 variants={fadeUp} className="mb-4 text-3xl font-semibold">
            Let's Get in Touch
          </motion.h2>
          <form className="mt-8 space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 rounded-lg bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 text-lg transition bg-indigo-600 rounded-xl hover:bg-indigo-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </Section>

      <footer className="py-8 text-center text-gray-500 border-t text-md border-white/5 bg-[#0B0F1A]/70 backdrop-blur">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 space-x-8 md:grid-cols-2">
            <div>
              <motion.div variants={fadeUp} className="flex justify-center gap-6">
                <a href={PROFILE.links.github}><SiGithub size={24} />Github</a>
                <a href={PROFILE.links.linkedin}><SiLinkedin size={24} />LinkedIn</a>
                <a href={`mailto:${PROFILE.email}`}><SiMaildotru size={24} />Email</a>
                <a href={PROFILE.links.twitter}><SiMaildotru size={24} />Twitter</a>
              </motion.div>
            </div>
            <div>
              © {new Date().getFullYear()} All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
