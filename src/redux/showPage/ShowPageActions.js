import * as ShowPageTypes from './ShowPageTypes';

export const showPage = (pageName) => {
    return {
        type: ShowPageTypes.SHOW_PAGE,
        payload: pageName
    }
}