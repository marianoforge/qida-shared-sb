/**
 * TypeScript declaration for tokens.js
 */
export const tokens: {
  global: {
    colors: {
      [category: string]: {
        [shade: string]: string;
      };
    };
    elevations: {
      [key: string]: {
        shadow1: {
          x: number;
          y: number;
          blur: number;
          spread: number;
          color: string;
          value: string;
        };
        shadow2: {
          x: number;
          y: number;
          blur: number;
          spread: number;
          color: string;
          value: string;
        };
      };
    };
    breakpoints: {
      [key: string]: string;
    };
    borderRadius: {
      [key: string]: string;
    };
    spacing: {
      [key: string]: string;
    };
    typography: {
      fontFamily: string;
      fontWeights: {
        [key: string]: string;
      };
      fontSizes: {
        [key: string]: string;
      };
      lineHeights: {
        [key: string]: string;
      };
    };
  };
  components: {
    [component: string]: {
      [property: string]: any;
      variants?: {
        [variant: string]: {
          [state: string]: string;
        };
      };
      sizes?: {
        [size: string]: {
          [prop: string]: string;
        };
      };
    };
  };
};
