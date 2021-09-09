import { Story, Meta } from '@storybook/react';
import {
  CommonUiImageRadioButtons,
  CommonUiImageRadioButtonsProps,
} from './common-ui-image-radio-buttons';
import { PhoneIcon, TimeIcon, WarningTwoIcon } from '@chakra-ui/icons';

export default {
  component: CommonUiImageRadioButtons,
  title: 'CommonUiImageRadioButtons',
  argTypes: {
    onChange: { action: 'onChange executed!' },
  },
} as Meta;

const Template: Story<CommonUiImageRadioButtonsProps> = (args) => (
  <CommonUiImageRadioButtons {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  name: '',
  label: 'Select your icon',
  options: [
    {
      value: 'warning',
      image: <WarningTwoIcon />,
    },
    {
      value: 'time',
      image: <TimeIcon />,
    },
    {
      value: 'phone',
      image: <PhoneIcon />,
    },
  ],
};
