import { Star } from "lucide-react";

const Testimonials = () => {
    const reviews = [
        {
            name: "Rahul Singh",
            role: "Regular User",
            image: "/avatars/user1.png", // Add actual image paths
            comment: "Started investing ₹150/month through spare change, now have ₹25,000 saved!",
            rating: 5,
            duration: "6 months"
        },
        {
            name: "Priya Patel",
            role: "Student",
            image: "/avatars/user2.png",
            comment: "Never thought saving could be this easy. The app automatically invests while I shop!",
            rating: 5,
            duration: "3 months"
        },
        {
            name: "Amit Kumar",
            role: "Professional",
            image: "/avatars/user3.png",
            comment: "Great returns on my spare change investments. The power of micro-investing is real!",
            rating: 5,
            duration: "1 year"
        }
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold mb-4">
                        What Our Users Say
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Join thousands of users who are building their wealth with Desipe
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-background p-6 rounded-lg border hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="w-12 h-12 rounded-full"
                                />
                                <div>
                                    <h4 className="font-semibold">{review.name}</h4>
                                    <p className="text-sm text-muted-foreground">{review.role}</p>
                                </div>
                            </div>

                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                ))}
                            </div>

                            <p className="text-muted-foreground mb-4">"{review.comment}"</p>

                            <p className="text-sm text-muted-foreground">
                                User for {review.duration}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;