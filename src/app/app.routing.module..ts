import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core'; 
import { HomeComponent } from './main/home/home.component';
import { UserComponent } from './main/user/user.component';

const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'user/:id',
        component: UserComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'top'
        })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
