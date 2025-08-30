import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/cards/ServiceCard";
import { Globe, Smartphone, Brain, Cable, Code2, Cpu } from "lucide-react";


export const metadata = { title: "Services | PrimeEdge Software" };


export default function ServicesPage() {
    const items = [
        { icon: Globe, title: "Web Development", desc: "High-performance, SEO-friendly websites and web apps that scale with your business." },
        { icon: Smartphone, title: "Mobile App Development", desc: "Flutter-powered, cross-platform apps with smooth UX and native performance." },
        { icon: Brain, title: "AI & Machine Learning", desc: "From siren detection to smart parking—production-ready ML tailored to your needs." },
        { icon: Cable, title: "IoT & Embedded Systems", desc: "Jetson & Raspberry Pi solutions for edge intelligence and real-time insights." },
        { icon: Code2, title: "Custom Software Solutions", desc: "Tailored systems—dashboards, automations, and enterprise integrations." },
        { icon: Cpu, title: "Consulting & Architecture", desc: "System design, cloud strategy, and performance optimization." }
    ];
    return (
        <section className="py-20 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeader eyebrow="What we do" title="Services" subtitle="Full-stack delivery across web, mobile, AI/ML, and IoT." />
                <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((s)=> <ServiceCard key={s.title} {...s} />)}
                </div>
            </div>
        </section>
    );
}