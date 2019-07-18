import React, { useState, useEffect, useRef } from 'react';
import { getViewportSize, getElementSizeByClassName } from '../../helpers/dimensions';
import * as Handlebars from '../../helpers/handlebars.min.js';

/* Component including */
//import './_feedback-form.scss';
import { context } from './feedback-form.config.json';
import hbsSource from './feedback-form.hbs';
const hbsTemplate = Handlebars.compile(hbsSource);

const componentPlaceholderClassName = "feedback-form__placehoder";

export function FeedBackForm() {
    const [viewportWidth, setViewportWidth] = useState(0),
        [viewportHeight, setViewportHeight] = useState(0);


    const [elemWidth, setElemWidth] = useState(0),
        [elemHeight, setElemHeight] = useState(0);

    const refComponent = useRef(null);

    useEffect(() => {
        function reportViewportSize() {
            const { viewportWidth, viewportHeight } = getViewportSize() || {};

            setViewportWidth(viewportWidth);
            setViewportHeight(viewportHeight);

            reportComponentSize();
        }

        function reportComponentSize() {
            const { elemWidth, elemHeight } = getElementSizeByClassName(componentPlaceholderClassName) || {};

            setElemHeight(elemHeight);
            setElemWidth(elemWidth);
        }

        reportComponentSize();
        reportViewportSize();

        window.addEventListener('resize', reportViewportSize);

        return () => {
            window.removeEventListener("resize", reportViewportSize);
        }
    }, [elemWidth, elemHeight]);

    return (
        <React.Fragment>
            <div>
                <h3>Information:</h3>
                <p>Viewport size: {`${viewportWidth} x ${viewportHeight}px`}</p>
                <p>Component size: {`${elemWidth} x ${elemHeight}px`}</p>
            </div>
            
            <span ref={refComponent} dangerouslySetInnerHTML={{ __html: hbsTemplate(context) }} />
        </React.Fragment>
    );
}

