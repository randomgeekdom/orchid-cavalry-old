import { AssignmentOptionType } from "./Enums/AssignmentOptionType";
import { Characteristic } from "./Enums/Characteristic";

export default class AssignmentOption{
    public Text = "";
    public Characteristic = Characteristic.None;
    public Type = AssignmentOptionType.None;
}