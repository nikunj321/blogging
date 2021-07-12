const { Text, Password, Checkbox } = require('@keystonejs/fields');
const { adminOrOwner, onlyAdmin } = require('./utils/auth/authUtils');

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
                read: adminOrOwner
            }
            // admin and user can do CRUD but only own
            // access: {
            //     read: adminOrOwner,
            //     update: adminOrOwner,
            // }
        },
        password: {
            type: Password,
            // access: {
            //     // only admin can see if password is set or not
            //     read: onlyAdmin,
            //     update: adminOrOwner,

            // }
        },
        isAdmin: {
            type: Checkbox,
            // access: onlyAdmin,
        }
    },
    // labelField: "username",
    access: {
        auth: true,
        // create: onlyAdmin,
        // update: onlyAdmin,
        // delete: onlyAdmin,
    }
};

module.exports = userFields;