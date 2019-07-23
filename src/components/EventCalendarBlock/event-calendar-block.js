import React, { useEffect } from 'react';
import * as Handlebars from '../../helpers/handlebars.min.js';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import ScreenInfo from '../ScreenInfo/ScreenInfo';

/* Component including */
import './_event-calendar-block.scss';
import { context } from './event-calendar-block.config.json';
import hbsSource from './event-calendar-block.hbs';

const placeholderClassName = "rh-event-calendar-block__container--extend";
const componentClassName = "rh-event-calendar-block";

/* Testing */
//import './test/event-calendar-block.css';
/* End of testing */

export default function EventCalendarBlock() {
    const hbsTemplate = Handlebars.compile(hbsSource);

    useEffect(() => { }, []);

    return (
        <React.Fragment>
            <ErrorBoundary>
                <ScreenInfo
                    placeholderClassName={placeholderClassName}
                    componentClassName={componentClassName}
                />
            </ErrorBoundary>
            
            <div className={placeholderClassName} dangerouslySetInnerHTML={{ __html: hbsTemplate(context) }} />
        </React.Fragment>
    );
}
