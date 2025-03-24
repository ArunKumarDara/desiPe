import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Target, Users } from "lucide-react";

const About = () => {
    const inspirationPoints = [
        "Small daily deductions of ₹3-₹5 per ride add up to significant amounts",
        "₹77 daily contribution, with ₹23 as TDS alone",
        "₹690 monthly savings potential, approximately ₹8,000 annually",
        "Automated savings system through UPI payments",
        "Smart categorization of essential and non-essential spending",
        "Monthly spending insights for better financial decisions"
    ];

    const visionPoints = [
        "75% of Indians lack emergency funds",
        "Limited participation in formal financial systems",
        "Making wealth creation accessible to every Indian",
        "Leveraging billions of daily UPI transactions",
        "Building a culture of smart saving",
        "Ensuring high safety and instant access to savings"
    ];

    return (
        <section className="py-20 bg-gray-100" id="about">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Founder's Journey */}
                <div className="max-w-4xl mx-auto mb-20">
                    <h1 className="text-4xl font-bold mb-8 text-center">
                        The Journey of Bharat Bachat
                    </h1>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-muted-foreground mb-6">
                            The journey of Bharat Bachat began in 2010 when our founder, <span className="font-semibold text-foreground">Neelam Vamsi Krishna Reddy</span>,
                            started his career as a laborer. During this time, he witnessed labor exploitation, low wages,
                            long working hours, and the daily struggles of workers just to survive.
                        </p>

                        <p className="text-muted-foreground mb-6">
                            After completing his graduation, he worked as a production manager, demonstrating dedication
                            and perseverance. In his spare time, he worked as a bike taxi gig worker with OLA and Rapido,
                            interacting with a wide range of people and professionals. These interactions provided valuable
                            insights into the financial struggles faced by many, particularly the increasing consumerism
                            that leaves little room for savings.
                        </p>
                    </div>
                </div>

                {/* Inspiration Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <div className="bg-secondary/10 p-8 rounded-lg">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <Target className="w-6 h-6 text-primary" />
                            Inspiration Behind Bharat Bachat
                        </h2>
                        <ul className="space-y-4">
                            {inspirationPoints.map((point, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                                    <span className="text-muted-foreground">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-secondary/10 p-8 rounded-lg">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <Users className="w-6 h-6 text-primary" />
                            Vision and Goals
                        </h2>
                        <ul className="space-y-4">
                            {visionPoints.map((point, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                                    <span className="text-muted-foreground">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center max-w-2xl mx-auto">
                    <h3 className="text-2xl font-bold mb-4">
                        Join the Bharat Bachat Movement
                    </h3>
                    <p className="text-muted-foreground mb-8">
                        Take the first step toward financial freedom and security. With Bharat Bachat,
                        every rupee you spend brings you closer to a brighter future.
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <Button size="lg" className="gap-2">
                            Join Now
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                        <Button size="lg" variant="outline">
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;