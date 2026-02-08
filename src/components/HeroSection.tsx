import heroBg from "@/assets/hero-bg.jpg";
import fennecLogo from "@/assets/fennec-logo.webp";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <span className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/5 px-5 py-2 text-xs font-medium uppercase tracking-widest text-primary/90">
            Premium Roblox External
          </span>
        </div>

        {/* Logo */}
        <div className="animate-fade-in-delay-1 mx-auto mb-8 max-w-xl">
          <img 
            src={fennecLogo} 
            alt="Fennec.lol" 
            className="w-full"
            style={{ filter: 'drop-shadow(0 0 60px hsl(265 85% 65% / 0.3))' }}
          />
        </div>

        <p className="animate-fade-in-delay-2 mx-auto mb-12 max-w-lg text-lg text-muted-foreground leading-relaxed">
          The most powerful and undetected external. Dominate every game with cutting-edge features.
        </p>

        <div className="animate-fade-in-delay-3 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#pricing"
            className="gradient-primary glow-purple animate-pulse-subtle rounded-xl px-10 py-4 font-display text-sm font-semibold tracking-wide text-primary-foreground transition-transform hover:scale-105"
          >
            View Pricing
          </a>
          <a
            href="https://discord.gg/fennec"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card border-glow card-hover rounded-xl px-10 py-4 font-display text-sm font-semibold tracking-wide text-foreground"
          >
            Join Discord
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fade-in-delay-3 mt-20 flex flex-wrap items-center justify-center gap-12 sm:gap-20">
          <div className="text-center">
            <div className="font-display text-3xl font-bold gradient-text">10K+</div>
            <div className="mt-1 text-sm text-muted-foreground">Users</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold gradient-text">99.9%</div>
            <div className="mt-1 text-sm text-muted-foreground">Uptime</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold gradient-text">24/7</div>
            <div className="mt-1 text-sm text-muted-foreground">Support</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
