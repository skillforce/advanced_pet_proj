import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('Counter render', () => {
        componentRender(<Counter />, {
            initialStoreState:
                { counter: { value: 0 } },
        });
        expect(screen.getByTestId('counter_value_title')).toHaveTextContent('0');
    });
    test('Press increment btn', () => {
        componentRender(<Counter />, {
            initialStoreState:
                { counter: { value: 0 } },
        });
        const incrementBtn = screen.getByTestId('counter_increment_button');
        fireEvent.click(incrementBtn);
        expect(screen.getByTestId('counter_value_title')).toHaveTextContent('1');
    });
    test('Press decrement btn', () => {
        componentRender(<Counter />, {
            initialStoreState:
                { counter: { value: 0 } },
        });
        const decrementValue = screen.getByTestId('counter_decrement_button');
        fireEvent.click(decrementValue);
        expect(screen.getByTestId('counter_value_title')).toHaveTextContent('-1');
    });
});
