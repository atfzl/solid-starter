import { Dropbox } from 'dropbox';
import { from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

const dbx = new Dropbox({
  accessToken:
    'ERRPrpnTV4AAAAAAAAABW9y34oF1TzonoCPUEM5GRgxk1tWM4tIXIWRzBD__XOV4',
  fetch,
});

export const getDropboxDB = () =>
  from(dbx.filesDownload({ path: '/db.json' })).pipe(
    map(a => (a as any).fileBlob),
    switchMap(a => new Response(a).text()),
  );
