import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './child-component/header/header.component';
import { PreLoaderComponent } from './child-component/pre-loader/pre-loader.component';
import { FooterComponent } from './child-component/footer/footer.component';
import { ContactComponent } from './child-component/contact/contact.component';
import { BlogComponent } from './child-component/blog/blog.component';
import { PricingComponent } from './child-component/pricing/pricing.component';
import { WorkComponent } from './child-component/work/work.component';
import { CallToActionComponent } from './child-component/call-to-action/call-to-action.component';
import { ServiceComponent } from './child-component/service/service.component';
import { AboutComponent } from './child-component/about/about.component';
import { AddTestonimalComponent } from './child-component/add-testonimal/add-testonimal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PreLoaderComponent,
    FooterComponent,
    ContactComponent,
    BlogComponent,
    PricingComponent,
    WorkComponent,
    CallToActionComponent,
    ServiceComponent,
    AboutComponent,
    AddTestonimalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
