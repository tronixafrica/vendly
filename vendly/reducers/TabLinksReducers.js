
const TabLinkReducer = (state, action) => {
    switch(action.type) {
        case 'SWITCH_PRODUCTS':
            return state = action.tabLinksId
        case 'SWITCH_ACCOUNTS':
            return state = action.tabLinksId
        case 'SWITCH_INSIGHTS':
            return state = action.tabLinksId
        default:
            console.log('initial state')
            return state
    }
}
 
export default TabLinkReducer;