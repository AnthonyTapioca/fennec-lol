const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="glass-card border-glow glow-purple-intense mx-auto max-w-4xl rounded-3xl p-12 text-center sm:p-20">
          <span className="mb-6 inline-block text-4xl">🌌</span>
          <h2 className="mb-6 text-3xl font-bold sm:text-5xl">
            Ready to <span className="gradient-text">Dominate</span>?
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-lg text-muted-foreground">
            Join thousands of players already using Fennec. Get instant access with our secure loader and start winning today.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://fennec.lol/purchase"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-primary glow-purple rounded-xl px-12 py-4 font-display text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:scale-105"
            >
              Purchase Now
            </a>
            <a
              href="https://fennec.lol/panel"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card border-glow rounded-xl px-12 py-4 font-display text-sm font-bold uppercase tracking-wider text-foreground transition-all hover:scale-105 hover:border-primary/50"
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
