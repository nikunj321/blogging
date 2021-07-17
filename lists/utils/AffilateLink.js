const { Text, Relationship } = require("@keystonejs/fields");
const { onlyAdmin } = require("../../helper/auth");


const affilateLinkField = {
    fields: {
        name: {
            type: Text,
            isRequired: true
        },
        link: {
            type: Text,
            isRequired: true
        },
        mobile: {
            type: Relationship,
            ref: "Mobile",
            many: false
        }
    },
    access: {
        read: () => true,
        create: onlyAdmin,
        update: onlyAdmin,
        delete: onlyAdmin
    }
}

module.exports = affilateLinkField;