import PouchDB from 'pouchdb-browser';

const replicationStream = require('pouchdb-replication-stream');

PouchDB.plugin(replicationStream.plugin);
(PouchDB as any).adapter(
  'writableStream',
  replicationStream.adapters.writableStream,
);

const masterDB = new PouchDB('locus');

(window as any).masterDB = masterDB;

export default masterDB;
