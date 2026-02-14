const Imagekit = require("imagekit")

const imagekit = new Imagekit({ 
    publicKey: process.env.PUBLIC_KEY,
    privateKey: process.env.PRIVATE_KEY,
    urlEndpoint: "https://ik.imagekit.io/d8d9phufs",
 });

const upload_image = async (buffer) => {

    const result =  await imagekit.files.upload({
        file : buffer.toString("base64"),
        fileName : "image.jpg"
    });

    return result;
}

module.exports = upload_image