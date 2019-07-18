import React, { useEffect } from 'react';
import * as Handlebars from '../../helpers/handlebars.min.js';
import ScreenInfo from '../ScreenInfo/ScreenInfo';

/* Component including */
//import './_feedback-form.scss';
import { context } from './feedback-form.config.json';
import hbsSource from './feedback-form.hbs';

const placeholderClassName = "rh-feedback-form__placehoder";
const componentClassName = "rh-feedback-form__body";

export default function FeedbackForm() {
    const hbsTemplate = Handlebars.compile(hbsSource);

    useEffect(() => { }, []);

    return (
        <React.Fragment>
            <ScreenInfo
                placeholderClassName={placeholderClassName}
                componentClassName={componentClassName}
            />
            
            <span dangerouslySetInnerHTML={{ __html: hbsTemplate(context) }} />
        </React.Fragment>
    );
}
