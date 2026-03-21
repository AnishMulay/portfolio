import { blogs } from "@/lib/blogs";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blogs | Anish Mulay",
};

export default function BlogsPage() {
    return (
        <div className="flex flex-col">
            <h2 className="font-bold text-[2.5rem] leading-none text-[#111827] mb-[16px] mt-0">
                Blogs
            </h2>
            {blogs.map((blog, index) => {
                const isExternal = blog.external;
                const href = isExternal ? blog.url : `/blogs/${blog.slug}`;

                return (
                    <div
                        key={blog.slug}
                        className={`${index !== blogs.length - 1 ? "border-b border-border" : ""
                            }`}
                    >
                        {isExternal ? (
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex justify-between py-[12px] no-underline hover:no-underline w-full"
                            >
                                <div className="flex-1 font-semibold text-[length:var(--font-size-blog-title)] text-foreground group-hover:text-accent transition-colors duration-150 pr-4">
                                    {blog.title}
                                </div>
                                <div className="whitespace-nowrap font-normal text-[0.9rem] text-muted">
                                    {blog.displayDate}
                                </div>
                            </a>
                        ) : (
                            <Link
                                href={href}
                                className="group flex justify-between py-[12px] no-underline hover:no-underline w-full"
                            >
                                <div className="flex-1 font-semibold text-[length:var(--font-size-blog-title)] text-foreground group-hover:text-accent transition-colors duration-150 pr-4">
                                    {blog.title}
                                </div>
                                <div className="whitespace-nowrap font-normal text-[0.9rem] text-muted">
                                    {blog.displayDate}
                                </div>
                            </Link>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
