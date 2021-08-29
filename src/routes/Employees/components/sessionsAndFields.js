export const sessions = {
    personal:
    [
        {
            field: 'firstName',
            label: 'First Name',
            variant: 'string',
            required: true
        },
        {
            field: 'lastName',
            label: 'Last Name',
            variant: 'string',
            required: true
        },
        {
            field: 'jobTitle',
            label: 'Job Title',
            variant: 'string',
            required: true
        },
        {
            field: 'email',
            label: 'Email',
            variant: 'string',
            required: true
        },
    ],
    contact: [
        {
            field: 'workPhone',
            label: 'Work Phone',
            variant: 'string',
            required: true
        },
        {
            field: 'homePhone',
            label: 'Home Phone',
            variant: 'string',
            required: false
        },
        {
            field: 'MobilePhone',
            label: 'Mobile Phone',
            variant: 'string',
            required: true
        },
    ],
    address: [
        {
            field: 'country',
            label: 'Country',
            variant: 'string',
            required: true
        },
        {
            field: 'street',
            label: 'Street',
            variant: 'string',
            required: true
        },
        {
            field: 'city',
            label: 'City',
            variant: 'string',
            required: true
        },
        {
            field: 'state',
            label: 'State/Province',
            variant: 'string',
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
            variant: 'string',
            required: false,
            multiline: true
        }
    ]
}