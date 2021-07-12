const { Relationship, Text, Select, DateTime } = require('@keystonejs/fields');

const mobileFields = {
    fields: {
        name: {
            type: Text,
            isUnique: true
        },
        brand: {
            type: Relationship,
            ref: "Company",
            many: false
        },
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
        dimensions: {
            type: Text,
            defaultValue: "164 x 75.9 x 9.7 mm (6.46 x 2.99 x 0.38 in)",
            isRequired: true
        },
        weight: {
            type: Text,
            defaultValue: "221 g (7.80 oz)",
            isRequired: true
        },
        build: {
            type: Text,
            defaultValue: "Glass front, plastic back, plastic frame",
            isRequired: true
        },
        sim: {
            type: Text,
            defaultValue: "Dual SIM (Nano-SIM, dual stand-by)",
            isRequired: true
        },
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
        cardSlot: {
            type: Text,
            defaultValue: "microSDXC (dedicated slot)",
            isRequired: true,
        },
        internal: {
            type: Text,
        },
        Quad: {
            type: Text,
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
        // sound: {
        //     type: Relationship,
        //     ref: "Sound",
        //     many: false
        // },
        // communication: {
        //     type: Relationship,
        //     ref: "Communication",
        //     many: false
        // },
        // features: {
        //     type: Relationship,
        //     ref: "Feature",
        //     many: false
        // },
        // battery: {
        //     type: Relationship,
        //     ref: "Battery",
        //     many: false
        // },
        // misc: {
        //     type: Relationship,
        //     ref: "Misc",
        //     many: false
        // },
        // affilate: {
        //     type: Relationship,
        //     ref: "AffilateLink",
        //     many: true
        // }
    }
}

module.exports = mobileFields;