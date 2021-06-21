const { Text, Password, Checkbox } = require('@keystonejs/fields');

const userFields = {
    fields: {
        username: {
            type: Text,
            isRequired: true,
        },
        email: {
            type: Text,
            isRequired: true,
            isUnique: true
        },
        password: {
            type: Password
        },
        isAdmin: {
            type: Checkbox
        }
    }
};

module.exports = userFields;