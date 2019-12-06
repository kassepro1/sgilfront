import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Client} from '../model/client';
import {SgilService} from '../service/sgil.service';
import { Noteclient } from '../model/noteclient';

@Component({
  selector: 'app-noteclient',
  templateUrl: './noteclient.component.html',
  styleUrls: ['./noteclient.component.css']
})
export class NoteclientComponent implements OnInit {

  public displayedColumns = ['nomComplet', 'note', 'trajet', 'datenote'];
  dataSource: MatTableDataSource<Noteclient>;
  Noteclient: Noteclient[];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private sg: SgilService) { }

  ngOnInit() {
    this.getAllNoteClient();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  private getAllNoteClient() {
    this.sg.getAllNoteClient().subscribe(rep=>{
       this.Noteclient = rep;
       this.dataSource = new MatTableDataSource(this.Noteclient);
    },error=>{

    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
