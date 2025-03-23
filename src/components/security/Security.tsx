import { Shield, Lock, BadgeCheck, Server } from "lucide-react";

const Security = () => {
    const features = [
        {
            icon: Shield,
            title: "Bank-Level Encryption",
            description: "We use 256-bit encryption to protect all your transactions and personal data, the same security used by leading banks."
        },
        {
            icon: BadgeCheck,
            title: "RBI Compliant",
            description: "Our platform follows all regulatory guidelines set by the Reserve Bank of India for payment applications."
        },
        {
            icon: Lock,
            title: "Secure Investments",
            description: "Your investments are made only in SEBI registered mutual funds and regulated digital gold platforms."
        },
        {
            icon: Server,
            title: "Data Protection",
            description: "Your data is stored in secure servers with regular security audits and multiple backup systems."
        }
    ];

    return (
        <section className="py-20" id="security">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold mb-4">
                        Bank-Grade Security
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Your security is our top priority. We implement multiple layers of protection to keep your money and data safe.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-background p-6 rounded-lg border hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <feature.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 p-6 bg-secondary/10 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-bold text-primary mb-2">256-bit</div>
                            <div className="text-sm text-muted-foreground">Encryption Standard</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-primary mb-2">100%</div>
                            <div className="text-sm text-muted-foreground">Data Protection</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                            <div className="text-sm text-muted-foreground">Security Monitoring</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Security;