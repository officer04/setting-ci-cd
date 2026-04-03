import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';
import { describe, test, expect } from 'vitest'
import '@testing-library/jest-dom/vitest'

describe('Counter component', () => {
  test('отображает начальное значение 0', () => {
    render(<Counter />);
    const valueElement = screen.getByTestId('counter-value');
    expect(valueElement).toHaveTextContent('0');
  });

  test('увеличивает значение при клике на Increment', () => {
    render(<Counter />);
    const incButton = screen.getByText('Increment');
    fireEvent.click(incButton);
    const valueElement = screen.getByTestId('counter-value');
    expect(valueElement).toHaveTextContent('1');
  });

  test('уменьшает значение при клике на Decrement', () => {
    render(<Counter />);
    const decButton = screen.getByText('Decrement');
    fireEvent.click(decButton);
    const valueElement = screen.getByTestId('counter-value');
    expect(valueElement).toHaveTextContent('-1');
  });
});