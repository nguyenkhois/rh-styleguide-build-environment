function getViewportSize() {
    const width = Math.max(document.documentElement.clientWidth, document.body.clientWidth, window.innerWidth || 0),
        height = Math.max(document.documentElement.clientHeight, document.body.clientHeight, window.innerHeight || 0);

    return { width, height };
}

function getElementSizeByClassName(elementClassName) {
    const elem = document.getElementsByClassName(elementClassName),
        width = elem[0].offsetWidth,
        height = elem[0].offsetHeight;

    return { width, height };
}

function getElementFontSize(elementName = 'html') {
    const elem = document.querySelector(elementName);
    return parseFloat(window.getComputedStyle(elem).fontSize); // Returns pixel
}

function calculatePxToEm(pxParam = 16) {
    return pxParam/ 16;
}

const ScreenService = {
    viewportSize: getViewportSize,
    elementSizeByClassName: getElementSizeByClassName,
    elementFontSize: getElementFontSize,
    pxToEm: calculatePxToEm
}

export default ScreenService;