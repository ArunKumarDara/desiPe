import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Coins,
    TrendingUp,
    Shield,
    PiggyBank,
    ChartLine,
    Wallet
} from "lucide-react";

const Features = () => {
    const features = [
        {
            title: "Smart Micro-Investments",
            description: "Automatically invest ₹2-5 from every transaction into high-performing mutual funds",
            icon: PiggyBank,
        },
        {
            title: "Higher Returns",
            description: "Earn up to 15% returns on your spare change - better than traditional savings",
            icon: TrendingUp,
        },
        {
            title: "Gold Investment",
            description: "Diversify your portfolio with automatic gold investments from your transactions",
            icon: Coins,
        },
        {
            title: "Portfolio Tracking",
            description: "Real-time tracking of your investments and returns in one place",
            icon: ChartLine,
        },
        {
            title: "Secure Transactions",
            description: "Bank-grade security for all your payments and investments",
            icon: Shield,
        },
        {
            title: "Instant Withdrawals",
            description: "Access your invested money whenever you need it",
            icon: Wallet,
        },
    ];

    return (
        <section className="py-16 sm:py-10" id="investments">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                        Invest While You Pay
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Turn your everyday payments into smart investments. Every small amount adds up to create a significant impact on your wealth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <Card key={index} className="border-2 hover:border-primary transition-colors">
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <feature.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-lg sm:text-xl text-center">{feature.title}</CardTitle>
                                </div>

                            </CardHeader>
                            <CardContent>
                                <p className="text-sm sm:text-base text-muted-foreground">
                                    {feature.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-8 text-center bg-secondary/20 rounded-lg p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold mb-6">
                        How Your Money Grows
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        <div className="space-y-2">
                            <div className="text-2xl sm:text-3xl font-bold text-primary">₹5,000</div>
                            <p className="text-sm sm:text-base text-muted-foreground">Average yearly investment</p>
                        </div>
                        <div className="space-y-2">
                            <div className="text-2xl sm:text-3xl font-bold text-primary">15%</div>
                            <p className="text-sm sm:text-base text-muted-foreground">Average annual returns</p>
                        </div>
                        <div className="space-y-2">
                            <div className="text-2xl sm:text-3xl font-bold text-primary">₹750+</div>
                            <p className="text-sm sm:text-base text-muted-foreground">Potential yearly earnings</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;