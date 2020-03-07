import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import registerServiceWorker from "./registerServiceWorker";

ReactDom.render(<App />, document.getElementById('root'));
registerServiceWorker();