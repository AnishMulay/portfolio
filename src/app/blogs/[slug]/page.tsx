import { notFound } from "next/navigation";
import path from "path";
import fs from "fs";
import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    return {
        title: `Post — Anish Mulay`,
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const filePath = path.join(process.cwd(), "content/blogs", `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        notFound();
    }

    const content = fs.readFileSync(filePath, "utf-8");

    let title = "Blog Post Title";
    let date = "January 1, 2024";
    let toc = false;

    const mdxMatch = content.match(/^---\n([\s\S]*?)\n---/);
    let rawContent = content;

    if (mdxMatch) {
        const frontmatter = mdxMatch[1];
        rawContent = content.slice(mdxMatch[0].length);

        const titleMatch = frontmatter.match(/title:\s*['"]?(.*?)['"]?\n/);
        if (titleMatch) title = titleMatch[1];

        const dateMatch = frontmatter.match(/date:\s*['"]?(.*?)['"]?\n/);
        if (dateMatch) date = dateMatch[1];

        const tocMatch = frontmatter.match(/toc:\s*(true|false)\n/);
        if (tocMatch) toc = tocMatch[1] === "true";
    }

    return (
        <div>
            <div className="flex justify-between items-start mb-[40px]">
                <h1 className="font-bold text-[length:var(--font-size-post-h1)] text-foreground max-w-[600px] leading-snug">
                    {title}
                </h1>
                <span className="text-[0.9rem] text-muted whitespace-nowrap ml-4 mt-1">
                    {date}
                </span>
            </div>

            {toc && (
                <details className="mb-[40px] group">
                    <summary className="font-semibold text-[1rem] text-foreground cursor-pointer list-none flex items-center">
                        <span className="mr-2 transform group-open:rotate-90 transition-transform text-foreground">
                            ▾
                        </span>
                        Table of Contents
                    </summary>
                    <div className="mt-4">
                        <ul className="list-disc pl-[24px]">
                            <li className="mb-[8px] marker:text-accent">
                                <a
                                    href="#example"
                                    className="text-accent text-[0.9rem] no-underline hover:underline"
                                >
                                    Example Section
                                </a>
                            </li>
                        </ul>
                    </div>
                </details>
            )}

            <div className="mdx-content">
                <MDXRemote
                    source={rawContent}
                    components={{
                        strong: (props: React.ComponentPropsWithoutRef<'strong'>) => (
                            <strong className="font-bold text-foreground" {...props} />
                        ),
                        em: (props: React.ComponentPropsWithoutRef<'em'>) => <em className="italic" {...props} />,
                    }}
                />
            </div>
        </div>
    );
}
