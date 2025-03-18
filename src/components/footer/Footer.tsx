import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import Link from "next/link";\
import { Link } from "react-scroll";


const Footer = () => {
    return (
        <footer className="bg-secondary/10 py-12 mt-16">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">Desipe</h3>
                        <p className="text-sm text-muted-foreground">
                            Making digital payments smarter with automatic micro-investments.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#features">Features</Link></li>
                            <li><Link href="#how-it-works">How it Works</Link></li>
                            <li><Link href="#pricing">Pricing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/privacy">Privacy Policy</Link></li>
                            <li><Link href="/terms">Terms of Service</Link></li>
                            <li><Link href="/security">Security</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold">Stay Updated</h4>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <Input placeholder="Enter your email" className="flex-1" />
                            <Button>Subscribe</Button>
                        </div>
                    </div>
                </div>

                <div className="border-t mt-12 pt-6 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Desipe. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;