import { doc } from 'storybook-readme';

export const readmeHelper = (readme: any) => {
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
