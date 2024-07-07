import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { listVehicleComponent } from '../components/listVehicle/listVehicle.component';
import { registerVehicleComponent } from '../components/registerVehicle/registerVehicle.component';
import { ReportCreateComponent } from '../components/report/report-create/report-create.component';
import { ReportFaqComponent } from '../components/report/report-faq/report-faq.component';
import { ListReportComponent } from '../components/report/report-list/report-list.component';
import { Tab3Page } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  }, {
    path: 'registerVehicle',
    component: registerVehicleComponent,
  },
  {
    path: 'listVehicle',
    component: listVehicleComponent,
  },
  {
    path: 'reports',
    component: ListReportComponent
  },
  {
    path: 'reports/create',
    component: ReportCreateComponent
  },

  {
    path: 'reports/faq',
    component: ReportFaqComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule { }
