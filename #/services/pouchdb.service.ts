import PouchDB from 'pouchdb';

const masterDB = new PouchDB('locus');

(window as any).masterDB = masterDB;

export default masterDB;
