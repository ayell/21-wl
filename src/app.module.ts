import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { DiscordModule } from 'discord-nestjs';
import * as Joi from 'joi';
import { AppService } from './app.service';
import { DiscordConfigurationService } from './configuration/discord-configuration.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        DISCORD_TOKEN: Joi.string().required(),
      }),
    }),
    ScheduleModule.forRoot(),
    DiscordModule.forRootAsync({
      useClass: DiscordConfigurationService,
    }),
  ],
  controllers: [],
  providers: [AppService, DiscordConfigurationService],
})
export class AppModule {}
