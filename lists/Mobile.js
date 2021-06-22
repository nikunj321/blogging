const { Relationship, Text } = require('@keystonejs/fields');

const mobileFields = {
    fields: {
        name: {
            type: Text,
            isUnique: true
        },
        network: {
            type: Relationship,
            ref: "Network",
            many: false
        },
        launch: {
            type: Relationship,
            ref: "Launch",
            many: false
        },
        body: {
            type: Relationship,
            ref: "Body",
            many: false
        },
        display: {
            type: Relationship,
            ref: "Display",
            many: false
        },
        platform: {
            type: Relationship,
            ref: "Platform",
            many: false
        },
        memory: {
            type: Relationship,
            ref: "Memory",
            many: false
        },
        mainCamera: {
            type: Relationship,
            ref: "MainCamera",
            many: false
        },
        selfieCamera: {
            type: Relationship,
            ref: "SelfieCamera",
            many: false
        },
        sound: {
            type: Relationship,
            ref: "Sound",
            many: false
        },
        communication: {
            type: Relationship,
            ref: "Communication",
            many: false
        },
        features: {
            type: Relationship,
            ref: "Feature",
            many: false
        },
        battery: {
            type: Relationship,
            ref: "Battery",
            many: false
        },
        misc: {
            type: Relationship,
            ref: "Misc",
            many: false
        },

    }
}

module.exports = mobileFields;