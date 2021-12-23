import { DefineMessage, IMessageSchema, IMessage } from '@fsms/angular-pubsub';

@DefineMessage<IMessageSchema>()
export class NextTurnMessage implements IMessage {
  static messageType = 'Next Turn';
  messageType = NextTurnMessage.messageType;
  constructor(public payload?: string) {}
}