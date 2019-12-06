import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {SgilService} from '../service/sgil.service';

@Component({
  selector: 'app-addtrajet',
  templateUrl: './addtrajet.component.html',
  styleUrls: ['./addtrajet.component.css']
})
export class AddtrajetComponent implements OnInit {

  processValidation = false;
  add = false;
  trajetToupdate = false ;
  public idTrajet = 0;
  trajetForm = new FormGroup({
    lieuc: new FormControl('', Validators.required),
    lieud: new FormControl('', Validators.required),
    tel: new FormControl('', Validators.required),
    descolis: new FormControl('', Validators.required)
  });
  update = false;
  constructor(public dialogRef: MatDialogRef<AddtrajetComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private gs: SgilService) { }

  ngOnInit() {
    if (this.data.id !== undefined && this.data.id !== null) {
      console.log('data for edit ' + this.data);
      this.loadBankToEdit(this.data.id);
    }
  }


  updateTrajet() {
      const trajet = this.trajetForm.value;
      trajet.id = this.idTrajet;

      this.gs.updateTrajet(trajet).subscribe(rep => {
        console.log('MIS A JOUR  reussie');
      }, error => {
        console.log('error ' + error);

      });

  }

  loadBankToEdit(id: number) {
    this.gs.getTrajetById(+id)
      .subscribe(trajet => {
          this.idTrajet = trajet.id ;
          console.log('livreur for edit ' + trajet);
          this.trajetToupdate = true;
          // Remplir les colonnes du formulaire
          this.trajetForm.patchValue({
            lieuc: trajet.lieuc  ,
            lieud: trajet.lieud ,
            tel: trajet.tel ,
            descolis: trajet.descolis,
            id : trajet.id
          });
        },
        error => {
          console.log('error for edit ' + error);

        }
      );
  }

}
