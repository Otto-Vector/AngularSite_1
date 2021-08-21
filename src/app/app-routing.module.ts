import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FaqComponent } from "./ui/faq/faq.component";


const routes: Routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  // { path: 'documentation', component: FaqComponent },
  // { path: 'blog', component: FaqComponent },
  // { path: 'features', component: FaqComponent },
  // { path: 'pricing', component: FaqComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
