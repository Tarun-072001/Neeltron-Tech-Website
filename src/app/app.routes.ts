import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DevelopmentComponent } from './components/development/development.component';
import { HomeComponent } from './components/home/home.component';
import { FeatureComponent } from './components/feature/feature.component';
import { WebsiteComponent } from './components/website/website.component';
import { OnlineclassComponent } from './components/onlineclass/onlineclass.component';
import { DevelopmentWebComponent } from './components/development-web/development-web.component';
import { ApplicationComponent } from './components/application/application.component';
import { SchoolComponent } from './components/school/school.component';
import { MarketingComponent } from './components/marketing/marketing.component';
import { EcommerceComponent } from './components/ecommerce/ecommerce.component';
// import { HariPriyaComponent } from './likhitha/hari-priya/hari-priya.component';

export const routes: Routes = [
     { path: '', component: HomeComponent },
     { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'development', component: DevelopmentComponent },
  { path: 'Feature', component: FeatureComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Website', component: WebsiteComponent },
  { path: 'Online-Class', component: OnlineclassComponent },
  { path: 'DevelopmentWeb', component: DevelopmentWebComponent },
  { path: 'Application', component: ApplicationComponent },
  { path: 'School', component: SchoolComponent },
  { path: 'Marketing', component: MarketingComponent },
  { path: 'Ecommerce', component: EcommerceComponent },
  // {
  //   path:'priya', component:HariPriyaComponent
  // }
];
