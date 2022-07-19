import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrangeComponent } from './orange/orange.component';

const routes: Routes = [{component: OrangeComponent, path: "orange"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
