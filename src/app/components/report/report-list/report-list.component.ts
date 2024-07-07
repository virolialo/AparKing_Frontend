import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewDidEnter } from '@ionic/angular';
import { Report, Status } from 'src/app/models/report';
import { DataManagementService } from 'src/app/service/data-management.service';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss'],
})
export class ListReportComponent implements OnInit, ViewDidEnter {
  reports: Report[] = [];
  Status = Status;

  constructor(
    private dataManagementService: DataManagementService,
    private router: Router,) { }

  ngOnInit(): void {
    this.loadReports();
  }

  ionViewDidEnter(): void {
    this.loadReports();
  }

  loadReports(): void {
    this.dataManagementService.listReportsByUser().then(reports => {
      this.reports = reports;
    }).catch(error => {
      console.error('Error loading reports:', error);
    });
  }

  redirectToCreateReport() {
    this.router.navigate(['/G11/aparKing/tab3/reports/create']);
  }

  redirectToFaq() {
    this.router.navigate(['/G11/aparKing/tab3/reports/faq']);
  }
}