const { Text, Relationship } = require("@keystonejs/fields");


const miscFields = {
    fields: {
        colors: {
            type: Text,
            defaultValue: "Sea Green, Sky Blue, Celestial Black",
            isRequired: true,
        },
        models: {
            type: Text,
            defaultValue: "SM-F127G, SM-F127G/DS, SM-F127F, SM-F127F/DS",
            isRequired: true,
        },
        sar: {
            type: Text,
            defaultValue: "1.19 W/kg (head)",
            isRequired: true,
        },
        price: {
            type: Text,
            defaultValue: "About 130 EUR",
            isRequired: true,
        },
        mobile: {
            type: Relationship,
            ref: "Mobile",
            many: true
        }
    }
}

module.exports = miscFields;