import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasePageComponent } from './base-page/base-page.component';
import { TextBaseComponent } from './base-page/text-base/text-base.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: BasePageComponent
  }
]


@NgModule({
  declarations: [    BasePageComponent, TextBaseComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class SalesGeniusModule { }
