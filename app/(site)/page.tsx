import Image from "next/image";
import { Sparkles, Globe, Smartphone, Brain } from "lucide-react";


export default function HomePage() {
    return (
        <section className="relative pb-20 overflow-hidden bg-gradient-to-b from-white to-gray-100">
            <div className="absolute inset-0 -z-10 opacity-40" aria-hidden>
                <svg className="absolute -top-20 -right-20 w-[600px]" viewBox="0 0 600 600" fill="none"><circle cx="300" cy="300" r="300" className="fill-blue-50" /></svg>
                <svg className="absolute -bottom-24 -left-24 w-[500px]" viewBox="0 0 500 500" fill="none"><circle cx="250" cy="250" r="250" className="fill-cyan-50" /></svg>
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center pt-10">
                <div>
                    <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-blue-50 text-primary text-xs font-medium"><Sparkles size={14}/> Trusted partners for startups, SMBs & enterprises</div>
                    <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">Cutting-Edge Software for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Smarter Future</span></h1>
                    <p className="mt-4 text-gray-700 leading-relaxed">We design and build reliable, scalable, and intelligent digital products—web, mobile, and AI/ML—so you can launch faster and grow with confidence.</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <a href="/contact" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold bg-accent hover:bg-cyan-600 text-white shadow-md transition">Get a Free Consultation</a>
                        <a href="/portfolio" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold border border-gray-300 hover:border-gray-400 text-gray-800 bg-white transition">Let’s Build Together</a>
                    </div>
                    <div className="mt-8 grid grid-cols-3 sm:grid-cols-6 gap-6 text-center">
                        {[{k:"Projects",v:"12+"},{k:"Clients",v:"8+"},{k:"AI Models",v:"4+"},{k:"Uptime",v:"99.9%"},{k:"Tech Stack",v:"Full"},{k:"Support",v:"24/7"}].map((s)=> (
                            <div key={s.k} className="p-3 rounded-xl bg-white border border-gray-200 shadow-sm"><div className="text-lg font-bold">{s.v}</div><div className="text-xs text-gray-600">{s.k}</div></div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                        <Image src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop" alt="Team collaborating" width={1600} height={900} className="w-full h-80 object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-transparent to-cyan-500/30" />
                        <div className="absolute bottom-4 left-4 right-4 grid sm:grid-cols-3 gap-3">
                            {[{icon:Globe,title:"Web Apps"},{icon:Smartphone,title:"Mobile"},{icon:Brain,title:"AI/ML"}].map(({icon:Icon,title})=> (
                                <div key={title} className="flex items-center gap-2 rounded-xl px-3 py-2 bg-white/90 backdrop-blur border border-gray-200 shadow"><Icon size={18} className="text-primary"/><span className="text-sm font-medium text-gray-800">{title}</span></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}