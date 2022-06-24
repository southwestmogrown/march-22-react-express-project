const LOAD = 'servers/LOAD';
const ADD = 'servers/ADD';
const REMOVE = 'servers/REMOVE';

const load = (list) => {
    return {
        type: LOAD,
        list
    }
};

const add = (server) => {
    return {
        type: ADD,
        server
    }
}

const remove = (serverId) => {
    return {
        type: REMOVE,
        serverId
    }
}

export const loadAllServers = () => async (dispatch) => {
    const res = await fetch('/api/servers');

    if (res.ok) {
        const servers = await res.json();
        dispatch(load(servers));
        return servers
    }
}

export default function serverReducer(state={}, action) {
    
    
    switch(action.type) {
        case LOAD:
            const newState = {}
            action.list.forEach(server => newState[server.id] = server)
            return newState;
        default:
            return state;
    }
}