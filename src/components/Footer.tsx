export default function Footer() {
  return (
    <footer className="px-6 md:px-10 py-8 border-t border-foreground/5">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="text-[11px] font-mono-tight text-foreground/40 tracking-wide uppercase">
          LUTZ All Rights Reserved &copy; {new Date().getFullYear()}
        </p>
        <p className="text-[11px] font-mono-tight text-foreground/40 tracking-wide uppercase">
          REP&apos;d by{" "}
          <a
            href="https://cremecompany.tv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/70 transition-colors"
          >
            CREME COMPANY
          </a>
        </p>
      </div>
    </footer>
  );
}
