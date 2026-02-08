import { Check, Star, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "Weekly",
    price: "$9.99",
    period: "/week",
    description: "Perfect for trying out Fennec",
    features: [
      "Full ESP & Visuals",
      "Silent Aim",
      "Speed & Fly",
      "Auto Updates",
      "Discord Support",
    ],
    icon: Zap,
    popular: false,
  },
  {
    name: "Monthly",
    price: "$24.99",
    period: "/month",
    description: "Most popular choice",
    features: [
      "Everything in Weekly",
      "Priority Updates",
      "Private Scripts",
      "24/7 Priority Support",
      "Early Access Features",
      "Custom Configs",
    ],
    icon: Star,
    popular: true,
  },
  {
    name: "Lifetime",
    price: "$79.99",
    period: "one-time",
    description: "Best value forever",
    features: [
      "Everything in Monthly",
      "Lifetime Updates",
      "VIP Discord Role",
      "Beta Features Access",
      "Direct Dev Support",
      "Custom Feature Requests",
      "No Recurring Payments",
    ],
    icon: Crown,
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-20 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/40 bg-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-primary">
            💎 Pricing Plans
          </span>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Choose Your <span className="gradient-text">Power</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Start dominating today with our flexible pricing. All plans include instant access and automatic updates.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative card-shine glass-card rounded-3xl p-8 transition-all duration-500 hover:scale-105 ${
                plan.popular 
                  ? 'glow-purple-intense border-primary/40 lg:scale-105' 
                  : 'border-glow hover:glow-purple'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="popular-badge rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6 flex items-center gap-3">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                  plan.popular ? 'gradient-primary' : 'bg-primary/10'
                }`}>
                  <plan.icon size={24} className={plan.popular ? 'text-white' : 'text-primary'} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
              </div>

              <div className="mb-8">
                <span className="font-display text-5xl font-black gradient-text">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              <ul className="mb-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
                      <Check size={12} className="text-primary" />
                    </div>
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://fennec.lol/purchase"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full rounded-xl py-4 text-center font-display text-sm font-bold uppercase tracking-wider transition-all hover:scale-105 ${
                  plan.popular
                    ? 'gradient-primary text-white glow-purple'
                    : 'border border-primary/30 text-primary hover:bg-primary/10'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          🔒 Secure payment via PayPal & Crypto • Instant delivery • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
