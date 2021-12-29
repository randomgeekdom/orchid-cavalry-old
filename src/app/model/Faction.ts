import { Guid } from "guid-typescript";

export default class Faction{
    name = "";
    key = Guid.create().toString();
    influence = 5;
}