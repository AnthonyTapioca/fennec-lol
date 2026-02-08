import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is Fennec safe to use?",
    answer: "Yes, Fennec runs as a completely external process with no injection. Our advanced anti-detection system is updated within hours of any game patch to ensure you stay safe.",
  },
  {
    question: "How do I get started after purchase?",
    answer: "After purchase, you'll receive instant access to the customer panel. Download the loader, login with your credentials, and you're ready to go. The whole process takes under 2 minutes.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept PayPal, all major credit cards, and various cryptocurrencies including Bitcoin and Ethereum for maximum privacy.",
  },
  {
    question: "Can I use Fennec on multiple games?",
    answer: "Absolutely. Fennec works on all popular Roblox games with game-specific optimizations. One subscription covers everything.",
  },
  {
    question: "What happens if I get a new computer?",
    answer: "You can reset your HWID through the customer panel. Each license allows for a limited number of resets per month to prevent abuse.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Due to the digital nature of our product, we don't offer refunds once the key has been activated. We recommend trying our weekly plan first if you're unsure.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/40 bg-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-primary">
            FAQ
          </span>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Common <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-card border-glow rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/40"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-display text-lg font-semibold pr-4">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-primary shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-48 pb-6" : "max-h-0"
                }`}
              >
                <p className="px-6 text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
