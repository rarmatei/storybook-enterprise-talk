import { render } from '@testing-library/react';

import CommonUiButton from './common-ui-button';

describe('CommonUiButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonUiButton />);
    expect(baseElement).toBeTruthy();
  });
});
