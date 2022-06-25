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

export const loadUserServers = (userId) => async (dispatch) => {
    const res = await fetch(`/api/servers/user/${userId}`);

    if (res.ok) {
        const servers = await res.json();
        dispatch(load(servers));
        return servers;
    }
}

export const createServer = (serverFormData) => async (dispatch) => {
    const res = await fetch(`/api/servers`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(serverFormData)
    });

    if (res.ok) {
        const server = await res.json();
        dispatch(add(server.newServer));
        return server;
    }
}

export const updateServer = (serverId, serverFormData) => async (dispatch) => {
    const res = await fetch(`/api/servers/${serverId}`, {
        method: "PUT",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(serverFormData)
    });

    if (res.ok) {
        const server = await res.json();
        dispatch(add(server.updatedServer));
        return server;
    }
}

export const deleteServer = (serverId) => async (dispatch) => {
    const res = await fetch(`/api/servers/${serverId}`);

    if (res.ok) {
        const deletedId = await res.json();
        dispatch(remove(serverId));
        return deletedId;
    }
}

export default function serverReducer(state={}, action) {
    
    switch(action.type) {
        
        case LOAD:
            let newState = {}
            action.list.forEach(server => newState[server.id] = server)
            return newState;

        case ADD:
            return { ...state, [action.server.id]: action.server };
           
        case REMOVE:
            const newServers = { ...state };
            delete newServers[action.serverId];
            return newServers;

        default:
            return state;
    }
}