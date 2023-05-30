export interface IComponent {
  __name?: string;
  __file?: string;
  name?: string;
}
export interface IComponents {
  [key: string]: IComponent;
}
interface IMain {
  (): void;
}

interface ICreatePropsFromAttributes {
  (obj: HTMLDivElement): any;
}
interface ISetComponent {
  (component: IComponent): void;
}
export interface IVue {
  components: IComponents;

  main: IMain;
  setComponent: ISetComponent;

  createPropsFromAttributes: ICreatePropsFromAttributes;
}
