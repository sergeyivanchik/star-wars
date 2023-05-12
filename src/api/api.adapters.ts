import { EImageUrls } from "../enums";
import { IPerson, IRespPerson } from "../types";
import { getId, getImageUrl } from "../utils";

const personAdapter = (resp: IRespPerson): IPerson => ({
	name: resp.name,
	birth_year: resp.birth_year,
	eye_color: resp.eye_color,
	gender: resp.gender,
	hair_color: resp.hair_color,
	height: resp.height,
	mass: resp.mass,
	skin_color: resp.skin_color,
	id: getId(resp.url),
	image: getImageUrl(EImageUrls.characters, resp.url),
	films: resp.films.map((url) => getImageUrl(EImageUrls.films, url)),
	vehicles: resp.vehicles.map((url) => getImageUrl(EImageUrls.vehicles, url)),
	starships: resp.starships.map((url) =>
		getImageUrl(EImageUrls.starships, url)
	),
	homeworld: getImageUrl(EImageUrls.planets, resp.homeworld),
});

export { personAdapter };
