import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LessionDetailsComponent } from './dashboard/lession-details.componet';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'details', component: LessionDetailsComponent },
    { path: 'video', component: VideoComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);