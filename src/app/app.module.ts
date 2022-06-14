import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { MainModule } from './main/main.module';
import { AppRoutingModule } from './app.routing.module.';

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule, 
    HttpClientModule,
    MainModule,

    // *app routing
    AppRoutingModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
