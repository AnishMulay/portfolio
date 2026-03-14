import Link from 'next/link';
import Image from 'next/image';
import { OrigamiModel } from '@/lib/origami';

export default function OrigamiCard({ model }: { model: OrigamiModel }) {
    // Description truncated to 60 characters
    const shortDescription = model.attribution.length > 60
        ? model.attribution.substring(0, 60) + '…'
        : model.attribution;

    return (
        <Link
            href={`/misc/origami/${model.slug}`}
            className="group block bg-transparent no-underline hover:no-underline focus:no-underline"
        >
            <div className="aspect-square w-full rounded-[10px] overflow-hidden border-2 border-transparent group-hover:border-[#1746A2] transition-colors bg-[#F3F4F6] relative flex items-center justify-center">
                <Image
                    src={model.coverPhoto.src}
                    alt={model.coverPhoto.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover z-0"
                />
            </div>

            <h3 className="font-semibold text-[1.40625rem] leading-none text-[#111827] mt-[12px] mb-[6px] no-underline group-hover:text-[#1746A2] transition-colors duration-150 ease-in-out">
                {model.name}
            </h3>

            <p className="text-[0.75rem] text-[#9CA3AF] font-normal no-underline whitespace-nowrap overflow-hidden text-ellipsis">
                {shortDescription}
            </p>
        </Link>
    );
}
