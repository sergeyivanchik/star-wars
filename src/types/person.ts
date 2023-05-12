interface IRespPerson {
	name: string;
	birth_year: string;
	eye_color: string;
	gender: string;
	hair_color: string;
	height: string;
	mass: string;
	skin_color: string;
	homeworld: string;
	films: string[];
	species: string[];
	starships: string[];
	vehicles: string[];
	url: string;
	created: string;
	edited: string;
}

interface IPerson
	extends Pick<
		IRespPerson,
		| "name"
		| "birth_year"
		| "eye_color"
		| "gender"
		| "hair_color"
		| "height"
		| "mass"
		| "skin_color"
		| "films"
		| "vehicles"
		| "starships"
    | "homeworld"
	> {
	id: string;
	image: string;
}

export { IPerson, IRespPerson };
