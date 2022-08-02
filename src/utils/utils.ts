import { IInput } from '../components/input/types';
import Block from './Block';

export const renderTemplate = (query: string, block: Block) => {
  const root = document.querySelector(query);
  if (root) root.appendChild(block.getContent());
  block.dispatchComponentDidMount();
  return root;
};

export const getInputs = (inputs: IInput): string[] => {
  const arr: string[] = [];
  Object.keys(inputs).forEach((key) => {
    arr.push(inputs[key]._element.innerHTML);
  });
  return arr;
};
