import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator:any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Nithin', weight:'MEARN', symbol: 'Software Developer'},
  {position: 2, name: 'Hari', weight: 'MEARN', symbol: 'Software Developer'},
  {position: 3, name: 'Amal', weight: 'MEARN', symbol: 'Software Developer'},
  {position: 4, name: 'Saran', weight: 'MEARN', symbol: 'Software Developer'},
  {position: 5, name: 'Nandhu', weight: 'MEARN', symbol: 'Software Develope'},
  {position: 6, name: 'Carbon', weight: 'MEARN', symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 'MEARN', symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 'MEARN', symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 'MEARN', symbol: 'F'},
  {position: 10, name: 'Neon', weight: 'MEARN', symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 'MEARN', symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 'MEARN', symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 'MEARN', symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 'MEARN', symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 'MEARN', symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 'MEARN', symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 'MEARN', symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 'MEARN', symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight:'MEARN', symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 'MEARN', symbol: 'Ca'},
];

