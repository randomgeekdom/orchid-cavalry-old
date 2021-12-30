import { Component, OnInit } from '@angular/core';
import { PubsubService } from '@fsms/angular-pubsub';
import BaseComponent from 'src/app/BaseComponent';
import GameRepository from 'src/app/services/GameRepository';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss']
})
export default class WorldComponent extends BaseComponent {

  constructor(pubsubService: PubsubService, gameRepository: GameRepository) {
    super(pubsubService, gameRepository);
  }
}
