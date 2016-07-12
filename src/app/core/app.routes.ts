import { provideRouter, RouterConfig } from '@angular/router'
import { HeroesComponent } from '../common/components/heroes/heroes.component'
import { DashboardComponent } from '../common/components/dashboard/dashboard.component'
import { HeroDetailComponent } from '../common/components/hero-detail/hero-detail.component'

const routes: RouterConfig = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'heroes', component: HeroesComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent }
]

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
]
