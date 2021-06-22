const { Text, Relationship } = require("@keystonejs/fields");


const memoryFields = {
    fields: {
        cardSlot: {
            type: Text,
            defaultValue: "microSDXC (dedicated slot)",
            isRequired: true,
        },
        internal: {
            type: Relationship,
            ref: "MemoryDescription",
            many: true,
        },
        mobile: {
            type: Relationship,
            ref: "Mobile",
            many: true,
        }
    }
}

module.exports = memoryFields;