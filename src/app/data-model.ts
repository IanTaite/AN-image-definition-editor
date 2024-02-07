export interface ImageComponent {
  id: string;
  name: string;
  type: number;
}

export interface ImageLayer {
  id: string;
  name: string;
  position: number;
  components: ImageComponent[];
}

export interface ImageDefinition {
  id: string;
  name: string;
  layers: ImageLayer[];
}
