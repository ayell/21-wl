import {
  Channel as DChannel,
  ChannelLogsQueryOptions,
  Collection,
  Message,
} from 'discord.js';

export interface Channel extends DChannel {
  send?(message: string): void;
  fetchMessages?(
    options?: ChannelLogsQueryOptions,
  ): Promise<Collection<string, Message>>;
}
