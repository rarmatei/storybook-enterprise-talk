import React from 'react';

import './common-ui-progress-meter.module.css';
import { Progress, ProgressProps } from '@chakra-ui/react';

export interface CommonUiProgressMeterProps {
  value: number;
  size?: string;
  my?: number;
  hasStripe?: boolean;
  isAnimated?: boolean;
}

export function CommonUiProgressMeter(props: CommonUiProgressMeterProps) {
  return <Progress {...props}></Progress>;
}

export default CommonUiProgressMeter;
