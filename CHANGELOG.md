
## Version 1.9.1 (2024-02-06)


* Updated README.md

## Version 1.9.1 (2024-02-06)


* Updated README.md
* Added project level .gitignore files
* misc: Tagged release 1.9.0 for core
* Added configure method to DIContainer, linked to SDK.configure
* Initialisation of the DIContainer in the wrapper constructor
* Updated test
* Created index file for project constants
* Merge remote-tracking branch 'origin/master' into james/sdk-async-cookie-handling
* Removed deprecated orderHistoryFetched event
* Fixed TS errors in test
* Corrected JSDocs return types
* Added ability to override cookie handling in SDK.configure
* Revert "Temporary removal of cookie handling override"
* Fixed formatting
* misc: Tagged release 1.8.2 for core
* Deprecated Extension base class, replaced with Integration to correct terminolgy
* Temporary removal of cookie handling override
* feat(FP-4882): add integration class - deprecate extension class - remove abstract unregisterExtension(): void
* feat(FP-4679): rename param in SDKConfig
* feat(FP-4679): - rename isSDKConfigured to isDIConfigured - revert changes in the cookie methods
* feat(FP-4679): - add SDK configuration check - add cookie handling override to SDK
* Merge remote-tracking branch 'origin' into feat/FP-4679-extend-sdk-configuration
* Merge branch 'master' of https://github.com/FrontasticGmbH/frontastic
* Fixed formatting
* feat(FP-4679): extend sdk configuration to contain the cookie management interface
* feat(FP-4652): fix jsdocs wordings  for coookie management interface
* misc: Tagged release 1.8.1 for core
* Changed prop name of backend locale
* feat(FP-4652): refactor cooking handling to use class
* Updated version
* Added support for 6 digit locales
* Fixed formatting
* Fixed formatting
* misc: Tagged release 1.8.0 for core
* Updated version
* Added missing describe import
* Added SSR support for rememberMeCookie helpers
* Rewording of JSDoc
* Added testing to CI
* Refactor test directory structure
* Made sessionLifetime optional in SDKConfig
* Merged with master, fixed conflicts and breaking change
* Added JSdocs for intellisense
* feat: address comments
* feat: address comments
* chore(FP-4517): update remember me cookie helpers to use cookie management tools
* feat: address comments
* feat: move timestamp to setup
* feat: mock the Date object
* feat: allow test with sessionLifetime value
* fix: format
* feat: address comments
* feat: address comments
* feat: update tests
* Sperated types into thie own files
* feat: add basic test
* feat: init tests, set sessionLifeTime in SDK constructor
* feat: add customization cookie lifetime
* Removed unused private methods on the EventManager
* Added JSDocs
* Added JSDocs
* Resolved rebase conflict
* Resolved rebase conflict
* misc: Tagged release 1.7.7 for core
* Updated version
* Added back frontastic-path header to getPage method
* Sends cuurency across in header for API calls
* Revert "Merge branch 'studio-deployment-branch'"
* Fixed formatting
* Fixed formatting
* misc: Tagged release 1.7.4 for core
* Merge branch 'master' of https://github.com/FrontasticGmbH/frontastic
* Added ServerOptions type to index export
* misc: Tagged release 1.7.3 for core
* Updated version
* misc: Tagged release 1.7.2 for core
* Updated version
* Updated version
* misc: Tagged release 1.7.1 for core
* Fixed formatting
* Updated version
* Refactor OptionsType -> ServerOptions
* Refactor OptionsType -> ServerOptions
* Added server cookie support for session handling
* Changed serverSession handling to take IncomingMessage
* Refactoring
* fix: formatting
* Removed use of js-cookie package
* Removed js-cookie package
* Removed js-cookie package
* Rework of cookie handling for better SSR support
* Rework of cookie handling for better SSR support
* Rework of cookie handling for better SSR support
* misc: Tagged release 1.7.0 for core
* Updated version
* feat: added support to pass serverSession in callAction
* Fixed formatting and commit history
* misc: Tagged release 1.6.2 for core
* Updated vresion
* Duplicated dev and prod build
* Corrected NODE_ENV flag
* Added tsup config file
* migrates to tsup
* misc: Tagged release 1.6.1 for core
* misc: Tagged release 1.6.0 for core
* Updated version
* Added optional serverSession parameter to getPage to pass server session for SSR
* Added serverSession helper to access server session cookie
* Claned obsolete SDK build files and added clean and reinstall scripts
* misc: Tagged release 1.5.0 for core
* Fixed formatting
* Updated version
* Replaced automatic assigning of Commercetools-Frontend-Extension-Version header in fetcher with optional extensionVersion parameter in SDKConfig
* Comment cleanup
* fixes links and title of sdk repo
* basic readme for frontend-sdk
* Merge branch 'master' of https://github.com/FrontasticGmbH/frontastic
* Cleaned up formatting
* misc: Tagged release 1.4.1 for core
* Updated version
* Added throwIfNotConfigured method to Page API calls
* Added optional query param to getPage
* misc: Tagged release 1.4.0 for core
* Updated version
* Implemented getPages method
* Fixed formatting
* misc: Tagged release 1.3.0 for core
* Updated version
* Refactor #handleError in SDK
* Refaactored error handling, wip: getPreview page API method
* Added getPreview page API method definition
* Added PagePreviewResponse type for wip page.getPreview method
* Removed nested isError property from FetchError
* Fixed formatting of CHANGELOG.md
* misc: Tagged release 1.2.7 for core
* Updated version
* fix: only add Commercetools-Frontend-Extension-Version header if NEXT_PUBLIC_EXT_BUILD_ID provided
* misc: Tagged release 1.2.6 for core
* Updated version
* fix: type generation, exclude test folder from build
* Fixed formatting
* Merge branch 'master' of https://github.com/FrontasticGmbH/frontastic
* Added test folder to .npmignore
* misc: Tagged release 1.2.5 for core
* Merge branch 'master' of https://github.com/FrontasticGmbH/frontastic
* fix: updated node version
* misc: Tagged release 1.2.4 for core
* Tidied changelog
* Updated version
* feat(FP-3869): Use Commercetools-Frontend-Extension-Version header on SDK
* Merge branch 'master' of https://github.com/FrontasticGmbH/frontastic
* fix: rememberMe cookie not being applied
* misc: Tagged release 1.2.3 for core
* misc: Tagged release 1.2.3 for core
* SDK version bump to 1.2.3
* updated locale tests
* makes currency mandatory
* removes redundant APILocale getter
* SDK accepts posix and bcp47 language tags/locales
* adds a simple test runner
* misc: Tagged release 1.2.2 for core
* Merge branch 'master' of https://github.com/FrontasticGmbH/frontastic
* Corrected formatting
* Updated version
* fix: included @frontastic/extension-types as dependency
* misc: Tagged release 1.2.1 for core
* Updated version
* Added support for arrays in action queries
* Merged on rebase
* Added initial query string helpers
* misc: Tagged release 1.2.0 for core
* Added yarn install to prepublishOnly script
* Updated version
* Added Page API types
* refactor: removed PageResponse type
* Added page API with getPage method
* wip: add back getPage method
* Added intial PageResponse type
* Added moduleResolution: node to tsconfig
* Added @frontastic/extension-types dependency
* misc: Tagged release 1.1.4 for core
* Updated version
* Changed BUILD_ID to EXT_BUILD_ID
* Updated formatting of CHANGELOG.md
* misc: Tagged release 1.1.3 for core
* fix: added NEXT_PUBLIC prefix to BUILD_ID env variable
* Updated version
* Cleaned up formatting
* misc: Tagged release 1.1.2 for core
* Merge branch 'master' of https://github.com/FrontasticGmbH/frontastic
* Updated version
* misc: Tagged release 1.1.1 for core
* Updated version
* Merge branch 'master' of https://github.com/FrontasticGmbH/frontastic
* fix: updated @types/node
* misc: Tagged release 1.1.0 for core
* Updated version
* Added access token support for multitenancy projects
* Added node to types in tsconfig
* misc: Tagged release 1.0.4 for core
* Updated version
* fix: error in error event trigger after reformatting
* misc: Tagged release 1.0.3 for core
* Updated perttier config and ran fix
* Removed trailingComma:all
* Run linting
* Added editorconfig for github to render tabs properly
* Updated version
* Run linting
* Indent with spaces instead of tabs
* Added prettierignore, fixed CHANGELOG.md
* Formatted code with new prettier config
* Fixed formatting
* misc: Tagged release 1.0.1 for core
* Updated version
* fix up prettier config to better suit the project
* Add tab width to .prettierrc
* misc: Tagged release 1.0.0 for core
* Full release out of alpha/beta
* Removed getPage for later release
* Updated formatting
* Removed yarn install from prepublishOnly

## Version 1.9.0 (2023-11-28)


* Removed deprecated orderHistoryFetched event
* Added ability to override cookie handling in SDK.configure

## Version 1.8.2 (2023-08-16)

* Deprecated Extension base class, replaced with Integration to correct terminolgy

## Version 1.8.1 (2023-06-29)

* Added support for 6 digit locales

## Version 1.8.0 (2023-06-22)

* Added SSR support for rememberMeCookie helpers
* Added JSdocs for intellisense
* Update remember me cookie helpers to use new SSR compliant cookie management tools
* Separated types into their own files
* Added customization option for session lifetime
* Removed unused private methods on the EventManager

## Version 1.7.7 (2023-05-31)

* Send currency across in header for API calls
* Test for missing endpoint on protocol and add if missing

## Version 1.7.6 (2023-04-26)

* fix: include headers from IncomingMessage on SSR fetch

## Version 1.7.5 (2023-04-25)

* Added ServerOption support for getPreview and getPages methods

## Version 1.7.4 (2023-04-24)

* Added ServerOptions type to index export

## Version 1.7.3 (2023-04-24)

* Updated version

## Version 1.7.2 (2023-04-24)

* Updated version

## Version 1.7.1 (2023-04-24)

* Rework of cookie handling for better SSR support

## Version 1.7.0 (2023-04-19)

* feat: added support to pass serverSession in callAction

## Version 1.6.2 (2023-04-19)

* fix: compatibility with non-v8 browsers

## Version 1.6.1 (2023-04-19)

* Replaced esbuild and tsc for tsup build

## Version 1.6.0 (2023-04-06)

* Added optional serverSession parameter to getPage to pass server session for SSR
* Added serverSession helper to access server session cookie

## Version 1.5.0 (2023-04-03)

* Replaced automatic assigning of Commercetools-Frontend-Extension-Version header in fetcher with optional extensionVersion parameter in SDKConfig

## Version 1.4.1 (2023-03-29)

* Added throwIfNotConfigured method to Page API calls
* Added optional query param to getPage

## Version 1.4.0 (2023-03-22)

* Implemented getPages method

## Version 1.3.0 (2023-03-20)

* Added getPreview page API method
* fix: removed nested isError property from FetchError

## Version 1.2.7 (2023-03-14)

* fix: only add Commercetools-Frontend-Extension-Version header if NEXT_PUBLIC_EXT_BUILD_ID provided

## Version 1.2.6 (2023-03-14)

* fix: type generation, exclude test folder from build

## Version 1.2.5 (2023-03-14)

* fix: updated node version

## Version 1.2.4 (2023-03-14)

* fix: Use Commercetools-Frontend-Extension-Version header on SDK
* feat: SDK accepts posix and bcp47 language tags/locales

## Version 1.2.2 (2023-02-28)

* fix: included @frontastic/extension-types as dependency

## Version 1.2.1 (2023-02-28)

* Added support for arrays in action queries

## Version 1.2.0 (2023-02-28)

* Added page API with getPage method

## Version 1.1.4 (2023-02-24)

* Changed BUILD_ID to EXT_BUILD_ID

## Version 1.1.3 (2023-02-22)

* fix: added NEXT_PUBLIC prefix to BUILD_ID env variable

## Version 1.1.2 (2023-02-22)

* fix: issue with previous release process 

## Version 1.1.1 (2023-02-22)

* fix: updated @types/node

## Version 1.1.0 (2023-02-22)

* feat: Added access token support for multitenancy projects
* Added node to types in tsconfig

## Version 1.0.4 (2023-01-19)

* fix: error in error event trigger after reformatting

## Version 1.0.3 (2023-01-19)

* Updated perttier config and ran fix
* Removed trailingComma:all
* Added editorconfig for github to render tabs properly

## Version 1.0.1 (2023-01-18)

* Fix up prettier config to better suit the project

## Version 1.0.0 (2023-01-16)

* Full release out of alpha/beta
* Removed getPage for later release

## Version 5.0.0-alpha.0 (2023-01-06)

* Added generic type for CustomEvents to abstract extension class
* Exported SDKResponse type from package index
* Removed redundant StandardAction type
* Added generic type for Events
* (fix): bug in SDK error handling, wrapping error in { isError: false, data: error }

## Version 4.0.4-alpha.0 (2023-01-04)

* Fixed typo in .npmignore

## Version 4.0.3-alpha.0 (2023-01-04)

* Added .npmignore to optimise package size

## Version 4.0.2-alpha.0 (2022-12-20)

* Replaced webpack build with esbuild and tsc

## Version 4.0.1-alpha.0 (2022-12-14)

* fix: export SDK class type for extension

## Version 4.0.0-alpha.0 (2022-12-14)

* Removed SDK class from public export
* Changed format of params of callAction and getPage mathods

## Version 3.2.0-alpha.0 (2022-12-13)

Updated and extended StandardEvents type

## Version 3.1.0-alpha.0 (2022-12-13)

* Updated StandardEvents type

## Version 3.0.0-alpha.0 (2022-12-12)

* Added more descriptive error types, error event triggering handled by SDK
* Updated type of dynamic event return to object with unknown keys and data

## Version 2.4.1-alpha.0 (2022-12-09)

* Exposed ActionError class

## Version 2.4.0-alpha.0 (2022-12-09)

* Updated data type of action error event

## Version 2.3.0-alpha.0 (2022-12-09)

* Changed return type of callAction to better describe and handle errors

## Version 2.2.0-alpha.0 (2022-12-09)

* Added actionError StandardEvent type

## Version 2.1.0-alpha.0 (2022-12-09)

* Updated callAction return type so cannot be void
* Event names modified
* Updated fomatting of CHANGELOG.md
* Fixed dependency issues

## Version 2.0.0-alpha.0 (2022-12-06)

* Fixed major NPM deployment issue

## Version 1.1.3-alpha.0 (2022-12-06)

* Updated prepublishOnly script

## Version 1.1.1-alpha.0 (2022-12-06)

* Updated name of emitter class and export type

## Version 1.1.0-alpha.0 (2022-12-05)

* Added error handling

## Version 1.0.7-alpha.0 (2022-12-05)

* Hide event handler modifiers to prevent extensions accessing others

## Version 1.0.6-alpha.0 (2022-11-30)

* Fixed typo in README.md

## Version 1.0.5-alpha.0 (2022-11-30)

* Updated method name 

## Version 1.0.4-alpha.0 (2022-11-30)

* Added README.md

## Version 1.0.3-alpha.0 (2022-11-29)

* Initial release

## Version 1.0.0-alpha.0 (2022-11-29)

* Initial release
