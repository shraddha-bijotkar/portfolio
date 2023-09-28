import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { GeneralModule } from './components/general/general.module';

@NgModule({
  imports: [BrowserModule, FormsModule, HomeModule, GeneralModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
