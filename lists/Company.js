const { Text, Relationship } = require('@keystonejs/fields');

const companyFields = {
    fields: {
        name: {
            type: Text,
            isUnique: true,
            hooks: {
                resolveInput: async ({ resolvedData, fieldPath }) => {
                    let name = resolvedData[fieldPath];
                    // console.log(resolvedData);
                    if (name) {
                        resolvedData[fieldPath] = name.trim()
                    }
                    // console.log(resolvedData);
                    return resolvedData[fieldPath];
                }
            }

        },
        mobiles: {
            type: Relationship,
            ref: "Mobile",
            many: true
        }
    }
};

module.exports = companyFields;