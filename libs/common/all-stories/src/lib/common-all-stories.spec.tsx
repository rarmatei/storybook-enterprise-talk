import { render } from '@testing-library/react';

import CommonAllStories from './common-all-stories';

describe('CommonAllStories', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonAllStories />);
    expect(baseElement).toBeTruthy();
  });
});
