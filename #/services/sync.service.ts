import { dumpDBtoDropbox, getDropboxDB } from '#/services/dropbox.service';
import masterDB from '#/services/pouchdb.service';
import PouchDB from 'pouchdb-browser';
import { interval } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

export const syncPouchDBWithDropbox = () => {
  return interval(10000).pipe(
    tap(() => console.log('starting db sync')),
    switchMap(getDropboxDB),
    switchMap(response => {
      const tempDB = new PouchDB('temp');

      return (tempDB as any)
        .restore(response)
        .then(() => PouchDB.sync(masterDB, tempDB))
        .then(() => dumpDBtoDropbox(masterDB))
        .then(() => {
          return tempDB.close();
        });
    }),
    tap(() => console.log('sync done successfully')),
  );
};
