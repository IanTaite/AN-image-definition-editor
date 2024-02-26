import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Subject,
  catchError,
  of,
  shareReplay,
  switchMap,
  tap,
} from 'rxjs';
import { SAMPLE_DATA } from './DATA';
import {
  IImageLayer,
  IComponent,
  ITextDataSet,
  IImageDefinition,
} from '../image-definitions';

export enum LayerType {
  Static = 1,
  Text = 2,
}

export enum ComponentType {
  Image = 1,
  DirectSmile = 2,
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private model: IImageDefinition = SAMPLE_DATA;
  private dataSubject = new BehaviorSubject<number>(0);
  data$ = this.dataSubject.pipe(
    switchMap(() => {
      console.log('DataService.data$', this.model);
      return of(this.model);
    })
  );
  dataErrors$ = this.data$.pipe(catchError((err) => of(err)));

  layerTypesToComponentTypesMap = {
    Static: [ComponentType.Image],
    Text: [ComponentType.DirectSmile],
  };

  moveComponentEarlier(layer: IImageLayer, component: IComponent) {
    const index = layer.components.findIndex((c) => c === component);
    const temp = layer.components[index];
    layer.components[index] = layer.components[index - 1];
    layer.components[index - 1] = temp;
  }

  moveComponentLater(layer: IImageLayer, component: IComponent) {
    const index = layer.components.findIndex((c) => c === component);
    const temp = layer.components[index];
    layer.components[index] = layer.components[index + 1];
    layer.components[index + 1] = temp;
  }

  moveLayerEarlier(layer: IImageLayer) {
    const index = this.model.imageLayers.findIndex((l) => l === layer);
    const temp = this.model.imageLayers[index];
    this.model.imageLayers[index] = this.model.imageLayers[index - 1];
    this.model.imageLayers[index - 1] = temp;
    this.resequenceLayers();
  }

  moveLayerLater(layer: IImageLayer) {
    const index = this.model.imageLayers.findIndex((l) => l === layer);
    const temp = this.model.imageLayers[index];
    this.model.imageLayers[index] = this.model.imageLayers[index + 1];
    this.model.imageLayers[index + 1] = temp;
    this.resequenceLayers();
  }

  addLayer(layerType: LayerType) {
    const highestLayerPosition = this.model.imageLayers.reduce(
      (highestPosition, layer) => {
        return highestPosition > layer.layerPosition
          ? highestPosition
          : layer.layerPosition;
      },
      -1
    );
    const layer: IImageLayer = {
      id: this.createId(),
      layerType,
      useTransformKeys: false,
      layerPosition: highestLayerPosition + 1,
      components: [],
      textDataSet: null,
      defaultImage: null,
      useVariants: false,
    };
    this.model.imageLayers.push(layer);
  }

  removeLayer(layer: IImageLayer) {
    const index = this.model.imageLayers.findIndex((l) => l === layer);
    this.model.imageLayers.splice(index, 1);
    this.resequenceLayers();
  }

  addComponent(layer: IImageLayer, componentType: ComponentType) {
    const component: IComponent = {
      id: this.createId(),
      componentType,
      position: {
        x: 0,
        y: 0,
        width: 1208,
        height: 1208,
      },
      textFormat: '',
      defaultText: '',
      variants: [],
      sets: [],
    };
    layer.components.push(component);
  }

  removeComponent(layer: IImageLayer, component: IComponent) {
    const index = layer.components.findIndex((c) => c === component);
    layer.components.splice(index, 1);
  }

  private resequenceLayers() {
    this.model.imageLayers.forEach((l, i) => {
      l.layerPosition = i;
    });
  }

  private createId(minVal = 1000000, maxVal = 2000000) {
    const min = Math.ceil(minVal);
    const max = Math.floor(maxVal);
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result.toString();
  }
}
