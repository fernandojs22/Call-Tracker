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
        ]
}