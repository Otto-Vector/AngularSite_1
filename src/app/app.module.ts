import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from "swiper/angular";

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
import { ViewButtonComponent } from './ui/hero-image/view-button/view-button.component';
import { SliderButtonComponent } from './ui/hero-image/slider-button/slider-button.component';
import { LabelComponent } from './ui/reusable-elements/label/label.component';
import { ButtonViewComponent } from './ui/plan-and-manage/button-view/button-view.component';
import { ButtonSeeComponent } from './ui/plan-and-manage/button-see/button-see.component';
import { HeaderSmallComponent } from './ui/reusable-elements/header-small/header-small.component';
import { FeatureCardComponent } from './ui/features/features-cards/feature-card/feature-card.component';
import { FeaturesCardsComponent } from './ui/features/features-cards/features-cards.component';
import { BlogSwiperElementComponent } from './ui/blog/blog-swiper-element/blog-swiper-element.component';
import { ViewImageButtonComponent } from './ui/blog/view-image-button/view-image-button.component';

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
    HeaderSmallComponent,
    FeatureCardComponent,
    FeaturesCardsComponent,
    BlogSwiperElementComponent,
    ViewImageButtonComponent,
  ],
  imports: [
    BrowserModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
