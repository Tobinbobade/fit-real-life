import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Membership = () => {
  const plans = [
    {
      name: "Basic",
      price: "49",
      period: "month",
      description: "Perfect for getting started",
      features: [
        "Access to gym floor",
        "Locker room access",
        "Basic equipment",
        "Mobile app access",
        "Free fitness assessment",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "89",
      period: "month",
      description: "Most popular choice",
      features: [
        "Everything in Basic",
        "Unlimited group classes",
        "24/7 gym access",
        "Guest privileges (2/month)",
        "Nutrition consultation",
        "Towel service",
      ],
      popular: true,
    },
    {
      name: "Elite",
      price: "149",
      period: "month",
      description: "For serious athletes",
      features: [
        "Everything in Pro",
        "Personal training sessions (4/month)",
        "Spa & sauna access",
        "Priority class booking",
        "Unlimited guest privileges",
        "Customized meal plans",
        "Recovery zone access",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Membership Plans</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan to match your fitness journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative p-8 bg-card border-2 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] ${
                  plan.popular
                    ? "border-primary scale-105 md:scale-110"
                    : "border-border hover:border-primary"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-primary">${plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "hero" : "default"}
                  className="w-full"
                  size="lg"
                >
                  Choose {plan.name}
                </Button>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              All plans include a 7-day money-back guarantee. No contracts, cancel anytime.
            </p>
            <p className="text-sm text-muted-foreground">
              Questions? Contact us at (555) 123-4567 or info@apexfitness.com
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Membership;
