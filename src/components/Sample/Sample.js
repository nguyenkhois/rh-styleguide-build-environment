import React, { Component } from 'react';
import './style.scss';

/* ------ Component building ------ */
const ComponentContent = () => (
    <div class="sample">
        <h1 class="sample__title">The page content - New</h1>
        <p class="sample__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac felis sit amet augue ultricies condimentum. Aliquam sagittis ligula quis erat consectetur, vel auctor enim tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur in cursus nulla. Proin vitae eleifend libero. Cras neque sapien, vulputate venenatis pellentesque quis, pretium vitae nibh. Fusce placerat arcu ut tortor elementum, vel rutrum ex condimentum.
        </p>

        <p class="sample__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac felis sit amet augue ultricies condimentum. Aliquam sagittis ligula quis erat consectetur, vel auctor enim tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur in cursus nulla. Proin vitae eleifend libero. Cras neque sapien, vulputate venenatis pellentesque quis, pretium vitae nibh. Fusce placerat arcu ut tortor elementum, vel rutrum ex condimentum.
        </p>

        <p class="sample__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac felis sit amet augue ultricies condimentum. Aliquam sagittis ligula quis erat consectetur, vel auctor enim tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur in cursus nulla. Proin vitae eleifend libero. Cras neque sapien, vulputate venenatis pellentesque quis, pretium vitae nibh. Fusce placerat arcu ut tortor elementum, vel rutrum ex condimentum.
        </p>
    </div>
);

const OriginalComponent = () => (
    <div class="sample">
        <h1 class="sample__title">The page content - Original</h1>
        <p class="sample__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac felis sit amet augue ultricies condimentum. Aliquam sagittis ligula quis erat consectetur, vel auctor enim tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur in cursus nulla. Proin vitae eleifend libero. Cras neque sapien, vulputate venenatis pellentesque quis, pretium vitae nibh. Fusce placerat arcu ut tortor elementum, vel rutrum ex condimentum.
        </p>

        <p class="sample__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac felis sit amet augue ultricies condimentum. Aliquam sagittis ligula quis erat consectetur, vel auctor enim tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur in cursus nulla. Proin vitae eleifend libero. Cras neque sapien, vulputate venenatis pellentesque quis, pretium vitae nibh. Fusce placerat arcu ut tortor elementum, vel rutrum ex condimentum.
        </p>

        <p class="sample__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac felis sit amet augue ultricies condimentum. Aliquam sagittis ligula quis erat consectetur, vel auctor enim tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur in cursus nulla. Proin vitae eleifend libero. Cras neque sapien, vulputate venenatis pellentesque quis, pretium vitae nibh. Fusce placerat arcu ut tortor elementum, vel rutrum ex condimentum.
        </p>
    </div>
);
/* ------ End of Component building ------ */


export class Sample extends Component {
    render() {
        return (
            <React.Fragment>
                <ComponentContent />
                <OriginalComponent />
            </React.Fragment>
        );
    }
};
