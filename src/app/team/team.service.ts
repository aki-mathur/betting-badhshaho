import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Team } from '../shared/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  getTeams(){
    return this.http.get<Team>('http://betting-badshaho-api.herokuapp.com/teams');
  }
}
