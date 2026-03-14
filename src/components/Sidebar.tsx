"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const NAV_ITEMS = [
    { label: "About", href: "/" },
    { label: "Blogs", href: "/blogs" },
    { label: "Misc", href: "/misc" },
    { label: "Resume", href: "/resume" },
];

export function Sidebar() {
    const pathname = usePathname();
    const [imgError, setImgError] = useState(false);

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    const getInitialsFallback = (size: number, fontSize: number, radius: number) => (
        <div
            className="flex items-center justify-center bg-accent text-white font-semibold"
            style={{
                width: size,
                height: size,
                borderRadius: radius,
                fontSize: fontSize,
            }}
        >
            AM
        </div>
    );

    return (
        <>
            {/* Mobile Top Nav (Below 768px) */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background border-b border-border py-4 px-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    {!imgError ? (
                        <Image
                            src="/profile.png"
                            alt="Anish Mulay"
                            width={30}
                            height={30}
                            style={{ borderRadius: "50%", objectFit: "cover" }}
                            onError={() => setImgError(true)}
                        />
                    ) : (
                        getInitialsFallback(30, 13, 12) /* Using 50% radius equivalent for circle in mobile? spec says photo 24px circle */
                    )}
                    <span className="font-bold text-[0.875rem] tracking-[0.08em] uppercase text-foreground">
                        ANISH MULAY
                    </span>
                </div>

                <nav className="flex items-center gap-4">
                    {NAV_ITEMS.map((item) => {
                        const active = isActive(item.href);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-[0.875rem] no-underline hover:no-underline ${active ? "text-accent font-medium" : "text-nav font-normal"
                                    } hover:text-accent transition-colors duration-150`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Desktop Fixed Sidebar (768px and above) */}
            <aside className="hidden md:flex flex-col fixed top-0 left-[280px] h-screen w-[var(--sidebar-width)] bg-background pt-[21vh] pl-[80px] z-40">
                {!imgError ? (
                    <Image
                        src="/profile.png"
                        alt="Anish Mulay"
                        width={200}
                        height={200}
                        style={{ borderRadius: "12px", objectFit: "cover" }}
                        onError={() => setImgError(true)}
                    />
                ) : (
                    getInitialsFallback(200, 45, 12)
                )}

                <h1 className="mt-[48px] text-[length:var(--font-size-name)] font-bold tracking-[0.08em] uppercase text-foreground leading-none">
                    ANISH MULAY
                </h1>

                <nav className="mt-[32px] flex flex-col gap-[20px]">
                    {NAV_ITEMS.map((item) => {
                        const active = isActive(item.href);

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center text-[length:var(--font-size-body)] no-underline hover:no-underline transition-colors duration-150 ${active ? "text-accent font-medium" : "text-nav font-normal hover:text-accent"
                                    }`}
                            >
                                {/* Visual bullet that only shows when active, taking up space to push text right */}
                                <span
                                    className={`mr-[8px] text-accent ${active ? "visible" : "invisible"}`}
                                    aria-hidden="true"
                                >
                                    &bull;
                                </span>
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>
            </aside>
        </>
    );
}
