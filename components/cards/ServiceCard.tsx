import { motion } from "framer-motion";
import { LucideIcon, ChevronRight } from "lucide-react";


export default function ServiceCard({ icon: Icon, title, desc }: { icon: LucideIcon; title: string; desc: string }) {
    return (
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="group p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition">
            <div className="w-11 h-11 rounded-xl bg-primary text-white grid place-items-center shadow">
                <Icon size={20} />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
            <p className="mt-1 text-sm text-gray-600">{desc}</p>
            <button className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all">Learn more <ChevronRight size={16} /></button>
        </motion.div>
    );
}