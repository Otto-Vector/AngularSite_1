import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FaqComponent } from "./ui/faq/faq.component";
import {BlogComponent} from "./ui/blog/blog.component";
import {FeaturesComponent} from "./ui/features/features.component";
import {GetStartedComponent} from "./ui/get-started/get-started.component";


const routes: Routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'documentation', component: FaqComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'pricing', component: GetStartedComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
