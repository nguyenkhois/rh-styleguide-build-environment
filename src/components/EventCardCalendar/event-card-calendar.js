import React, { useEffect } from 'react';
import { ErrorBoundary, ComponentInfo } from '../../helpers/';

/* Component definitions */
const componentName = "event-card-calendar";

const { context } = require(`./${componentName}.config.json`);
const hbsTemplate = require(`./${componentName}.hbs`);

const placeholderClassName = `rh-container--auto`;
const componentClassName = `rh-${componentName}__item`;

export default function EventCardCalendar() {
    useEffect(() => { }, []);

    return (
        <React.Fragment>
            <ErrorBoundary>
                <ComponentInfo
                    placeholderClassName={placeholderClassName}
                    componentClassName={componentClassName}
                />
            </ErrorBoundary>

            <div dangerouslySetInnerHTML={{ __html: hbsTemplate(context) }} />
        </React.Fragment>
    );
}
