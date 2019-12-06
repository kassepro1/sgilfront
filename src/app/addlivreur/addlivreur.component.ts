import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {SgilService} from '../service/sgil.service';
import {tap} from 'rxjs/operators';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-addlivreur',
  templateUrl: './addlivreur.component.html',
  styleUrls: ['./addlivreur.component.css']
})
export class AddlivreurComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddlivreurComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private gs: SgilService) { }

  maskPhone = [/\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

  processValidation = false;
  add = false;
  livreurToupdate = false ;
  public idLivreur = 0;
  livreurForm = new FormGroup({
    nomComplet: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    tel: new FormControl('', Validators.required),
    cni: new FormControl('', Validators.required),
    matricule: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });
  update = false;

  ngOnInit() {
    if (this.data.id !== undefined && this.data.id !== null) {
      console.log('data for edit ' + this.data);
      this.loadBankToEdit(this.data.id);
    }
  }

  addLivreur() {
    console.log(this.livreurForm.value);
    // tslint:disable-next-line:triple-equals
    if (this.livreurToupdate == false) {
      this.gs.addLivreur(this.livreurForm.value).subscribe(rep => {
        if(rep==0){
          Swal.fire({
            icon: 'success',
            title: 'Email ou le Tel ou le CNI existe deja ',
            showConfirmButton: false,
            timer: 2500,
          });
        }
        console.log('insertion reussie');
        if(rep==1){
          Swal.fire({
            icon: 'success',
            title: 'Insertion reussie',
            showConfirmButton: false,
            timer: 2500,
          });
        }
      
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Erreur lors de l\'insertion  ! ',
        });
        console.log('error ' + error);

      });
    } else {
    const livreur = this.livreurForm.value;
    livreur.id = this.idLivreur;

    this.gs.updateLivreur(livreur).subscribe(rep => {
      Swal.fire({
        icon: 'success',
        title: 'Mis a jour reussie',
        showConfirmButton: false,
        timer: 2500,
      });
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Erreur lors de la mis a jour ! ',
        });

      });
    }

  }

  loadBankToEdit(id: number) {
    this.gs.getLivreurById(+id)
      .subscribe(livreur => {
          this.idLivreur = livreur.id ;
          console.log('livreur for edit ' + livreur);
          this.livreurToupdate = true;
          // Remplir les colonnes du formulaire
          this.livreurForm.patchValue({
            nomComplet: livreur.nomComplet  ,
            email: livreur.email ,
            tel: livreur.tel ,
            cni: livreur.cni,
            matricule: livreur.matricule ,
            description: livreur.description ,
            id : livreur.id
          });
        },
        error => {
          console.log('error for edit ' + error);

        }
      );
  }
}
