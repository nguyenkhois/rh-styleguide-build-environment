import React, { useEffect } from 'react';
import * as Handlebars from '../../helpers/handlebars.min.js';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import ScreenInfo from '../ScreenInfo/ScreenInfo';

/* Component including */
//import './_feedback-form.scss';
import { context } from './feedback-form.config.json';
import hbsSource from './feedback-form.hbs';

const placeholderClassName = "";
const componentClassName = "";

export default function FeedbackForm() {
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
            
            <div dangerouslySetInnerHTML={{ __html: hbsTemplate(context) }} />
        </React.Fragment>
    );
}
