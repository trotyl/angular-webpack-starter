import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { Hero } from '../../hero'
import { HeroDetailComponent } from '../hero-detail/hero-detail.component'
import { HeroService } from '../../hero.service'

@Component({
    selector: 'my-heroes',
    directives: [HeroDetailComponent],
    templateUrl: require('./heroes.component.html'),
    styleUrls: [require('./heroes.component.css')]
})
export class HeroesComponent implements OnInit {
    heroes: Hero[]
    selectedHero?: Hero
    addingHero: boolean = false
    error: Error
    
    constructor (
        private router: Router,
        private heroService: HeroService
    ) { }
    
    ngOnInit (): void {
        this.getHeroes()
    }
    
    addHero (): void {
        this.addingHero = true
        this.selectedHero = undefined
    }

    close (savedHero: Hero): void {
        this.addingHero = false
        if (savedHero) { this.getHeroes() }
    }

    deleteHero (hero: Hero, event: any): void {
        event.stopPropagation()
        this.heroService
            .delete(hero)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = undefined }
            })
            .catch(error => this.error = error)
    }
    
    getHeroes (): void {
        this.heroService
            .getHeroes()
            .then(heroes => this.heroes = heroes)
            .catch(error => this.error = error)
    }

    gotoDetail (): void {
        if (this.selectedHero) {
            this.router.navigate(['/detail', this.selectedHero.id])
        }
    }

    onSelect (hero: Hero): void {
        this.selectedHero = hero
    }
}
