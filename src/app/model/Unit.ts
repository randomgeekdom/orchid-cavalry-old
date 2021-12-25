import { Guid } from "guid-typescript";
import AssignmentSelection from "./AssignmentSelection";
import { Characteristic } from "./Enums/Characteristic";
import { UnitIdentifier } from "./Enums/UnitIdentifier";

export default class Unit{
    public Name = "";
    public Description = "";
    public Characteristics: Characteristic[] = [];
    public IsComplexUnit = false; 
    public Identifier: UnitIdentifier = UnitIdentifier.Leader;
    public CurrentAssignmenSelection: AssignmentSelection | undefined;
}