import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ResultItemComponent } from '../result-item/result-item.component';


@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, HomeRoutingModule, ReactiveFormsModule],
  declarations: [HomeComponent,ResultItemComponent],
})
export class HomeModule {}
