import { firebase } from "../../firebase";

export interface IPlayer {
    // $key?: string;
    name: string;
    photoURL: string;
    status: string;
    // createdAt: Object;
  }

  export class Player implements IPlayer {
    status = 'online';
    // createdAt = firebase.database.ServerValue.TIMESTAMP;
    name: string;
    photoURL: string;

    constructor(name: string) {
      this.name = name;
    }
  }
  
