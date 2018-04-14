import { Entity } from '../models/Entity';
import { Player } from '../models/Player';

export class Globals {
	static fase = 0;
	static score: number = 0;
	static cardsPerPage: number = 8;
	static numMaxPersonagens: number = 86;
	static cards: Entity[] = [];
	static playerName: string;
	static playerEmail: string;
	static player: Player;
	static hallOfFame: Player[] = [];
	static timeLimitSec: number = 60;
	static inteiroPonto: number = 10;
	static meioPonto: number = 5;

	static resetQuiz(): void {
		Globals.score = 0;
		Globals.fase = 0;
	}

}
