import { Guid } from "guid-typescript";
import { AssignmentOptionType } from "./Enums/AssignmentOptionType";

export default class AssignmentSelection{

    constructor(public assignmentKey: string, public optionType: AssignmentOptionType){}
}