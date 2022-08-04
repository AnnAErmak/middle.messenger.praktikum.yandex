export type InputProps = {
  attr: {
    type: string;
    name: string;
    placeholder: string;
    class: string;
    value?: string;
  },
  events:{
    focus: (event: Event) => void;
    blur: (event: Event) => void;
  };
};
