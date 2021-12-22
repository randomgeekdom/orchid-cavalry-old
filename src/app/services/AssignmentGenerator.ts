import { Injectable } from '@angular/core';
import Assignment from '../model/Assignment';
import { AssignmentStatus } from '../model/Enums/AssignmentStatus';

@Injectable({
    // declares that this service should be created
    // by the root application injector.
    providedIn: 'root',
  })
export default class AssignmentGenerator{
  public GetNewAssignments(currentAssignments: Assignment[]): Assignment[]{
    currentAssignments.forEach(a => {
      a.Expiration--;
    });

    var returnAssignments = currentAssignments.filter(x=>x.Expiration==0 && x.Status==AssignmentStatus.Open);

    //Generate Assignments

    return returnAssignments;
  }
}