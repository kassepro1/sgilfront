import {Component, OnInit, ViewChild} from '@angular/core';
import {SgilService} from '../service/sgil.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Client} from '../model/client';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  public displayedColumns = ['nomComplet', 'tel', 'email', 'details', 'delete'
  ];
   dataSource: MatTableDataSource<Client>;
   clients: Client[];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private sg: SgilService) { }

  ngOnInit() {
    this.getAllOwners();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public getAllOwners() {
    console.log('entree');

    this.sg.getAllClients()
      .subscribe(res => {
        console.log(res);
       // this.dataSource = res as Client[];
        this.clients = res;
        this.dataSource = new MatTableDataSource(this.clients );
      }, error => {
        console.log(error);
      });
  }

  public redirectToDetails = (id: string) => {

  }

  public redirectToUpdate = (id: string) => {

  }

  public redirectToDelete = (client) => {

    Swal.fire({
      title: 'Etes vous sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui!'
    }).then((result) => {
      this.sg.deleteClient(client).subscribe(
        rep => {
            // @ts-ignore
          if (rep === 1) {
            Swal.fire(
              'Deleted!',
              'Supprimer .',
              'success'
            );
              console.log('suppress with succes ');
            this.getAllOwners();
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

}
