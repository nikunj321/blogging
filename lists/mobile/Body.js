const { Text, Relationship } = require("@keystonejs/fields");


const bodyFields = {
    fields: {
        dimensions: {
            type: Text,
            defaultValue: "164 x 75.9 x 9.7 mm (6.46 x 2.99 x 0.38 in)",
            isRequired: true
        },
        weight: {
            type: Text,
            defaultValue: "221 g (7.80 oz)",
            isRequired: true
        },
        build: {
            type: Text,
            defaultValue: "Glass front, plastic back, plastic frame",
            isRequired: true
        },
        sim: {
            type: Text,
            defaultValue: "Dual SIM (Nano-SIM, dual stand-by)",
            isRequired: true
        },
        mobile: {
            type: Relationship,
            ref: "Mobile",
            many: true
        }
    }
}

module.exports = bodyFields;