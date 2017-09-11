import { firebase } from "../../firebase";

export interface IInvite {
    $key?: string;
    invitedBy: string;
    timestamp: any;
}

export class Invite {
    $key?: string;
    invitedBy: string;
    timestamp: any;
    constructor(invitedBy: string) {
        this.invitedBy = invitedBy;
    }
}
