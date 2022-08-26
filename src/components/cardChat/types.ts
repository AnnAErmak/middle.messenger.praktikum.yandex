export type cardChatProps = {
  titleChat: string,
  attr: {
    class: string;
  },
  events: {
    submit: (e: Event) => void;
  },
};
