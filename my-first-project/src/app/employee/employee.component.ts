import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';

export interface EmployeeData {
  name: string;
  salary: number;
  rank: string;
}

const ELEMENT_DATA: EmployeeData[] = [
  {name: 'Madhav', salary: 10000, rank: 'Software Developer'},
  {name: 'Tarun', salary: 20000, rank: 'Software Architect'},
  {name: 'Deepa', salary: 15000, rank: 'Application Developer'},
  {name: 'Kounj', salary: 14000, rank: 'Programmer Analyst'},
  {name: 'Murali', salary: 25000, rank: 'Consultant'},
  {name: 'Jinesh', salary: 23000, rank: 'Manager'},
];


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  displayedColumns: string[] = ['name', 'salary', 'rank'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
