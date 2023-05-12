import { imageUrl } from "../constants";
import { EImageUrls } from "../enums";

const getId = (url: string) => url.replace(/[^\d]/g, "");

const getImageUrl = (type: EImageUrls, url: string) => {
	const id = getId(url);

	return `${imageUrl}/${type}/${id}.jpg`;
};

export { getImageUrl, getId };
