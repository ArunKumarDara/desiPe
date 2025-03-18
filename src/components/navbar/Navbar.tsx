import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";
import { Menu } from "lucide-react";
// import Link from "next/link";

const Navbar = () => {
    const navLinks = [
        { name: "Features", to: "features" },
        { name: "How it works", to: "how-it-works" },
        { name: "Pricing", to: "pricing" },
        { name: "Contact", to: "contact" },
    ];

    return (
        <div className="fixed w-full bg-background/95 backdrop-blur z-50">
            <nav className="container mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    {/* <Link href="/" className="text-xl sm:text-2xl font-bold text-primary">
                        Desipe
                    </Link> */}

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        {navLinks.map((link) => (
                            <ScrollLink
                                key={link.to}
                                to={link.to}
                                spy={true}
                                smooth={true}
                                offset={-80} // Adjust this value based on your navbar height
                                duration={500}
                                className="text-sm hover:text-primary"
                            >
                                {link.name}
                            </ScrollLink>
                        ))}
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button variant="outline" size="sm">Login</Button>
                        <Button size="sm">Get Started</Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <Button variant="ghost" size="sm" className="md:hidden">
                        <Menu className="h-6 w-6" />
                    </Button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;