import { firebase } from "../../firebase";

export interface IPlayer {
    $key?: string;
    createdAt: Object;
    name: string;
    league: string;
    photoURL: string;
    status: string;
    uid: string;
  }
  
  export class Player implements IPlayer {
    createdAt = firebase.database.ServerValue.TIMESTAMP;
    name: string;
    league: string;
    photoURL: string;
    status: string;
    uid: string;

    constructor(name: string) {
      this.name = name;
    }
  }
  
