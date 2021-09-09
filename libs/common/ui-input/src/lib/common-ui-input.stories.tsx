import { Story, Meta } from '@storybook/react';
import { CommonUiInput, CommonUiInputProps } from './common-ui-input';

export default {
  component: CommonUiInput,
  title: 'CommonUiInput',
} as Meta;

const Template: Story<CommonUiInputProps> = (args) => (
  <CommonUiInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  name: '',
  label: '',
  type: '',
};
