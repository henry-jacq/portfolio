import { motion } from "framer-motion";
import TimelineDot from "./TimelineDot";

export default function TimelineItem({
    fadeUp,
    date,
    title,
    description,
    color,
}) {
    return (
        <motion.div
            variants={fadeUp}
            className="relative grid grid-cols-[auto_1fr] gap-x-6"
        >
            {/* DOT */}
            <div className="relative">
                <TimelineDot color={color} />
            </div>

            {/* CONTENT */}
            <div>
                <p className="mb-1 text-xs text-gray-500">{date}</p>
                <h4 className="text-lg font-medium leading-snug">
                    {title}
                </h4>
                {description && (
                    <p className="mt-2 text-sm leading-relaxed text-gray-400 whitespace-pre-line">
                        {description}
                    </p>
                )}
            </div>
        </motion.div>
    );
}
