import { csrfFetch } from './csrf';

const LOAD = 'channels/LOAD';
const ADD = 'channels/ADD';
const REMOVE = 'channels/REMOVE';

const load = (list) => {
    return {
        type: LOAD,
        list
    }
};

const add = (channel) => {
    return {
        type: ADD,
        channel
    }
}

const remove = (channelId) => {
    return {
        type: REMOVE,
        channelId
    }
}

export const loadAllChannels = () => async (dispatch) => {
    const res = await csrfFetch('/api/channels');

    if (res.ok) {
        const channels = await res.json();
        dispatch(load(channels));
        return channels
    }
};

export const loadServerChannels = (serverId) => async (dispatch) => {
    const res = await csrfFetch(`/api/channels/servers/${serverId}`);

    if (res.ok) {
        const channels = await res.json();
        dispatch(load(channels));
        return channels;
    }
};

export const createChannel = (channelFormData) => async (dispatch) => {
    const res = await csrfFetch(`/api/channels`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(channelFormData)
    });

    if (res.ok) {
        const channel = await res.json();
        dispatch(add(channel));
        return channel;
    }
}


export const updateChannel = (channelId, channelFormData) => async (dispatch) => {
    const res = await csrfFetch(`/api/channels/${channelId}`, {
        method: "PUT",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(channelFormData)
    });

    if (res.ok) {
        const channel = await res.json();
        dispatch(add(channel));
        return channel;
    }
}

export const deleteChannel = (channelId) => async (dispatch) => {
    const res = await csrfFetch(`/api/channels/${channelId}`, {
        method: "DELETE"
    });

    if (res.ok) {
        const deletedId = await res.json();
        dispatch(remove(channelId));
        return deletedId;
    }
}



export default function channelReducer(state={}, action) {
    
    switch(action.type) {
        
        case LOAD:
            let newState = {}
            action.list.forEach(channel => newState[channel.id] = channel)
            return newState;

        case ADD:
            return { ...state, [action.channel.id]: action.channel };
           
        case REMOVE:
            const newchannels = { ...state };
            delete newchannels[action.channelId];
            return newchannels;

        default:
            return state;
    }
}