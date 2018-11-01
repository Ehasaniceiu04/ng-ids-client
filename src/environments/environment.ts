// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  IDENITY_SERVER_API_BASE: 'http://localhost:4200',
  IS4_REDIRECT_URL: "http://localhost:4200/index.html",
  IS4_DISCOVERY_URL: "http://localhost:5000/.well-known/openid-configuration",
  IS4_CLIENT_ID: "demo-angular-app",
  IS4_SCOPE: "openid profile api1",
  IS4_LOGOUT_URL: "http://localhost:4200/index.html",
}; 
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
