import '#/style';
import * as CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';

CodeMirror(document.getElementById('root')!, {
  value: 'function myScript(){return 100;}\n',
  mode: 'javascript',
  readOnly: false,
});
