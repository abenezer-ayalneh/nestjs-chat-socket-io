import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets'

@WebSocketGateway({ cors: { origin: '*' } })
export class ChatGateway {
  @SubscribeMessage('chat')
  handleEvent(@MessageBody() data: string): string {
    console.log(data)
    return data
  }
}
