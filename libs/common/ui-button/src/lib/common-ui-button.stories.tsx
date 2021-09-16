import { Story, Meta } from '@storybook/react';
import { CommonUiButton, CommonUiButtonProps } from './common-ui-button';

export default {
  component: CommonUiButton,
  title: 'CommonUiButton',
} as Meta;

const Template: Story<CommonUiButtonProps> = (args) => (
  <CommonUiButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  text: '',
};
