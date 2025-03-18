"use client"

import { Link } from "react-scroll";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
// import Link from "next/link";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Features", href: "#features" },
        { name: "How it works", href: "#how-it-works" },
        { name: "Investments", href: "#investments" },
    ];

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (href: string) => {
        setActiveLink(href);
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="fixed w-full bg-background shadow-sm z-50">
            <nav className="relative container mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent"
                    >
                        Desipe
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "relative px-2 py-1 text-sm font-medium transition-colors hover:text-primary",
                                    activeLink === link.href ? "text-primary" : "text-muted-foreground"
                                )}
                                onClick={() => handleLinkClick(link.href)}
                            >
                                {link.name}
                                {activeLink === link.href && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute left-0 right-0 bottom-0 h-[2px] bg-primary"
                                        animate={{ opacity: 1 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 hover:bg-secondary/20 rounded-md"
                        onClick={handleMobileMenuToggle}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                    <>
                        {/* Overlay */}
                        <div
                            className="fixed inset-0 bg-black/40 md:hidden"
                            style={{ zIndex: 40 }}
                            onClick={handleMobileMenuToggle}
                        />

                        {/* Menu */}
                        <div
                            className={cn(
                                "fixed top-0 right-0 h-full w-[200px] bg-white shadow-lg md:hidden",
                                "flex flex-col overflow-y-auto",
                                "transform transition-transform duration-300 ease-in-out",
                                isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                            )}
                            style={{ zIndex: 50 }}
                        >
                            {/* Close button inside mobile menu */}
                            <div className="sticky top-0 flex justify-end p-4 bg-white">
                                <button
                                    className="p-2 hover:bg-secondary/20 rounded-md"
                                    onClick={handleMobileMenuToggle}
                                >
                                    <X className="h-6 w-6" />
                                </button>
                            </div>

                            <div className="flex flex-col px-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={cn(
                                            "py-3 text-base font-medium border-b border-gray-100 transition-colors hover:text-primary",
                                            activeLink === link.href ? "text-primary" : "text-foreground"
                                        )}
                                        onClick={() => handleLinkClick(link.href)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </nav>
        </div>
    );
};

export default Navbar;