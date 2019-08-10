import React, { useEffect } from 'react';
import * as Handlebars from '../../helpers/handlebars.min.js';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import ScreenInfo from '../ScreenInfo/ScreenInfo';

/* Component including */
import './_image-hero.scss';
import { context } from './image-hero.config.json';
import hbsSource from './image-hero.hbs';

const placeholderClassName = "rh-image-hero__container--extend";
const componentClassName = "rh-image-hero";

/* Testing */
//import './test/image-block.css';
/* End of testing */

export default function ImageHero() {
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
