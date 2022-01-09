import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import Game from "../model/Game";

@Injectable({
    // declares that this service should be created
    // by the root application injector.
    providedIn: 'root',
  })
export default class GameRepository{
    private getGameDataFromLocalStorage():string | null{
        return localStorage.getItem("game");
    }

    DownloadGame(): void {
        var blob = new Blob([this.getGameDataFromLocalStorage() || ""] , {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(blob, "orchid-cavalry-save.txt");
    }
    GetGame(): Game | undefined{
        var gameData = this.getGameDataFromLocalStorage();
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