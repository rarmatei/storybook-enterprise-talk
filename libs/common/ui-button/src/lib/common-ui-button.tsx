import { Button } from '@chakra-ui/react';
import './common-ui-button.module.css';

export interface CommonUiButtonProps {
  disabled: boolean;
  text: string;
}

export function CommonUiButton(props: CommonUiButtonProps) {
  return (
    <Button disabled={props.disabled} colorScheme="teal">
      {props.text}
    </Button>
  );
}

export default CommonUiButton;
