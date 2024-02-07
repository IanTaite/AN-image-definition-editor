import { Injectable } from '@angular/core';
import { BehaviorSubject, of, switchMap } from 'rxjs';
import { DATA } from '../data';
import { ImageLayer } from '../data-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private model = DATA;
  private dataSubject = new BehaviorSubject<number>(0);
  data$ = this.dataSubject.pipe(switchMap(() => of(this.model)));

  addNewLayer(layerProperties: ImageLayer) {
    const highestLayerPosition = this.model.layers.reduce((highest, layer) => {
      return highest > layer.position ? highest : layer.position;
    }, -1);
    this.model.layers.push({
      ...layerProperties,
      id: Date.now().toString(),
      position: highestLayerPosition + 1,
    });
  }
  addNewComponentToLayer(layer: ImageLayer, newComponent: any) {
    layer.components.push(newComponent);
  }
  removeComponentFromLayer(layer: ImageLayer, component: any) {
    const index = layer.components.findIndex(c => c.id === component.id);
    layer.components.splice(index, 1);
  }

  deleteLayer(layer: ImageLayer) {
    const index = this.model.layers.findIndex(l => l.id === layer.id);
    this.model.layers.splice(index, 1);
  }
}
