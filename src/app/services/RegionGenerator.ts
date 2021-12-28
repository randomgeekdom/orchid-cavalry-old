import { Injectable } from "@angular/core";
import Region from "../model/Region";
import BiomeService from "./RandomService";
import RandomService from "./RandomService";
import NameGenerator from "./NameGenerator";
import Faction from "../model/Faction";
import FactionGenerator from "./FactionGenerator";
import Game from "../model/Game";
import GameRepository from "./GameRepository";


@Injectable({
    // declares that this service should be created
    // by the root application injector.
    providedIn: 'root',
  })
export default class RegionGenerator{
    constructor(private randomService: RandomService, private nameGenerator: NameGenerator, private factionGenerator: FactionGenerator){}

    public Generate(game: Game): Region {
        var region = new Region();
        //region.rulingFaction Generate Faction
        region.type = <string>this.randomService.GetRandomElement(this.nameGenerator.regionTypeSuffixDictionary.map(x=>x.regionType));
        region.name = this.nameGenerator.GenerateRegionName(region.type);

        for(let i =0; i<this.randomService.GetRandomInt(1, 10); i++){
            region.municipalities.push(this.nameGenerator.GenerateMunicipalName());
        }

        var factionIndex = this.randomService.GetRandomInt(0, game.Factions.length+15); //What index to pull faction from. 
        var faction: Faction;
        if(factionIndex > game.Factions.length-1){
            faction = this.factionGenerator.Generate();
            game.Factions.push(faction);
        }
        else{
            faction = game.Factions[factionIndex];
        }

        region.rulingFactionKey = faction.key;

        game.Regions.push(region);

        return region;
    }


}