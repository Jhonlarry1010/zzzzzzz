const monacoLoader = require('monaco-editor');

// Monaco requires a loader for Electron; for simplicity, use CDN in development
window.require = require;
window.MonacoEnvironment = {
  getWorkerUrl: function(workerId, label) {
    return `data:text/javascript;charset=utf-8,${encodeURIComponent(`
      self.MonacoEnvironment = { baseUrl: 'https://unpkg.com/monaco-editor@0.44.0/min/' };
      importScripts('https://unpkg.com/monaco-editor@0.44.0/min/vs/base/worker/workerMain.js');`
    )}`;
  }
};

require.config({ paths: { 'vs': 'https://unpkg.com/monaco-editor@0.44.0/min/vs' } });

require(['vs/editor/editor.main'], function() {
  monaco.editor.create(document.getElementById('container'), {
    value: '// Start coding!',
    language: 'javascript',
    theme: 'vs-dark'
  });
});
