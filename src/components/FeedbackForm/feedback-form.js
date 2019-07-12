import React, { Component } from 'react';
import * as Handlebars from '../../helpers/handlebars.min.js';

/* Component including */
import './_feedback-form.scss';
import { context } from './feedback-form.config.json';
import hbsSource from './feedback-form.hbs';
const hbsTemplate = Handlebars.compile(hbsSource);

export class FeedBackForm extends Component {
    render() {
        return (
            <React.Fragment>
                <span dangerouslySetInnerHTML={{ __html: hbsTemplate(context) }} />
            </React.Fragment>
        );
    }
};
