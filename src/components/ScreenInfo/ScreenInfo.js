import React, { useState, useEffect } from 'react';
import { ScreenService } from '../../services/';

export default function ScreenInfo(props) {
    const placeholderClassName = props.placeholderClassName,
        componentClassName = props.componentClassName;

    const [viewportWidth, setViewportWidth] = useState(0),
        [viewportHeight, setViewportHeight] = useState(0);

    const [containerWidth, setContainerWidth] = useState(0),
        [containerHeight, setContainerHeight] = useState(0);

    const [componentWidth, setComponentWidth] = useState(0),
        [componentHeight, setComponentHeight] = useState(0);

    const rootFontSizeInPx = ScreenService.elementFontSize('html');

    useEffect(() => {
        function reportViewportSize() {
            const { width, height } = ScreenService.viewportSize() || {};
            setViewportWidth(width);
            setViewportHeight(height);
        }

        function reportContainerSize() {
            const containerSize = ScreenService.elementSizeByClassName(placeholderClassName) || {};
            setContainerHeight(containerSize.height);
            setContainerWidth(containerSize.width);
        }

        function reportComponentSize() {
            const componentSize = ScreenService.elementSizeByClassName(componentClassName) || {};
            setComponentWidth(componentSize.width);
            setComponentHeight(componentSize.height);
        }

        function getScreenInfo() {
            reportViewportSize();
            reportContainerSize();
            reportComponentSize();
        }

        getScreenInfo();
        window.addEventListener('resize', getScreenInfo);

        return () => {
            window.removeEventListener("resize", getScreenInfo);
        }
    }, []);

    return (
        <React.Fragment>
            <div>
                <h3>Information:</h3>
                {viewportWidth && viewportHeight &&
                    <p>Viewport size: {viewportWidth} x {viewportHeight}? 
                    ({ScreenService.ptToPx(viewportWidth)} x {ScreenService.ptToPx(viewportHeight)}px)
                    ({ScreenService.ptToEm(viewportWidth)} x {ScreenService.ptToEm(viewportHeight)}em)
                    </p>
                }

                {containerWidth && containerHeight &&
                    <p>Container size: {containerWidth} x {containerHeight}? ({ScreenService.pxToEm(containerWidth)} x {ScreenService.pxToEm(containerHeight)}em)</p>}

                {componentWidth && componentHeight &&
                    <p>Component size: {componentWidth} x {componentHeight}? ({ScreenService.pxToEm(componentWidth)} x {ScreenService.pxToEm(componentHeight)}em)</p>}
                
                {rootFontSizeInPx && <p>The root font-size is {rootFontSizeInPx}px ({ScreenService.pxToEm(rootFontSizeInPx)}em)</p>}
            </div>
        </React.Fragment>
    );
}