import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Employee {
  id?: string;
  firstName: string;
  lastName: string;
  position: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeDbService {
  constructor(private firestore: Firestore) {}

  // Add a new employee to Firestore
  addEmployee(employee: Employee) {
    const employeeRef = collection(this.firestore, 'employees');
    return addDoc(employeeRef, employee);
  }

  // Retrieve employees from Firestore
  getEmployees(): Observable<Employee[]> {
    const employeeRef = collection(this.firestore, 'employees');
    return collectionData(employeeRef, { idField: 'id' }) as Observable<Employee[]>;
  }
}
