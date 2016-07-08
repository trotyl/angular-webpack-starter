import './environments'
import 'core-js/fn/reflect/define-metadata'
import 'core-js/fn/reflect/get-metadata'
import 'core-js/fn/reflect/get-own-metadata'
import 'zone.js'
import { enableProdMode } from '@angular/core'
import { bootstrap }    from '@angular/platform-browser-dynamic'
import { AppComponent } from './app/app.component'

const env = process.env.NODE_ENV || 'local'
if (env !== 'local') {
    enableProdMode()
}

bootstrap(AppComponent)
