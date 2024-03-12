declare module "*.css" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare global {
  interface Window {
      ethereum?: any; // Adjust 'any' if you have a specific type for ethereum
  }
}
