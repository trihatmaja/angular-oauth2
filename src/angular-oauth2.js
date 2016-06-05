
/**
 * Module dependencies.
 */

import angular from 'angular';
import OAuthPasswordProvider from './providers/oauth-password-provider';
import OAuthTokenProvider from './providers/oauth-token-provider';
import OAuthClientProvider from './providers/oauth-client-provider';
import oauthConfig from './config/oauth-config';
import oauthInterceptor from './interceptors/oauth-interceptor';
import ngCookies from 'angular-cookies';

var ngModule = angular.module('angular-oauth2', [
    ngCookies
  ])
  .config(oauthConfig)
  .factory('oauthInterceptor', oauthInterceptor)
  .provider('OAuthPassword', OAuthPasswordProvider)
  .provider('OAuthToken', OAuthTokenProvider)
  .provider('OAuthClient', OAuthClientProvider)
;

/**
 * Export `angular-oauth2`.
 */

export default ngModule;
