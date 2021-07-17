const { Text, Password, Checkbox } = require('@keystonejs/fields');
const { onlyAdmin, adminOROwner } = require('../helper/auth');

const userFields = {
    fields: {
        username: {
            type: Text,
            isRequired: true,
        },
        email: {
            type: Text,
            isRequired: true,
            isUnique: true,
            access: {
                read: adminOROwner,
                update: adminOROwner,
                delete: adminOROwner
            }
        },
        password: {
            type: Password,
            access: {
                read: onlyAdmin,
                update: adminOROwner,
                delete: adminOROwner
            }
        },
        isAdmin: {
            type: Checkbox,
            defaultValue: false,
            access: onlyAdmin
        }
    },
    access: {
        auth: true,
        delete: onlyAdmin,
    }
};

module.exports = userFields;