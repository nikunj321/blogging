const { Text, Relationship } = require("@keystonejs/fields");


const featuresFields = {
    fields: {
        sensors: {
            type: Text,
            isRequired: true,
            defaultValue: "Fingerprint (side-mounted), accelerometer, proximity"
        },
        mobile: {
            type: Relationship,
            ref: "Mobile",
            many: true,
        }
    }
}

module.exports = featuresFields;