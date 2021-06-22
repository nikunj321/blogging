const { Text, Relationship } = require("@keystonejs/fields");


const selfieCameraFields = {
    fields: {
        single: {
            type: Text,
            defaultValue: "8 MP, f/2.2, (wide)"
        },
        features: {
            type: Text,
            defaultValue: "HDR"
        },
        video: {
            type: Text,
            defaultValue: "1080p@30fps"
        },
        mobile: {
            type: Relationship,
            ref: "Mobile",
            many: false,
        }
    }
}

module.exports = selfieCameraFields;