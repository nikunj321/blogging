const { Text, Relationship } = require("@keystonejs/fields");


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
    }
}

module.exports = affilateLinkField;