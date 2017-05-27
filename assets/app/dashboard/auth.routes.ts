import { Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard.component";
import { LessionDetailsComponent } from "./lession-details.componet";


export const AUTH_ROUTES: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'details', component: LessionDetailsComponent }
];