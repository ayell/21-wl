import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Cron, CronExpression, SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';
import { Client, ClientProvider, Once } from 'discord-nestjs';
import { Channel } from './models/channel.model';

@Injectable()
export class AppService implements OnModuleInit {
  private readonly logger = new Logger(AppService.name);

  @Client()
  private readonly discordProvider: ClientProvider;

  private channel: Channel;

  constructor(private schedulerRegistry: SchedulerRegistry) {}

  onModuleInit(): void {
    this.addJob('morning', '59 59 12 * * *');
    this.addJob('night', '59 59 02 * * *');
  }

  @Once({ event: 'ready' })
  async onReady(): Promise<void> {
    this.logger.verbose(
      `Logged as ${this.discordProvider.getClient().user.tag}`,
    );

    this.channel = this.discordProvider
      .getClient()
      .channels.get('717055652694065193');
  }

  @Cron(CronExpression.EVERY_30_SECONDS)
  async getFreePlaces(): Promise<void> {
    try {
      const messages = await this.channel.fetchMessages({ limit: 1 });
      const places = parseInt(
        messages
          .first()
          .embeds[0].fields.find(({ name }) => name === 'Places restantes')
          .value,
        10,
      );
      this.logger.verbose(`free places: ${places}`);
      if (places > 0) {
        this.send();
      }
    } catch (e) {
      this.logger.error(e);
    }
  }

  private addJob(name: string, cronExpression: string | CronExpression): void {
    const job = new CronJob(cronExpression, () => this.send());
    this.schedulerRegistry.addCronJob(name, job);
    job.start();
  }

  private send(): void {
    this.logger.verbose('send message to channel');
    this.channel.send('!whitelist');
  }
}
