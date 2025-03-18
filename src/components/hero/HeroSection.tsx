import { Button } from "@/components/ui/button";
import { Coins, Sparkles, TrendingUp } from "lucide-react";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const HeroSection = () => {
    const [monthlyTransactions, setMonthlyTransactions] = useState<string>("");
    const [calculatedReturns, setCalculatedReturns] = useState<{
        monthlyInvestment: number;
        annualInvestment: number;
        annualReturns: number;
        totalValue: number;
    } | null>(null);

    const calculateReturns = (transactions: number) => {

        const minInvestment = 2;
        const maxInvestment = 5;

        const avgPerTransaction = (minInvestment + maxInvestment) / 2; // ₹3.5

        const monthlyInvestment = transactions * avgPerTransaction;

        const annualInvestment = monthlyInvestment * 12;

        const annualReturns = annualInvestment * 0.15;

        const totalValue = annualInvestment + annualReturns;

        return {
            monthlyInvestment,
            annualInvestment,
            annualReturns,
            totalValue
        };
    };

    const handleCalculate = () => {
        const transactions = parseInt(monthlyTransactions);
        if (!isNaN(transactions) && transactions > 0) {
            const returns = calculateReturns(transactions);
            setCalculatedReturns(returns);
        }
    };

    return (
        <div className="bg-background pt-20">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
                    <div className="text-center lg:text-left space-y-6 max-w-xl mx-auto lg:mx-0">
                        <div className="flex items-center justify-center lg:justify-start gap-2">
                            <Sparkles className="text-primary w-5 h-5" />
                            <span className="text-xs sm:text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                                Smart Investments While You Pay
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                            Turn Every Payment into an Investment Opportunity
                        </h1>

                        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground">
                            Every time you pay, we invest your spare change in high-return mutual funds and gold.
                            Earn up to 15% returns while you spend.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button size="lg" className="gap-2">
                                        <TrendingUp className="w-4 h-4" />
                                        Start Investing
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-md text-center">
                                    <DialogHeader>
                                        <DialogTitle>Coming Soon! 🚀</DialogTitle>
                                    </DialogHeader>
                                    <p className="text-muted-foreground">
                                        We are working hard to build an amazing investment experience for you. Stay tuned!
                                    </p>
                                </DialogContent>
                            </Dialog>
                            <Drawer>
                                <DrawerTrigger asChild>
                                    <Button size="lg" variant="outline" className="gap-2">
                                        <Coins className="w-4 h-4" />
                                        Calculate Returns
                                    </Button>
                                </DrawerTrigger>
                                <DrawerContent>
                                    <div className="mx-auto w-full max-w-sm">
                                        <DrawerHeader>
                                            <DrawerTitle>Investment Calculator</DrawerTitle>
                                            <DrawerDescription>
                                                Calculate how your micro-investments grow when ₹2-5 is invested from each transaction
                                            </DrawerDescription>
                                        </DrawerHeader>

                                        <div className="p-4 pb-0">
                                            <div className="space-y-4">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">
                                                        Number of Monthly Transactions
                                                    </label>
                                                    <div className="flex gap-2">
                                                        <Input
                                                            type="number"
                                                            placeholder="e.g., 100 transactions"
                                                            value={monthlyTransactions}
                                                            onChange={(e) => setMonthlyTransactions(e.target.value)}
                                                            className="flex-1"
                                                        />
                                                        <Button
                                                            onClick={handleCalculate}
                                                        >
                                                            Calculate
                                                        </Button>
                                                    </div>
                                                    <p className="text-xs text-muted-foreground">
                                                        Enter how many transactions you make per month
                                                    </p>
                                                </div>

                                                {calculatedReturns !== null && (
                                                    <div className="rounded-lg bg-secondary/20 p-4 space-y-4">
                                                        <div className="space-y-3">
                                                            <div>
                                                                <div className="text-sm text-muted-foreground">
                                                                    Monthly Investment (₹2-5 per transaction)
                                                                </div>
                                                                <div className="text-lg font-semibold">
                                                                    ₹{calculatedReturns.monthlyInvestment.toFixed(2)}
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <div className="text-sm text-muted-foreground">
                                                                    Total Annual Investment
                                                                </div>
                                                                <div className="text-lg font-semibold">
                                                                    ₹{calculatedReturns.annualInvestment.toFixed(2)}
                                                                </div>
                                                            </div>

                                                            <div className="pt-2 border-t">
                                                                <div className="text-sm text-muted-foreground">
                                                                    Returns After 1 Year (15% p.a.)
                                                                </div>
                                                                <div className="text-xl font-bold text-primary">
                                                                    ₹{calculatedReturns.annualReturns.toFixed(2)}
                                                                </div>
                                                            </div>

                                                            <div className="pt-2 border-t">
                                                                <div className="text-sm text-muted-foreground">
                                                                    Total Value After 1 Year
                                                                </div>
                                                                <div className="text-2xl font-bold text-primary">
                                                                    ₹{calculatedReturns.totalValue.toFixed(2)}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="text-xs text-muted-foreground bg-secondary/30 p-3 rounded-md">
                                                            <p className="font-medium mb-1">Calculation Breakdown:</p>
                                                            <ul className="list-disc pl-4 space-y-1">
                                                                <li>₹3.5 average investment per transaction (range: ₹2-5)</li>
                                                                <li>{monthlyTransactions} transactions per month</li>
                                                                <li>15% projected annual returns</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <DrawerFooter>
                                            <DrawerClose asChild>
                                                <Button variant="outline">Close</Button>
                                            </DrawerClose>
                                        </DrawerFooter>
                                    </div>
                                </DrawerContent>
                            </Drawer>
                        </div>

                        <div className="bg-secondary/20 p-4 rounded-lg mt-8">
                            <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                                <div className="space-y-1">
                                    <div className="text-xl sm:text-2xl font-bold text-primary">15%</div>
                                    <div className="text-xs sm:text-sm text-muted-foreground">Avg. Returns</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-xl sm:text-2xl font-bold text-primary">₹2-5</div>
                                    <div className="text-xs sm:text-sm text-muted-foreground">Per Transaction</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-xl sm:text-2xl font-bold text-primary">100K+</div>
                                    <div className="text-xs sm:text-sm text-muted-foreground">Active Users</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] mt-8 lg:mt-0">
                        <img
                            src="/vite.svg"
                            alt="Desipe App Interface"
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;