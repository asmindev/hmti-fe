const config = {
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API,
    api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_SECRET,
    upload_preset: process.env.NEXT_PUBLIC_CLOUDINARY_PRESET,
};

const allowedKey = ["secure_url"];

const uploadInstanceFile = async (file) => {
    try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", config.upload_preset);
        const resp = await fetch(
            `https://api.cloudinary.com/v1_1/${config.cloud_name}/raw/upload`,
            {
                method: "post",
                body: formData,
            }
        );
        const data = await resp.json();
        return allowedKey.reduce((obj, key) => {
            obj[key] = data[key];
            return obj;
        }, {});
    } catch (error) {
        throw error;
    }
};

export default uploadInstanceFile;
