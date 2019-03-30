import { MaterializeModule } from 'angular2-materialize';
import { ReCaptchaModule } from 'angular2-recaptcha';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ParticlesModule } from 'angular-particle';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, forwardRef } from '@angular/core';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { PcComponent } from './pc/pc.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { AppComponent } from './app.component';
import { FormService } from './services/form.service';
import { AppRoutingModule } from './/app-routing.module';
import {AnalyticsService} from "./services/analytics.service";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProjectsComponent,
    AboutmeComponent,
    ParallaxComponent,
    PcComponent,
    ContactComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    ParticlesModule,
    AngularFontAwesomeModule,
    HttpModule,
    FormsModule,
    ReCaptchaModule,
    AppRoutingModule
  ],
  providers: [
    FormService,
    AnalyticsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
