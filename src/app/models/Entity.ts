export class Entity {

	static count: number = 1;

	constructor(
		public id: number = Entity.getCount(),
		public foto: string = '',
		public name: string = '',
		public name_try: string = undefined,
		public specie: string = '',
		public hair_color: string = '',
		public height: string = '',
		public planet: string = '',
		public movies: string = '',
		public vehicles: string = '',
		public consult_tip: boolean = false
		) {
		this.vehicles = '';
	}

	static getCount() {
		return Entity.count++;
	}
}