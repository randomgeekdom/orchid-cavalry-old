import { Injectable } from "@angular/core";
import Faction from "../model/Faction";
import NameGenerator from "./NameGenerator";
import RandomService from "./RandomService";

@Injectable({
    // declares that this service should be created
    // by the root application injector.
    providedIn: 'root',
  })
export default class FactionGenerator{
    constructor(private randomService: RandomService, private nameGenerator: NameGenerator){
    }

    Generate(): Faction{
        var faction = new Faction();

        faction.influence = this.randomService.GetRandomInt(0,51);
        faction.name = this.nameGenerator.GenerateFactionName();

        return faction;
    }

}