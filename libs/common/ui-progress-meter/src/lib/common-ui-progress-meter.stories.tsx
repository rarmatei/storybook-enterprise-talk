import { Story, Meta } from '@storybook/react';
import {
  CommonUiProgressMeter,
  CommonUiProgressMeterProps,
} from './common-ui-progress-meter';

export default {
  component: CommonUiProgressMeter,
  title: 'CommonUiProgressMeter',
} as Meta;

const Template: Story<CommonUiProgressMeterProps> = (args) => (
  <CommonUiProgressMeter {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  value: 25,
  size: 'sm',
  my: 5,
  hasStripe: true,
  isAnimated: true,
};
