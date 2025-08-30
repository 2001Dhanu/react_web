import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";


export const metadata = { title: "About Us | PrimeEdge Software" };


export default function AboutPage() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeader eyebrow="Who we are" title="About PrimeEdge" subtitle="Founded by two passionate engineers building real-world, high-impact software." />
                <div className="mt-12 grid lg:grid-cols-2 gap-10 items-start">
                    <div className="prose prose-gray max-w-none">
                        <h3 className="text-xl font-semibold text-gray-900">Founders’ Story</h3>
                        <p>We’re a duo of software engineers who met at university and bonded over building practical AI-powered systems—from real-time siren detection to smart parking solutions. Today, we bring the same energy to startups and enterprises looking for reliable, scalable, and intelligent products.</p>
                        <div className="mt-6 grid sm:grid-cols-2 gap-4">
                            {[1,2].map((i)=> (
                                <div key={i} className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm flex gap-3 items-start">
                                    <Image src={`https://api.dicebear.com/7.x/notionists/svg?seed=Founder${i}`} alt={`Founder ${i}`} width={48} height={48} className="rounded-full"/>
                                    <div>
                                        <div className="font-medium text-gray-900">Founder {i}</div>
                                        <div className="text-xs text-gray-600">Co-founder & Engineer</div>
                                        <p className="mt-2 text-sm text-gray-600">Loves clean architecture, rapid prototyping, and delivering user-first experiences.</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 grid sm:grid-cols-3 gap-4">
                            {[{k:"Vision",v:"Build intelligent software that moves businesses forward."},{k:"Mission",v:"Deliver reliable, scalable, and human-centric technology."},{k:"Values",v:"Innovation • Reliability • Trust"}].map((item)=> (
                                <div key={item.k} className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm"><div className="text-sm font-semibold text-gray-900">{item.k}</div><div className="mt-1 text-sm text-gray-600">{item.v}</div></div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-2xl">
                            <Image src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop" alt="Office" width={1600} height={900} className="w-full h-96 object-cover"/>
                            <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/20 to-cyan-500/20"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}