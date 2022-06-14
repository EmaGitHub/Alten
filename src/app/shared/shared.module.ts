import { NgModule } from '@angular/core';
import { ModalComponent } from './components/modal/modal.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
    entryComponents: [
        SpinnerComponent
  ],
  declarations: [
      ModalComponent,
      SpinnerComponent
  ],
  imports: [
      /* Material */
      MatProgressSpinnerModule,
      MatDialogModule,
      MatExpansionModule
  ],
  exports: [
      ModalComponent,
      SpinnerComponent,
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
