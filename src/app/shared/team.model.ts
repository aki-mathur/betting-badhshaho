export class Team {
    public name: string;
    public short_name: string;
    public captain: string;

    constructor(name: string, short_name: string, captain: string){
        this.name = name;
        this.short_name = short_name;
        this.captain = captain;
    }

}