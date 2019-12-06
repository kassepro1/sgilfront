import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {SgilService} from '../service/sgil.service';
import {Trajet} from '../model/trajet';
// @ts-ignore
import {Livreur} from '../model/livreurs';
import {AddlivreurComponent} from '../addlivreur/addlivreur.component';
import {AddTrajetComponent} from '../add-trajet/add-trajet.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AjoutrajetComponent } from '../ajoutrajet/ajoutrajet.component';
import { DetailTrajetComponent } from '../detail-trajet/detail-trajet.component';

@Component({
  selector: 'app-trajets',
  templateUrl: './trajets.component.html',
  styleUrls: ['./trajets.component.css']
})
export class TrajetsComponent implements OnInit {

  public displayedColumns = ['lieuc', 'lieud', 'descolis', 'datecmd', 'etat', 'details' , 'update', 'delete'
  ];
  dataSource: MatTableDataSource<Trajet>;
  trajets: Trajet[];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private sg: SgilService , private  dialog: MatDialog) { }


  ngOnInit() {
    this.getAllTrajets();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public getAllTrajets() {
    console.log('entree');

    this.sg.getAllTrajets()
      .subscribe(res => {
        console.log(res);
        // this.dataSource = res as Client[];
        this.trajets = res;
        this.dataSource = new MatTableDataSource(this.trajets );
      }, error => {
        console.log(error);
      });
  }
  public redirectToDetails = (id: string) => {

  }

  public redirectToUpdate = (id: string) => {

  }

  public redirectToDelete = (id: string) => {
     this.sg.deleteTrajet(+id).subscribe(rep=>{
        console.log('succes deleting');
     },error=>{
      console.log('error deleting');
     });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getColor(etat) {
    switch (etat) {
      case 2:
        return 'green';
      case 1 :
        return 'blue';
      case 0:
        return 'red';
    }
  }

  openEditDialog(trajet: Trajet, update: boolean): void {
    const dialogRef = this.dialog.open(AjoutrajetComponent, {
      width: '600px',
      height: '600px',
      data: { id: trajet.id, update },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getAllTrajets();
    });
  }
  openDetailDialog(trajet: Trajet, update: boolean): void {
    const dialogRef = this.dialog.open(DetailTrajetComponent, {
      width: '600px',
      height: '600px',
      data: { id: trajet.id, update },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getAllTrajets();
    });
  }
}
