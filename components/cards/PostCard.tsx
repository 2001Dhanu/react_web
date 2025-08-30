import { motion } from "framer-motion";
import { LucideIcon, ChevronRight } from "lucide-react";


export default function PostCard({ icon: Icon, title, date, excerpt }: { icon: LucideIcon; title: string; date: string; excerpt: string }) {
    return (
        <motion.article initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
            <div className="w-11 h-11 rounded-xl bg-primary text-white grid place-items-center shadow">
                <Icon size={20} />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
            <div className="text-xs text-gray-500">{date}</div>
            <p className="mt-2 text-sm text-gray-600">{excerpt}</p>
            <button className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent">Read more <ChevronRight size={16} /></button>
        </motion.article>
    );
}