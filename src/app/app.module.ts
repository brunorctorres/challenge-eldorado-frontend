import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { CategoryComponent } from './category/category.component';
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { DeviceComponent } from './device/device.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeviceCreateComponent } from './device/device-create/device-create.component';
import { FocusDirective } from './directives/focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationMenuComponent,
    CategoryComponent,
    CategoryCreateComponent,
    DeviceComponent,
    PageNotFoundComponent,
    DeviceCreateComponent,
    FocusDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
