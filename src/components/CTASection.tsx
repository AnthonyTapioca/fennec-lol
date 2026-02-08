const CTASection = () => {
  return (
    <section className="relative py-28">
      <div className="container mx-auto px-4">
        <div className="glass-card border-glow glow-purple mx-auto max-w-3xl rounded-2xl p-10 text-center sm:p-14">
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mb-8 max-w-md text-muted-foreground">
            Join thousands of players using Fennec. Instant access with our secure loader.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://fennec.sell.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-primary rounded-xl px-10 py-3.5 font-display text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              Purchase Now
            </a>
            <a
              href="https://keyauth.cc/panel/Maybecool/Fennec.lol+External"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card border-glow card-hover rounded-xl px-10 py-3.5 font-display text-sm font-semibold text-foreground"
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
