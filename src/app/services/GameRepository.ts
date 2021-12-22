import { Injectable } from '@angular/core';
import Game from "../model/Game";

@Injectable({
    // declares that this service should be created
    // by the root application injector.
    providedIn: 'root',
  })
export default class GameRepository{
    GetGame(): Game | undefined{
        var gameData = localStorage.getItem("game");
        if(!gameData){
            return undefined;
        }

        return JSON.parse(gameData);
    }

    SaveGame(game: Game): void{
        var gameString = JSON.stringify(game);
        localStorage.setItem("game", gameString);
    }
}