import { Dropbox } from 'dropbox';
import * as MemoryStream from 'memorystream';
import { from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

const dbx = new Dropbox({
  accessToken:
    'ERRPrpnTV4AAAAAAAAABW9y34oF1TzonoCPUEM5GRgxk1tWM4tIXIWRzBD__XOV4',
  fetch,
});

export const getDropboxDB = () =>
  from(dbx.filesDownload({ path: '/db.txt' })).pipe(
    map(a => (a as any).fileBlob),
    switchMap(a => new Response(a).text()),
  );

export const dumpDBtoDropbox = (db: PouchDB.Database) => {
  const stream = new MemoryStream();

  let dumpedString = '';
  stream.on('data', function(chunk: any) {
    dumpedString += chunk.toString();
  });

  return (db as any).dump(stream).then(function() {
    return dropbox.filesUpload({
      contents: dumpedString,
      path: '/db.txt',
      mode: { '.tag': 'overwrite' },
    });
  });
};

export const dropbox = dbx;
