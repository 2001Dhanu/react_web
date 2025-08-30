import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Sparkles } from "lucide-react";
import { navItems } from "@/lib/nav";


export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
                <div>
                    <div className="flex items-center gap-2">
                        <span className="p-2 rounded-xl bg-blue-800 text-white"><Sparkles size={18}/></span>
                        <span className="font-semibold text-white">PrimeEdge Software</span>
                    </div>
                    <p className="mt-3 text-sm text-gray-400">Building reliable, scalable, and intelligent software for a smarter future.</p>
                </div>
                <div>
                    <div className="text-sm font-semibold text-white">Quick Links</div>
                    <ul className="mt-3 space-y-2 text-sm">
                        {navItems.map(i => (
                            <li key={i.href}><Link href={i.href} className="hover:text-white">{i.label}</Link></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <div className="text-sm font-semibold text-white">Contact</div>
                    <ul className="mt-3 space-y-2 text-sm">
                        <li className="flex items-center gap-2"><Mail size={16}/> hello@primeedgesoftware.com</li>
                        <li className="flex items-center gap-2"><Phone size={16}/> +94 70 000 0000</li>
                        <li className="flex items-center gap-2"><MapPin size={16}/> Sri Lanka</li>
                    </ul>
                </div>
                <div>
                    <div className="text-sm font-semibold text-white">Newsletter</div>
                    <p className="mt-3 text-sm text-gray-400">Get updates on case studies and insights.</p>
                    <div className="mt-3 flex gap-2">
                        <input placeholder="Your email" className="w-full rounded-xl border border-gray-700 bg-gray-800 text-gray-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"/>
                        <button className="rounded-xl px-4 py-2 text-sm font-semibold bg-accent hover:bg-cyan-600 text-white">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div>© {new Date().getFullYear()} PrimeEdge Software. All rights reserved. Domain: primeedgesoftware.com</div>
                    <div className="flex items-center gap-3">
                        <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin size={16}/></a>
                        <a href="#" aria-label="GitHub" className="hover:text-white"><Github size={16}/></a>
                        <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram size={16}/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}