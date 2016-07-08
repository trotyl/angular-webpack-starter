import 'core-js/fn/reflect/define-metadata'
import 'core-js/fn/reflect/get-metadata'
import 'core-js/fn/reflect/get-own-metadata'
import 'core-js/fn/reflect/metadata'
import 'zone.js'

import { enableProdMode } from '@angular/core'
import { HTTP_PROVIDERS, XHRBackend } from '@angular/http'
import { bootstrap } from '@angular/platform-browser-dynamic'
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api'
import { InMemoryDataService } from './in-memory-data.service'

import { AppComponent } from './app/app.component'
import { APP_ROUTER_PROVIDERS } from './app/app.routes'

const env = process.env.NODE_ENV || 'local'
if (env !== 'local') {
    enableProdMode()
}

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    { provide: XHRBackend, useClass: InMemoryBackendService },
    { provide: SEED_DATA, useClass: InMemoryDataService }
])
