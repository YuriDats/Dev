import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './eng/pages/general/general/general.component';
import { AboutComponent } from './eng/pages/general/contact/about/about/about.component';
import { ContactComponent } from './eng/pages/general/contact/contact/contact.component';
import { loginComponent } from './eng/pages/login/login.component';
import { TrainComponent } from './eng/pages/train/train.component';

const routes: Routes = [
  {path: '', component: GeneralComponent },
  { path: 'general', component: GeneralComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: loginComponent },
  { path: 'train', component: TrainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
