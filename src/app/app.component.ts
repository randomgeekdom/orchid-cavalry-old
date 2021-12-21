import { Component } from '@angular/core';
import Game from 'src/app/model/Game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string  = 'orchid-cavalry';
  isLoaded:boolean = false;
  game: Game | undefined;

  ngOnInit() {
    if(!!localStorage.getItem("game")){
        this.isLoaded = true;
    }
  }

  StartGame(){
    var result = prompt("What is your character's first name?");

    if(!result){
      return;
    }

    this.game = new Game();
    this.game.CharacterName = result;

    localStorage.setItem("game", JSON.stringify(this.game));

    this.isLoaded=true;
  }
}
