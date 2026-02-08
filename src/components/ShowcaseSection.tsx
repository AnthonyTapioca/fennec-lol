import { Play } from "lucide-react";

const ShowcaseSection = () => {
  return (
    <section id="showcase" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block font-display text-xs font-semibold uppercase tracking-widest text-primary">
            See It In Action
          </span>
          <h2 className="text-3xl font-bold sm:text-5xl">
            Video <span className="gradient-text">Showcase</span>
          </h2>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="glass-card border-glow glow-red overflow-hidden rounded-2xl">
            <div className="relative aspect-video w-full bg-secondary">
              {/* Replace the src with your actual video URL or YouTube embed */}
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Fennec.lol Showcase"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              {/* Overlay gradient corners */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/20" />
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Watch Fennec.lol dominate in action. Replace with your actual showcase video.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
