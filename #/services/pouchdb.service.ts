import PouchDB from 'pouchdb-browser';

const masterDB = new PouchDB('locus');

(window as any).masterDB = masterDB;

export default masterDB;
