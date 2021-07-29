import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UiComponent } from './ui/ui.component';
import { HeaderComponent } from './ui/header/header.component';
import { HeroImageComponent } from './ui/hero-image/hero-image.component';
import { CustomersComponent } from './ui/customers/customers.component';
import { PlanAndManageComponent } from './ui/plan-and-manage/plan-and-manage.component';
import { FeaturesComponent } from './ui/features/features.component';
import { StatsComponent } from './ui/stats/stats.component';
import { BlogComponent } from './ui/blog/blog.component';
import { QuotesComponent } from './ui/quotes/quotes.component';
import { GetStartedComponent } from './ui/get-started/get-started.component';
import { FaqComponent } from './ui/faq/faq.component';
import { NewsletterComponent } from './ui/newsletter/newsletter.component';
import { FooterComponent } from './ui/footer/footer.component';
import { NavMenuComponent } from './ui/header/nav-menu/nav-menu.component';
import { LogoComponent } from './ui/header/logo/logo.component';
import { SocialsComponent } from './ui/header/socials/socials.component';
import { GetButtonComponent } from './ui/reusable-elements/get-button/get-button.component';
import { ViewButtonComponent } from './ui/reusable-elements/view-button/view-button.component';
import { SliderButtonComponent } from './ui/hero-image/slider-button/slider-button.component';
import { LabelComponent } from './ui/reusable-elements/label/label.component';
import { ButtonViewComponent } from './ui/plan-and-manage/button-view/button-view.component';
import { ButtonSeeComponent } from './ui/plan-and-manage/button-see/button-see.component';

@NgModule({
  declarations: [
    AppComponent,
    UiComponent,
    HeaderComponent,
    HeroImageComponent,
    CustomersComponent,
    PlanAndManageComponent,
    FeaturesComponent,
    StatsComponent,
    BlogComponent,
    QuotesComponent,
    GetStartedComponent,
    FaqComponent,
    NewsletterComponent,
    FooterComponent,
    NavMenuComponent,
    LogoComponent,
    SocialsComponent,
    GetButtonComponent,
    ViewButtonComponent,
    SliderButtonComponent,
    LabelComponent,
    ButtonViewComponent,
    ButtonSeeComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
