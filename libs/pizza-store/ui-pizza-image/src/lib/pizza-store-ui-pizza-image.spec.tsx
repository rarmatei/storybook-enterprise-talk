import { render } from '@testing-library/react';

import PizzaStoreUiPizzaImage from './pizza-store-ui-pizza-image';

describe('PizzaStoreUiPizzaImage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PizzaStoreUiPizzaImage />);
    expect(baseElement).toBeTruthy();
  });
});
