import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({ title, description, imageUrl, links }) {
    return (
        <motion.div
            className="overflow-hidden border cursor-pointer rounded-2xl bg-white/5 border-white/10"
            whileHover="hover"
            initial="rest"
            animate="rest"
        >
            {/* IMAGE WRAPPER */}
            <motion.div
                className="w-full h-48 overflow-hidden"
                variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.1 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <img
                    src={imageUrl}
                    alt={title}
                    className="object-cover w-full h-full rounded-t-2xl"
                />
            </motion.div>

            {/* DETAILS */}
            <div className="px-6 py-4">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-gray-400">{description}</p>

                <div className="flex gap-4 mt-4">
                    {links.map((l) => (
                        <a
                            key={l.url}
                            href={l.url}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300"
                        >
                            <ExternalLink size={16} /> {l.label}
                        </a>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
