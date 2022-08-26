
export type cartUserChat = {
    userLogin: string,
    attr: {
        class: string;
    },
    events: {
        click: (e: Event) => void;
    },
}