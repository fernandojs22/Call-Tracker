export const sessions = {
    avatar: [
        {
            field: 'avatar',
            label: "user.avatar",
            variant: 'Avatar',
            display: true
        },
    ],
    personal:
        [
            {
                field: '_id',
                label: "user.id",
                variant: 'TextField',
                required: true,
                display: false
            },
            {
                field: 'firstName',
                label: "user.first-name",
                variant: 'TextField',
                required: true,
                display: true
            },
            {
                field: 'lastName',
                label: "user.last-name",
                variant: 'TextField',
                required: true,
                display: true
            },
            {
                field: 'userName',
                label: "user.user-name",
                variant: 'TextField',
                required: true,
                display: true
            },
            {
                field: 'age',
                label: "user.age",
                variant: 'TextField',
                required: true,
                display: true
            },
        ]/*,
    contact: [
        {
            field: 'workPhone',
            label: "employees.work-phone",
            variant: 'TextField',
            required: true,
            listResultId: 6
        },
        {
            field: 'homePhone',
            label: "employees.home-phone",
            variant: 'TextField',
            required: false
        },
        {
            field: 'mobilePhone',
            label: "employees.mobile-phone",
            variant: 'TextField',
            required: true
        },
    ],
    address: [
        {
            field: 'country',
            label: "employees.country",
            variant: 'TextField',
            required: true,
            listResultId: 7
        },
        {
            field: 'street',
            label: "employees.street",
            variant: 'TextField',
            required: true
        },
        {
            field: 'city',
            label: "employees.city",
            variant: 'TextField',
            required: true
        },
        {
            field: 'state',
            label: "employees.state-province",
            variant: 'TextField',
            required: true
        },
        {
            field: 'zipCode',
            label: "employees.zip-postal-code",
            variant: 'string',
            required: true
        }
    ],
    notes: [
        {
            field: 'notes',
            label: "employees.notes",
            variant: 'TextField',
            required: false,
            multiline: true
        }
    ]*/
}