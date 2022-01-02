import { Injectable } from "@angular/core";

import RandomService from "./RandomService";
import { generateSlug } from "random-word-slugs";
import { uniqueNamesGenerator, Config, adjectives, colors, animals } from 'unique-names-generator';

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
                icon: "fa fa-sun",
                names: ["Desert", "Dunes", "Sands"]
            },
            {
                regionType: "Coast",
                icon: "fa fa-water",
                names: ["Coast", "Shore", "Beach", "Peninsula"]
            },
            {
                regionType: "Forest",
                icon: "fa fa-tree",
                names: ["Forest", "Rainforest", "Jungle", "Wood", "Woods", "Woodlands"]
            },
            {
                regionType: "Island",
                icon: "fa fa-umbrella-beach",
                names: ["Island", "Islands", "Isle", "Isles", "Archipelago", "Atoll"]
            },
            {
                regionType: "Mountains",
                icon: "fa fa-mountain",
                names: ["Mountains", "Range"]
            },
            {
                regionType: "Plains",
                icon: "fa fa-wind",
                names: ["Grassland", "Grasslands", "Savannah", "Plains", "Fields"]
            },
            {
                regionType: "Swamp",
                icon: "fa fa-frog",
                names: ["Swamps", "Swamplands", "Marshes", "Marshlands", "Bog"]
            },
            {
                regionType: "Tundra",
                icon: "fa fa-icicles",
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
        "Syndicate",
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
        var useSuffix = !usePrefix || this.randomService.DiceRoll(1, 10) >= 8;

        var prefix = usePrefix ? (this.randomService.GetRandomElement(this.municipalNamePrefixes) + " ") : "";
        var suffix = useSuffix ? this.randomService.GetRandomElement(this.municipalNameSuffixes) : "";

        return prefix + this.GetSlug() + suffix;

    }

    GenerateFactionName(): string {
        const slug = this.GetSlug();
        return this.randomService.GetRandomInt(0, 2) == 0
            ? `The ${slug} ${<string>this.randomService.GetRandomElement(this.factionNames)}`
            : `The ${<string>this.randomService.GetRandomElement(this.factionNames)} of ${slug}`;
    }

    GetSlug(): string {
        debugger;
        var dict: string[] = [];
        switch (this.randomService.GetRandomInt(0, 4)) {
            case 0:
                return generateSlug(1, { format: "title" });
            case 1:
                dict = colors;
                break;
            case 2:
                dict = adjectives;
                break;
            case 3:
                dict = animals;
                break;
        }

        return uniqueNamesGenerator({
            dictionaries: [dict],
            length: 1,
            style: "capital"
        });
    }
}