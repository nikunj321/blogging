const { Relationship, Text, Float, Integer, Virtual } = require('@keystonejs/fields');

const mobileFields = {
    fields: {
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
        name: {
            type: Text,
            label: "Mobile name",
            isRequired: true,
            hooks: {
                resolveInput: ({ fieldPath, resolvedData }) => {
                    if (resolvedData[fieldPath] !== null && resolvedData[fieldPath] !== " ")
                        resolvedData[fieldPath] = resolvedDate[fieldPath].trim();
                    return resolvedData[fieldPath];
                }
            }
        },
        /**
         *  @description Network
         */
        network: { type: Text },
        networkTechnology: {
            type: Text,
            label: "Network Technology",
        },
        networkTwoG: {
            type: Text,
            label: "Network 2G bands"
        },
        networkThreeG: {
            type: Text,
            label: "Network 3G bands"
        },
        networkFourG: {
            type: Text,
            label: "Network 4G bands"
        },
        networkFiveG: {
            type: Text,
            label: "Network 5G bands"
        },
        networkGprs: {
            type: Text,
            label: "Network GPRS"
        },
        networkEdge: {
            type: Text,
            lable: "Network Edge"
        },
        networkSpeed: {
            type: Text,
            label: "Network Speed"
        },

        /**
         *  @description Launch
         */

        launchAnnounced: {
            type: Text,
            label: "Launch Announced"
        },
        launchStatus: {
            type: Text,
            label: "Launch Status"
        },
        /**
         * @description Body
         */
        body: { type: Text },
        height: { type: Float },
        width: { type: Float },
        thickness: { type: Float },
        bodyDimensions: {
            type: Virtual,
            label: "Body Dimensions",
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
        bodyweight: { type: Integer, label: "Body Weight" },
        bodyWeightInOunce: {
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
        bodySim: {
            type: Text,
            label: "Body SIM"
        },
        bodyBuild: { type: Text, label: "Body Build" },
        /**
         *  @description Display
         */
        displayType: {
            type: Text,
            label: "Display Type"
        },
        displaySize: {
            type: Text
        },
        displayResolution: { type: Text },
        display: { type: Text },
        displayProtection: { type: Text, label: "Display Protection" },
        /**
         * @description Memory Card slot
         */
        memoryCardSlot: { type: Text, label: "memory card slot" },
        /**
         * @description Sound
         */
        soundLoudspeaker: { type: Text },
        soundThree: { type: Text, label: "Sound 3mm jack" },

        /**
         * @description communiction 
         */

        commsWlan: {
            type: Text,
            label: "Communication WLAN"
        },
        commsBluetooth: { type: Text, label: "Communication Bluetooth" },
        commsGps: { type: Text, label: "Communication GPS" },
        commsRadio: { type: Text, label: "Communication Radio" },
        commsNfc: { type: Text, label: "Communication NFC" },
        commsInfraredPort: { type: Text, label: "Communication Infrared Port" },

        /**
         *  @description Features (sensors and others)
         */

        featureSensors: { type: Text, label: "Feature Sensor" },
        features: { type: Text, label: "Features" },

        /**
         * @description Color and model
         */

        miscColors: { type: Text, label: 'Colors' },
        miscModel: { type: Text, label: "Model" },

        /**
         * @description Platform
         */

        platformOs: {
            type: Text,
            label: "Operating System"
        },
        platformChipset: {
            type: Text,
            label: "processor"
        },
        playformCpu: {
            type: Text,
            label: "CPU"
        },
        platformGpu: {
            type: Text,
            label: "GPU"
        },

        /** 
         * @description memory internal
         */

        memory: { type: Text },
        memoryInternal: { type: Text, label: "Memory Internal" },

        /**
         * @description Main Camera
         */
        mainCamera: { type: Text },
        mainCameraSingle: { type: Text, label: "Main Camera Single" },
        mainCameraDual: { type: Text, label: "Main Camera Dual" },
        mainCameraTriple: { type: Text, label: "Main Camera Triple" },
        mainCameraFour: { type: Text, label: "Main Camera Four" },
        mainCameraFive: { type: Text, label: "Main Camera Five" },
        mainCameraVideo: { type: Text, label: "Main Camera Video" },
        mainCameraFeature: { type: Text, label: "Main Camera Feature" },

        /**
         * @description Selfie Camera
         */

        selfieCamera: { type: Text, label: "Selfie Camera" },
        selfieCameraSingle: { type: Text, label: "Selfie Camera Single" },
        selfieCameraDual: { type: Text, label: "Selfie Camera Dual" },
        selfieCameraTriple: { type: Text, label: "Selfie Camera Triple" },
        selfieCameraFeatures: { type: Text, label: "Selfie Camera Features" },
        selfieCameraVideo: { type: Text, label: "Selfie Camera Video" },

        /**
         * @description Battery
         */

        battery: { type: Text },
        batteryCharging: { type: Text, label: "Battery Charging" },

        /**
         * @description Affilate link
         */
        affilate: {
            type: Relationship,
            ref: "AffilateLink",
            many: true
        }
    }
};

module.exports = mobileFields;