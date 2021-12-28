import { Injectable } from '@angular/core';
import { AssignmentStatus } from '../model/Enums/AssignmentStatus';
import { AssignmentType } from '../model/Enums/AssignmentType';
import Game from '../model/Game';
import AssignmentGenerator from './AssignmentGenerator';
import AssignmentResolver from './AssignmentResolver';

@Injectable({
  // declares that this service should be created
  // by the root application injector.
  providedIn: 'root',
})
export default class AssignmentService {
  constructor(private assignmentGenerator: AssignmentGenerator, private assignmentResolver: AssignmentResolver){

  }

  public GetNewAssignments(game: Game): void {
    debugger;
    var currentAssignments = game.Assignments;
    currentAssignments.forEach(a => {
      a.Expiration--;
    });

    game.Assignments.filter(x=>x.Status==AssignmentStatus.InProgress).forEach(x=>x.Turns--);
    //This section will resolve ended assignments
    var endedAssignments = currentAssignments.filter(x => x.Turns<=0);
    for(let i =0; i<endedAssignments.length; i++){
      this.assignmentResolver.Resolve(game, endedAssignments[i]);
      endedAssignments[i].Status = AssignmentStatus.Complete;
    }

    //Code for setting expired assignments to complete

    var returnAssignments = currentAssignments.filter(x => x.Status!=AssignmentStatus.Complete);

    if (!returnAssignments.find(x=>x.Type == AssignmentType.GeneralExploration) && game.Regions.length < 35) {
      returnAssignments.push(this.assignmentGenerator.GetExplorationAssignment());
    }

    game.Assignments = returnAssignments;
  }

  
}