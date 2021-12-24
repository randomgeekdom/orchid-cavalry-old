import { Component, OnInit } from '@angular/core';
import Unit from 'src/app/model/Unit';
import GameRepository from 'src/app/services/GameRepository';
import { PubsubService, PubsubSubscription } from '@fsms/angular-pubsub';
import { NextTurnMessage } from 'src/app/services/NextTurnMessage';
import { UnitIdentifier } from 'src/app/model/Enums/UnitIdentifier';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {
  units: Unit[] | undefined;
  subscriptions: PubsubSubscription[] = [];

  constructor(private gameRepository: GameRepository, private pubsubService: PubsubService) {
  }

  ReloadUnits() {
    this.units = this.gameRepository.GetGame()?.Units;
  }

  GetIcon(unit: Unit){
    switch(unit.Identifier){
      case UnitIdentifier.Complex:
        return "users";
        case UnitIdentifier.Leader:
          return "crown";
          default:
            return "user";
    }
  }

  ngOnInit(): void {
    this.ReloadUnits();
    this.subscriptions.push(
      this.pubsubService.subscribe({
        messageType: NextTurnMessage.messageType,
        callback: (msg) => this.ReloadUnits(),
      })
    );
  }
}
