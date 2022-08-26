export type LinkProps = {
    linkName: string;
    attr: {
        class: string;
        href: string;
    }
    events: {
        click: (e: Event) => void;
    },
};