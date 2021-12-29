import { DefineMessage, IMessageSchema, IMessage } from '@fsms/angular-pubsub';

@DefineMessage<IMessageSchema>()
export class BaseGameRefreshMessage implements IMessage {
  static messageType = 'Base Game Refresh Message';
  messageType = BaseGameRefreshMessage.messageType;
  constructor(public payload?: string) {}
}