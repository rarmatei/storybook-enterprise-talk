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
  value: 0,
  size: '',
  my: 0,
  hasStripe: false,
  isAnimated: false,
};
