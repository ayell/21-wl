import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DiscordModuleOption, DiscordOptionsFactory } from 'discord-nestjs';

@Injectable()
export class DiscordConfigurationService implements DiscordOptionsFactory {
  constructor(private configService: ConfigService) {}

  createDiscordOptions(): DiscordModuleOption {
    return {
      token: this.configService.get<string>('DISCORD_TOKEN'),
      commandPrefix: null,
    };
  }
}
