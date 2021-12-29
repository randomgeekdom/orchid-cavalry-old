
import { Component, OnInit } from '@angular/core';
import { PubsubService, PubsubSubscription } from '@fsms/angular-pubsub';
import { RefreshMessage } from './messages/RefreshMessage';

@Component({
  template: ''
})
export default abstract class BaseComponent implements OnInit {
  protected subscriptions: PubsubSubscription[] = [];
  abstract Reload(): void;

  refresh() {
    this.pubsubService.publish(
      new RefreshMessage()
    );
  }

  constructor(protected pubsubService: PubsubService) {
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