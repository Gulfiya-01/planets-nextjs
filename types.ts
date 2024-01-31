export type PlanetData = {
	id: string;
	name: string;
};
export type Planets= {
	count: number;
	data: PlanetData[];
};
export type Content={
	content:string;
	source:string;
};
export type PlanetItem={
	id:string;
	name:string;
	radius:number;
	revolution:number;
	rotation:number;
	temperature: number,
	overview: Content;
	structure: Content;
	geology: Content;
};

 