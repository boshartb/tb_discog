import React from 'react';
import { render } from 'react-dom';

import App from './Components/App';
import './index.css';

const Root = function () {
    return (
        <div>
            <App />
        </div>
    );
};

render(<Root />, document.querySelector('#root'));


//single route change to release