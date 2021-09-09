import { render } from '@testing-library/react';

import PizzaStoreFeaturePaymentGateway from './pizza-store-feature-payment-gateway';

describe('PizzaStoreFeaturePaymentGateway', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PizzaStoreFeaturePaymentGateway />);
    expect(baseElement).toBeTruthy();
  });
});
