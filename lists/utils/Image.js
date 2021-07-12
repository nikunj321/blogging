const { Relationship, Text } = require('@keystonejs/fields');

const { CloudinaryAdapter } = require('@keystonejs/file-adapters');
const { CloudinaryImage } = require('@keystonejs/fields-cloudinary-image');


const fileAdapter = new CloudinaryAdapter({
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_KEY,
    apiSecret: process.env.CLOUDINARY_SECRET,
    folder: 'my-keystone-app',
});


const imageField = {
    fields: {
        name: {
            type: Text
        },
        image: {
            type: CloudinaryImage,
            adapter: fileAdapter
        },
        mobile: {
            type: Relationship,
            ref: "Mobile",
            many: false
        }
    }
}

module.exports = imageField;
