import React from 'react';
import { doc } from 'storybook-readme';
import readme from '../README.md';


export default {
    title: 'Example/OrderingCorrect'
}; 

// ReadmeHelper is in this file, the ordering is correct.
// ReadmeHelper is imported in the OrderingWrong.stories.tsx and order is incorrect.
const readmeHelper = (readme: any) => {
    const Readme = () => (
        <div>
            {doc(readme)()}
        </div>
    );

    Readme.storyName = 'README';
    Readme.parameters = {
        layout: 'padded',
    };

    return Readme;
}

export const readmePage = readmeHelper(readme);
export const test = () => <div>Test</div>;
export const about = () => <div>About</div>;
about.storyName = 'About';
export const fred = () => <div>fred</div>;
export const Fred2 = () => <div>Fred2</div>;
Fred2.storyName = 'Fred Deux';
