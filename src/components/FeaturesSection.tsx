import { Shield, Zap, Eye, Target, Cpu, Lock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Blazing Fast",
    description: "Ultra-low latency with optimized memory management.",
  },
  {
    icon: Shield,
    title: "Undetected",
    description: "Advanced bypasses updated within hours of patches.",
  },
  {
    icon: Eye,
    title: "ESP & Visuals",
    description: "Player ESP, tracers, skeletons, and custom overlays.",
  },
  {
    icon: Target,
    title: "AimBot",
    description: "Precision aimbot with FOV and smoothing options.",
  },
  {
    icon: Cpu,
    title: "External",
    description: "No injection, no DLL, minimal system footprint.",
  },
  {
    icon: Lock,
    title: "Secure",
    description: "HWID-locked with encrypted authentication.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-28">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/5 px-5 py-2 text-xs font-medium uppercase tracking-widest text-primary/90">
            Features
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Everything You Need
          </h2>
        </div>

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass-card border-glow card-hover group rounded-2xl p-6"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <feature.icon size={22} />
              </div>
              <h3 className="mb-2 font-display text-base font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
