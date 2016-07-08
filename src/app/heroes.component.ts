import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { Hero } from './hero'
import { HeroDetailComponent } from './hero-detail.component'
import { HeroService } from './hero.service'

@Component({
    selector: 'my-heroes',
    directives: [HeroDetailComponent],
    providers: [],
    templateUrl: require('./heroes.component.html'),
    styleUrls: [require('./heroes.component.css')]
})
export class HeroesComponent implements OnInit {
    heroes: Hero[]
    selectedHero: Hero
    
    constructor (
        private router: Router,
        private heroService: HeroService
    ) { }
    
    ngOnInit (): void {
        this.getHeroes()
    }
    
    getHeroes (): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes)
    }

    gotoDetail (): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

    onSelect (hero: Hero): void {
        this.selectedHero = hero
    }
}
