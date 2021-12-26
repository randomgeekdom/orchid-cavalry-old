import { Biome } from "./Enums/Biome";

export default class Region{
    name = "";
    biome = Biome.Desert;
    rulingFaction = "";
    municipalities: string[] = [];
}