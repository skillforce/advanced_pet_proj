import { Story } from '@storybook/react';
import 'app/styles/index.scss';

export const StyleDecorator = (storyComponent:()=>Story) => { storyComponent(); };
