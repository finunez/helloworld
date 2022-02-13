import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { HelloworldSharedModule } from 'app/shared/shared.module';
import { HelloworldCoreModule } from 'app/core/core.module';
import { HelloworldAppRoutingModule } from './app-routing.module';
import { HelloworldHomeModule } from './home/home.module';
import { HelloworldEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    HelloworldSharedModule,
    HelloworldCoreModule,
    HelloworldHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    HelloworldEntityModule,
    HelloworldAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class HelloworldAppModule {}
