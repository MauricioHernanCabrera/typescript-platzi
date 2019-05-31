import { Player, Countries } from 'src/app/interfaces/player';

export interface Team {
  $key?: string;
  name: string;
  country: Countries;
  players: Player[];
}
