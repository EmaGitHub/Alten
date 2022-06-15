import { NgModule } from '@angular/core';
import { ModalComponent } from './components/modal/modal.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
    entryComponents: [
        SpinnerComponent
  ],
  declarations: [
      ModalComponent,
      SpinnerComponent
  ],
  imports: [
      FormsModule, 

      /* Material */
      MatProgressSpinnerModule,
      MatDialogModule,
      MatExpansionModule
  ],
  exports: [
      ModalComponent,
      SpinnerComponent,
      FormsModule,

      /* Material */
      MatProgressSpinnerModule,
      MatDialogModule,
      MatExpansionModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ]
})
export class SharedModule { }
