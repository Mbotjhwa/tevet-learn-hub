import React from "react";
import { Check, Zap, Rocket, Shield, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Page } from "../App";
import { motion } from "framer-motion";
import { toast } from "sonner";

interface PricingProps {
  onNavigate: (page: Page) => void;
  onSubscribe: () => void;
}

export function Pricing({ onNavigate, onSubscribe }: PricingProps) {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for exploring our content.",
      icon: <Rocket className="w-6 h-6 text-slate-400" />,
      features: [
        "Access to introductory sessions",
        "Community discussion access",
        "Downloadable worksheets",
        "Ad-supported viewing"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Student Plus",
      price: "R149",
      period: "/month",
      description: "The complete package for dedicated learners.",
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      features: [
        "All sessions (School & TVET)",
        "Unlimited test attempts",
        "Verified digital certificates",
        "Offline viewing on mobile",
        "Priority mentor support",
        "No advertisements"
      ],
      cta: "Subscribe Now",
      popular: true
    },
    {
      name: "Institution",
      price: "Custom",
      description: "For schools and TVET colleges.",
      icon: <Shield className="w-6 h-6 text-primary" />,
      features: [
        "Bulk licenses for students",
        "Admin reporting dashboard",
        "Custom content integration",
        "Teacher-led assignments",
        "API access for LMS",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const handleSubscribe = (plan: string) => {
    if (plan === "Institution") {
      toast.info("Sales team will contact you soon!");
    } else {
      onSubscribe();
      toast.success(`Successfully subscribed to ${plan}!`);
      setTimeout(() => onNavigate("dashboard"), 1500);
    }
  };

  return (
    <div className="py-24 px-4 container mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Simple, Transparent <span className="text-primary">Pricing</span></h1>
        <p className="text-xl text-muted-foreground">
          Choose the plan that fits your learning journey. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`relative p-8 rounded-[2rem] border transition-all ${
              plan.popular 
                ? "bg-white border-primary shadow-2xl ring-4 ring-primary/5 scale-105 z-10" 
                : "bg-slate-50 border-slate-200 hover:bg-white hover:border-slate-300"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest flex items-center gap-1">
                <Crown className="w-3 h-3" /> Most Popular
              </div>
            )}
            
            <div className="mb-8 flex items-center justify-between">
              <div className="bg-white p-3 rounded-2xl shadow-sm ring-1 ring-slate-100">
                {plan.icon}
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-muted-foreground uppercase">{plan.name}</div>
                <div className="flex items-baseline justify-end">
                  <span className="text-3xl font-black">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground ml-1">{plan.period}</span>}
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-8 min-h-[40px]">{plan.description}</p>
            
            <div className="space-y-4 mb-8">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className={`mt-0.5 rounded-full p-0.5 ${plan.popular ? "bg-primary/20 text-primary" : "bg-slate-200 text-slate-500"}`}>
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              className={`w-full py-6 text-lg font-bold rounded-2xl ${
                plan.popular ? "bg-primary shadow-lg shadow-primary/30" : ""
              }`}
              variant={plan.popular ? "default" : "outline"}
              onClick={() => handleSubscribe(plan.name)}
            >
              {plan.cta}
            </Button>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 bg-primary/5 rounded-[2.5rem] p-12 border border-primary/10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <h3 className="text-2xl font-bold mb-2">Student Financial Aid?</h3>
          <p className="text-muted-foreground">We offer special discounts for students from low-income households. Contact our support team with your student proof for a 50% discount on Student Plus.</p>
        </div>
        <Button size="lg" variant="outline" className="rounded-full px-8">Inquire for Discount</Button>
      </div>
    </div>
  );
}