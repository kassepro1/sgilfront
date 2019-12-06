import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Noteclient } from '../model/noteclient';
import { SgilService } from '../service/sgil.service';
import { Notelivreur } from '../model/notelivreur';

@Component({
  selector: 'app-notelivreur',
  templateUrl: './notelivreur.component.html',
  styleUrls: ['./notelivreur.component.css']
})
export class NotelivreurComponent implements OnInit {

  
  public displayedColumns = ['nomComplet', 'note', 'trajet', 'datenote'];
  dataSource: MatTableDataSource<Notelivreur>;
  notelivreur: Notelivreur[];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private sg: SgilService) { }

  ngOnInit() {
    this.getAllNoteClient();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  private getAllNoteClient() {
    this.sg.getAllNoteLivreur().subscribe(rep=>{
       this.notelivreur = rep;
       this.dataSource = new MatTableDataSource(this.notelivreur);
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
