import { Component, Input, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { DataService } from '../../../services/data.service';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { ImageComponentEditorComponent } from '../../component-editors/image-component-editor/image-component-editor.component';
import { IComponent, IImageLayer } from '../../../image-definitions';

@Component({
  selector: 'app-static-layer-editor',
  standalone: true,
  imports: [
    NgFor,
    ButtonModule,
    InputTextModule,
    TooltipModule,
    ImageComponentEditorComponent,
  ],
  templateUrl: './static-layer-editor.component.html',
  styleUrl: './static-layer-editor.component.scss'
})
export class StaticLayerEditorComponent {
  @Input({ required: true }) model!: IImageLayer;
  @Input({ required: true }) canMoveEarlier!: boolean;
  @Input({ required: true }) canMoveLater!: boolean;

  dataService = inject(DataService);

  addNewComponentButton_Click() {
    this.dataService.addComponent(this.model, 1);
  }

  moveLayerEarlierButton_Click() {
    this.dataService.moveLayerEarlier(this.model);
  }

  moveLayerLaterButton_Click() {
    this.dataService.moveLayerLater(this.model);
  }
  deleteLayerButton_Click() {
    this.dataService.removeLayer(this.model);
  }

  onMoveComponentEarlier(component: IComponent) {
    this.dataService.moveComponentEarlier(this.model, component);
  }

  onMoveComponentLater(component: IComponent) {
    this.dataService.moveComponentLater(this.model, component);
  }

  onDeleteComponent(component: IComponent) {
    this.dataService.removeComponent(this.model, component);
  }
}
