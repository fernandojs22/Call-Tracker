import { connectedRouterRedirect } from "redux-auth-wrapper/history4/redirect";
import locationHelperBuilder from "redux-auth-wrapper/history4/locationHelper";
// import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper'

const locationHelper = locationHelperBuilder({});

export const userIsAuthenticated = connectedRouterRedirect({
    allowRedirectBack: true,
    redirectPath: '/',
    // authenticatedSelector: state => state.User.user !== null,
    authenticatedSelector: state => state.User.authenticated,
    wrapperDisplayName: 'userIsAuthenticated'
})

export const userIsNotAuthenticated = connectedRouterRedirect({
    allowRedirectBack: false,
    redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || "/",
    authenticatedSelector: state => !state.User.authenticated,
    wrapperDisplayName: 'userIsNotAuthenticated'
})