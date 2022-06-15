import { Injectable } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { DetailComponent } from "src/app/main/detail/detail.component";

@Injectable({
    providedIn: 'root'
})
export class ModalMessageService {

   dialogConfig = new MatDialogConfig();

   constructor(private dialog: MatDialog) {
       this.dialogConfig.autoFocus = true;
   }

   showDetail(text: string) {
    this.dialogConfig.data = {
        description: text
    }
    this.dialogConfig.disableClose = false;
    this.dialog.open(DetailComponent, this.dialogConfig);
    }

}
