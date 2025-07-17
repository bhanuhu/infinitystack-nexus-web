import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
    it('renders with text', () => {
        render(<Button>Click me</Button>);
        const btn = screen.getByTestId('button');
        expect(btn).toBeInTheDocument();
        expect(btn).toHaveTextContent('Click me');
    });
}); 