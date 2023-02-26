import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { SideBar } from './SideBar';

describe('SideBar', () => {
    test('render', () => {
        componentRender(<SideBar />);
        expect(screen.getByTestId('sideBar')).toBeInTheDocument();
    });
    test('toggle sidebar', () => {
        componentRender(<SideBar />);
        const toggleBtn = screen.getByTestId('sideBarToggleBtn');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sideBar')).toHaveClass('collapsed');
    });
});
