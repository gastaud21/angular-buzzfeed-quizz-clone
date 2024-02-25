import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizzComponent } from './components/quizz/quizz.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterDioComponent } from './components/footer-dio/footer-dio.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizzComponent,
    HomeComponent,
    FooterDioComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
