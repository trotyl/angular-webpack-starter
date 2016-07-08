import 'core-js/fn/reflect/define-metadata'
import 'core-js/fn/reflect/get-metadata'
import 'core-js/fn/reflect/get-own-metadata'
import 'core-js/fn/reflect/metadata'
import 'zone.js'

import { enableProdMode } from '@angular/core'
import { bootstrap }    from '@angular/platform-browser-dynamic'
import { AppComponent } from './app/app.component'
import { APP_ROUTER_PROVIDERS } from './app/app.routes'

const env = process.env.NODE_ENV || 'local'
if (env !== 'local') {
    enableProdMode()
}

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS
])
