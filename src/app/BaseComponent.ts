
import { Component, OnInit } from '@angular/core';
import { PubsubService, PubsubSubscription } from '@fsms/angular-pubsub';
import { RefreshMessage } from './messages/RefreshMessage';
import Game from './model/Game';
import GameRepository from './services/GameRepository';

@Component({
  template: ''
})
export default abstract class BaseComponent implements OnInit {
  protected subscriptions: PubsubSubscription[] = [];
  public game: Game | undefined;

  Reload(): void {
    this.game = this.gameRepository.GetGame();
  }

  refresh() {
    this.pubsubService.publish(
      new RefreshMessage()
    );
  }

  save(){
    this.gameRepository.SaveGame(<Game>this.game);
    this.refresh();
  }

  constructor(protected pubsubService: PubsubService, protected gameRepository: GameRepository) {
  }

  ngOnInit(): void {
    this.Reload();
    this.subscriptions.push(
      this.pubsubService.subscribe({
        messageType: RefreshMessage.messageType,
        callback: (msg) => this.Reload(),
      })
    );
  }

}