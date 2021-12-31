import { Injectable } from "@angular/core";

@Injectable({
    // declares that this service should be created
    // by the root application injector.
    providedIn: 'root',
  })
export default class BiomeService{
    DiceRoll(numberOfDice: number, numberOfSides: number): number {
        var value = 0;
        for(let i=0;i<numberOfDice; i++){
            value+=this.GetRandomInt(1, numberOfDice+1);
        }

        return value;
    }

    GetRandomElement<T>(array: T[]):T | undefined
    {
        if(!array || array.length==0){
            return undefined;
        }

        return array[this.GetRandomInt(0, array.length)];
    }

    GetRandomInt(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      }

      GetRandomBool(): boolean{
          return this.GetRandomInt(0,2) %2 == 0;
      }
}