import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddtrajetComponent } from '../addtrajet/addtrajet.component';
import { SgilService } from '../service/sgil.service';

@Component({
  selector: 'app-detail-trajet',
  templateUrl: './detail-trajet.component.html',
  styleUrls: ['./detail-trajet.component.css']
})
export class DetailTrajetComponent implements OnInit {
  processValidation = false;
  add = false;
  trajetToupdate = false ;
  public idTrajet = 0;
  trajetForm = new FormGroup({
    lieuc: new FormControl('', Validators.required),
    lieud: new FormControl('', Validators.required),
    tel: new FormControl('', Validators.required),
    descolis: new FormControl('', Validators.required),
    client : new FormControl('', Validators.required),
    livreur :new FormControl('', Validators.required),
    telclient :new FormControl('', Validators.required),
    tellivreur :new FormControl('', Validators.required),
  });
  update = false;
  constructor(public dialogRef: MatDialogRef<DetailTrajetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private gs: SgilService) { }

  ngOnInit() {
    if (this.data.id !== undefined && this.data.id !== null) {
      console.log('data for edit ' + this.data);
      this.loadBankToEdit(this.data.id);
    }
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
            client : trajet.client.nomComplet ,
            livreur : trajet.livreur.nomComplet ,
            telclient : trajet.client.tel,
            tellivreur : trajet.livreur.tel,
            id : trajet.id
          });
        },
        error => {
          console.log('error for edit ' + error);

        }
      );
  }

}
