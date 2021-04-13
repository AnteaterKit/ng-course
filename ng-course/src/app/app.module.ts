import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from './cdk/components/button/button.module';
import { HeaderModule } from './header/header.module';
import { DataAppService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    HeaderModule
  ],
  providers: [DataAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
