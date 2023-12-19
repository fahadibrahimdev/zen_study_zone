import { siteName } from "@/@core/constants/site-info";

export const heroSectionContent = {
    heading: 'What if College Was a Breeze?',
    subHeading: 'With ZenStudyZone, it’s smooth sailing till graduation.',
    text: 'How do you take the stress out of studying, time management, and note curation while socializing with the people you attend class with? ZenStudyZone is the new study room app that eliminates stress, saves time and redefines efficient studying.',
    heroImage: '/images/hero-image.webp',
    alt: 'Hero Image'
}


export const brandFeaturesContent = {
    heading: 'The study app built to bring your A game to college',
    features: [
        {
            title: 'Monitor Grades',
            description: 'ZenStudyZone’s grade calculator updates your grades in real time.',
            icon: 'reard-ribons'
        },
        {
            title: 'Find Study Material',
            description: 'Professors can add downloadable notes.',
            icon: 'book'
        },
        {
            title: 'Socialize',
            description: 'Exchange notes and resources with other students via the chat feature.',
            icon: 'support'
        },
        {
            title: 'Use Calendar',
            description: 'Access and mark your academic calendar.',
            icon: 'calendar'
        },
    ]
}

export const brandSelectionContent = {
    heading: `Why Choose ${siteName}?`,
    descriptions: [
        'The ZenStudyZone app declutters your college experience by making studying more efficient without compromising on your social experience.',
        'It brings you a smart amalgamation of working hard as well as smart. With the app, students gain access to the correct notes, features that track time, calculate grades, and get to chat with other students, all on the same platform.',
    ],
}

export const benefitsContent = {
    heading: 'A One Stop Platform',
    text: 'ZenStudyZone - It is designed as an experience that redefines what it is like to save time, absorb knowledge effectively, and compartmentalize work efficiently at college.',
    benefits: [
        {
            title: 'Manage Study Time',
            description: 'Repair shops can connect with a stream of customers and market the services they offer to prospective clients.',
            icon: 'hourglass'
        },
        {
            title: 'Navigable',
            description: 'State of the art tech allows for optimized UI. ',
            icon: 'steps-circle'
        },
        {
            title: 'Realistic Use of Time and Effort',
            description: 'Allocation of tasks helps in meeting assignment deadlines.',
            icon: 'stopwatch'
        }
    ],
    image: '/images/benefits.webp',
    alt: 'Benefits Illustration'
}

export const faqsContent = {
    heading: 'Frequently Asked Questions',
    text: 'Want to know more about our services?',
    faqs: [
        {
            question: 'Is ZenStudyZone Compatible with Android or iOS?',
            answer: 'The answer will be here......',

        },
        {
            question: 'How do I get in touch with someone if there is something wrong with my profile?',
            answer: 'The answer will be here.........',

        },
        {
            question: 'How do I sign up?',
            answer: 'The answer will be here.........',
        }
    ]
}

export const CTOSectionContent = {
    heading: 'Make ZenStudyZone Part of Your College Journey!',
    text: 'Download the app today.'
}

const date = new Date()
export const footerContent = {
    supportCard: {
        heading: 'Help and Support',
        subHeading: 'User questions and feedback',
        text: 'Feel free to email us for any questions or feedback you would like to provide.'
    },
    socialIcons: [
        {
            icon: 'facebook',
            link: '',
        },
        {
            icon: 'instagram',
            link: '',
        },
        {
            icon: 'twitter',
            link: '',
        }
    ],
    copyRightNotice: `© ${date.getFullYear()} ${siteName}. All Rights  Reserved`,
}

export const buttonsLabel = {
    CTOBtn: 'Explore ZenStudyZone',
    accent: 'Why ZenStudyZone?'
}

export const menuNavLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Features', sectionId: 'features' },
    { label: `Why ${siteName}?`, sectionId: 'whyUs' }
]
