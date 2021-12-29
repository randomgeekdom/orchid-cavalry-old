import { Component } from '@angular/core';
import Game from 'src/app/model/Game';
import AssignmentService from './services/AssignmentService';
import GameRepository from './services/GameRepository';
import { PubsubService } from '@fsms/angular-pubsub';
import Unit from './model/Unit';
import { Router } from '@angular/router';
import NameGenerator from './services/NameGenerator';
import { BaseGameRefreshMessage } from './messages/BaseGameRefreshMessage';
import { NextTurnMessage } from './messages/NextTurnMessage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'orchid-cavalry';
  game: Game | undefined;
  subscriptions: any;

  constructor(
    private gameRepository: GameRepository, 
    private assignmentService: AssignmentService, 
    private pubsubService: PubsubService, 
    public router: Router,
     private nameGenerator: NameGenerator) {
  }

  public get isLoaded() {
    return !!this.game;
  }

  ngOnInit() {
    this.game = this.gameRepository.GetGame();
    this.subscriptions.push(
      this.pubsubService.subscribe({ 
        messageType: BaseGameRefreshMessage.messageType,
        callback: (msg) => this.game=this.gameRepository.GetGame(),
      })
    );
  }
  

  StartGame() {
    var result = prompt("What is your character's first name?");

    if (!result?.trim()) {
      return;
    }

    this.game = new Game();

    var unit = new Unit();
    unit.Name = `${result} Orchid`;
    unit.Description = "Orchid Cavalry Commander";
    this.game.Units.push(unit);

    this.gameRepository.SaveGame(this.game);
  }

  NextTurn() {
    if (!!this.game) {
      this.assignmentService.GetNewAssignments(this.game);
      this.gameRepository.SaveGame(this.game);

      this.pubsubService.publish(
        new NextTurnMessage()
      );
    }
  }

  Generate(){
    console.log(this.nameGenerator.GenerateFactionName());
  }
}
