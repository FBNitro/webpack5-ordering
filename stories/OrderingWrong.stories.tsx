import React from 'react';
import readme from '../README.md';
import { readmeHelper } from './helpers';


export default {
    title: 'Example/OrderingWrong'
}; 


export const readmePage = readmeHelper(readme);
export const test = () => <div>Test</div>;
export const about = () => <div>About</div>;
about.storyName = 'About';
export const fred = () => <div>fred</div>;
export const Fred2 = () => <div>Fred2</div>;
Fred2.storyName = 'Fred Deux';
