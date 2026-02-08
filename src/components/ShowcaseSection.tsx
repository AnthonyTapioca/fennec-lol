import { Play } from "lucide-react";

const ShowcaseSection = () => {
  return (
    <section id="showcase" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/40 bg-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-primary">
            🎬 Showcase
          </span>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
            See It <span className="gradient-text">In Action</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Watch Fennec dominate in real gameplay footage.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="glass-card border-glow glow-purple-intense overflow-hidden rounded-3xl p-2">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-secondary">
              {/* Replace the src with your actual video URL or YouTube embed */}
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Fennec.lol Showcase"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            📹 Replace with your actual showcase video for the best effect
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
