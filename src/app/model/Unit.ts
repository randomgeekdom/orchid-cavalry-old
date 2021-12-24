import { Characteristic } from "./Enums/Characteristic";

export default class Unit{
    public Name = "";
    public Description = "";
    public Characteristics: Characteristic[] = [];
    public IsComplexUnit = false; 

}