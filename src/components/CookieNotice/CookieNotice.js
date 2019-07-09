import React, { Component } from 'react';
import './style.scss';

/**
 * You should not use this way to create your React components
 * Example: change 'class' ---> 'className' 
 */

/* ------ Component building ------ */
const ComponentContent = () => (
    <div class="fix-cookie__placehoder">
        <div class="rh-cookie fix-cookie">
            <span class="rh-cookie-icon fix-cookie-icon"></span>
            <p class="rh-cookie-description fix-cookie-description">
                På den här webbplatsen använder vi cookies (kakor) för att webbplatsen ska fungera på ett bra sätt för dig. Genom att klicka vidare eller på “Jag förstår” godkänner du att vi använder cookies.
            </p>
            <button class="rh-button rh-button--primary cookie-button fix-cookie-button" aria-label="Text som förklarar funktionen om man lyssnar med talsyntes utan att se kontexten" role="button">Jag förstår</button>
        </div>
    </div>
);

const OriginalComponent = () => (
    <div class="rh-cookie">
        <span class="rh-cookie-icon"></span>
        <p class="rh-cookie-description">
            På den här webbplatsen använder vi cookies (kakor) för att webbplatsen ska fungera på ett bra sätt för dig. Genom att klicka vidare eller på “Jag förstår” godkänner du att vi använder cookies.
        </p>
        <button class="rh-button rh-button--primary cookie-button" aria-label="Text som förklarar funktionen om man lyssnar med talsyntes utan att se kontexten" role="button">Jag förstår</button>
    </div>
);
/* ------ End of Component building ------ */


export class CookieNotice extends Component {
    render() {
        return (
            <React.Fragment>
                <ComponentContent />
                <OriginalComponent/>
            </React.Fragment>
        );
    }
};
