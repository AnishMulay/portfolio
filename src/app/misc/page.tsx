import { Metadata } from "next";
import { origamiModels } from "@/lib/origami";
import OrigamiCard from "@/components/OrigamiCard";

export const metadata: Metadata = {
    title: "Misc — Anish Mulay",
};

export default function MiscPage() {
    return (
        <>
            <h2 className="font-bold text-[2.5rem] leading-none text-[#111827] mb-[16px] mt-0">
                Origami
            </h2>
            <p className="mb-[40px] text-[1rem] leading-[1.75] text-[#111827]">
                I do origami. I&apos;ve been folding paper for years — it&apos;s one of
                those things that demands complete presence. A single sheet, no cuts, no
                glue. The precision required and the way a flat plane becomes something
                three-dimensional through nothing but careful folds is something I keep
                coming back to.
            </p>

            <div className="grid grid-cols-2 gap-[32px] mt-0">
                {origamiModels.map((model) => (
                    <OrigamiCard key={model.slug} model={model} />
                ))}
            </div>
        </>
    );
}
