const { Relationship, Text, Float, Integer, Virtual, Url } = require('@keystonejs/fields');
const { onlyAdmin } = require('../helper/auth');

const mobileFields = {
    fields: {

        brand: {
            type: Relationship,
            ref: "Company",
            isRequired: true,
            many: false
        },

        name: {
            type: Text,
            label: "Mobile name",
            isRequired: true,
            hooks: {
                resolveInput: ({ fieldPath, resolvedData }) => {
                    console.log(fieldPath);
                    console.log(resolvedData);
                    if (resolvedData && resolvedData[fieldPath]) {
                        resolvedData[fieldPath] = resolvedData[fieldPath].trim();
                        return resolvedData[fieldPath];
                    }
                    return resolvedData[fieldPath];
                }
            },
        },

        image: {
            type: Relationship,
            ref: "Image",
            many: true
        },


        /**
         * @description Affilate link
         */
        affilate: {
            // type: Url,
            type: Relationship,
            ref: "AffilateLink",
            many: true
        },




        /**
         *  @description Launch
         */

        launchAnnounced: {
            type: Text,
            label: "Announced"
        },
        launchStatus: {
            type: Text,
            label: "Status"
        },


        /**
         * @description Main Camera
         */
        mainCamera: { type: Text, label: "Number of Main camera" },
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
         * @description Platform
         */

        platformChipset: {
            type: Text,
            label: "Chipset"
        },
        playformCpu: {
            type: Text,
            label: "CPU"
        },
        platformGpu: {
            type: Text,
            label: "GPU"
        },
        platformOs: {
            type: Text,
            label: "OS"
        },


        /**
         * @description Battery
         */

        battery: { type: Text },
        batteryCharging: { type: Text, label: "Battery Charging" },
        batteryMusicPlay: { type: Text, label: "Battery Music Play" },
        batteryTalkTime: { type: Text, label: "Battery talk time" },
        batteryStandBy: { type: Text, label: "Battery stand by" },

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
        bodyKeyboard: { type: Text, label: "Body Keyboard" },


        /** 
         * @description memory internal
         */

        memory: { type: Text },
        memoryInternal: { type: Text, label: "Memory Internal" },

        /**
         *  @description Network
         */
        network: { type: Text },
        networkTechnology: {
            type: Text,
            label: "Technology",
        },
        networkTwoG: {
            type: Text,
            label: "2G bands"
        },
        networkThreeG: {
            type: Text,
            label: "3G bands"
        },
        networkFourG: {
            type: Text,
            label: "4G bands"
        },
        networkFiveG: {
            type: Text,
            label: "5G bands"
        },
        networkGprs: {
            type: Text,
            label: "GPRS"
        },
        networkEdge: {
            type: Text,
            lable: "Edge"
        },
        networkSpeed: {
            type: Text,
            label: "Speed"
        },


        /**
         * @description communiction 
         */

        commsWlan: {
            type: Text,
            label: "WLAN"
        },
        commsBluetooth: { type: Text, label: "Bluetooth" },
        commsGps: { type: Text, label: "GPS" },
        commsRadio: { type: Text, label: "Radio" },
        commsNfc: { type: Text, label: "NFC" },
        commsInfraredPort: { type: Text, label: "Infrared Port" },


        /**
         * @description Sound
         */
        soundLoudspeaker: { type: Text },
        soundThree: { type: Text, label: "Sound 3.5mm Jack" },
        soundAlertType: { type: Text, label: "Sound Alert Type" },

        /**
         *  @description Features (sensors and others)
         */

        featureSensors: { type: Text, label: "Sensor" },
        featuresMessaging: { type: Text, label: "Messaging" },
        featuresBrowser: { type: Text, label: "Browser" },
        featuresClock: { type: Text, label: "Clock" },
        featuresAlarm: { type: Text, label: "Alarm" },
        featuersGame: { type: Text, label: "Game" },
        featuresJava: { type: Text, label: "Java" },
        features: { type: Text, label: "Features" },

        /**
         * @description Color and model
         */

        miscColors: { type: Text, label: 'Colors' },
        miscModel: { type: Text, label: "Model" },
        miscPrice: { type: Text, label: "Price" },
        miscSarEu: { type: Text, label: "misc sar eu" },
        miscSar: { type: Text, label: "misc sar" },


        /**
         * @description Memory Card slot
         */
        memoryCardSlot: { type: Text, label: "memory card slot" },
        memoryPhoneBook: { type: Text, label: "Memory phoebook" },
        memoryCallRecords: { type: Text, label: "Memory Call Records" },


        /**
         * @description Test
         */

        testsPerformance: { type: Text, label: "Tests Performance" },
        testsCamera: { type: Text, label: "Tests Camera" },
        testsLoudspeaker: { type: Text, label: "Tests Loudspeaker" },
        testsAudioQuality: { type: Text, label: "Tests Audio Quality" },
        testsBatteryLife: { type: Text, label: "Tests Battery Life" },
        testsDisplay: { type: Text, label: "Tests Display" },

    },
    access: {
        read: () => true,
        create: onlyAdmin,
        update: onlyAdmin,
        delete: onlyAdmin,
    }
}

module.exports = mobileFields;