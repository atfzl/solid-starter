import PouchDB from 'pouchdb-browser';

const replicationStream = require('pouchdb-replication-stream');
const pouchDBLoad = require('pouchdb-load');

PouchDB.plugin(replicationStream.plugin);
(PouchDB.plugin as any)({
  restore: pouchDBLoad.load,
});
(PouchDB as any).adapter(
  'writableStream',
  replicationStream.adapters.writableStream,
);

const masterDB = new PouchDB('locus');

(window as any).masterDB = masterDB;

export default masterDB;
