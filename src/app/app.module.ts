import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './component/homepage/navbar/navbar.component';
import {BannerComponent} from './component/homepage/banner/banner.component';
import {ModalComponent} from './component/homepage/modal/modal.component';
import {AboutComponent} from './component/homepage/about/about.component';
import {ServiceComponent} from './component/homepage/service/service.component';
import {GalleryComponent} from './component/homepage/gallery/gallery.component';
import {ProjectComponent} from './component/homepage/project/project.component';
import {ContactComponent} from './component/homepage/contact/contact.component';
import {FooterComponent} from './component/homepage/footer/footer.component';
import {LoginComponent} from './component/login/login.component';
import {HomepageComponent} from './component/homepage/homepage.component';
import { RegisterComponent } from './component/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    ModalComponent,
    AboutComponent,
    ServiceComponent,
    GalleryComponent,
    ProjectComponent,
    ContactComponent,
    FooterComponent,
    LoginComponent,
    HomepageComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
