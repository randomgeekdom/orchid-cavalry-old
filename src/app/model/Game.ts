import Assignment from "./Assignment";
import Faction from "./Faction";
import Region from "./Region";
import Unit from "./Unit";

export default class Game {
    public Alerts: string[] = [];
    public Assignments: Assignment[] = [];
    public Factions: Faction[] = [];
    public History: string[] = [];
    public Regions: Region[] = [];
    public Units: Unit[] = [];
}