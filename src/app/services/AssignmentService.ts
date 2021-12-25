import { Injectable } from '@angular/core';
import { AssignmentStatus } from '../model/Enums/AssignmentStatus';
import { AssignmentType } from '../model/Enums/AssignmentType';
import Game from '../model/Game';
import AssignmentGenerator from './AssignmentGenerator';

@Injectable({
  // declares that this service should be created
  // by the root application injector.
  providedIn: 'root',
})
export default class AssignmentService {
  constructor(private assignmentGenerator: AssignmentGenerator){

  }

  public GetNewAssignments(game: Game): void {

    var currentAssignments = game.Assignments;
    currentAssignments.forEach(a => {
      a.Expiration--;
    });

    //Code for in progress assignments that get to 0.  Create an assignment resolver service

    var returnAssignments = currentAssignments.filter(x => x.Expiration == 0 && x.Status == AssignmentStatus.Open);

    if (!returnAssignments.find(x=>x.Type == AssignmentType.Exploration)) {
      returnAssignments.push(this.assignmentGenerator.GetExplorationAssignment());
    }

    game.Assignments = returnAssignments;
  }

  
}