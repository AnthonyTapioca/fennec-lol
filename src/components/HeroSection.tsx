import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="animate-slide-up">
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Roblox External
          </span>
        </div>

        <h1 className="animate-slide-up-delay-1 mb-6 text-5xl font-black uppercase tracking-tight sm:text-7xl lg:text-8xl">
          <span className="gradient-text glow-text">Fennec</span>
          <span className="text-muted-foreground">.lol</span>
        </h1>

        <p className="animate-slide-up-delay-2 mx-auto mb-10 max-w-xl text-lg text-muted-foreground">
          The most powerful and undetected Roblox external. Dominate every game with cutting-edge features and blazing performance.
        </p>

        <div className="animate-slide-up-delay-3 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://fennec.lol/purchase"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-primary glow-red animate-pulse-glow rounded-xl px-8 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:scale-105"
          >
            Get Fennec Now
          </a>
          <a
            href="https://discord.gg/fennec"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card border-glow rounded-xl px-8 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-foreground transition-all hover:scale-105 hover:border-primary/50"
          >
            Join Discord
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
