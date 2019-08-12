import { hot } from 'react-hot-loader/root';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './styles/app.scss';

import './styles/styleguide/stilguide.css';
//import './styles/styleguide/main.css';

/* Components */
import CookieNotice from './components/CookieNotice/cookie-notice';
import EventCalendarBlock from './components/EventCalendarBlock/event-calendar-block';
import FeedbackForm from './components/FeedbackForm/feedback-form';
import ImageBlock from './components/ImageBlock/image-block';
import ImageHero from './components/ImageHero/image-hero';

const Header = () => (
    <section className="app__header">
        <div>
            <p className="app__header-title">Styleguide development</p>
            <Link to="/" title="Go to the homepage">
                <img src="/images/icon-home.png" className="app__header-icon" alt="" />
            </Link>

            <a href="https://github.com/nguyenkhois/rh-styleguide-build-environment" title="View code on GitHub"
                target="_blank" rel="noopener noreferrer"><img src="/images/github-logo.png" alt="" /></a>
        </div>

        <nav className="app__header__menu">
            <ul>
                <li>
                    <Link to="/cookienotice/">Cookie notice</Link>
                </li>
                <li>
                    <Link to="/eventcalendarblock/">Event calendar block</Link>
                </li>
                <li>
                    <Link to="/feedbackform/">Feedback form (Vårdgivarwebben)</Link>
                </li>
                <li>
                    <Link to="/imageblock/">Image block</Link>
                </li>
                <li>
                    <Link to="/imagehero/">Image hero</Link>
                </li>
            </ul>
        </nav>
    </section>
);

function App() {
    return (
        <Router>
            <Header />

            <Route path="/cookienotice/" component={CookieNotice} />
            <Route path="/eventcalendarblock/" component={EventCalendarBlock} />
            <Route path="/feedbackform/" component={FeedbackForm} />
            <Route path="/imageblock/" component={ImageBlock} />
            <Route path="/imagehero/" component={ImageHero} />
        </Router>
    );
}

export default hot(App);