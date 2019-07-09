import React, { Component } from 'react';

//import './styles/main.css'; // Only the main CSS
import './styles/stilguide.css'; // The main CSS + components are included


import { Sample } from './components/Sample/Sample';
import { CookieNotice } from './components/CookieNotice/CookieNotice';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <CookieNotice />
                <Sample />
            </React.Fragment>
        );
    }
};

export default App;