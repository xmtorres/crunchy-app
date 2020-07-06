import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  accepted: boolean;
}

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {

  @Input() onConfirmCallback: () => void;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialogRef: MatDialogRef<DeleteModalComponent>) { console.log(this.data)}

  onCloseClick(): void {
    this.data.accepted = false;
    this.dialogRef.close();
  }

  onDeleteClick(): void{
    this.data.accepted = true;
  }

  ngOnInit(): void {
  }

}

