import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleCountryViewComponent } from './single-country-view/single-country-view.component';
import { AllCountryComponent } from './all-country/all-country.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forChild([
      {path : 'name/:id', component : SingleCountryViewComponent},
      {path : 'allCountry/:Name/:Value', component : AllCountryComponent}
    ])
  ],
  declarations: [ AllCountryComponent, SingleCountryViewComponent]
})
export class CountryModule { }
