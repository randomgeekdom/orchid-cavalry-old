import { MissionType } from "./Enums/MissionType";

export default class Mission{
    public Icon = "building";
    public Title = "";
    public MissionType: MissionType = MissionType.Unique;
    public Turns = 1;
    public Expiration = -1;
}