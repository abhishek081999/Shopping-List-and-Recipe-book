import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingerdient } from 'src/app/shared/ingedient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameInput') nameInputRef:ElementRef;
 @ViewChild('amountInput') amountInputRef:ElementRef;
 @Output() ingredientAdded = new EventEmitter<Ingerdient>();
  constructor() { }

  ngOnInit(): void {
  }
  onAddItem(){
    const ingName =this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
const newIngerdient = new Ingerdient(ingName,ingAmount);
this.ingredientAdded.emit(newIngerdient);
  }

}
