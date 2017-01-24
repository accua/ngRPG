import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { Router } from '@angular/router';
import "materialize-css";
import "angular2-materialize";

@Component({
  selector: 'player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {
  players: Player[] = []
  currentPlayer: Player;
  constructor() { }

  ngOnInit() {
  }

  playerCreate(name: string, race: string) {
    var  newPlayer: Player = new Player(name, race)
    this.players.push(newPlayer)
    this.currentPlayer = newPlayer;
  }

}
