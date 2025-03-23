import { Button } from "@/components/ui/button";
import { ArrowRight, PiggyBank, Shield, Sparkles } from "lucide-react";

const Hero = () => {
    const features = [
        {
            icon: PiggyBank,
            text: "Automated micro-savings from every transaction"
        },
        {
            icon: Shield,
            text: "Bank-grade security for your peace of mind"
        },
        {
            icon: Sparkles,
            text: "AI-powered smart categorization"
        }
    ];

    return (
        <section className="relative py-20 overflow-hidden bg-background" id="home">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-5">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            </div>

            <div className="container relative z-10 mx-auto px-4 max-w-6xl">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                        Save As You Spend,
                        <br />
                        Prosper As You Grow
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
                        Transform your everyday UPI transactions into a wealth-building journey.
                        Bharat Bachat automatically saves a small portion of your spending,
                        helping you build a secure financial future effortlessly.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <Button size="lg" className="gap-2">
                            Join Waitlist
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                        <Button size="lg" variant="outline">
                            Learn More
                        </Button>
                    </div>

                    {/* Key Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 p-4 bg-secondary/10 rounded-lg"
                            >
                                <feature.icon className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-sm text-muted-foreground">{feature.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;