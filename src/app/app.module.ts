import { NgModule } from '@angular/core';
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
    
    // *app routing
    AppRoutingModule,

    BrowserModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    MainModule,
    CoreModule,
    SharedModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
