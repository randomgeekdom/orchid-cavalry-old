import { Component } from '@angular/core';
import Assignment from 'src/app/model/Assignment';
import GameRepository from 'src/app/services/GameRepository';
import BaseComponent from 'src/app/BaseComponent';
import Unit from 'src/app/model/Unit';
import { PubsubService } from '@fsms/angular-pubsub';
import AssignmentSelection from '../../model/AssignmentSelection';
import AssignmentOption from 'src/app/model/AssignmentOption';
import { AssignmentStatus } from 'src/app/model/Enums/AssignmentStatus';
import Game from 'src/app/model/Game';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export default class AssignmentsComponent extends BaseComponent {
  game: Game | undefined;
  selectedAssignment: AssignmentSelection | undefined;

  constructor(private gameRepository: GameRepository, pubsubService: PubsubService) {
    super(pubsubService);
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
    debugger;
    unit.CurrentAssignmentSelection = this.selectedAssignment;
    var assignment = this.game?.Assignments?.find(x=>x.Key == this.selectedAssignment?.assignmentKey);
    if(!!assignment){
      assignment.Status = AssignmentStatus.InProgress;
    }
    this.selectedAssignment = undefined;

    if(!!this.game){
      this.gameRepository.SaveGame(this.game);
    }
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
