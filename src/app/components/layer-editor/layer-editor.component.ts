import { Component, Input, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { ComponentEditorComponent } from '../component-editor/component-editor.component';
import { ImageComponent, ImageLayer } from '../../data-model';
import { DataService } from '../../services/data.service';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-layer-editor',
  standalone: true,
  imports: [
    NgFor,
    ButtonModule,
    InputTextModule,
    TooltipModule,
    ComponentEditorComponent,
  ],
  templateUrl: './layer-editor.component.html',
  styleUrl: './layer-editor.component.scss',
})
export class LayerEditorComponent {
  @Input({ required: true }) model!: ImageLayer;
  @Input({ required: true }) canMoveEarlier!: boolean;
  @Input({ required: true }) canMoveLater!: boolean;

  dataService = inject(DataService);

  addNewComponentButton_Click() {
    this.dataService.addNewComponentToLayer(this.model, {
      id: Date.now().toString(),
      name: 'New Component',
      type: 1,
    });
  }

  moveLayerEarlierButton_Click() {
    this.dataService.moveLayerEarlier(this.model);
  }

  moveLayerLaterButton_Click() {
    this.dataService.moveLayerLater(this.model);
  }
  deleteLayerButton_Click() {
    this.dataService.deleteLayer(this.model);
  }

  onMoveComponentEarlier(component: ImageComponent) {
    this.dataService.moveComponentEarlier(this.model, component);
  }

  onMoveComponentLater(component: ImageComponent) {
    this.dataService.moveComponentLater(this.model, component);
  }

  onDeleteComponent(component: ImageComponent) {
    this.dataService.removeComponentFromLayer(this.model, component);
  }
}
