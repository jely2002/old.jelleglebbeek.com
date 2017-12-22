import { MaterializeModule } from 'angular2-materialize';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ParticlesModule } from 'angular-particle';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { FormService } from './services/form.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { PcComponent } from './pc/pc.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProjectsComponent,
    AboutmeComponent,
    ParallaxComponent,
    PcComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    ParticlesModule,
    AngularFontAwesomeModule,
    HttpModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
