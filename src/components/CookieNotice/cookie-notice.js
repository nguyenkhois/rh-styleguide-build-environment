import React, { Component } from 'react';
import * as Handlebars from '../../helpers/handlebars.min.js';

import './cookie-notice.scss';
import { context } from './cookie-notice.config.json';
import { hbsSource } from './cookie-notice.hbs.js';

const hbsTemplate = Handlebars.compile(hbsSource);

const OriginalComponent = () => (
    <div class="rh-cookie">
        <span class="rh-cookie-icon"></span>
        <p class="rh-cookie-description">
            På den här webbplatsen använder vi cookies (kakor) för att webbplatsen ska fungera på ett bra sätt för dig. Genom att klicka vidare eller på “Jag förstår” godkänner du att vi använder cookies.
        </p>
        <button class="rh-button rh-button--primary cookie-button" aria-label="Text som förklarar funktionen om man lyssnar med talsyntes utan att se kontexten" role="button">Jag förstår</button>
    </div>
);

export class CookieNotice extends Component {
    render() {
        return (
            <React.Fragment>
                <OriginalComponent />
                <span dangerouslySetInnerHTML={{ __html: hbsTemplate(context) }} />
            </React.Fragment>
        );
    }
};
