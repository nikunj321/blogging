const { Relationship, Text } = require("@keystonejs/fields");

const displayFields = {
    fields: {
        type: {
            type: Text,
            defaultValue: "PLS IPS, 90Hz",
            isRequired: true,
        },
        size: {
            type: Text,
            defaultValue: '6.5 inches, 102.0 cm\U+00Bx2 (~81.9% screen-to-body ration)',
            isRequired: true,
        },
        resolution: {
            type: Text,
            defaultValue: "720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            isRequired: true,
        },
        protection: {
            type: Text,
            defaultValue: "Corning Gorila Glass",
            isRequired: true,
        },
        mobile: {
            type: Relationship,
            ref: "Mobile",
            many: true
        }
    }
}


module.exports = displayFields;