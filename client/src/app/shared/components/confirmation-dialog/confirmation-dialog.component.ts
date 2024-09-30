import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [MatButton],
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.scss'
})
export class ConfirmationDialogComponent {
  dialogref = inject(MatDialogRef<ConfirmationDialogComponent>);
  data = inject(MAT_DIALOG_DATA); 

  onConfirm() {
    this.dialogref.close(true);
  }

  onCancel() {
    this.dialogref.close();
  }
}
