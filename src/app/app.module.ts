import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DemoMaterialModule } from './core/material.module';

@NgModule({
  imports: [BrowserModule, DemoMaterialModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
