import { IPlayer } from "../../players/models/player";

export enum GameState {
    GAME_STATE_NONE = 1,
    GAME_STATE_SELECTED = 2,
    GAME_STATE_CONFIGURED = 3,
    GAME_STATE_STARTED = 4,
    GAME_STATE_RUNNING = 5,
    GAME_STATE_ENDED = 6
}

export enum GameType {
    GAME_TYPE_NONE = 0,
    GAME_TYPE_8_BALL = 1,
    GAME_TYPE_9_BALL = 2,
    GAME_TYPE_10_BALL = 3,
    GAME_TYPE_14_1_CONTINUOUS = 4
}

export interface IGame {
    creator: IPlayer;
    joiner: IPlayer;
    state: GameState;
    type: GameType;
    sets: number;
    race: number;
}

export class Game implements IGame {
    state: GameState;
    type: GameType;
    creator: IPlayer;
    joiner: IPlayer;
    sets: number;
    race: number;

    constructor() {
        this.state = GameState.GAME_STATE_NONE;
        this.type = GameType.GAME_TYPE_NONE;
    }
}