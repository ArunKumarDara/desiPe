import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
    const faqs = [
        {
            question: "How do I enroll in Bharat Bachat?",
            answer: "You can enroll through the Bharat Bachat app or any partnered UPI platform. Simply opt-in to start saving automatically with every transaction."
        },
        {
            question: "How does the savings model work?",
            answer: "Bharat Bachat categorizes transactions into Essentials (2.5% saved), Comforts (5% saved), and Luxuries (10% saved). The saved amount is directly debited from your account and pooled into your Bharat Bachat savings account."
        },
        {
            question: "Can I customize my savings percentage?",
            answer: "Yes, you can set your own saving rates for each category based on your preferences. You also have the flexibility to opt-in or pause savings at any time."
        },
        {
            question: "Where is my saved money stored?",
            answer: "Your savings are securely pooled into a Bharat Bachat account, where you can track them in real-time via the app."
        },
        {
            question: "How can I grow my savings?",
            answer: "You can choose to grow your savings through interest-bearing accounts, mutual funds, or by accumulating 24K gold as an investment."
        },
        {
            question: "Can I withdraw my savings anytime?",
            answer: "Yes, you can access your savings instantly during emergencies. If invested, withdrawal timelines depend on the investment type (e.g., mutual funds may take 2-3 business days)."
        }
    ];

    return (
        <section className="py-20 bg-gray-100" id="faq">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Get to know more about Bharat Bachat and how it helps you save effortlessly.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent>
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
