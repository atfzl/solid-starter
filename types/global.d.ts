declare module '@storybook/html' {
  const x: { storiesOf: any; configure: any };
  export = x;
}

declare module 'pouchdb' {
  const x: PouchDB.Static;
  export default x;
}
