const NotificationBarReducer = (state, action) => {
    switch(action.type) {
        case 'OPEN_NOTIFICATION':
            return state = !state
        case 'CLOSE_NOTIFICATION':
            return state = !state
        default:
            return state
    }
}

export default NotificationBarReducer