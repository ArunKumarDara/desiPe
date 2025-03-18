import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Twitter,
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#1e293b] text-white mt-16">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-3">
                        <h3 className="text-xl font-bold text-white">
                            Desipe FInance Private Ltd.
                        </h3>
                        <p className="text-gray-300 text-sm">
                            Transform your spare change into meaningful investments with every transaction.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-3">
                        <h4 className="text-base font-semibold text-white">Quick Links</h4>
                        <ul className="space-y-1.5 text-sm">
                            {['About Us', 'How It Works', 'Features', 'Investment Plans', 'FAQs'].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-gray-300 hover:text-white transition-colors"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-3">
                        <h4 className="text-base font-semibold text-white">Contact Us</h4>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-gray-300 text-sm">
                                <MapPin size={16} className="shrink-0 mt-1" />
                                <span>123 Investment Avenue, Financial District, 400001</span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-300 text-sm">
                                <Phone size={16} />
                                <span>+91 123-456-7890</span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-300 text-sm">
                                <Mail size={16} />
                                <span>support@desipe.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-3">
                        <h4 className="text-base font-semibold text-white">Stay Updated</h4>
                        <div className="space-y-2">
                            <div className="flex gap-2">
                                <Input
                                    placeholder="Enter your email"
                                    type="email"
                                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-9 text-sm"
                                />
                                <Button size="sm" variant="secondary" className="bg-white text-[#1e293b] hover:bg-gray-200">
                                    Subscribe
                                </Button>
                            </div>
                            <p className="text-xs text-gray-400">
                                By subscribing, you agree to our Terms of Service
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                        <p className="text-xs text-gray-400 text-center sm:text-left">
                            © {new Date().getFullYear()} Desipe Finance pvt.ltd. All rights reserved.
                        </p>
                        <div className="flex gap-4 text-xs text-gray-400">
                            <a href="#" className="hover:text-white transition-colors">Privacy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms</a>
                            <a href="#" className="hover:text-white transition-colors">Cookies</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;