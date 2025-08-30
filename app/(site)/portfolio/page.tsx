import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";


export const metadata = { title: "Portfolio & Case Studies | PrimeEdge" };


export default function PortfolioPage() {
    const items = [
        { title: "Real-Time Emergency Siren Detection", desc: "Lightweight CNN model with on-device inference for rapid detection and alerts.", tag: "AI/ML • Edge", img: "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1600&auto=format&fit=crop" },
        { title: "ParkEase – Smart Parking", desc: "YOLO-based slot detection with Jetson optimization and admin dashboard integration.", tag: "Computer Vision • IoT", img: "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1600&auto=format&fit=crop" },
        { title: "SLTC Learning Management System", desc: "Robust LMS for content delivery, student tracking, and engagement.", tag: "Web App • Education", img: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop" },
        { title: "Quiz App (Flutter)", desc: "Cross-platform app with instant feedback and clean UI.", tag: "Mobile • Flutter", img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop" }
    ];
    return (
        <section className="py-20 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeader eyebrow="Work that ships" title="Portfolio & Case Studies" subtitle="A snapshot of recent projects across AI, web, and mobile." />
                <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((p) => (
                        <article key={p.title} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition">
                            <div className="relative">
                                <Image src={p.img} alt={p.title} width={1600} height={900} className="w-full h-48 object-cover"/>
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"/>
                                <span className="absolute top-3 left-3 text-xs font-medium px-2 py-1 rounded-md bg-white/90 border border-gray-200">{p.tag}</span>
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                                <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
                                <button className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent">View case study</button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}