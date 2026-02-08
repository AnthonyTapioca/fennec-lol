const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 sm:flex-row">
        <div className="font-display text-lg font-bold tracking-wider">
          <span className="gradient-text">FENNEC</span>
          <span className="text-muted-foreground">.lol</span>
        </div>
        <div className="flex items-center gap-8">
          <a href="https://discord.gg/fennec" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-primary">Discord</a>
          <a href="https://fennec.lol/purchase" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-primary">Purchase</a>
          <a href="https://fennec.lol/panel" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-primary">Panel</a>
        </div>
        <p className="text-sm text-muted-foreground">© 2026 Fennec.lol — All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
