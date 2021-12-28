import { Injectable } from "@angular/core";

import RandomService from "./RandomService";
import { generateSlug } from "random-word-slugs";

@Injectable({
    // declares that this service should be created
    // by the root application injector.
    providedIn: 'root',
})
export default class NameGenerator {
    constructor(private randomService: RandomService) { }

    public regionTypeSuffixDictionary =
        [
            {
                regionType: "Desert",
                names: ["Desert", "Dunes", "Sands"]
            },
            {
                regionType: "Coast",
                names: ["Coast", "Shore", "Beach"]
            },
            {
                regionType: "Forest",
                names: ["Forest", "Rainforest", "Jungle", "Wood", "Woods", "Woodlands"]
            },
            {
                regionType: "Island",
                names: ["Island", "Islands", "Isle", "Isles", "Archipelago", "Atoll"]
            },
            {
                regionType: "Mountains",
                names: ["Mountains", "Range"]
            },
            {
                regionType: "Plains",
                names: ["Grassland", "Grasslands", "Savannah", "Plains", "Fields"]
            },
            {
                regionType: "Swamp",
                names: ["Swamps", "Swamplands", "Marshes", "Marshlands", "Bog"]
            },
            {
                regionType: "Tundra",
                names: ["Icefields", "Snowfields", "Tundra", "Frostlands"]
            }
        ];

    public municipalNamePrefixes = [
        "Saint",
        "Fort",
        "New",
        "Lost",
        "Good"
    ];

    public municipalNameSuffixes = [
        "ton",
        "ville",
        "town",
        " Town",
        "polis",
        " City",
        "burg",
        " Village"
    ];

    public factionNames = [
        "Alliance",
        "Battalion",
        "Brigade",
        "Clan",
        "Compatriots",
        "Comrades",
        "Committee",
        "Crusaders",
        "Division",
        "Group",
        "Infantry",
        "Knights",
        "Party",
        "People",
        "Order",
        "Patriots",
        "Regiment",
        "Warriors",
        "Zealots"
    ];

    GenerateRegionName(regionType: string): string {
        var regionTypeNames = <string[]>this.regionTypeSuffixDictionary.find(x => x.regionType == regionType)?.names;

        const slug = this.GetSlug();
        return `The ${slug} ${<string>this.randomService.GetRandomElement(regionTypeNames)}`;
    }

    GenerateMunicipalName(): string {
        var usePrefix = this.randomService.DiceRoll(1, 20) >= 15;
        var useSuffix = this.randomService.DiceRoll(1, 10) >= 8;

        var prefix = usePrefix ? this.randomService.GetRandomElement(this.municipalNamePrefixes) + " " : "";
        var suffix = useSuffix ? this.randomService.GetRandomElement(this.municipalNameSuffixes) : "";

        return prefix + this.GetSlug() + suffix;
    }

    GenerateFactionName(): string {
        const slug = this.GetSlug();
        return this.randomService.GetRandomInt(0,2)==0 
            ?   `The ${slug} ${<string>this.randomService.GetRandomElement(this.factionNames)}`
            :   `The ${<string>this.randomService.GetRandomElement(this.factionNames)} of ${slug}`;
    }

    GetSlug(): string {
        return generateSlug(1, { format: "title" });
    }
}