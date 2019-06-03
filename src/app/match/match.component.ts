import { Component, OnInit } from '@angular/core';
import { MatchService } from './match.service';
import { Match } from '../shared/match.module';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  matches: Match;

  constructor(private matchService: MatchService) { }

  ngOnInit() {
    this.matchService.getMatches().subscribe(data => {
      this.matches = data;
    })
  }

  setWinner(match: Match,index: number){
    console.log(index)
    // this.matchService.setWinner(match).subscribe(data => {
    //   this.matches[index] = data;
    // })
  }

}
