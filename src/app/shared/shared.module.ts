import { NgModule } from '@angular/core';
import { ModalComponent } from './components/modal/modal.component';

import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
      ModalComponent
  ],
  imports: [
      /* Material */
      MatProgressSpinnerModule,
      MatDialogModule,
      MatExpansionModule
  ],
  exports: [
      ModalComponent,
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
