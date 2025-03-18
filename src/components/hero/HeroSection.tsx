import { Button } from "@/components/ui/button";
import { Coins, Sparkles, TrendingUp } from "lucide-react";
// import Image from "next/image";

const HeroSection = () => {
    return (
        <div className="bg-background pt-20">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
                    <div className="text-center lg:text-left space-y-6 max-w-xl mx-auto lg:mx-0">
                        <div className="flex items-center justify-center lg:justify-start gap-2">
                            <Sparkles className="text-primary w-5 h-5" />
                            <span className="text-xs sm:text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                                Smart Investments While You Pay
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                            Turn Every Payment into an Investment Opportunity
                        </h1>

                        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground">
                            Every time you pay, we invest your spare change in high-return mutual funds and gold.
                            Earn up to 15% returns while you spend.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button size="lg" className="gap-2">
                                <TrendingUp className="w-4 h-4" />
                                Start Investing
                            </Button>
                            <Button size="lg" variant="outline" className="gap-2">
                                <Coins className="w-4 h-4" />
                                Calculate Returns
                            </Button>
                        </div>

                        <div className="bg-secondary/20 p-4 rounded-lg mt-8">
                            <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                                <div className="space-y-1">
                                    <div className="text-xl sm:text-2xl font-bold text-primary">15%</div>
                                    <div className="text-xs sm:text-sm text-muted-foreground">Avg. Returns</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-xl sm:text-2xl font-bold text-primary">₹2-5</div>
                                    <div className="text-xs sm:text-sm text-muted-foreground">Per Transaction</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-xl sm:text-2xl font-bold text-primary">100K+</div>
                                    <div className="text-xs sm:text-sm text-muted-foreground">Active Users</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] mt-8 lg:mt-0">
                        <img
                            src="/vite.svg"
                            alt="Desipe App Interface"
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;