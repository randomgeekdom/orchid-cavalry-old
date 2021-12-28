import { Guid } from "guid-typescript";

export default class Region{
    name = "";
    type = "";
    rulingFactionKey = Guid.createEmpty();
    municipalities: string[] = [];
}