import React, { useEffect } from 'react';
import { ErrorBoundary, ScreenInfo } from '../../helpers/';

/* Component definitions */
const componentName = "event-calendar-block";

require(`./_${componentName}.scss`);
const { context } = require(`./${componentName}.config.json`);
const hbsTemplate = require(`./${componentName}.hbs`);

const placeholderClassName = `rh-${componentName}__container--extend`;
const componentClassName = `rh-${componentName}`;

export default function EventCalendarBlock() {
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
