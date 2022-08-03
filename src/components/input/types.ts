export type InputProps = {
  inputType: string;
  name: string;
  placeholder: string;
  labelName: string;
  value?: string;
  events:{
    focus: Record<string, (event: Event) => void>
    blur: Record<string, (event: Event) => void>
  };
};
