const CTASection = () => {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="glass-card border-glow glow-red-intense mx-auto max-w-3xl rounded-3xl p-10 text-center sm:p-16">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Ready to <span className="gradient-text">Dominate</span>?
          </h2>
          <p className="mx-auto mb-8 max-w-md text-muted-foreground">
            Join thousands of players already using Fennec. Get instant access with our secure loader.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://fennec.lol/purchase"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-primary glow-red rounded-xl px-10 py-4 font-display text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:scale-105"
            >
              Purchase Now
            </a>
            <a
              href="https://fennec.lol/panel"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card border-glow rounded-xl px-10 py-4 font-display text-sm font-bold uppercase tracking-wider text-foreground transition-all hover:scale-105 hover:border-primary/50"
            >
              Customer Panel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
