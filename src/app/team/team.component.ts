import { Component, OnInit } from '@angular/core';
import { TeamService } from './team.service';
import { Team } from '../shared/team.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teams: Team;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getTeams().subscribe(data => {
      this.teams = data;
    })
  }

}
