import { NgModule } from '@angular/core';
import { ModalComponent } from './components/modal/modal.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app.routing.module.';

@NgModule({
    entryComponents: [
        SpinnerComponent
  ],
  declarations: [
      ModalComponent,
      SpinnerComponent,
      NavbarComponent
  ],
  imports: [
      FormsModule, 
      CommonModule,
      AppRoutingModule,

      /* Material */
      MatProgressSpinnerModule,
      MatDialogModule,
      MatExpansionModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      MatButtonModule
  ],
  exports: [
      FormsModule,
      NavbarComponent,

      /* Material */
      MatProgressSpinnerModule,
      MatDialogModule,
      MatExpansionModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      MatButtonModule
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
