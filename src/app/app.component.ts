import { Component } from '@angular/core';
import Game from 'src/app/model/Game';
import AssignmentService from './services/AssignmentService';
import GameRepository from './services/GameRepository';
import { PubsubService } from '@fsms/angular-pubsub';
import Unit from './model/Unit';
import { Router } from '@angular/router';
import NameGenerator from './services/NameGenerator';
import BaseComponent from './BaseComponent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent {


  title: string = 'orchid-cavalry';
  game: Game | undefined;

  constructor(
    gameRepository: GameRepository,
    private assignmentService: AssignmentService,
    public router: Router,
    private nameGenerator: NameGenerator,
    pubsubService: PubsubService) {
    super(pubsubService, gameRepository);
  }

  

  public get HasStarted() {
    return !!this.game;
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
      this.save();
    }
  }

  Generate() {
    console.log(this.nameGenerator.GenerateFactionName());
  }

  Reset(): void{
    localStorage.removeItem("game");
    window.location.reload();
  }

  get HasAlerts(): boolean{
    return !!this.game && this.game?.Alerts.length>0;
  }

  ClearAlert(alert: string): void{
    debugger;
    this.game?.History.push(alert);
    this.game?.Alerts.splice(this.game.Alerts.indexOf(alert),1);
    this.save();
  }
}
