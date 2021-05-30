import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { DeviceComponent } from './device/device.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeviceCreateComponent } from './device/device-create/device-create.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CategoryCreateComponent,
    DeviceComponent,
    PageNotFoundComponent,
    DeviceCreateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
