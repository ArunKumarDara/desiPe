import { Button } from "@/components/ui/button";
import { Coins, TrendingUp, CheckCircle } from "lucide-react";
// import { CheckCircle, TrendingUp } from "lucide-react";
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

const Work = () => {

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
        <section id="how-it-works">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center bg-secondary/20 rounded-lg p-6 sm:p-8">
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
                        <p className="text-muted-foreground text-lg mb-8">
                            Every time you make a payment, we automatically invest a small amount from ₹2-5 into high-growth investment options. Here's how DesiPe makes your payments smarter!
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-6 bg-secondary/20 rounded-lg">
                            <CheckCircle className="w-10 h-10 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-semibold">Step 1: Make a Payment</h3>
                            <p className="text-muted-foreground mt-2">
                                Use DesiPe for your daily transactions like shopping, bill payments, and recharges.
                            </p>
                        </div>
                        <div className="p-6 bg-secondary/20 rounded-lg">
                            <CheckCircle className="w-10 h-10 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-semibold">Step 2: Auto-Investment</h3>
                            <p className="text-muted-foreground mt-2">
                                A small amount (₹2-5) from each transaction is invested in mutual funds and gold.
                            </p>
                        </div>
                        <div className="p-6 bg-secondary/20 rounded-lg">
                            <CheckCircle className="w-10 h-10 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-semibold">Step 3: Grow Your Wealth</h3>
                            <p className="text-muted-foreground mt-2">
                                Your investments grow over time with an expected return of up to 15% annually.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:items-center mt-4">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button size="lg" className="gap-2 cursor-pointer">
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
                            <Button size="lg" variant="outline" className="gap-2 cursor-pointer">
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
            </div>
        </section>
    )
}

export default Work