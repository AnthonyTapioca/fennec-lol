const ShowcaseSection = () => {
  return (
    <section id="showcase" className="relative py-28">
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/5 px-5 py-2 text-xs font-medium uppercase tracking-widest text-primary/90">
            Showcase
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            See It In Action
          </h2>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="glass-card border-glow glow-purple overflow-hidden rounded-2xl p-1.5">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-secondary">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Fennec.lol Showcase"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Replace with your actual showcase video
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
