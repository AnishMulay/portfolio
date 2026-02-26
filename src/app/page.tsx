export default function Home() {
  return (
    <div className="space-y-14">
      <section className="space-y-5">
        <h1 className="font-sans text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          ANISH MULAY
        </h1>

        <p className="font-sans text-base text-gray-600 sm:text-lg">
          Systems Engineer focused on Distributed Systems, Operating Systems,
          and GPU-scale computing.
        </p>

        <p className="font-serif text-base leading-relaxed text-gray-900 sm:text-lg">
          I build systems to understand how they work — from distributed file
          systems and Linux kernel patches to GPU-accelerated optimal transport
          research.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-sans text-sm font-medium tracking-tight text-gray-900">
          Currently:
        </h2>

        <ul className="list-disc space-y-2 pl-5 font-serif text-base leading-relaxed text-gray-900 sm:text-lg">
          <li>Finishing MS thesis at NCSU</li>
          <li>
            Building Sandstore (a learning-first distributed file storage
            system in Go)
          </li>
          <li>Contributing to Linux kernel</li>
        </ul>
      </section>

      <section className="space-y-10 pt-6">
        <div className="space-y-2">
          <h3 className="font-sans text-base font-semibold text-gray-900">
            Distributed Systems
          </h3>
          <p className="font-serif text-base leading-relaxed text-gray-900 sm:text-lg">
            Building Sandstore — a modular, production-inspired distributed
            file storage system implementing chunked storage, metadata
            management, and a Raft-based consensus layer.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-sans text-base font-semibold text-gray-900">
            Operating Systems
          </h3>
          <p className="font-serif text-base leading-relaxed text-gray-900 sm:text-lg">
            Linux kernel contributor. Recent patch work includes skipping MM
            migration selftests when NUMA isn&apos;t available, and ramfs
            folio_alloc modernizations.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-sans text-base font-semibold text-gray-900">
            Research
          </h3>
          <p className="font-serif text-base leading-relaxed text-gray-900 sm:text-lg">
            GPU memory optimization for large-scale optimal transport (1M
            points).
          </p>
        </div>
      </section>
    </div>
  );
}
