export const sessions = {
    avatar: [
        {
            field: 'avatar',
            label: "employees.avatar",
            variant: 'Avatar',
            listResultId: 1,
            display: true
        },
    ], 
    personal:
        [
            {
                field: '_id',
                label: "employees.id",
                variant: 'TextField',
                required: true,
                listResultId: 2,
                display: false
            },
            {
                field: 'firstName',
                label: "employees.first-name",
                variant: 'TextField',
                required: true,
                listResultId: 3,
                display: true
            },
            {
                field: 'lastName',
                label: "employees.last-name",
                variant: 'TextField',
                required: true,
                display: true
            },
            {
                field: 'jobTitle',
                label: "employees.job-title",
                variant: 'TextField',
                required: true,
                listResultId: 4,
                display: true
            },
            {
                field: 'email',
                label: "employees.email",
                variant: 'TextField',
                required: true,
                listResultId: 5,
                display: true
            },
        ],
    contact: [
        {
            field: 'workPhone',
            label: "employees.work-phone",
            variant: 'TextField',
            required: true,
            listResultId: 6,
            display: true
        },
        {
            field: 'homePhone',
            label: "employees.home-phone",
            variant: 'TextField',
            required: false,
            display: true
        },
        {
            field: 'mobilePhone',
            label: "employees.mobile-phone",
            variant: 'TextField',
            required: true,
            display: true
        },
    ],
    address: [
        {
            field: 'country',
            label: "employees.country",
            variant: 'TextField',
            required: true,
            listResultId: 7,
            display: true
        },
        {
            field: 'street',
            label: "employees.street",
            variant: 'TextField',
            required: true,
            display: true
        },
        {
            field: 'city',
            label: "employees.city",
            variant: 'TextField',
            required: true,
            display: true
        },
        {
            field: 'state',
            label: "employees.state-province",
            variant: 'TextField',
            required: true,
            display: true
        },
        {
            field: 'zipCode',
            label: "employees.zip-postal-code",
            variant: 'string',
            required: true,
            display: true
        }
    ],
    notes: [
        {
            field: 'notes',
            label: "employees.notes",
            variant: 'TextField',
            required: false,
            multiline: true,
            display: true
        }
    ]
}