export type OrigamiPhoto = {
    src: string;
    alt: string;
};

export type OrigamiModel = {
    slug: string;
    name: string;
    attribution: string;
    coverPhoto: OrigamiPhoto;
    photos: [OrigamiPhoto, OrigamiPhoto, OrigamiPhoto];
    paragraphs: [string, string];
};

export const origamiModels: OrigamiModel[] = [
    {
        slug: 'orca',
        name: 'Orca',
        attribution: 'Design by Joseph Hwang, from Marine Origami (2023). Folded from a single 20×20 cm black sheet.',
        coverPhoto: {
            src: '/origami/orca/photo-3.jpg',
            alt: 'Orca origami model, front view',
        },
        photos: [
            {
                src: '/origami/orca/photo-1.jpg',
                alt: 'Orca origami model, lead photo',
            },
            {
                src: '/origami/orca/photo-2.jpg',
                alt: 'Orca origami model, detail view',
            },
            {
                src: '/origami/orca/photo-3.jpg',
                alt: 'Orca origami model, front view',
            },
        ],
        paragraphs: [
            `The pectoral fins are formed using a crimp fold, where the paper folds in two opposite directions at the same spot. It sounds simple, but getting both fins to come out symmetric took me a few tries, especially when repeating the fold on the back side. That's also the point where the model really starts to feel three-dimensional.`,
            `While I was looking up orcas before folding this model, I learned that they are one of the few animals known to have distinct cultures within their pods. Different groups have their own hunting methods, vocalizations, and behaviors that get passed down through generations. It's really cool that these traits are not instinctive. They actually have to be learned and passed down within the group.`,
        ],
    },
];
