import { ArrowRight, Target, Lightbulb, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Vision = () => {
    const visionPoints = [
        {
            icon: Target,
            title: "Our Mission",
            description: "To revolutionize everyday transactions by turning spare change into meaningful investments, making wealth creation accessible to everyone."
        },
        {
            icon: Lightbulb,
            title: "Innovation",
            description: "Pioneering micro-investment technology that seamlessly integrates with daily payments, creating a new paradigm in personal finance."
        },
        {
            icon: Users,
            title: "Financial Inclusion",
            description: "Breaking down barriers to investment by enabling anyone to start their wealth-building journey with just ₹2-5 per transaction."
        },
        {
            icon: Globe,
            title: "Global Impact",
            description: "Building a community of smart investors who understand that small, consistent investments can lead to significant long-term wealth."
        }
    ];

    return (
        <section className="py-20 bg-gray-100" id="vision">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold mb-6">
                        Our Vision for the Future of Finance
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        We're building a future where every transaction becomes an opportunity for growth,
                        making investment accessible to millions through innovative technology.
                    </p>
                </div>

                {/* Vision Points Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {visionPoints.map((point, index) => (
                        <div
                            key={index}
                            className="p-6 bg-background rounded-lg border hover:border-primary transition-colors"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <point.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                                    <p className="text-muted-foreground">{point.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="bg-primary/5 rounded-2xl p-8 mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-2">₹100Cr+</div>
                            <div className="text-sm text-muted-foreground">
                                Projected Investment Volume by 2027
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-2">1M+</div>
                            <div className="text-sm text-muted-foreground">
                                Target Active Users
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-2">15%</div>
                            <div className="text-sm text-muted-foreground">
                                Average Annual Returns
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <h3 className="text-2xl font-semibold mb-4">
                        Join Us in Revolutionizing Personal Finance
                    </h3>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Be part of a movement that's making investment accessible to everyone.
                        Start your investment journey with as little as ₹2 per transaction.
                    </p>
                    <Button size="lg" className="gap-2">
                        Start Investing Today
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Vision;