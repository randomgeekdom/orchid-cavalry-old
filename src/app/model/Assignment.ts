import { Guid } from "guid-typescript";
import { AssignmentStatus } from "./Enums/AssignmentStatus";
import { AssignmentType } from "./Enums/AssignmentType";

export default class Assignment{
    public readonly Key: Guid; 
    public Icon = "building";
    public Title = "";
    public Type: AssignmentType = AssignmentType.Unique;
    public Turns = 1;
    public Expiration = -1;
    public Status: AssignmentStatus = AssignmentStatus.Open;
    public Description = "";

    constructor(){
        this.Key = Guid.create();
    }


}