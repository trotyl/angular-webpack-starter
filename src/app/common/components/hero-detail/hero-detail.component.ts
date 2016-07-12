import { Component, Input, Output, OnInit, OnDestroy, EventEmitter } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from '@reactivex/rxjs'

import { Hero } from '../../hero'
import { HeroService } from '../../hero.service'

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
    @Output() close = new EventEmitter<Hero>()
    error: Error
    sub: Subscription
    navigated: boolean = false

    constructor (
        private heroService: HeroService,
        private route: ActivatedRoute
    ) {}

    ngOnInit (): void {
        this.sub = this.route.params.subscribe((params: IRouteParams) => {
            if (params['id'] !== undefined) {
                const id = parseInt(params['id'], 10)
                this.heroService.getHero(id)
                    .then(hero => this.hero = hero)
            } else {
                this.navigated = false
                this.hero = new Hero()
            }
        })
    }

    ngOnDestroy (): void {
        this.sub.unsubscribe()
    }

    goBack (savedHero: Hero): void {
        this.close.emit(savedHero)
        if (this.navigated !== null) { 
            window.history.back()
        }
    }

    save (): void {
        this.heroService
            .save(this.hero)
            .then(hero => {
                this.hero = hero
                this.goBack(hero)
            })
            .catch(error => this.error = error)
    }
}
