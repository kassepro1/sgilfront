import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Client} from '../model/client';
import {SgilService} from '../service/sgil.service';
// @ts-ignore
import {Livreur} from '../model/livreurs';
import {AddlivreurComponent} from '../addlivreur/addlivreur.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-livreurs',
  templateUrl: './livreurs.component.html',
  styleUrls: ['./livreurs.component.css']
})
export class LivreursComponent implements OnInit {

  public displayedColumns = ['nomComplet', 'tel', 'email', 'details', 'delete'
  ];
  dataSource: MatTableDataSource<Livreur>;
  livreurs: Livreur[];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private sg: SgilService, private  dialog: MatDialog) { }

  ngOnInit() {
    this.getAllLivreurs();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public getAllLivreurs() {
    console.log('entree');

    this.sg.getAllLivreurs()
      .subscribe(res => {
        console.log(res);
        // this.dataSource = res as Client[];
        this.livreurs = res;
        this.dataSource = new MatTableDataSource(this.livreurs );
      }, error => {
        console.log(error);
      });
  }
  public redirectToDetails = (id: number) => {

  }

  public redirectToUpdate = (id: string) => {

  }
  openEditDialog(livreur: Livreur, update: boolean): void {
    const dialogRef = this.dialog.open(AddlivreurComponent, {
      width: '600px',
      height: '700px',
      data: { id: livreur.id, update },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getAllLivreurs();
    });
  }


  public redirectToDelete = (livreur) => {

    Swal.fire({
      title: 'Etes vous sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui!'
    }).then((result) => {
      this.sg.deleteLivreur(livreur).subscribe(
        rep => {
            // @ts-ignore
          if (rep === 1) {
            Swal.fire(
              'Deleted!',
              'Supprimer .',
              'success'
            );
              console.log('suppress with succes ');
            this.getAllLivreurs();
            }
        }, error => {
  
        }
      );
     
    });
  
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddlivreurComponent);

    dialogRef.afterClosed().subscribe((result) => {
      // tslint:disable-next-line:no-console
      console.log(`Dialog result: ${result}`);
    });
  }
}
