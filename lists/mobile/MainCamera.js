const { Relationship, Text } = require("@keystonejs/fields");


const mainCameraFields = {
    fields: {
        Quad: {
            type: Relationship,
            ref: "MainCameraDescription",
            many: true
        },
        feature: {
            type: Text,
            defaultValue: "LED flash, panorama, HDR",
            isRequired: true,
        },
        video: {
            type: Text,
            defaultValue: "1080p@30fps",
            isRequired: true
        },
        mobile: {
            type: Relationship,
            ref: "Mobile",
            many: true
        }
    }
};

module.exports = mainCameraFields;