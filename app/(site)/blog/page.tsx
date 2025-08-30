import SectionHeader from "@/components/SectionHeader";
import PostCard from "@/components/cards/PostCard";
import { Newspaper, Smartphone, Cpu } from "lucide-react";


export const metadata = { title: "Blog | PrimeEdge" };


export default function BlogPage() {
    const posts = [
        { title: "How Edge AI Speeds Up Cities", date: "Aug 2025", excerpt: "We explore Jetson-powered CV pipelines for parking and emergency response.", icon: Newspaper },
        { title: "Flutter for Serious Products", date: "Jul 2025", excerpt: "Why we choose Flutter for robust, consistent mobile apps across platforms.", icon: Smartphone },
        { title: "Designing with Reliability in Mind", date: "Jun 2025", excerpt: "Architecture choices that keep systems fast, safe, and maintainable.", icon: Cpu }
    ];
    return (
        <section className="py-20 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeader eyebrow="Insights" title="Blog" subtitle="Practical guides and opinions on AI, mobile, and web." />
                <div className="mt-10 grid md:grid-cols-3 gap-6">
                    {posts.map((p) => <PostCard key={p.title} icon={p.icon} title={p.title} date={p.date} excerpt={p.excerpt} />)}
                </div>
            </div>
        </section>
    );
}