import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Anish Mulay",
};

export default function ResumePage() {
  return (
    <>
      <p className="mb-[40px] text-[1rem] leading-[1.75] text-foreground">
        I&apos;m passionate about building systems that move and scale data
        efficiently. I&apos;m currently pursuing my Master&apos;s in Computer
        Science at NC State University, with a focus on distributed storage and
        large-scale backend systems. I&apos;ve interned at AWS twice,
        contributed to the Linux kernel, and I&apos;m building Sandstore — a
        modular distributed file system designed as both a learning platform and
        a research sandbox.
      </p>

      {/* Experience Section */}
      <h2 className="font-bold text-[0.75rem] tracking-[0.1em] uppercase text-muted mb-[20px] mt-[40px] border-b border-border pb-[8px]">
        Experience
      </h2>

      <div className="mb-[20px]">
        <div className="font-semibold text-[1rem] text-foreground">
          North Carolina State University — Research Assistant
        </div>
        <div className="text-[0.875rem] text-muted mt-[2px] mb-[10px]">
          August 2025 – Present · Raleigh, NC
        </div>
        <ul className="list-disc pl-[20px] text-[0.9375rem] leading-[1.7] mb-[24px]">
          <li className="mb-[8px]">
            Designing algorithms for the k-server and vehicle routing problems
            with a focus on scalable GPU implementations.
          </li>
          <li className="mb-[8px]">
            Running large-scale experiments on NCSU&apos;s HPC cluster to
            evaluate performance across diverse workloads.
          </li>
        </ul>
      </div>

      <div className="mb-[20px]">
        <div className="font-semibold text-[1rem] text-foreground">
          Amazon Web Services — Software Development Engineer Intern
        </div>
        <div className="text-[0.875rem] text-muted mt-[2px] mb-[10px]">
          May 2025 – July 2025 · Seattle, WA
        </div>
        <ul className="list-disc pl-[20px] text-[0.9375rem] leading-[1.7] mb-[24px]">
          <li className="mb-[8px]">
            Built an account-specific monitoring tool enabling on-call engineers
            to diagnose customer issues without running manual queries.
          </li>
          <li className="mb-[8px]">
            Designed a serverless distributed pipeline using AWS Lambda and Step
            Functions to orchestrate parallel queries across partitioned logs.
          </li>
          <li className="mb-[8px]">
            Automated dashboard creation and cleanup in CloudWatch, streamlining
            on-call operations.
          </li>
          <li className="mb-[8px]">
            Contributed to a winning project in an internal AWS Identity
            hackathon: a browser extension integrating runbooks and CLI
            automation to accelerate ticket resolution.
          </li>
        </ul>
      </div>

      <div className="mb-[20px]">
        <div className="font-semibold text-[1rem] text-foreground">
          Geta AI Labs — Full Stack Developer
        </div>
        <div className="text-[0.875rem] text-muted mt-[2px] mb-[10px]">
          June 2023 – June 2024 · Pune, India
        </div>
        <ul className="list-disc pl-[20px] text-[0.9375rem] leading-[1.7] mb-[24px]">
          <li className="mb-[8px]">
            Owned backend development for multiple production systems including a
            knowledge-based chatbot platform and a sales automation engine.
          </li>
          <li className="mb-[8px]">
            Designed event-driven architectures using AWS SQS, EventBridge, and
            Lambda.
          </li>
          <li className="mb-[8px]">
            Built asynchronous task management pipelines with Celery and
            serverless infrastructure.
          </li>
          <li className="mb-[8px]">
            Containerized services with Docker and deployed across EC2 and
            Lambda.
          </li>
        </ul>
      </div>

      <div className="mb-[20px]">
        <div className="font-semibold text-[1rem] text-foreground">
          University of Liège — Research Intern
        </div>
        <div className="text-[0.875rem] text-muted mt-[2px] mb-[10px]">
          August 2022 – May 2023 · Liège, Belgium
        </div>
        <ul className="list-disc pl-[20px] text-[0.9375rem] leading-[1.7] mb-[24px]">
          <li className="mb-[8px]">
            Conducted research under Dr. Damien Ernst, analyzing mutual
            information between agent beliefs and model approximations.
          </li>
          <li className="mb-[8px]">
            Evaluated Transformer architectures against LSTMs and GRUs for
            performance in reinforcement learning tasks.
          </li>
          <li className="mb-[8px]">
            Implemented experiments using Python and PyTorch with WandB for
            tracking.
          </li>
        </ul>
      </div>

      <div className="mb-[20px]">
        <div className="font-semibold text-[1rem] text-foreground">
          Amazon — Software Engineer Intern
        </div>
        <div className="text-[0.875rem] text-muted mt-[2px] mb-[10px]">
          June 2022 – August 2022 · Hyderabad, India
        </div>
        <ul className="list-disc pl-[20px] text-[0.9375rem] leading-[1.7] mb-[24px]">
          <li className="mb-[8px]">
            Automated acceptance testing for a customer service portal using
            Java.
          </li>
          <li className="mb-[8px]">
            Assisted in developing the React-based UI for the Customer Service
            Center portal.
          </li>
        </ul>
      </div>

      {/* Education Section */}
      <h2 className="font-bold text-[0.75rem] tracking-[0.1em] uppercase text-muted mb-[20px] mt-[40px] border-b border-border pb-[8px]">
        Education
      </h2>

      <div className="mb-[20px]">
        <div className="font-semibold text-[1rem] text-foreground">
          North Carolina State University
        </div>
        <div className="text-[0.9375rem] text-nav mt-[2px]">
          M.S. Computer Science (Thesis)
        </div>
        <div className="text-[0.875rem] text-muted mt-[2px]">
          August 2024 – May 2026
        </div>
      </div>

      <div className="mb-[20px]">
        <div className="font-semibold text-[1rem] text-foreground">
          Birla Institute of Technology and Science, Pilani — Goa Campus
        </div>
        <div className="text-[0.9375rem] text-nav mt-[2px]">
          B.E. Computer Science + M.Sc. Economics
        </div>
        <div className="text-[0.875rem] text-muted mt-[2px]">
          August 2018 – July 2023
        </div>
      </div>

      {/* Skills Section */}
      <h2 className="font-bold text-[0.75rem] tracking-[0.1em] uppercase text-muted mb-[20px] mt-[40px] border-b border-border pb-[8px]">
        Skills
      </h2>

      <div className="flex flex-wrap gap-[8px]">
        {[
          "Fault Tolerant Systems",
          "Software Systems",
          "Software Testing",
          "Go",
          "Python",
          "Java",
          "C++",
          "AWS",
          "Docker",
          "gRPC",
        ].map((skill) => (
          <span
            key={skill}
            className="bg-code-bg text-nav py-[4px] px-[10px] rounded-[4px] text-[0.8125rem]"
          >
            {skill}
          </span>
        ))}
      </div>
    </>
  );
}
