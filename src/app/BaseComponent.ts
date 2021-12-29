
import { Component, OnInit } from '@angular/core';
import { PubsubService, PubsubSubscription } from '@fsms/angular-pubsub';
import { NextTurnMessage } from './messages/NextTurnMessage';

@Component({
    template: ''
  })
export default abstract class BaseComponent implements OnInit{
    protected subscriptions: PubsubSubscription[] = [];
    abstract Reload(): void;

    constructor(protected pubsubService: PubsubService){

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