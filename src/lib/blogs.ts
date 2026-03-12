export type BlogPost = {
    slug: string
    title: string
    date: string        // ISO format: "2024-10-01"
    displayDate: string // Human format: "October 1, 2024"
    external: boolean
    url: string         // External URL or internal path /blogs/[slug]
}

export const blogs: BlogPost[] = [
    {
        slug: 'wsgi-flask-concurrent-requests',
        title: 'To Infinity (almost) and beyond: How WSGI Powers Flask Apps to Handle Concurrent Requests',
        date: '2024-10-01',
        displayDate: 'October 1, 2024',
        external: true,
        url: 'https://medium.com/@anishm7030/to-infinity-almost-and-beyond-b48e33c91716',
    },
    {
        slug: 'shallow-vs-deep-copy-cpp',
        title: 'Shallow Trouble vs. Deep Relief: The Copying Dilemma in C++',
        date: '2024-09-20',
        displayDate: 'September 20, 2024',
        external: true,
        url: 'https://medium.com/@anishm7030/shallow-trouble-vs-deep-relief-5bedbb3e6b22',
    },
    {
        slug: 'cpu-context-switching',
        title: 'A Tale of Two Swaps: Understanding CPU Context Switching in Operating Systems',
        date: '2024-08-24',
        displayDate: 'August 24, 2024',
        external: true,
        url: 'https://medium.com/@anishm7030/a-tale-of-two-swaps-understanding-cpu-context-switching-in-operating-systems-1f57d8bb20e9',
    },
]
