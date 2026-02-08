import heroBg from "@/assets/hero-bg.jpg";
import fennecLogo from "@/assets/fennec-logo.webp";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
      </div>

      {/* Stars overlay */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="animate-slide-up">
          <span className="mb-4 inline-block rounded-full border border-primary/40 bg-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur-sm">
            ✨ Premium Roblox External
          </span>
        </div>

        {/* Logo */}
        <div className="animate-slide-up-delay-1 mx-auto mb-8 max-w-2xl">
          <img 
            src={fennecLogo} 
            alt="Fennec.lol" 
            className="w-full drop-shadow-2xl"
            style={{ filter: 'drop-shadow(0 0 40px hsl(270 70% 60% / 0.4))' }}
          />
        </div>

        <p className="animate-slide-up-delay-2 mx-auto mb-10 max-w-xl text-lg text-muted-foreground">
          The most powerful and undetected Roblox external. Dominate every game with cutting-edge features and blazing performance.
        </p>

        <div className="animate-slide-up-delay-3 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#pricing"
            className="gradient-primary glow-purple animate-pulse-glow rounded-xl px-10 py-4 font-display text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:scale-105"
          >
            View Pricing
          </a>
          <a
            href="https://discord.gg/fennec"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card border-glow rounded-xl px-10 py-4 font-display text-sm font-bold uppercase tracking-wider text-foreground transition-all hover:scale-105 hover:border-primary/50"
          >
            Join Discord
          </a>
        </div>

        {/* Stats */}
        <div className="animate-slide-up-delay-3 mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-16">
          <div className="text-center">
            <div className="font-display text-3xl font-bold gradient-text">10K+</div>
            <div className="text-sm text-muted-foreground">Happy Users</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold gradient-text">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold gradient-text">24/7</div>
            <div className="text-sm text-muted-foreground">Support</div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  );
};

export default HeroSection;
