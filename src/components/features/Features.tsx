import { Button } from "@/components/ui/button";
import {
    Brain,
    Settings,
    Wallet,
    Target,
    PieChart,
    TrendingUp,
    Shield,
    Smartphone,
    ArrowRight,
    CheckCircle2
} from "lucide-react";

const Features = () => {
    const mainFeatures = [
        {
            icon: Brain,
            title: "AI-Powered Expense Categorization",
            description: "Our advanced AI algorithms automatically categorize your expenses, providing smart insights into your spending patterns.",
            benefits: [
                "Automatic transaction categorization",
                "Spending pattern analysis",
                "Personalized saving recommendations",
                "Smart budget suggestions"
            ]
        },
        {
            icon: Settings,
            title: "Customizable Savings",
            description: "Set your own saving rules with flexible percentages based on expense categories.",
            benefits: [
                "Category-based saving rules",
                "Adjustable saving percentages",
                "Priority-based automation",
                "Real-time rule updates"
            ]
        },
        {
            icon: Wallet,
            title: "Flexible Investment Options",
            description: "Choose from multiple investment options and withdraw your savings whenever needed.",
            benefits: [
                "Instant withdrawals",
                "Multiple investment options",
                "No lock-in period",
                "Automated portfolio rebalancing"
            ]
        },
        {
            icon: Target,
            title: "Goal-Based Saving Plans",
            description: "Set and track your financial goals with smart progress monitoring and adjustments.",
            benefits: [
                "Customizable financial goals",
                "Progress tracking",
                "Smart milestone alerts",
                "Goal-based recommendations"
            ]
        }
    ];

    const additionalFeatures = [
        {
            icon: PieChart,
            title: "Smart Analytics",
            description: "Get detailed insights into your spending and saving patterns"
        },
        {
            icon: TrendingUp,
            title: "Growth Tracking",
            description: "Monitor your wealth growth with interactive charts and projections"
        },
        {
            icon: Shield,
            title: "Secure Transactions",
            description: "Bank-grade security for all your financial transactions"
        },
        {
            icon: Smartphone,
            title: "Easy Mobile Access",
            description: "Manage your savings anytime, anywhere with our mobile app"
        }
    ];

    return (
        <section className="py-20 bg-secondary/10" id="features">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold mb-6">
                        Powered by AI, Driven by Your Goals
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Experience the future of savings with our AI-powered features that make
                        wealth creation effortless and intelligent.
                    </p>
                </div>

                {/* Main Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {mainFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-background p-8 rounded-lg border hover:border-primary transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <feature.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                    <ul className="space-y-2">
                                        {feature.benefits.map((benefit, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-sm">
                                                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                                                <span className="text-muted-foreground">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {additionalFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-background p-6 rounded-lg border hover:border-primary transition-all duration-300 text-center"
                        >
                            <div className="flex flex-col items-center gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <feature.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-semibold">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center bg-background p-8 rounded-lg border">
                    <h2 className="text-2xl font-bold mb-4">
                        Ready to Experience Smart Savings?
                    </h2>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Join thousands of users who are already benefiting from our AI-powered
                        savings platform. Start your journey to financial freedom today.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="gap-2">
                            Get Started Now
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                        <Button size="lg" variant="outline">
                            View Demo
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;