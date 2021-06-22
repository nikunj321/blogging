const { DateTime, Select, Relationship } = require('@keystonejs/fields');

const launchFields = {
    fields: {
        announced: {
            type: DateTime,
            format: "yyyy/MMMM/dd",
        },
        status: {
            type: Select,
            options: [
                { value: 'AVAILABLE', label: 'Available' },
                { value: 'UNAVAILABLE', label: 'Unavailable' },
            ],
            defaultValue: 'AVAILABLE'
        },
        mobile: {
            type: Relationship,
            ref: "Mobile",
            many: true
        }
    }
};

module.exports = launchFields;