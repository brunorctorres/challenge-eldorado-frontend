import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CategoryComponent } from './category/category.component';
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { DeviceComponent } from './device/device.component';
import { DeviceCreateComponent } from './device/device-create/device-create.component';

const routes: Routes = [
  { path: '', redirectTo: 'devices', pathMatch: 'full' },
  { path: 'categories', component: CategoryComponent },
  { path: 'categories/create', component: CategoryCreateComponent },
  { path: 'devices', component: DeviceComponent },
  { path: 'devices/create', component: DeviceCreateComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
