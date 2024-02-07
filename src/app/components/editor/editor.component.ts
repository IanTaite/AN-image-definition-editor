import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { LayerEditorComponent } from '../layer-editor/layer-editor.component';
import { ImageDefinition, ImageLayer } from '../../data-model';
import { DataService } from '../../services/data.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [AsyncPipe, LayerEditorComponent],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss',
})
export class EditorComponent implements OnChanges {
  @Input({ required: true }) model!: ImageDefinition;
  private dataService = inject(DataService);
  model$ = this.dataService.data$;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('EditorComponent.ngOnChanges', changes);
  }

  orderedLayers(layers: ImageLayer[]) {
    return layers.sort((a, b) => a.position - b.position);
  }

  addNewLayerButton_Click() {
    this.dataService.addNewLayer({
      id: Date.now().toString(),
      name: 'New Layer',
      position: 0,
      components: [],
    });
  }

  deleteLayerButton_Click(layer: ImageLayer) {
    this.dataService.deleteLayer(layer);
  }
}
