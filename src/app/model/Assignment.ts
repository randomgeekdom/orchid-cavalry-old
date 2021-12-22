import { AssignmentStatus } from "./Enums/AssignmentStatus";
import { AssignmentType } from "./Enums/AssignmentType";

export default class Assignment{
    public Icon = "building";
    public Title = "";
    public Type: AssignmentType = AssignmentType.Unique;
    public Turns = 1;
    public Expiration = -1;
    public InProgress = false;
    public Status: AssignmentStatus = AssignmentStatus.Open;
}