import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { PlayerService} from '../player.service';
import "materialize-css";
import "angular2-materialize";

@Component({
  selector: 'player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css'],
  providers: [PlayerService]
})
export class PlayerCreateComponent implements OnInit {
  players: FirebaseListObservable<any[]>;
  currentPlayer: Player;
  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();

  }

  playerCreate(name: string, race: string) {
    var  newPlayer: Player = new Player(name, race)
    this.players.push(newPlayer)
    this.currentPlayer = newPlayer;
  }

}
