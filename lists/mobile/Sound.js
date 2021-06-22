const { Select, Relationship } = require("@keystonejs/fields");


const soundFields = {
    fields: {
        loudspeaker: {
            type: Select,
            options: [
                { value: "YES", label: "Yes" },
                { value: "NO", label: "No" },
            ],
            defaultValue: "YES"
        },
        threeFiveMmJack: {
            type: Select,
            options: [
                { value: "YES", label: "Yes" },
                { value: "NO", label: "No" },
            ],
            defaultValue: "YES"
        },
        mobile: {
            type: Relationship,
            ref: "Mobile",
            many: true
        }
    }
}

module.exports = soundFields;