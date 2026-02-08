import { Shield, Zap, Eye, Target, Cpu, Lock, Sparkles, Gauge } from "lucide-react";

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
  {
    icon: Sparkles,
    title: "Game Support",
    description: "Works on all popular Roblox games with game-specific optimizations.",
  },
  {
    icon: Gauge,
    title: "Performance",
    description: "Optimized to run smoothly even on lower-end systems without FPS drops.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-20 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/40 bg-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-primary">
            🚀 Features
          </span>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Packed with <span className="gradient-text">Power</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Every feature you need to dominate. Continuously updated and improved.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="glass-card card-shine border-glow group rounded-2xl p-6 transition-all duration-500 hover:border-primary/40 hover:glow-purple"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary transition-all duration-300 group-hover:from-primary/30 group-hover:to-accent/30 group-hover:scale-110">
                <feature.icon size={26} />
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
