import { Check, Zap, Star, Crown } from "lucide-react";

const plans = [
  {
    name: "Weekly",
    price: "$9.99",
    period: "/week",
    description: "Try it out",
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
    description: "Most popular",
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
    period: "once",
    description: "Best value",
    features: [
      "Everything in Monthly",
      "Lifetime Updates",
      "VIP Discord Role",
      "Beta Features Access",
      "Direct Dev Support",
      "Custom Requests",
      "No Recurring Payments",
    ],
    icon: Crown,
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-28">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/5 px-5 py-2 text-xs font-medium uppercase tracking-widest text-primary/90">
            Pricing
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Choose Your Plan
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            All plans include instant access and automatic updates.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative glass-card rounded-2xl p-7 transition-all duration-300 ${
                plan.popular 
                  ? 'glow-purple border-primary/40 lg:scale-105' 
                  : 'border-glow card-hover'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="popular-badge rounded-full px-4 py-1 text-xs font-semibold text-white">
                    Popular
                  </span>
                </div>
              )}

              <div className="mb-5 flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                  plan.popular ? 'gradient-primary' : 'bg-primary/10'
                }`}>
                  <plan.icon size={20} className={plan.popular ? 'text-white' : 'text-primary'} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">{plan.name}</h3>
                  <p className="text-xs text-muted-foreground">{plan.description}</p>
                </div>
              </div>

              <div className="mb-6">
                <span className="font-display text-4xl font-bold gradient-text">{plan.price}</span>
                <span className="text-sm text-muted-foreground ml-1">{plan.period}</span>
              </div>

              <ul className="mb-7 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/15">
                      <Check size={10} className="text-primary" />
                    </div>
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://fennec.lol/purchase"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full rounded-xl py-3 text-center font-display text-sm font-semibold transition-all hover:scale-[1.02] ${
                  plan.popular
                    ? 'gradient-primary text-white'
                    : 'border border-primary/25 text-primary hover:bg-primary/5'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Secure payment via PayPal and Crypto. Instant delivery.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
