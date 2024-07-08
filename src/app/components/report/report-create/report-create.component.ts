import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Vehicle } from 'src/app/models/authentication';
import { Book, Garage } from 'src/app/models/garagement';
import { DataManagementService } from 'src/app/service/data-management.service';


@Component({
  selector: 'app-report-create',
  templateUrl: './report-create.component.html',
  styleUrls: ['./report-create.component.scss'],
})
export class ReportCreateComponent implements OnInit {
  reportForm: FormGroup;
  garages: Garage[] = [];
  vehicles: Vehicle[] = [];
  bookings: Book[] = [];

  constructor(
    private dataManagementService: DataManagementService,
    private router: Router,
    private navCtr: NavController,

  ) {
    const notBlankValidator: ValidatorFn = (control: AbstractControl): { [key: string]: any } | null => {
      const isNotBlank = (control.value || '').trim().length > 0;
      return isNotBlank ? null : { 'blank': { value: control.value } };
    };

    this.reportForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(50), notBlankValidator]),
      category: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.maxLength(255), notBlankValidator]),
      optionDropdown: new FormControl({ value: '', disabled: true }),
    });
  }

  ngOnInit() {
    this.loadVehicleModels();
    this.loadUserGarages();
    this.loadUserBookings();
  }

  async registerSubmit() {

    if ((this.reportForm.value.category === 'garajes' || this.reportForm.value.category === 'vehiculos' || this.reportForm.value.category === 'reservas') && !this.reportForm.value.optionDropdown) {
      alert('Debes seleccionar al menos una opción en la categoría elegida.');
      return;
    }
    if (this.reportForm.valid) {
      try {
        let description = this.reportForm.value.description;
        if (this.reportForm.value.category === 'garajes' && this.reportForm.value.optionDropdown) {
          description = `Asociado al garaje "${this.reportForm.value.optionDropdown}": ${description}`;
        } else if ((this.reportForm.value.category === 'vehiculos' && this.reportForm.value.optionDropdown)) {
          description = `Asociado al vehículo con matricula "${this.reportForm.value.optionDropdown}": ${description}`;
        }

        const formValueWithModifiedDescription = {
          ...this.reportForm.value,
          description
        };

        const response = await this.dataManagementService.postReportRegister(formValueWithModifiedDescription);
        console.log('Report registered:', response);
        this.navCtr.navigateBack('G11/aparKing/tab3/reports')
        this.reportForm.reset();
      } catch (error) {
        console.error('Error during report registration:', error);
      }
    } else {
      console.log('Form is not valid');
    }
  }

  async loadVehicleModels() {
    try {
      const result = await this.dataManagementService.getVehicle();
      if (result && result.vehicles && result.vehicles.length > 0) {
        this.vehicles = result.vehicles;
        this.reportForm.get('optionDropdown')?.enable();
      } else {
        this.reportForm.get('optionDropdown')?.disable();
      }
      console.log('vehicleModels:', this.vehicles);
    } catch (error) {
      console.error('Error loading vehicle models', error);
    }
  }

  async loadUserGarages() {
    try {
      const result = await this.dataManagementService.getMyGarages();
      if (result && result.length > 0) {
        this.garages = result;
        this.reportForm.get('optionDropdown')?.enable();
      } else {
        this.reportForm.get('optionDropdown')?.disable();
      }
      console.log('garages:', this.garages);
    } catch (error) {
      console.error('Error loading user garages', error);
    }
  }

  async loadUserBookings() {
    try {
      const result = await this.dataManagementService.getMyBookings();
      if (result && result.length > 0) {
        this.bookings = result;
        this.reportForm.get('bookingsDropdown')?.enable();
      } else {
        this.reportForm.get('bookingsDropdown')?.disable();
      }
      console.log('bookings:', this.bookings);
    } catch (error) {
      console.error('Error loading user bookings', error);
    }
  }

}
