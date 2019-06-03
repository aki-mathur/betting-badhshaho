export class Match {
    public id:number;
    public name: string;
    public venue: string;
    public date: Date;
    public winner_team_id: Number;
    public winner_team_name: string;
    public teams;

    constructor(id:number,name: string, venue: string, date: Date,winner_team_id: Number,winner_team_name: string,teams){
        this.id = id;
        this.name = name;
        this.venue = venue;
        this.date = date;
        this.winner_team_id =winner_team_id;
        this.winner_team_name = winner_team_name;
        this.teams = teams;
    }
}