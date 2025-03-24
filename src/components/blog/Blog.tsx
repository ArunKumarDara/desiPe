import { Button } from "@/components/ui/button";
import {
    BookOpen,
    TrendingUp,
    PiggyBank,
    ArrowRight,
} from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const Blog = () => {
    const sections = [
        {
            title: "Financial Literacy",
            icon: BookOpen,
            articles: [
                {
                    title: "Importance of Understanding Personal Finances",
                    description: "In today's fast-paced world, financial literacy is more than just a buzzword—it's a survival skill. Understanding personal finances empowers individuals to make informed decisions about earning, spending, saving, and investing.",
                    readTime: "5 min read",
                    fullContent: `In today's fast-paced world, financial literacy is more than just a buzzword—it's a survival skill. Understanding personal finances empowers individuals to make informed decisions about earning, spending, saving, and investing.

Financial literacy lays the foundation for a stress-free future, ensuring you can handle emergencies and achieve life goals with confidence.

Key aspects of financial literacy include:
• Understanding income and expenses
• Creating and maintaining a budget
• Knowledge of saving and investment options
• Risk management and insurance
• Tax planning and compliance

By mastering these aspects, you can:
1. Make informed financial decisions
2. Build long-term wealth
3. Protect yourself from financial fraud
4. Plan for retirement effectively
5. Achieve your financial goals`
                },
                {
                    title: "How Small Steps Can Lead to Financial Independence",
                    description: "Financial independence isn't about earning a fortune overnight; it's about consistent and disciplined efforts. Small actions can compound into significant financial gains over time.",
                    readTime: "4 min read",
                    fullContent: `Financial independence isn't about earning a fortune overnight; it's about consistent and disciplined efforts. Small actions, such as tracking expenses, sticking to a budget, and setting aside a fixed percentage of income for savings, can compound into significant financial gains over time.

Start by saving even 10% of your monthly income, gradually increasing the percentage as your financial habits improve. Each small step you take strengthens your financial foundation, moving you closer to independence.

Key steps to financial independence:
• Start with a clear budget
• Track all expenses
• Set realistic saving goals
• Invest consistently
• Build emergency funds

Benefits of small steps:
1. Builds sustainable habits
2. Reduces financial stress
3. Creates long-term wealth
4. Provides financial security
5. Enables goal achievement`
                },
                {
                    title: "Breaking Myths About Saving and Investing in India",
                    description: "Many Indians believe that saving is only for the wealthy or that investing in mutual funds or stocks is risky and complicated. The truth is, saving and investing are accessible to everyone.",
                    readTime: "6 min read",
                    fullContent: `Many Indians believe that saving is only for the wealthy or that investing in mutual funds or stocks is risky and complicated. These myths often stem from a lack of awareness. The truth is, saving and investing are accessible to everyone, regardless of income level.

Tools like systematic investment plans (SIPs) and government-backed schemes provide safe and structured ways to grow your wealth. The key is to start small, stay consistent, and educate yourself about the options available.

Common myths debunked:
• Only rich people can invest
• Market investments are too risky
• You need large sums to start
• Gold is the safest investment
• Real estate is always profitable

Facts about investing:
1. SIPs start from just ₹500
2. Diversification reduces risk
3. Digital platforms make investing easy
4. Regular investing beats timing the market
5. Multiple investment options exist for all budgets`
                }
            ]
        },
        {
            title: "Saving Tips",
            icon: PiggyBank,
            articles: [
                {
                    title: "Smart Ways to Reduce Unnecessary Expenses",
                    description: "Reducing unnecessary expenses doesn't mean compromising on your lifestyle. It's about making conscious decisions and identifying non-essential expenditures.",
                    readTime: "4 min read",
                    fullContent: `Reducing unnecessary expenses doesn't mean compromising on your lifestyle. It's about making conscious decisions and identifying non-essential expenditures.

Start by tracking your expenses and categorizing them. This will help you identify areas where you can cut back without affecting your quality of life.

Smart saving strategies:
• Review and cancel unused subscriptions
• Plan meals and grocery shopping
• Use cashback and reward programs
• Compare prices before purchasing
• Choose quality over quantity

Practical tips:
1. Cook meals at home
2. Use public transport when possible
3. Wait before making big purchases
4. Use energy-efficient appliances
5. Share subscriptions with family`
                },
                {
                    title: "Setting Achievable Financial Goals",
                    description: "Financial goals provide direction and purpose to your saving efforts. Learn how to set SMART goals and break them into manageable milestones.",
                    readTime: "5 min read",
                    fullContent: `Financial goals provide direction and purpose to your saving efforts. Begin by categorizing your goals into short-term, medium-term, and long-term. Ensure that each goal is specific, measurable, attainable, relevant, and time-bound (SMART).

Breaking down large goals into smaller milestones can make them less intimidating and more achievable.

Goal categories:
• Short-term (0-1 year)
• Medium-term (1-5 years)
• Long-term (5+ years)

SMART goal examples:
1. Save ₹50,000 for emergency fund in 6 months
2. Invest ₹2000 monthly in mutual funds
3. Build retirement corpus of ₹1 crore in 20 years
4. Save for children's education
5. Plan for home purchase down payment`
                },
                {
                    title: "Techniques to Maximize Your Savings Through Bharat Bachat",
                    description: "Discover how the Bharat Bachat model simplifies savings by integrating them into your daily transactions.",
                    readTime: "7 min read",
                    fullContent: `The Bharat Bachat model simplifies savings by integrating them into your daily transactions. By designating a small percentage of your spending to savings, you can effortlessly build a corpus over time.

Setting a self-imposed "savings tax" of 5-10% on UPI transactions can add up significantly without disrupting your budget. The model's categorization of expenses ensures that saving becomes a seamless part of your lifestyle.

Key features:
• Automated savings with each transaction
• Customizable saving percentages
• Category-based saving rules
• Real-time tracking
• Flexible withdrawal options

Benefits:
1. Effortless saving process
2. Consistent wealth building
3. Customizable to your needs
4. No lifestyle changes required
5. Regular progress tracking`
                }
            ]
        },
        {
            title: "Significance of Micro-Savings",
            icon: TrendingUp,
            articles: [
                {
                    title: "How Small Savings Grow Into a Large Corpus Over Time",
                    description: "Learn about the power of compounding and how saving just ₹100 daily can grow to over ₹1.8 lakh in five years.",
                    readTime: "5 min read",
                    fullContent: `Micro-savings leverage the power of compounding—a concept where your savings generate returns, and those returns generate even more returns. For example, saving just ₹100 daily can grow to over ₹1.8 lakh in five years with a modest interest rate of 6%.

Consistency and time are the key factors that transform small contributions into substantial wealth.

Power of compounding:
• Daily savings add up quickly
• Interest earned on interest
• Long-term growth potential
• Risk-free wealth building
• Automated saving process

Example calculations:
1. ₹100/day = ₹36,500/year
2. 6% annual interest
3. 5-year growth = ₹1.8 lakh+
4. 10-year growth = ₹4.2 lakh+
5. 20-year growth = ₹12 lakh+`
                },
                {
                    title: "Real-Life Examples of the Power of Consistency",
                    description: "Read inspiring stories of how consistent saving habits, no matter how small, can create life-changing opportunities.",
                    readTime: "6 min read",
                    fullContent: `Consider Ramesh, a middle-class individual who started saving ₹50 per day through a recurring deposit. After ten years, his disciplined efforts resulted in a corpus of over ₹2 lakh, which he used to fund his daughter's education.

Stories like Ramesh's highlight that consistent saving habits, no matter how small, can create life-changing opportunities.

Success stories:
• Auto driver's education fund
• Shop owner's retirement plan
• Student's emergency savings
• Homemaker's investment growth
• Daily wage worker's success

Key learnings:
1. Consistency beats amount
2. Start early for better results
3. Every rupee counts
4. Patience pays off
5. Small steps, big impact`
                },
                {
                    title: "Leveraging UPI Transactions to Make Saving Effortless",
                    description: "Explore how UPI has revolutionized India's payment system and can transform your saving habits.",
                    readTime: "4 min read",
                    fullContent: `UPI has revolutionized India's payment system, and it can do the same for savings. With the Bharat Bachat model, every UPI transaction becomes an opportunity to save.

For instance, when you pay ₹100 for groceries, an additional ₹5 gets automatically transferred to your savings account. This approach turns everyday spending into a disciplined savings routine.

UPI advantages:
• Instant transfers
• Secure transactions
• Wide acceptance
• No transaction fees
• 24/7 availability

Saving opportunities:
1. Automatic deductions
2. Round-up savings
3. Category-based saving
4. Goal-linked transfers
5. Investment automation`
                }
            ]
        }
    ];

    return (
        <section className="py-20 bg-gray-100" id="blog">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold mb-6">
                        Blog and Resources
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Explore our comprehensive guides and articles on financial literacy,
                        saving strategies, and the power of micro-savings.
                    </p>
                </div>

                {/* Blog Sections */}
                <div className="space-y-16">
                    {sections.map((section, index) => (
                        <div key={index}>
                            <div className="flex items-center gap-3 mb-8">
                                <section.icon className="w-6 h-6 text-primary" />
                                <h2 className="text-2xl font-bold">{section.title}</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {section.articles.map((article, idx) => (
                                    <Card
                                        key={idx}
                                        className="hover:border-primary transition-all duration-300"
                                    >
                                        <CardHeader>
                                            <CardTitle className="line-clamp-2">
                                                {article.title}
                                            </CardTitle>
                                            <CardDescription>
                                                {article.readTime}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground line-clamp-3">
                                                {article.description}
                                            </p>
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button
                                                        variant="link"
                                                        className="mt-4 p-0 h-auto font-semibold text-primary"
                                                    >
                                                        Read More
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                                                    <DialogHeader>
                                                        <DialogTitle className="text-2xl mb-2">
                                                            {article.title}
                                                        </DialogTitle>
                                                        <DialogDescription>
                                                            {article.readTime}
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    <div className="mt-4 space-y-4">
                                                        {article.fullContent.split('\n\n').map((paragraph, i) => (
                                                            <div key={i}>
                                                                {paragraph.startsWith('•') ? (
                                                                    <ul className="list-disc pl-4 space-y-2">
                                                                        {paragraph.split('\n').map((item, j) => (
                                                                            <li key={j} className="text-muted-foreground">
                                                                                {item.replace('•', '').trim()}
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                ) : paragraph.match(/^\d\./) ? (
                                                                    <ol className="list-decimal pl-4 space-y-2">
                                                                        {paragraph.split('\n').map((item, j) => (
                                                                            <li key={j} className="text-muted-foreground">
                                                                                {item.replace(/^\d\./, '').trim()}
                                                                            </li>
                                                                        ))}
                                                                    </ol>
                                                                ) : (
                                                                    <p className="text-muted-foreground">
                                                                        {paragraph}
                                                                    </p>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </DialogContent>
                                            </Dialog>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Newsletter Signup */}
                <div className="mt-20 bg-secondary/10 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold mb-4">
                        Stay Informed and Empowered
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Subscribe to our newsletter for the latest insights on financial literacy,
                        saving strategies, and tips for building long-term wealth.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/50 min-w-[300px]"
                        />
                        <Button className="gap-2">
                            Subscribe
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;