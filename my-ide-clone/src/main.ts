import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './components/Editor';

const App = () => {
    return (
        <div>
            <h1>My IDE Clone</h1>
            <Editor />
        </div>
    );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);