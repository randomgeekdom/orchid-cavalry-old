import { Injectable } from '@angular/core';
import Assignment from '../model/Assignment';
import { AssignmentStatus } from '../model/Enums/AssignmentStatus';
import { AssignmentType } from '../model/Enums/AssignmentType';
import Game from '../model/Game';

@Injectable({
  // declares that this service should be created
  // by the root application injector.
  providedIn: 'root',
})
export default class AssignmentGenerator {
  public GetNewAssignments(game: Game): void {
    debugger;
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
    explorationAssignment.Description = "Explore the world and see what's out there.";
    explorationAssignment.Type = AssignmentType.Exploration;
    return explorationAssignment;
  }
}