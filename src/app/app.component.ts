import { Component } from '@angular/core';
import Game from 'src/app/model/Game';
import AssignmentGenerator from './services/AssignmentGenerator';
import GameRepository from './services/GameRepository';
import { PubsubService } from '@fsms/angular-pubsub';
import { NextTurnMessage } from './services/NextTurnMessage';
import Unit from './model/Unit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string  = 'orchid-cavalry';
  game: Game | undefined;

  constructor(
    private gameRepository: GameRepository, private assignmentGenerator: AssignmentGenerator,  private pubsubService: PubsubService, public router:Router){
  }

   public get isLoaded(){
     return !!this.game;
   }

  ngOnInit() {
    this.game = this.gameRepository.GetGame();
  }

  StartGame(){
    var result = prompt("What is your character's first name?");

    if(!result?.trim()){
      return;
    }

    this.game = new Game();
    
    var unit = new Unit();
    unit.Name = `${result} Orchid`;
    unit.Description = "Orchid Cavalry Commander";
    this.game.Units.push(unit);

    this.gameRepository.SaveGame(this.game);
  }

  NextTurn(){
    if(!!this.game){
      this.assignmentGenerator.GetNewAssignments(this.game);
      this.gameRepository.SaveGame(this.game);
      
      this.pubsubService.publish( 
        new NextTurnMessage()
      );
    }
  }
}
