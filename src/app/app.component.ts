import { Component } from '@angular/core'
import { ROUTER_DIRECTIVES } from '@angular/router'
import { HeroService } from './common/hero.service'

@Component({
    selector: 'my-app',
    templateUrl: require('./app.component.html'),
    styleUrls: [require('./app.component.css')],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        HeroService
    ]
})
export class AppComponent {
    title = 'Tour of Heroes'
}
