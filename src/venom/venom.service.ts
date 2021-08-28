import { Injectable } from '@nestjs/common';
import { create } from 'venom-bot';

@Injectable()
export class VenomService {
  private start(client) {
    client.onMessage((message) => {
      if (message.body === 'Hi' && message.isGroupMsg === false) {
        client
          .sendText(message.from, 'Welcome Venom 🕷')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      }
    });
  }

  async createSession(session: string, base64Cb) {
    return create(session, base64Cb, undefined, {
      logQR: false,
    }).then(this.start);
  }
}
