import { Guid } from "guid-typescript";
import AssignmentOption from "./AssignmentOption";
import { AssignmentStatus } from "./Enums/AssignmentStatus";

export default class Assignment{
    public readonly Key: Guid; 
    public Icon = "building";
    public Title = "";
    public Turns = 1;
    public Expiration = -1;
    public Status: AssignmentStatus = AssignmentStatus.Open;
    public Description = "";
    public Options: AssignmentOption[] = [];

    constructor(){
        this.Key = Guid.create();
    }


}