import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Donut } from '../../models';

@Component({
  selector: 'app-donut-form',
  templateUrl: './donut-form.component.html',
  styleUrls: ['./donut-form.component.scss']
})
export class DonutFormComponent {
  icons: string[] = [
    'caramel-swirl',
    'glazed-fudge',
    'just-chocolate',
    'sour-supreme',
    'strawberry-glaze',
    'vanilla-sundae',
    'zesty-lemon'
  ]
  @Input() donut!: Donut
  @Output() create = new EventEmitter<Donut>();
  @Output() update = new EventEmitter<Donut>();
  @Output() delete = new EventEmitter<string>()

  constructor() { }

  handleCreate(form: NgForm): void {
    const { valid: isValid, form: formRef, value } = form;
    if (!isValid) {
      formRef.markAllAsTouched()
      return
    }
    this.create.emit(value)
  }

  handleUpdate(form: NgForm): void {
    const { valid: isValid, form: formRef, value } = form;
    if (!isValid) {
      formRef.markAllAsTouched()
      return
    }
    this.update.emit({ id: this.donut.id, ...value });
  }

  handleDelete(): void {
    this.delete.emit(this.donut.id || '')
  }
}