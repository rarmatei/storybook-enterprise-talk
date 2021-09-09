import { Story, Meta } from '@storybook/react';
import {
  CommonUiMultiSelect,
  CommonUiMultiSelectProps,
} from './common-ui-multi-select';

export default {
  component: CommonUiMultiSelect,
  title: 'CommonUiMultiSelect',
} as Meta;

const Template: Story<CommonUiMultiSelectProps> = (args) => (
  <CommonUiMultiSelect {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  name: '',
  label: '',
  options: [
    { label: '🍄 Mushrooms.json', value: 'mushrooms' },
    { label: '🧀 Generated Cheese', value: 'cheese' },
    { label: '🐟 Cached Tuna', value: 'tuna' },
    { label: '🍍 Dependency Graph Pineapple', value: 'pineapple' },
  ],
};
