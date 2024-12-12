import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './eng/component/header/header/header.component';
import { FooterComponent } from './eng/component/footer/footer/footer.component';
import { GeneralComponent } from './eng/pages/general/general/general.component';
import { ContactComponent } from './eng/pages/general/contact/contact/contact.component';
import { AboutComponent } from './eng/pages/general/contact/about/about/about.component';
import { HeaderSmallComponent } from './eng/component/header-small/header-small.component';
import { loginComponent } from './eng/pages/login/login.component';
import { TrainComponent } from './eng/pages/train/train.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GeneralComponent,
    ContactComponent,
    AboutComponent,
    HeaderSmallComponent,
    loginComponent,
    TrainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
