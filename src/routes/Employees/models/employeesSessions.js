export const sessions = {
    avatar: [
        {
            field: 'avatar',
            label: 'Avatar',
            variant: 'Avatar',
            listResultId: 1
        },
    ],
    personal:
        [
            {
                field: 'id',
                label: 'Id',
                variant: 'TextField',
                required: true,
                listResultId: 2
            },
            {
                field: 'firstName',
                label: 'First Name',
                variant: 'TextField',
                required: true,
                listResultId: 3
            },
            {
                field: 'lastName',
                label: 'Last Name',
                variant: 'TextField',
                required: true
            },
            {
                field: 'jobTitle',
                label: 'Job Title',
                variant: 'TextField',
                required: true,
                listResultId: 4
            },
            {
                field: 'email',
                label: 'Email',
                variant: 'TextField',
                required: true,
                listResultId: 5
            },
        ],
    contact: [
        {
            field: 'workPhone',
            label: 'Work Phone',
            variant: 'TextField',
            required: true,
            listResultId: 6
        },
        {
            field: 'homePhone',
            label: 'Home Phone',
            variant: 'TextField',
            required: false
        },
        {
            field: 'mobilePhone',
            label: 'Mobile Phone',
            variant: 'TextField',
            required: true
        },
    ],
    address: [
        {
            field: 'country',
            label: 'Country',
            variant: 'TextField',
            required: true,
            listResultId: 7
        },
        {
            field: 'street',
            label: 'Street',
            variant: 'TextField',
            required: true
        },
        {
            field: 'city',
            label: 'City',
            variant: 'TextField',
            required: true
        },
        {
            field: 'state',
            label: 'State/Province',
            variant: 'TextField',
            required: true
        },
        {
            field: 'zipCode',
            label: 'Zip/Postal Code',
            variant: 'string',
            required: true
        }
    ],
    notes: [
        {
            field: 'notes',
            label: 'Notes',
            variant: 'TextField',
            required: false,
            multiline: true
        }
    ]
}