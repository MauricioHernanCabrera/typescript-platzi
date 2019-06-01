import { Component, OnInit } from '@angular/core';
import { Team } from '../interfaces/team';
import { Countries, SquadNumber, Player } from '../interfaces/player';
import { PlayerService } from '../services/player.service';
import { TeamService } from '../services/team.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-player-dialog',
  templateUrl: './player-dialog.component.html',
  styleUrls: ['./player-dialog.component.scss']
})
export class PlayerDialogComponent implements OnInit {
  private team: Team;
  public countries = Object.keys(Countries).map(key => ({
    label: key,
    key: Countries[key]
  }));
  public squadNumber = Object.keys(SquadNumber)
    .slice(Object.keys(SquadNumber).length / 2)
    .slice(Object.keys(SquadNumber).length / 2)
    .map(key => ({
      label: key,
      key: SquadNumber[key]
    }));

  constructor(
    private playerService: PlayerService,
    private teamService: TeamService
  ) {}

  ngOnInit() {
    this.teamService
      .getTeams()
      .pipe(take(1))
      .subscribe(teams => {
        if (teams.length > 0) {
          this.team = teams[0];
        }
      });
  }

  private newPlayer(playerFormValue): void {
    const $key: string = this.playerService.addPlayer(playerFormValue).key;

    const playerFormValueWithKey: Player = {
      ...playerFormValue,
      $key
    };

    const formattedTeam: Team = {
      ...this.team,
      players: [
        ...(this.team.players ? this.team.players : []),
        playerFormValueWithKey
      ]
    };

    this.teamService.editTeam(formattedTeam);
  }
}
