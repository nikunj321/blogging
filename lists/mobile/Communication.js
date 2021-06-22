const { Text, Select, Relationship } = require("@keystonejs/fields");


const communicationFields = {
    fields: {
        wlan: {
            type: Text,
            isRequired: true,
            defaultValue: "Wi-Fi 802.11 b/g/n, Wi-Fi Direct, hotspot"
        },
        bluetooth: {
            type: Text,
            isRequired: true,
            defaultValue: "5.0, A2DP, LE"
        },
        gps: {
            type: Text,
            isRequired: true,
            defaultValue: "Yes, with A-GPS, GLONASS, GALILEO, BDS"
        },
        nfc: {
            type: Select,
            isRequired: true,
            options: [
                { value: "YES", label: "Yes" },
                { value: "NO", label: "No" },
            ],
            defaultValue: "NO",
        },
        usb: {
            type: Text,
            isRequired: true,
            defaultValue: "USB Type-C 2.0, USB On-The-Go"
        },
        radio: {
            type: Text,
            isRequired: true,
            defaultValue: "FM radio, recording"
        },
        mobile: {
            type: Relationship,
            ref: "Mobile",
            many: true
        }
    }
};

module.exports = communicationFields;