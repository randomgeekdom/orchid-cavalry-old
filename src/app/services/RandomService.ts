import { Injectable } from "@angular/core";

@Injectable({
    // declares that this service should be created
    // by the root application injector.
    providedIn: 'root',
  })
export default class BiomeService{

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
}