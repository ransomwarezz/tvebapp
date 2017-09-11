import { firebase } from "../../firebase";

export interface IPlayer {
    $key?: string;
    uid: string;
    name: string;
    photoURL: string;
    createdAt: Object;
    league: string;
  }
  
  export class Player implements IPlayer {
    createdAt = firebase.database.ServerValue.TIMESTAMP;
    name: string;
    photoURL: string;
    league: string;
    uid: string;

    constructor(name: string) {
      this.name = name;
    }
  }
  
