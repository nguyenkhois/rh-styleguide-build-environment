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

    const devicePixelRatio = window.devicePixelRatio || 1;

    useEffect(() => {
        function reportViewportSize() {
            const { width, height } = ScreenService.viewportSize() || {};
            setViewportWidth(width);
            setViewportHeight(height);
        }

        function reportContainerSize() {
            if (placeholderClassName){
                const containerSize = ScreenService.elementSizeByClassName(placeholderClassName) || {};
                setContainerWidth(containerSize.width);
                setContainerHeight(containerSize.height);
            }
        }

        function reportComponentSize() {
            if (componentClassName){
                const componentSize = ScreenService.elementSizeByClassName(componentClassName) || {};
                setComponentWidth(componentSize.width);
                setComponentHeight(componentSize.height);
            }
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
            <div className="app__detail-info">
                <details className="app__detail-info__container" open>
                    <summary className="app__detail-info__title">Information</summary>
                    {devicePixelRatio && <p>Device pixel ratio is <span className="app__detail-info__text-important">{devicePixelRatio}</span></p>}

                    {viewportWidth && viewportHeight &&
                        <p>Viewport size: {viewportWidth} x {viewportHeight}px<br/>
                        ({ScreenService.pxToEm(viewportWidth)} x {ScreenService.pxToEm(viewportHeight)}em)
                        </p>
                    }

                    {containerWidth > 0 && containerHeight > 0 &&
                        <p>Container size: {containerWidth} x {containerHeight}px<br/>
                        ({ScreenService.pxToEm(containerWidth)} x {ScreenService.pxToEm(containerHeight)}em)</p>}

                    {componentWidth > 0 && componentHeight > 0 &&
                        <p>Component size: {componentWidth} x {componentHeight}px<br/>
                        ({ScreenService.pxToEm(componentWidth)} x {ScreenService.pxToEm(componentHeight)}em)</p>}

                    {rootFontSizeInPx && <p>The root font-size is {rootFontSizeInPx}px
                    ({ScreenService.pxToEm(rootFontSizeInPx)}em)</p>}
                </details>
            </div>
        </React.Fragment>
    );
}