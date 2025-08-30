import SectionHeader from "@/components/SectionHeader";


export const metadata = { title: "Why Choose Us | PrimeEdge" };


export default function WhyUsPage() {
    const items = [
        { title: "Young & Innovative Team", desc: "We iterate fast, communicate clearly, and deliver with polish." },
        { title: "AI Expertise", desc: "Hands-on experience in ML, CV, and edge computing." },
        { title: "Affordable & Scalable", desc: "Start lean, scale smoothly—no vendor lock-in." }
    ];
    return (
        <section className="py-20 bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeader eyebrow="Advantages" title="Why Choose PrimeEdge" subtitle="Your competitive edge in software development." />
                <div className="mt-10 grid lg:grid-cols-3 gap-6">
                    {items.map((item) => (
                        <div key={item.title} className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                            <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-10 flex justify-center">
                    <a href="/contact" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold bg-accent hover:bg-cyan-600 text-white shadow-md transition">Let’s Build Together</a>
                </div>
            </div>
        </section>
    );
}