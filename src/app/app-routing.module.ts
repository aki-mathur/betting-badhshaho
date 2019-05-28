import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamComponent } from './team/team.component';
import { MatchComponent } from './match/match.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'teams', component: TeamComponent},
  {path: 'matches', component: MatchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
