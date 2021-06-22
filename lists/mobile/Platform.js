const { Text, Relationship } = require("@keystonejs/fields");


const platformFields = {
    fields: {
        OS: {
            type: Text,
            defaultValue: "Android 11, One UI 3.1",
            isRequired: true,
        },
        chipset: {
            type: Text,
            defaultValue: "Exynos 850(8nm)",
            isRequired: true,
        },
        CPU: {
            type: Text,
            defaultValue: "Octa-core (4x2.0 GHz Cortex-A55 & 4x2.0 GHz Cortex-A55)",
            isRequired: true,
        },
        GPU: {
            type: Text,
            defaultValue: "Mali-G52",
            isRequired: true,
        },
        mobile: {
            type: Relationship,
            ref: "Mobile",
            many: true
        }
    }
};

module.exports = platformFields;