const { Text, Relationship } = require("@keystonejs/fields");


const mainCameraDescriptionFields = {
    fields: {
        description: { type: Text },
        mainCamera: {
            type: Relationship,
            ref: "MainCamera",
            many: true
        }
    },

}

module.exports = mainCameraDescriptionFields;