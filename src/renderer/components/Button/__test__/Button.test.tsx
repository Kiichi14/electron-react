import { render } from '@testing-library/react';
import Button from '../Button';

describe('Button component test', () => {
  it('should display successfully', () => {
    const button = render(<Button icon="book" />);
    const icon = button.getByTestId('button-icon');
    expect(button).toBeTruthy();
    expect(icon).toBeTruthy();
    expect(icon.innerHTML).toBe('📚');
  });
});
