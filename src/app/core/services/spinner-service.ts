import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { SpinnerComponent } from "../../shared/components/spinner/spinner.component";

@Injectable({
    providedIn: 'root',
  })
export class SpinnerService {  

    dialogRef?: MatDialogRef<SpinnerComponent>;
  
    constructor(private dialog: MatDialog) {  } 
  
    start(message?: string) {    
      console.log("OPEN")
        this.dialogRef = this.dialog.open(SpinnerComponent,{  
            disableClose: true ,  
            data: message == ''|| message == undefined ? "" : message  
        });  
      };  
  
    stop(){  
        this.dialogRef?.close();  
    }    
} 