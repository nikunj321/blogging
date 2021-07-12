const { Relationship, Text, DateTime, Float, Integer, Virtual } = require('@keystonejs/fields');

const mobileFields = {
    fields: {
        name: {
            type: Text,
            isRequired: true,
            isUnique: true,
            hooks: {
                resolveInput: ({ resolvedData, fieldPath }) => {
                    let name = resolvedData[fieldPath];

                    if (name) {
                        resolvedData[fieldPath] = name.trim().toLowerCase();
                    }
                    return resolvedData[fieldPath];
                }
            }
        },
        mobileName: {
            type: Virtual,
            graphQLReturnType: `String`,
            resolver: (item) => {
                const { name } = item;
                return name.split(" ").map(word => (word.chatAt(0).toUpperCase() + word.slice(1))).join(" ");
            }
        },
        brand: {
            type: Relationship,
            ref: "Company",
            isRequired: true,
            many: false
        },
        image: {
            type: Relationship,
            ref: "Image",
            many: true
        },
        technology: {
            type: Text,
            defaultValue: "GSM / HSPA / LTE"
        },
        twoG: {
            type: Text,
            Label: "2G bands",
            defaultValue: "GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2"
        },
        threeG: {
            type: Text,
            label: "3G bands",
            defaultValue: "HSDPA 850 / 900 / 2100"
        },
        fourG: {
            type: Text,
            label: "4G bands",
            defaultValue: "1, 3, 5, 7, 8, 38, 40, 41"
        },
        fiveG: {
            type: Text,
            label: "5G bands"
        },
        speed: {
            type: Text,
            defaultValue: "HSPA 42.2/5.76 Mbps, LTE-A"
        },
        anouncedDate: {
            type: DateTime,
            format: "dd/MMMM/yyyy"
        },
        status: { type: Text },
        releasedDate: {
            type: DateTime,
            format: "dd/MMMM/yyyy"
        },
        // Body
        height: { type: Float },
        width: { type: Float },
        thickness: { type: Float },
        ratio: {
            type: Virtual,
            graphQLReturnType: `String`,
            resolver: (item) => {
                const { height, width, thickness } = item;
                const inInches = (value) => {
                    return Number(value * 0.0393701).toFixed(2);
                }

                if (height && width && thickness) {
                    return `${height} x ${width} x ${thickness} mm (${inInches(height)} x ${inInches(width)} x ${inInches(thickness)} in)`;
                }

                return null;
            }
        },
        weight: { type: Integer },
        weightInOunce: {
            type: Virtual,
            graphQLReturnType: `Float`,
            resolver: (item) => {
                if (!item.weight) {
                    return null;
                }

                let weight = (Number(item.weight) * 0.035274).toFixed(2)
                return Number(weight);
            }
        },
        build: { type: Text, defaultValue: "Glass front, plastic back, plastic frame" },
        sim: { type: Text, defaultValue: "Dual SIM (Nano-SIM, dual stand-by)" },
        // Display
        displayType: { type: Text, defaultValue: "PLS IPS, 90Hz" },
        displaySize: { type: Text, defaultValue: '6.5 inches, 102.0 cm2 (~81.9% screen-to-body ratio' },
        displayResolution: { type: Text, defaultValue: "720 x 1600 pixels, 20:9 ratio (~270 ppi density)" },
        // Platform
        operatingSystem: { type: Text },
        systemUI: {
            type: Text,
            label: "System UI"
        },
        processor: { type: Text },
        cpu: { type: Text, label: "CPU" },
        gpu: { type: Text, label: "GPU" },
        // memory
        memoryCardSlot: {
            type: Text,
            defaultValue: "microSDXC (dedicated slot)"
        },
        internalMemory: { type: Text },
        // main Camera
        noOfCamera: { type: Text },
        features: {
            type: Text,
            label: "Rear camera feature"
        },
        video: { type: Text },
        // Front camera
        camera: { type: Text, label: "front Camera" },
        frontCameraVideo: { type: Text },
        // Sound
        loudSpeaker: { type: Text },
        threeMM: { type: Text, label: "3.5mm Jack" },
        // communication
        wlan: { type: Text },
        bluetooth: { type: Text },
        gps: { type: Text },
        nfc: { type: Text },
        radio: { type: Text },
        usb: { type: Text },
        // feature
        sensor: { type: Text },
        batteryType: { type: Text },
        Charging: { type: Text },
        capacity: { type: Text },
        color: { type: Text },
        model: { type: Text },
        test: { type: Text },
        affilate: {
            type: Relationship,
            ref: "AffilateLink",
            many: true
        }
    }
};

module.exports = mobileFields;