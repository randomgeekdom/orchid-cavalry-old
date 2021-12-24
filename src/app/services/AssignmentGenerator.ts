import { Injectable } from '@angular/core';
import Assignment from '../model/Assignment';
import AssignmentOption from '../model/AssignmentOption';
import { AssignmentStatus } from '../model/Enums/AssignmentStatus';
import { Characteristic } from '../model/Enums/Characteristic';
import Game from '../model/Game';

@Injectable({
  // declares that this service should be created
  // by the root application injector.
  providedIn: 'root',
})
export default class AssignmentGenerator {
  public GetNewAssignments(game: Game): void {

    var currentAssignments = game.Assignments;
    currentAssignments.forEach(a => {
      a.Expiration--;
    });

    var returnAssignments = currentAssignments.filter(x => x.Expiration == 0 && x.Status == AssignmentStatus.Open);

    if (returnAssignments.length == 0) {
      returnAssignments.push(this.GetExplorationAssignment());
    }

    game.Assignments = returnAssignments;
  }

  public GetExplorationAssignment(): Assignment {
    var explorationAssignment = new Assignment();
    explorationAssignment.Icon = "map";
    explorationAssignment.Title = "General Exploration";
    explorationAssignment.Description = "Explore the world and discover new locations.";

    var option = new AssignmentOption();
    option.Characteristic = Characteristic.Exploration;
    option.Text = "Explore";

    explorationAssignment.Options = [
      option      
    ];
    return explorationAssignment;
  }
}