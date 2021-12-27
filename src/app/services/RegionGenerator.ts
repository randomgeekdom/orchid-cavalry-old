import { Injectable } from "@angular/core";
import Region from "../model/Region";
import BiomeService from "./RandomService";
import RandomService from "./RandomService";
import NameGenerator from "./NameGenerator";


@Injectable({
    // declares that this service should be created
    // by the root application injector.
    providedIn: 'root',
  })
export default class RegionGenerator{
    constructor(private randomService: RandomService, private nameGenerator: NameGenerator){}

    public Generate(): Region{
        var region = new Region();
        //region.rulingFaction Generate Faction
        region.type = <string>this.randomService.GetRandomElement(this.nameGenerator.regionTypeSuffixDictionary.map(x=>x.regionType));
        region.name = this.nameGenerator.GenerateRegionName(region.type);

        for(let i =0; i<this.randomService.GetRandomInt(1, 10); i++){
            region.municipalities.push(this.nameGenerator.GenerateMunicipalName());
        }

        return region;
    }


}