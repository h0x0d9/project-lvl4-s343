import { createSelector } from 'reselect';


export const getCurrentChannelId = state => state.currentChannel.id;

const getChannels = state => state.channels;

export const channelsSelector = createSelector(
  getChannels,
  data => Object.values(data),
);

const getMessages = state => state.messages;

export const messagesSelector = createSelector(
  getMessages,
  getCurrentChannelId,
  (messages, channelId) => Object.values(messages)
    .filter(m => m.channelId === channelId),
);

export const getMessageAddingState = state => state.messageAddingState;
export const getChannelControllingState = state => state.channelControllingState;
export const getErrors = state => state.errors;
export const getModalState = state => state.modal;
