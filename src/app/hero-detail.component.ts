import { Component, Input, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from '@reactivex/rxjs'

import { Hero } from './hero'
import { HeroService } from './hero.service'

interface IRouteParams {
    id: string
}

@Component({
    selector: 'my-hero-detail',
    templateUrl: require('./hero-detail.component.html'),
    styleUrls: [require('./hero-detail.component.css')]
})
export class HeroDetailComponent implements OnInit, OnDestroy {
    @Input() hero: Hero
    sub: Subscription

    constructor (
        private heroService: HeroService,
        private route: ActivatedRoute
    ) {}

    ngOnInit (): void {
        this.sub = this.route.params.subscribe((params: IRouteParams) => {
            const id = parseInt(params['id'], 10)
            this.heroService.getHero(id)
                .then(hero => this.hero = hero)
        })
    }

    ngOnDestroy (): void {
        this.sub.unsubscribe()
    }

    goBack (): void {
        window.history.back()
    }
}
