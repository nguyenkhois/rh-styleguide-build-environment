import React, { useEffect } from 'react';
import { ErrorBoundary, ComponentInfo } from '../../helpers/';

/* Component definitions */
const componentName = "event-card-calendar";

require(`./_${componentName}.scss`);
const { context } = require(`./${componentName}.config.json`);
const hbsTemplate = require(`./${componentName}.hbs`);

const placeholderClassName = `app__${componentName}__placeholder`;
const componentClassName = `rh-${componentName}`;

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

            <div className={placeholderClassName} dangerouslySetInnerHTML={{ __html: hbsTemplate(context) }} />
        </React.Fragment>
    );
}
