import { Injectable } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly eventEmitter: EventEmitter2
  ) {}

  sendMailTo(mailBody: any) {
    this.eventEmitter.emit('mail.send', mailBody);
  }

  @OnEvent('mail.send', { async: true })
  async HandleSendMailEvent(mailBody: any) {
    await this.mailerService.sendMail(mailBody).catch((err) => {
      console.log({ err });
    });
  }
}
