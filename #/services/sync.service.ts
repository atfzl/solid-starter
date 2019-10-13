import { dumpDBtoDropbox, getDropboxDB } from '#/services/dropbox.service';
import masterDB from '#/services/pouchdb.service';
import PouchDB from 'pouchdb-browser';
import { of } from 'rxjs';
import { delay, switchMap, tap } from 'rxjs/operators';

export const syncPouchDBWithDropbox = () => {
  const sync$ = of(1).pipe(
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

  const syncAgain: () => any = () =>
    sync$.pipe(
      delay(10000),
      switchMap(() => syncAgain()),
    );

  return syncAgain();
};
