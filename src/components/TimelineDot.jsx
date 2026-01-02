import { motion } from "framer-motion";

export default function TimelineDot({ color = "indigo" }) {
    const pulseColor =
        color === "purple" ? "bg-purple-400" : "bg-indigo-400";
    const dotColor =
        color === "purple" ? "bg-purple-500" : "bg-indigo-500";

    return (
        <div className="absolute left-0 -translate-x-1/2 -translate-y-1/2 top-7">
            <div className="relative w-3.5 h-3.5">
                {/* OUTWARD PULSE */}
                <motion.span
                    className={`absolute inset-0 rounded-full ${pulseColor}`}
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
                <span
                    className={`absolute inset-0 z-10 rounded-full ${dotColor}`}
                />
            </div>
        </div>
    );
}
