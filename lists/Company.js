const { Text, Relationship } = require('@keystonejs/fields');

const companyFields = {
    fields: {
        name: {
            type: Text,
            isUnique: true
        },
        mobiles: {
            type: Relationship,
            ref: "Mobile",
            many: true
        }
    }
};

module.exports = companyFields;