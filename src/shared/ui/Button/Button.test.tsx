import { screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('Button', () => {
    test('with TEST title', () => {
        componentRender(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('with clear theme', () => {
        componentRender(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
