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
  const x: { Readability: any; JSDOMParser: any };
  export = x;
}
