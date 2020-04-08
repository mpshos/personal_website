import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component'
import { ExperienceComponent } from './experience/experience.component'
import {InterestsComponent } from './interests/interests.component'

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full'}, //TODO: Replace this with main page whenever that's made
  { path: 'about', component: AboutComponent},
  { path: 'experience', component: ExperienceComponent },
  { path: 'interests', component: InterestsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
