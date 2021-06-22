const { Text, Relationship } = require('@keystonejs/fields');

const networkFields = {
    fields: {
        technology: {
            type: Text,
            defaultValue: "GSM / HSPA / LTE"
        },
        TwoGbands: {
            type: Text,
            defaultValue: "GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2"
        },
        ThreeGbands: {
            type: Text,
            defaultValue: "HSDPA 850 / 900 / 2100"
        },
        FourGbands: {
            type: Text,
            defaultValue: "1, 3, 5, 7, 8, 38, 40, 41"
        },
        speed: {
            type: Text,
            defaultValue: "HSPA 42.2/5.76 Mbps, LTE-A"
        },
        mobile: {
            type: Relationship,
            ref: "Mobile",
            many: true
        }
    }
}

module.exports = networkFields;