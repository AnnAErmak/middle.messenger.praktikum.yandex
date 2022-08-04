import Header from '../../components/header/header';

export type ChatPageProps = {
  header: Header;
  attr: {
    class: string;
  },
  events: {
    submit: (e: EventListener) => void;
  };
};
