import { Injectable } from '@angular/core';
import { BehaviorSubject, of, switchMap } from 'rxjs';
import { DATA } from '../data';
import { ImageComponent, ImageLayer } from '../data-model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private model = DATA;
  private dataSubject = new BehaviorSubject<number>(0);
  data$ = this.dataSubject.pipe(switchMap(() => of(this.model)));

  addNewComponentToLayer(layer: ImageLayer, newComponent: ImageComponent) {
    layer.components.push(newComponent);
  }

  removeComponentFromLayer(layer: ImageLayer, component: ImageComponent) {
    const index = layer.components.findIndex((c) => c.id === component.id);
    layer.components.splice(index, 1);
  }

  moveComponentEarlier(layer: ImageLayer, component: ImageComponent) {
    const index = layer.components.findIndex((c) => c.id === component.id);
    const temp = layer.components[index];
    layer.components[index] = layer.components[index - 1];
    layer.components[index - 1] = temp;
  }

  moveComponentLater(layer: ImageLayer, component: ImageComponent) {
    const index = layer.components.findIndex((c) => c.id === component.id);
    const temp = layer.components[index];
    layer.components[index] = layer.components[index + 1];
    layer.components[index + 1] = temp;
  }

  moveLayerEarlier(layer: ImageLayer) {
    const index = this.model.imageLayers.findIndex((l) => l.id === layer.id);
    const temp = this.model.imageLayers[index];
    this.model.imageLayers[index] = this.model.imageLayers[index - 1];
    this.model.imageLayers[index - 1] = temp;
    this.resequenceLayers();
  }

  moveLayerLater(layer: ImageLayer) {
    const index = this.model.imageLayers.findIndex((l) => l.id === layer.id);
    const temp = this.model.imageLayers[index];
    this.model.imageLayers[index] = this.model.imageLayers[index + 1];
    this.model.imageLayers[index + 1] = temp;
    this.resequenceLayers();
  }

  addNewLayer(layerProperties: ImageLayer) {
    const highestLayerPosition = this.model.imageLayers.reduce((highest, layer) => {
      return highest > layer.position ? highest : layer.position;
    }, -1);
    this.model.imageLayers.push({
      ...layerProperties,
      id: Date.now().toString(),
      position: highestLayerPosition + 1,
    });
  }

  deleteLayer(layer: ImageLayer) {
    const index = this.model.imageLayers.findIndex((l) => l.id === layer.id);
    this.model.imageLayers.splice(index, 1);
    this.resequenceLayers();
  }

  private resequenceLayers() {
    this.model.imageLayers.forEach((l, i) => {
      if (l.position !== i) {
        l.position = i;
      }
    });
  }
}
