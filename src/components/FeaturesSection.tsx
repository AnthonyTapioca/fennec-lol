import { Shield, Zap, Eye, Target, Cpu, Lock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Blazing Fast",
    description: "Ultra-low latency execution with optimized memory management for zero lag gameplay.",
  },
  {
    icon: Shield,
    title: "Undetected",
    description: "Advanced anti-detection bypasses keep you safe. Updated within hours of any patch.",
  },
  {
    icon: Eye,
    title: "ESP & Visuals",
    description: "Full player ESP, box ESP, tracers, skeletons and customizable visual overlays.",
  },
  {
    icon: Target,
    title: "Silent Aim",
    description: "Precision aimbot with configurable FOV, smoothing, and bone targeting.",
  },
  {
    icon: Cpu,
    title: "External Process",
    description: "Runs completely external — no injection, no DLL, minimal footprint.",
  },
  {
    icon: Lock,
    title: "Secure Loader",
    description: "HWID-locked loader with encrypted authentication and automatic updates.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block font-display text-xs font-semibold uppercase tracking-widest text-primary">
            Why Fennec?
          </span>
          <h2 className="text-3xl font-bold sm:text-5xl">
            Loaded with <span className="gradient-text">Features</span>
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="glass-card border-glow group rounded-2xl p-6 transition-all duration-300 hover:border-primary/50 hover:glow-red"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <feature.icon size={24} />
              </div>
              <h3 className="mb-2 font-display text-lg font-bold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
