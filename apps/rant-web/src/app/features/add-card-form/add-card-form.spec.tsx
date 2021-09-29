import { render } from '@testing-library/react';

import AddCardForm from './add-card-form';

describe('AddCardForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddCardForm />);
    expect(baseElement).toBeTruthy();
  });
});
