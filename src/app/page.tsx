import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <p>
        I&apos;m a systems engineer based in Raleigh, North Carolina, currently finishing my
        M.S. (Thesis) in Computer Science at North Carolina State University. My
        focus is operating systems and distributed systems. I&apos;m a{" "}
        <a
          href="https://lore.kernel.org/all/?q=anishm7030%40gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linux kernel contributor
        </a>{" "}
        and the creator of{" "}
        <a
          href="https://github.com/AnishMulay/sandstore"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sandstore
        </a>
        , a modular distributed file system built as a learning and research
        platform.
      </p>

      <p>
        Sandstore grew out of a frustration I had reading{" "}
        <em>Designing Data-Intensive Applications</em>, the concepts were
        brilliant but I had no real system to work with. So I built one: a
        production inspired distributed storage system in Go, with Raft consensus,
        chunk replication, and fault tolerance. The goal was always modularity,
        you should be able to swap in your own implementation of any component
        and immediately see how it performs. The longer vision is for Sandstore
        to become a research and engineering sandbox where you can get
        true apples-to-apples comparisons between different topologies, whether
        that&apos;s something you&apos;ve designed yourself or something modeled
        after real systems like HDFS, Dynamo, or CRAQ.
      </p>

      <p>
        I write about systems topics occasionally, things I&apos;ve wrestled
        with and found worth explaining. You can find my writing{" "}
        <Link href="/blogs">here</Link>.
      </p>

      <p>
        Outside of systems work, I fold paper. I&apos;ve been practicing{" "}
        <Link href="/misc">origami</Link> for years. I enjoy the patience it
        requires and the quiet focus of sitting down with a single sheet of
        paper and working through the folds.
      </p>
    </>
  );
}
