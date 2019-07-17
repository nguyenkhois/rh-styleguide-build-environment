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
    const rootFontSizeInEm = ScreenService.pxToEm(rootFontSizeInPx);

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
                <p>Viewport size: {viewportWidth} x {viewportHeight}px ({ScreenService.pxToEm(viewportWidth)} x {ScreenService.pxToEm(viewportHeight)}em)</p>
                <p>Container size: {containerWidth} x {containerHeight}px ({ScreenService.pxToEm(containerWidth)} x {ScreenService.pxToEm(containerHeight)}em)</p>
                <p>Component size: {componentWidth} x {componentHeight}px ({ScreenService.pxToEm(componentWidth)} x {ScreenService.pxToEm(componentHeight)}em)</p>
                <p>The root font-size is {rootFontSizeInPx}px ({rootFontSizeInEm}em)</p>
            </div>
        </React.Fragment>
    );
}