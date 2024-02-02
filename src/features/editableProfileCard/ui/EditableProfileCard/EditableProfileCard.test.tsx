import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Profile } from 'entity/Profile';
import { Currency } from 'entity/Currency';
import { Country } from 'entity/Country';
import { userEvent } from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const mockProfile : Profile = {
    id: '1',
    firstName: 'Denis',
    lastName: 'Tatarinov',
    age: 27,
    currency: Currency.BYN,
    country: Country.Belarus,
    city: 'Mogilev',
    userName: 'sarcasm1613',
    avatar: '',
};

describe('features/EditableProfileCard', () => {
    test('save and cancel buttons should appear after user click edit button', async () => {
        componentRender(<EditableProfileCard id="1" />, {
            initialStoreState: {
                profile: {
                    readonly: true,
                    data: mockProfile,
                    form: mockProfile,
                },
                user: {
                    // to allow user to edit it\'s own profile
                    authData: { id: '1' },
                },
            },
            asyncReducers: {
                profile: profileReducer,
            },
        });
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        expect(screen.getByTestId('EditableProfileCardHeader.SaveButton')).toBeInTheDocument();
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
    });
});
