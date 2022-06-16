import { Injectable } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Post } from "src/app/interfaces/post.interface";
import { DetailComponent } from "src/app/pages/detail/detail.component";

@Injectable({
    providedIn: 'root'
})
export class ModalMessageService {

   dialogConfig = new MatDialogConfig();

   constructor(private dialog: MatDialog) {
       this.dialogConfig.autoFocus = true;
   }

   showDetail(post: Post) {
    this.dialogConfig.data = {
        description: post
    }
    this.dialogConfig.disableClose = false;
    const dialogRef = this.dialog.open(DetailComponent, this.dialogConfig);
    return dialogRef;
    }

}
