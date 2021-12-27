import { Injectable } from "@angular/core";
import { Biome } from "../model/Enums/Biome";
import RandomService from "./RandomService";

@Injectable({
    // declares that this service should be created
    // by the root application injector.
    providedIn: 'root',
})
export default class RegionNameGenerator {
    constructor(private randomService: RandomService) { }

    public biomeSuffixDictionary =
        [
            {
                biome: Biome.Desert,
                names: ["Desert", "Dunes", "Sands"]
            },
            {
                biome: Biome.Coast,
                names: ["Coast", "Shore", "Beach"]
            },
            {
                biome: Biome.Forest,
                names: ["Forest", "Rainforest", "Jungle", "Wood", "Woods"]
            },
            {
                biome: Biome.Island,
                names: ["Island", "Islands", "Isle", "Isles", "Archipelago", "Atoll"]
            },
            {
                biome: Biome.Mountains,
                names: ["Mountains", "Mountain", "Ridge", "Range"]
            },
            {
                biome: Biome.Plains,
                names: ["Grassland", "Grasslands", "Savannah", "Plains"]
            },
            {
                biome: Biome.Swamp,
                names: ["Swamp", "Swampland", "Swamplands", "Marsh", "Marshes", "Marshland", "Marshlands", "Bog"]
            },
            {
                biome: Biome.Tundra,
                names: ["Icefield", "Snowfield", "Snowfields", "Tundra", "Frostlands"]
            }
        ];

    GenerateName(biome: Biome): string {
        var biomeNames = <string[]> this.biomeSuffixDictionary.find(x => x.biome==biome)?.names;
        return <string>this.randomService.GetRandomElement(biomeNames);
    }
}