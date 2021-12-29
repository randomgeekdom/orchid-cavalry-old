import { Guid } from "guid-typescript";

export default class Region{
    name = "";
    type = "";
    rulingFactionKey =  Guid.create().toString();
    municipalities: string[] = [];
}