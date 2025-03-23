import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    Wallet,
    Target,
    Shield,
    Settings,
    PieChart,
    TrendingUp,
    CreditCard,
    Smartphone,
    Users,
    Brain
} from "lucide-react";

const Benefits = () => {
    const benefits = [
        {
            icon: Wallet,
            title: "Effortless Savings",
            description: "Save without changing your spending habits or lifestyle."
        },
        {
            icon: Target,
            title: "Financial Discipline",
            description: "Automatically build wealth through small, consistent contributions."
        },
        {
            icon: Shield,
            title: "Emergency Preparedness",
            description: "Create a safety net to rely on during unforeseen situations."
        },
        {
            icon: Settings,
            title: "Customizable Savings",
            description: "Tailor your savings rates to match your financial goals and spending categories."
        },
        {
            icon: PieChart,
            title: "Spending Insights",
            description: "Gain valuable insights into your expenses to identify and reduce unnecessary spending."
        },
        {
            icon: TrendingUp,
            title: "Wealth Growth Opportunities",
            description: "Choose from interest-bearing accounts, mutual funds, or gold to grow your savings."
        },
        {
            icon: CreditCard,
            title: "Debt-Free Future",
            description: "Avoid credit card debt by using your emergency fund for unexpected expenses."
        },
        {
            icon: Smartphone,
            title: "User-Friendly Experience",
            description: "Manage your savings effortlessly with a simple app and real-time tracking."
        },
        {
            icon: Users,
            title: "Inclusive Financial Ecosystem",
            description: "Enable millions of Indians to participate in formal savings and investments."
        },
        {
            icon: Brain,
            title: "Empowerment Through Technology",
            description: "Leverage AI and ML for smarter financial decisions and optimized savings strategies."
        }
    ];

    return (
        <section className="py-20 bg-secondary/10" id="benefits">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold mb-6">
                        Benefits of Bharat Bachat
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Discover how Bharat Bachat transforms your everyday transactions into a pathway to financial security
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-background p-6 rounded-lg border hover:border-primary transition-all duration-300 group"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                                    <benefit.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center max-w-2xl mx-auto bg-background p-8 rounded-lg border">
                    <h2 className="text-2xl font-bold mb-4">
                        Join the Bharat Bachat Movement
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        Take the first step toward financial freedom and security. With Bharat Bachat,
                        every rupee you spend brings you closer to a brighter future.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="gap-2 w-full sm:w-auto">
                            Join Now
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto">
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;