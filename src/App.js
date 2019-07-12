import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

/* Styleguide */
import './styles/styleguide/stilguide.css';

import './styles/app.scss';

/* Components */
import { Sample } from './components/Sample/Sample';
import { CookieNotice } from './components/CookieNotice/cookie-notice';
import { FeedBackForm } from './components/FeedbackForm/feedback-form';

const Header = () => (
    <section className="app-header">
        <div>
            <h1>Styleguide build environment</h1>
        </div>

        <nav className="app-header__menu">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/cookienotice/">Cookie notice</Link>
                </li>
                <li>
                    <Link to="/feedbackform/">Feedback form</Link>
                </li>
                <li>
                    <Link to="/sample/">Sample</Link>
                </li>
            </ul>
        </nav>
    </section>
);

class App extends Component {
    render() {
        return (
            <Router>
                <Header />

                <Route path="/cookienotice/" component={CookieNotice} />
                <Route path="/feedbackform/" component={FeedBackForm} />
                <Route path="/sample/" component={Sample} />
            </Router>
        );
    }
};

export default App;