import { Component, Input, inject } from '@angular/core';
import { ComponentEditorComponent } from '../component-editor/component-editor.component';
import { ImageComponent, ImageLayer } from '../../data-model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-layer-editor',
  standalone: true,
  imports: [ComponentEditorComponent],
  templateUrl: './layer-editor.component.html',
  styleUrl: './layer-editor.component.scss'
})
export class LayerEditorComponent {
  @Input({required: true}) model!: ImageLayer;
  dataService = inject(DataService);

  addNewComponentButton_Click() {
    this.dataService.addNewComponentToLayer(this.model, {
      id: Date.now().toString(),
      name: 'New Component',
      type: 1,
    });
  }

  removeComponentButton_Click(component: ImageComponent) {
    this.dataService.removeComponentFromLayer(this.model, component);
  }
}
