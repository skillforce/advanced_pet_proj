import { userEvent } from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Profile } from '@/entity/Profile';
import { Currency } from '@/entity/Currency';
import { Country } from '@/entity/Country';
import { $api } from '@/shared/api/api';
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
const options = {
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
};

describe('features/EditableProfileCard', () => {
    test('save and cancel buttons should appear after user click edit button', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        expect(screen.getByTestId('EditableProfileCardHeader.SaveButton')).toBeInTheDocument();
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
    });
    test('if user press cancel in edit mode it should become view mode', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.FirstNameInput'));
        await userEvent.clear(screen.getByTestId('ProfileCard.SurnameInput'));

        await userEvent.type(screen.getByTestId('ProfileCard.FirstNameInput'), 'user');
        await userEvent.type(screen.getByTestId('ProfileCard.SurnameInput'), 'user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

        expect(screen.getByTestId('EditableProfileCardHeader.EditButton')).toBeInTheDocument();

        expect(screen.getByTestId('ProfileCard.FirstNameInput')).toHaveValue(mockProfile.firstName);
        expect(screen.getByTestId('ProfileCard.SurnameInput')).toHaveValue(mockProfile.lastName);
    });

    test('if entered data is not valid than system should throw error message', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.FirstNameInput'));

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });

    test(
        'if in edit mode entered values in all fields is correct client should send correct PUT request',
        async () => {
            const mockPutReq = jest.spyOn($api, 'put');
            componentRender(<EditableProfileCard id="1" />, options);
            await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

            await userEvent.clear(screen.getByTestId('ProfileCard.FirstNameInput'));

            await userEvent.type(screen.getByTestId('ProfileCard.FirstNameInput'), 'user');

            await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

            expect(mockPutReq).toHaveBeenCalled();
        },
    );
});
