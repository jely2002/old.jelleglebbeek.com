import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { WalksimulatorComponent } from './walksimulator/walksimulator.component';
import { WebsiteComponent } from './website/website.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'walksimulator', component: WalksimulatorComponent},
  { path: 'website', component: WebsiteComponent},
  { path: '**', component: MainComponent, redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
