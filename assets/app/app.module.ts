import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';
import { AppComponent } from "./app.component";
import { AboutComponent } from './about/about.component';
import { LessionDetailsComponent } from "./dashboard/lession-details.componet";
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';
import { routing } from './app.routing';



@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        DashboardComponent,
        LessionDetailsComponent,
        HomeComponent,
        AboutComponent,
        VideoComponent
    ],
    imports: [BrowserModule,routing,FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}