export default function AboutPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="font-sans text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          About
        </h1>

        <p className="font-sans text-sm text-gray-600 sm:text-base">
          ANISH MULAY
        </p>

        <p className="font-serif text-base leading-relaxed text-gray-900 sm:text-lg">
          Systems engineer focused on distributed systems, operating systems,
          and GPU-scale computing. I build systems to understand how they work
          — from distributed file systems and Linux kernel patches to
          GPU-accelerated optimal transport research.
        </p>
      </section>
    </div>
  );
}
