const { Text, Relationship } = require("@keystonejs/fields");


const memoryDescriptionFields = {
    fields: {
        description: { type: Text },
        memory: {
            type: Relationship,
            ref: "Memory",
            many: true
        },
    },

}

module.exports = memoryDescriptionFields;