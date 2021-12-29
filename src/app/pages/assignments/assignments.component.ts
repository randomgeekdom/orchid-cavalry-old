import { Component } from '@angular/core';
import Assignment from 'src/app/model/Assignment';
import GameRepository from 'src/app/services/GameRepository';
import BaseComponent from 'src/app/BaseComponent';
import Unit from 'src/app/model/Unit';
import { PubsubService } from '@fsms/angular-pubsub';
import AssignmentSelection from '../../model/AssignmentSelection';
import AssignmentOption from 'src/app/model/AssignmentOption';
import { AssignmentStatus } from 'src/app/model/Enums/AssignmentStatus';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export default class AssignmentsComponent extends BaseComponent {
  selectedAssignment: AssignmentSelection | undefined;

  constructor(pubsubService: PubsubService, gameRepository: GameRepository) {
    super(pubsubService, gameRepository);
  }

  Reload(){
    this.game = this.gameRepository.GetGame();
  }

  GetExpirationText(assignment: Assignment): string{
    if(assignment.Expiration < 0){
        return "No Expiration";
    }
    
    return `Expires in ${assignment.Expiration} ${assignment.Turns == 1 ? "turn" : "turns"}`; 
}

GetStatusText(status: AssignmentStatus): string{
  if(status == AssignmentStatus.InProgress){
    return "In-Progress";
  }
  return AssignmentStatus[status];
}


  SelectAssignment(assignment: Assignment, option: AssignmentOption){
    this.selectedAssignment = new AssignmentSelection(assignment.Key, option.Type);
  }

  CancelAssignment(){
    this.selectedAssignment = undefined;
  }

  AssignUnit(unit: Unit){
    unit.CurrentAssignmentSelection = this.selectedAssignment;
    var assignment = this.game?.Assignments?.find(x=>x.Key == this.selectedAssignment?.assignmentKey);
    if(!!assignment){
      assignment.Status = AssignmentStatus.InProgress;
    }
    this.selectedAssignment = undefined;

    this.save();
  }

  IsSelectingUnit(): boolean{
    return !!this.selectedAssignment;
  }

  IsAssignmentOpen(assignment: Assignment): boolean{
    return assignment.Status == AssignmentStatus.Open;
  }

  GetOpenUnits(): Unit[] {
    return this.game?.Units?.filter(x=>!x.CurrentAssignmentSelection) || [];
  }

}
