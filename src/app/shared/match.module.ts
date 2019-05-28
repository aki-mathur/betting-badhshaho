export class Match {
    public name: string;
    public venue: string;
    public date: Date;

    constructor(name: string, venue: string, date: Date){
        this.name = name;
        this.venue = venue;
        this.date = date;
    }
}