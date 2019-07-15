function getViewportSize() {
    const viewportWidth = Math.max(document.documentElement.clientWidth, document.body.clientWidth, window.innerWidth || 0),
        viewportHeight = Math.max(document.documentElement.clientHeight, document.body.clientHeight, window.innerHeight || 0);

    return { viewportWidth, viewportHeight };
}

function getElementSizeByClassName(elementClassName) {
    const elem = document.getElementsByClassName(elementClassName),
        elemWidth = elem[0].offsetWidth,
        elemHeight = elem[0].offsetHeight;

    return { elemWidth, elemHeight };
}

export {
    getViewportSize,
    getElementSizeByClassName
}