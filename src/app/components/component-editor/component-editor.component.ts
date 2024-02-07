import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ImageComponent, ImageLayer } from '../../data-model';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-component-editor',
  standalone: true,
  imports: [ButtonModule, InputTextModule, TooltipModule],
  templateUrl: './component-editor.component.html',
  styleUrl: './component-editor.component.scss',
})
export class ComponentEditorComponent {
  @Input({ required: true }) layerModel!: ImageLayer;
  @Input({ required: true }) componentModel!: ImageComponent;
  @Input({ required: true }) canMoveEarlier!: boolean;
  @Input({ required: true }) canMoveLater!: boolean;
  @Output() moveEarlier = new EventEmitter<ImageComponent>();
  @Output() moveLater = new EventEmitter<ImageComponent>();
  @Output() deleteComponent = new EventEmitter<ImageComponent>();

  moveComponentEarlierButton_Click() {
    this.moveEarlier.emit(this.componentModel);
  }

  moveComponentLaterButton_Click() {
    this.moveLater.emit(this.componentModel);
  }

  deleteComponentButton_Click() {
    this.deleteComponent.emit(this.componentModel);
  }
}
