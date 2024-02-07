import { ImageDefinition, ImageLayer, ImageComponent } from './data-model';

export const DATA: ImageDefinition = {
  id: '1',
  name: 'Definition 1',
  layers: [
    {
      id: '1',
      name: 'First Layer',
      position: 0,
      components: [
        {
          id: '1',
          name: 'test A',
          type: 1,
        },
        {
          id: '12',
          name: 'test B',
          type: 1,
        },
      ],
    },
    {
      id: '2',
      name: 'Second Layer',
      position: 1,
      components: [
        {
          id: '10',
          name: 'Test Component',
          type: 2,
        },
      ],
    },
  ],
};
