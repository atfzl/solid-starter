import '#/style';
import * as monaco from 'monaco-editor';

// or import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
// if shipping only a subset of the features & languages is desired

monaco.editor.create(document.getElementById('root')!, {
  value: 'console.log("Hello, world")',
  language: 'javascript',
  minimap: { enabled: false },
});
