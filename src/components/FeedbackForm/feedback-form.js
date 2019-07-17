import React, { useState, useEffect } from 'react';
import { getViewportSize, getElementSizeByClassName, getElementFontSize, calculatePxToEm } from '../../helpers/dimensions';
import * as Handlebars from '../../helpers/handlebars.min.js';

/* Component including */
import './_feedback-form.scss';
import { context } from './feedback-form.config.json';
import hbsSource from './feedback-form.hbs';
const hbsTemplate = Handlebars.compile(hbsSource);

const placeholderClassName = "feedback-form__placehoder";
const componentClassName = "feedback-form__body";

export function FeedBackForm() {
    const [viewportWidth, setViewportWidth] = useState(0),
        [viewportHeight, setViewportHeight] = useState(0);


    const [containerWidth, setContainerWidth] = useState(0),
        [containerHeight, setContainerHeight] = useState(0);


    const [componentWidth, setComponentWidth] = useState(0),
        [componentHeight, setComponentHeight] = useState(0);

    const rootFontSizeInPx = getElementFontSize();
    const rootFontSizeInEm = calculatePxToEm(rootFontSizeInPx);

    useEffect(() => {
        function reportViewportSize() {
            const { width, height } = getViewportSize() || {};

            setViewportWidth(width);
            setViewportHeight(height);

            reportContainerSize();
            reportComponentSize();
        }

        function reportContainerSize() {
            const containerSize = getElementSizeByClassName(placeholderClassName) || {};

            setContainerHeight(containerSize.height);
            setContainerWidth(containerSize.width);
        }

        function reportComponentSize() {
            const componentSize = getElementSizeByClassName(componentClassName) || {};
            setComponentWidth(componentSize.width);
            setComponentHeight(componentSize.height);
        }

        reportContainerSize();
        reportComponentSize();
        reportViewportSize();

        window.addEventListener('resize', reportViewportSize);

        return () => {
            window.removeEventListener("resize", reportViewportSize);
        }
    }, []);

    return (
        <React.Fragment>
            <div>
                <h3>Information:</h3>
                <p>Viewport size: {`${viewportWidth} x ${viewportHeight}px`} ({calculatePxToEm(viewportWidth)} x {calculatePxToEm(viewportHeight)}em)</p>
                <p>Container size: {`${containerWidth} x ${containerHeight}px`} ({calculatePxToEm(containerWidth)} x {calculatePxToEm(containerHeight)}em)</p>
                <p>Component size: {`${componentWidth} x ${componentHeight}px`} ({calculatePxToEm(componentWidth)} x {calculatePxToEm(componentHeight)}em)</p>
                <p>The root font-size is {rootFontSizeInPx}px ({rootFontSizeInEm}em)</p>
            </div>

            <span dangerouslySetInnerHTML={{ __html: hbsTemplate(context) }} />
        </React.Fragment>
    );
}

