import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { origamiModels } from '@/lib/origami';
import Image from 'next/image';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const model = origamiModels.find((m) => m.slug === slug);
    if (!model) return {};

    return {
        title: `${model.name} | Anish Mulay`,
    };
}

export default async function OrigamiModelPage({ params }: Props) {
    const { slug } = await params;
    const model = origamiModels.find((m) => m.slug === slug);

    if (!model) {
        notFound();
    }

    const sortedPhotos = [...model.photos].sort((a, b) => a.src.localeCompare(b.src));

    return (
        <>
            <div className="flex justify-between items-start mb-[12px]">
                <h1 className="font-bold text-[3.00rem] leading-none text-[#111827]">{model.name}</h1>
            </div>

            <p className="text-[0.875rem] text-[#9CA3AF] font-normal mb-[32px] leading-[1.6]">
                {model.attribution}
            </p>

            <p className="text-[1rem] leading-[1.75] text-[#111827] mb-[24px]">
                {model.paragraphs[0]}
            </p>

            <p className="text-[1rem] leading-[1.75] text-[#111827] mb-[40px]">
                {model.paragraphs[1]}
            </p>

            <div className="grid grid-cols-2 gap-[16px] mt-[40px] w-full">
                {sortedPhotos.map((photo) => (
                    <div key={photo.src} className="w-full aspect-square rounded-[10px] bg-[#F3F4F6] flex items-center justify-center relative overflow-hidden">
                        <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover z-0"
                        />
                    </div>
                ))}
            </div>
        </>
    );
}
