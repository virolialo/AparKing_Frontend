import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Tab3Page } from './tab3.page';

import { listVehicleComponent } from '../components/listVehicle/listVehicle.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { registerVehicleComponent } from '../components/registerVehicle/registerVehicle.component';
import { ReportCreateComponent } from '../components/report/report-create/report-create.component';
import { ReportFaqComponent } from '../components/report/report-faq/report-faq.component';
import { ListReportComponent } from '../components/report/report-list/report-list.component';
import { Tab3PageRoutingModule } from './tab3-routing.module';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab3PageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [Tab3Page, ProfileComponent, registerVehicleComponent, listVehicleComponent, ListReportComponent, ReportCreateComponent, ReportFaqComponent],
  exports: [ProfileComponent, registerVehicleComponent, listVehicleComponent, ListReportComponent, ReportCreateComponent, ReportFaqComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Tab3PageModule { }
