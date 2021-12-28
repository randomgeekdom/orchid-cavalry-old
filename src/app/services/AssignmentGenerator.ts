import { Injectable } from "@angular/core";
import Assignment from "../model/Assignment";
import AssignmentOption from "../model/AssignmentOption";
import { AssignmentType } from "../model/Enums/AssignmentType";
import { Characteristic } from "../model/Enums/Characteristic";

@Injectable({
    // declares that this service should be created
    // by the root application injector.
    providedIn: 'root',
  })
export default class AssignmentGenerator{
    public GetExplorationAssignment(): Assignment {
        var explorationAssignment = new Assignment();
        explorationAssignment.Icon = "map";
        explorationAssignment.Title = "General Exploration";
        explorationAssignment.Description = "Explore the world and discover new locations.";
        explorationAssignment.Type = AssignmentType.GeneralExploration;
        explorationAssignment.Turns = 3;

        var option = new AssignmentOption();
        option.Characteristic = Characteristic.Exploration;
        option.Text = "Explore";
    
        explorationAssignment.Options = [
          option      
        ];
        return explorationAssignment;
      }
}