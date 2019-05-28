import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Match } from '../shared/match.module';


@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient) { }

  getMatches(){
    return this.http.get<Match>('http://betting-badshaho-api.herokuapp.com/matches');
  }
}
