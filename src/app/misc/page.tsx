import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Misc — Anish Mulay",
};

export default function MiscPage() {
    return (
        <>
            <p className="mb-[40px] text-[1rem] leading-[1.75] text-foreground">
                I do origami. I&apos;ve been folding paper for years — it&apos;s one of
                those things that demands complete presence. A single sheet, no cuts, no
                glue. The precision required and the way a flat plane becomes something
                three-dimensional through nothing but careful folds is something I keep
                coming back to.
            </p>

            <div className="flex flex-row gap-[24px] mt-0">
                <div className="w-[calc(50%-12px)] aspect-[4/3] bg-code-bg rounded-[8px] flex items-center justify-center relative overflow-hidden">
                    {/* Replace with actual photo: /public/origami/beetle.jpg */}
                    <span className="text-muted text-[0.875rem] font-sans relative z-10 font-normal">
                        Beetle
                    </span>
                    {/* Un-comment this Image when you add the file
          <Image
            src="/origami/beetle.jpg"
            alt="Beetle origami"
            fill
            className="object-cover z-0"
          />
          */}
                </div>

                <div className="w-[calc(50%-12px)] aspect-[4/3] bg-code-bg rounded-[8px] flex items-center justify-center relative overflow-hidden">
                    {/* Replace with actual photo: /public/origami/reindeer.jpg */}
                    <span className="text-muted text-[0.875rem] font-sans relative z-10 font-normal">
                        Reindeer
                    </span>
                    {/* Un-comment this Image when you add the file
          <Image
            src="/origami/reindeer.jpg"
            alt="Reindeer origami"
            fill
            className="object-cover z-0"
          />
          */}
                </div>
            </div>
        </>
    );
}
