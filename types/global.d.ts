declare module '@storybook/html' {
  const x: { storiesOf: any; configure: any };
  export = x;
}

declare module 'pouchdb-browser' {
  const x: PouchDB.Static;
  export default x;
}

declare module 'memorystream' {
  const x: any;
  export = x;
}

declare module 'readability' {
  const x: new (doc: any) => {
    parse: () => {
      /**
       * author metadata
       */
      byline: string;
      /**
       * HTML string of processed article content
       */
      content: string;
      /**
       * content direction
       */
      dir: null;
      /**
       * article description, or short excerpt from the content
       */
      except: string;
      /**
       * length of an article, in characters
       */
      length: string;
      /**
       * article title
       */
      title: string;
      siteName: null;
      textContent: string;
    };
  };
  export = x;
}

declare module '!!*' {
  const x: any;
  export default x;
}

declare module 'typography-theme-*' {
  const x: any;
  export default x;
}
