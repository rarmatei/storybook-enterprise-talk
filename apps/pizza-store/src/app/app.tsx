import React, { useRef, useState } from 'react';
import styles from './app.module.css';
import { CommonUiImageRadioButtons } from '@nx-pizza/common/ui-image-radio-buttons';
import { Button, ButtonGroup, Heading } from '@chakra-ui/react';
import { calculatePercentageComplete } from './util';
import { CommonUiProgressMeter } from '@nx-pizza/common/ui-progress-meter';
import {
  CommonUiMultiSelect,
  CommonUiMultiSelectProps,
} from '@nx-pizza/common/ui-multi-select';
import { CommonUiForm } from '@nx-pizza/common/ui-form';
import { CommonUiInput } from '@nx-pizza/common/ui-input';
import { OrderPizzaUiPizzaImage } from '@nx-pizza/pizza-store/ui-pizza-image';

export function App() {
  const formRef = useRef();
  const options = [
    {
      value: 'slice',
      image: (
        <OrderPizzaUiPizzaImage
          imageSrc="/assets/slice.png"
          description="The Single Library"
        />
      ),
    },
    {
      value: 'half',
      image: (
        <OrderPizzaUiPizzaImage
          imageSrc="/assets/half.png"
          description="The 50% affected"
        />
      ),
    },
    {
      value: 'full',
      image: (
        <OrderPizzaUiPizzaImage
          imageSrc="/assets/full.png"
          description="The Full Monorepo"
        />
      ),
    },
  ];

  const [percentageComplete, setPercentageComplete] = useState(0);

  const onFormChange = () => {
    const percentage = calculatePercentageComplete(formRef!.current);
    setPercentageComplete(percentage);
  };

  const toppings: CommonUiMultiSelectProps['options'] = [
    { label: '🍄 Mushrooms.json', value: 'mushrooms' },
    { label: '🧀 Generated Cheese', value: 'cheese' },
    { label: '🐟 Cached Tuna', value: 'tuna' },
    { label: '🍍 Dependency Graph Pineapple', value: 'pineapple' },
  ];

  return (
    <div className={styles.app}>
      <CommonUiForm ref={formRef} onChange={onFormChange}>
        <Heading as="h1" size="xl" textAlign="center">
          Nx Pizza
        </Heading>
        <CommonUiInput name="firstName" label="Name" type="text" />
        <CommonUiInput name="phoneNumber" label="Phone Number" type="number" />
        <CommonUiImageRadioButtons
          options={options}
          name="pizzaType"
          label="Pizza Type"
        />
        <CommonUiMultiSelect
          name="toppings"
          label="Toppings"
          options={toppings}
        />
        <CommonUiProgressMeter
          value={percentageComplete}
          size="sm"
          my={5}
          hasStripe
          isAnimated
        />
        <ButtonGroup spacing={4}>
          <Button disabled={percentageComplete < 100} colorScheme="teal">
            Place order
          </Button>
          <Button variant="outline">Reset</Button>
        </ButtonGroup>
      </CommonUiForm>
    </div>
  );
}

export default App;
