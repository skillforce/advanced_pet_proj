import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslations } from 'shared/lib/tests/renderWithTranslations/renderWithTranslations';
import { SideBar } from './SideBar';

describe('SideBar', () => {
    test('render', () => {
        renderWithTranslations(<SideBar />);
        expect(screen.getByTestId('sideBar')).toBeInTheDocument();
    });
    test('toggle sidebar', () => {
        renderWithTranslations(<SideBar />);
        const toggleBtn = screen.getByTestId('sideBarToggleBtn');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sideBar')).toHaveClass('collapsed');
    });
});
