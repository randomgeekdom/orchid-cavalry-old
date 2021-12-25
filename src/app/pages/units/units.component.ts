import { Component, OnInit } from '@angular/core';
import Unit from 'src/app/model/Unit';
import GameRepository from 'src/app/services/GameRepository';
import { PubsubService, PubsubSubscription } from '@fsms/angular-pubsub';
import { NextTurnMessage } from 'src/app/services/NextTurnMessage';
import { UnitIdentifier } from 'src/app/model/Enums/UnitIdentifier';
import BaseComponent from 'src/app/BaseComponent';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent extends BaseComponent {
  units: Unit[] | undefined;

  constructor(private gameRepository: GameRepository, pubsubService: PubsubService) {
    super(pubsubService);
  }

  Reload() {
    this.units = this.gameRepository.GetGame()?.Units;
  }

  ngOnInit(): void {
    this.Reload();
    this.subscriptions.push(
      this.pubsubService.subscribe({
        messageType: NextTurnMessage.messageType,
        callback: (msg) => this.Reload(),
      })
    );
  }
}
