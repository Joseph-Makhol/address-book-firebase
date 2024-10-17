import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule for ngModel
import { CommonModule } from '@angular/common';  // Import CommonModule for *ngFor
import { EmployeeDbService } from './employee-db.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],  // Add FormsModule and CommonModule
  templateUrl: './app.component.html',
})
export class AppComponent {
  firstName = '';
  lastName = '';
  position = '';
  employees: any[] = [];

  constructor(private employeeService: EmployeeDbService) {}

  // Add an employee
  addEmployee() {
    const employee = {
      firstName: this.firstName,
      lastName: this.lastName,
      position: this.position
    };

    this.employeeService.addEmployee(employee).then(() => {
      console.log('Employee added successfully!');
      this.firstName = '';
      this.lastName = '';
      this.position = '';
    });
  }

  // Fetch the employee list
  getEmployees() {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }
}
