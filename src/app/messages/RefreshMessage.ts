import { DefineMessage, IMessageSchema, IMessage } from '@fsms/angular-pubsub';

@DefineMessage<IMessageSchema>()
export class RefreshMessage implements IMessage {
  static messageType = 'Next Turn';
  messageType = RefreshMessage.messageType;
  constructor(public payload?: string) {}
}