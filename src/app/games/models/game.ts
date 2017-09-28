import { IPlayer } from "../../players/models/player";

export interface Game {
    state: string;
    creator: IPlayer;
    joiner: IPlayer;
}
