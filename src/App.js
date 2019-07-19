import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

/* Styleguide */
//import './styles/styleguide/stilguide.css';
import './styles/styleguide/main.css';
import './styles/app.scss';

/* Components */
import { Sample } from './components/Sample/Sample';
import CookieNotice from './components/CookieNotice/cookie-notice';
import FeedbackForm from './components/FeedbackForm/feedback-form';

const Header = () => (
    <section className="app__header">
        <div>
            <h1>Styleguide test environment</h1>
        </div>

        <nav className="app__header__menu">
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

function App(){
    return (
        <div className="app__container">
            <Router>
                <Header />

                <Route path="/cookienotice/" component={CookieNotice} />
                <Route path="/feedbackform/" component={FeedbackForm} />
                <Route path="/sample/" component={Sample} />
            </Router>
        </div>
    );
}

export default App;