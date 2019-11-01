import { hot } from 'react-hot-loader/root';
import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ErrorBoundary, ScreenInfo, Header } from './helpers/';

import './styles/app.scss'; // App's styling
import './styles/main.scss'; // Styleguide

/* Components */
const EventCalendarBlock = lazy(() => import('./components/EventCalendarBlock/event-calendar-block'));
const EventCardCalendar = lazy(() => import('./components/EventCardCalendar/event-card-calendar'));
const ImageBlock = lazy(() => import('./components/ImageBlock/image-block'));

function App() {
    useEffect(() => { }, []);

    return (
        <Router>
            <Header />

            <ScreenInfo />
            <Suspense fallback={<div>Loading...</div>}>
                <ErrorBoundary>
                    <Switch>
                        <Route path="/eventcalendarblock/" component={EventCalendarBlock} />
                        <Route path="/eventcardcalendar/" component={EventCardCalendar} />
                        <Route path="/imageblock/" component={ImageBlock} />
                    </Switch>
                </ErrorBoundary>
            </Suspense>
        </Router>
    );
}

export default hot(App);