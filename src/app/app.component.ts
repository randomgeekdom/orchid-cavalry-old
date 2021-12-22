import { Component } from '@angular/core';
import Game from 'src/app/model/Game';
import GameRepository from './services/GameRepository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string  = 'orchid-cavalry';
  isLoaded:boolean = false;
  game: Game | undefined;
  gameRepository: GameRepository;

  constructor(gameRepository: GameRepository){
    this.gameRepository = gameRepository;
  }

  ngOnInit() {
    if(!!this.gameRepository.GetGame()){
        this.isLoaded = true;
    }
  }

  StartGame(){
    var result = prompt("What is your character's first name?");

    if(!result?.trim()){
      return;
    }

    this.game = new Game();
    this.game.CharacterName = result;

    this.gameRepository.SaveGame(this.game);

    this.isLoaded=true;
  }
}
