import { Injectable } from "@angular/core";
import { Guid } from "guid-typescript";
import Assignment from "../model/Assignment";
import { AssignmentType } from "../model/Enums/AssignmentType";
import Game from "../model/Game";
import Unit from "../model/Unit";
import RegionGenerator from "./RegionGenerator";

@Injectable({
    // declares that this service should be created
    // by the root application injector.
    providedIn: 'root',
  })
export default class AssignmentResolver{
    constructor(private regionGenerator: RegionGenerator){}
    Resolve(game: Game, assignment: Assignment){
        var unit = <Unit>game.Units.find(x=>assignment.Key == x.CurrentAssignmentSelection?.assignmentKey);
        switch(assignment.Type){
            case AssignmentType.GeneralExploration:
                unit.CurrentAssignmentSelection = undefined;
                var newRegion = this.regionGenerator.Generate(game);
                game.Alerts.push(`${unit.Name} has discovered a region called ${newRegion.name}.`);
            break;
        }
    }
}