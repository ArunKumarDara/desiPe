import {
    AppWindow,
    CreditCard,
    PiggyBank,
    Brain,
    Wallet,
    ArrowRight,
    IndianRupee,
    ShoppingCart,
    Coffee,
    Diamond,
    LineChart,
    Coins,
    ShieldCheck,
    GalleryHorizontalEnd
} from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
    const steps = [
        {
            icon: AppWindow,
            title: "1. Easy Enrollment",
            description: "Sign up through the Bharat Bachat app or any partnered UPI platform to start your savings journey.",
        },
        {
            icon: CreditCard,
            title: "2. Spend Normally",
            description: "Continue making UPI payments for your daily expenses - no change in your spending habits required.",
        },
        {
            icon: PiggyBank,
            title: "3. Automatic Savings",
            description: "Watch your wealth grow as we automatically save a small percentage from each transaction.",
        },
        {
            icon: Wallet,
            title: "4. Choose Your Growth Path",
            description: "Select from multiple investment options to grow your accumulated savings.",
        }
    ];

    const categories = [
        {
            icon: ShoppingCart,
            title: "Essentials",
            examples: "Groceries, Utilities",
            percentage: "2.5%",
            color: "text-green-500",
            bgColor: "bg-green-500/10",
        },
        {
            icon: Coffee,
            title: "Comforts",
            examples: "Dining, Entertainment",
            percentage: "5%",
            color: "text-blue-500",
            bgColor: "bg-blue-500/10",
        },
        {
            icon: Diamond,
            title: "Luxuries",
            examples: "Premium Products",
            percentage: "10%",
            color: "text-purple-500",
            bgColor: "bg-purple-500/10",
        }
    ];

    const investmentOptions = [
        {
            icon: LineChart,
            title: "Interest-Bearing Account",
            description: "Earn fixed interest rates similar to Fixed Deposits",
        },
        {
            icon: Coins,
            title: "Mutual Funds",
            description: "Invest in diversified schemes based on your risk appetite",
        },
        {
            icon: GalleryHorizontalEnd,
            title: "24K Gold",
            description: "Accumulate gold as an investment or cultural asset",
        }
    ];

    return (
        <section className="py-20 bg-gray-100" id="how-it-works">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold mb-6">
                        How Bharat Bachat Works
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Transform your everyday transactions into a wealth-building journey with
                        our intelligent saving system.
                    </p>
                </div>

                {/* Main Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-background p-6 rounded-lg border hover:border-primary transition-all duration-300"
                        >
                            <div className="flex flex-col items-center text-center gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <step.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-semibold">{step.title}</h3>
                                <p className="text-sm text-muted-foreground">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Saving Categories */}
                <div className="bg-secondary/10 p-8 rounded-lg mb-16">
                    <h2 className="text-2xl font-bold mb-8 text-center">
                        Smart Transaction Categories
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className="bg-background p-6 rounded-lg border"
                            >
                                <div className="flex flex-col items-center text-center gap-4">
                                    <div className={`p-3 rounded-lg ${category.bgColor}`}>
                                        <category.icon className={`w-6 h-6 ${category.color}`} />
                                    </div>
                                    <h3 className="font-semibold">{category.title}</h3>
                                    <p className="text-sm text-muted-foreground">{category.examples}</p>
                                    <div className={`text-xl font-bold ${category.color}`}>
                                        {category.percentage}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Example Transaction */}
                <div className="bg-background p-8 rounded-lg border mb-16">
                    <h2 className="text-2xl font-bold mb-6 text-center">
                        See How It Works
                    </h2>
                    <div className="max-w-2xl mx-auto space-y-4">
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center gap-4">
                                <IndianRupee className="w-6 h-6 text-primary" />
                                <div>
                                    <p className="font-semibold">Grocery Purchase</p>
                                    <p className="text-sm text-muted-foreground">Essential Category</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-semibold">₹1,000</p>
                                <p className="text-sm text-green-500">Saves ₹25 (2.5%)</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Investment Options */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 text-center">
                        Grow Your Savings
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {investmentOptions.map((option, index) => (
                            <div
                                key={index}
                                className="bg-background p-6 rounded-lg border hover:border-primary transition-all duration-300"
                            >
                                <div className="flex flex-col items-center text-center gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg">
                                        <option.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="font-semibold">{option.title}</h3>
                                    <p className="text-sm text-muted-foreground">{option.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Features Highlight */}
                <div className="bg-secondary/10 p-8 rounded-lg mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex items-center gap-4">
                            <Brain className="w-6 h-6 text-primary shrink-0" />
                            <p className="text-sm">AI-powered spending analysis and insights</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
                            <p className="text-sm">Instant access to emergency funds</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Wallet className="w-6 h-6 text-primary shrink-0" />
                            <p className="text-sm">Customizable saving percentages</p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Button size="lg" className="gap-2">
                        Start Saving Today
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;