const { Text, Relationship } = require("@keystonejs/fields");


const batteryFields = {
    fields: {
        type: {
            type: Text,
            isRequired: true,
            defaultValue: "Li-Po 6000 mAh, non-removable"
        },
        charging: {
            type: Text,
            isRequired: true,
            defaultValue: "Fast Charging 15W"
        },
        mobile: {
            type: Relationship,
            ref: "Mobile",
            many: true,
        },
    }
};

module.exports = batteryFields;