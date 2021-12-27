import { Injectable } from "@angular/core";
import { Biome } from "../model/Enums/Biome";
import Region from "../model/Region";
import BiomeService from "./RandomService";
import RandomService from "./RandomService";
import RegionNameGenerator from "./RegionNameGenerator";


@Injectable({
    // declares that this service should be created
    // by the root application injector.
    providedIn: 'root',
  })
export default class RegionGenerator{
    constructor(private randomService: RandomService, private regionNameGenerator: RegionNameGenerator){}

    public Generate(): Region{
        var region = new Region();
        region.biome = <Biome>this.randomService.GetRandomElement(Object.values(Biome));
        //region.municipalities Generate Names
        //region.rulingFaction Generate Faction
        region.name = this.regionNameGenerator.GenerateName(region.biome);
        return region;
    }
}