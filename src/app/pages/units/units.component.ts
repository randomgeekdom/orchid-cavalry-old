import { Component, OnInit } from '@angular/core';
import Unit from 'src/app/model/Unit';
import GameRepository from 'src/app/services/GameRepository';
import { PubsubService } from '@fsms/angular-pubsub';
import BaseComponent from 'src/app/BaseComponent';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent extends BaseComponent {
  units: Unit[] | undefined;

  constructor(pubsubService: PubsubService, gameRepository: GameRepository) {
    super(pubsubService, gameRepository);
  }

  Reload() {
    this.units = this.gameRepository.GetGame()?.Units;
  }
}
