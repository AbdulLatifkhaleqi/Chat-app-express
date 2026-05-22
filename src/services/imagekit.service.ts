import { imagekit } from "../config/imagekit";

export const uploadToImageKit = async (file: Express.Multer.File) => {
  const response = await imagekit.upload({
    file: file.buffer,
    fileName: `${Date.now()}-${file.originalname}`,
    folder: "/users",
  });

  return {
    url: response.url,
    fileId: response.fileId,
  };
};
