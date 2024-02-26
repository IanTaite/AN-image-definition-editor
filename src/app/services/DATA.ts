import { IImageDefinition } from "../image-definitions";

export const SAMPLE_DATA: IImageDefinition = {
  id: '001',
  name: 'Test Document',
  clientId: 'clientname',
  imageSizeTemplateId: 'image-template id',
  outputImageType: 2,
  variantKeys: [],
  imageLayers: [
    {
      id: '001',
      layerType: 1,
      useTransformKeys: false,
      layerPosition: 0,
      components: [
        {
          id: '23424',
          paths: [
            {
              name: 'default-image',
              path: 'default-image.jpg',
            },
          ],
          componentType: 1,
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
        },
      ],
      textDataSet: null,
      defaultImage: null,
      useVariants: false,
    },
    {
      id: '002',
      layerType: 1,
      useTransformKeys: false,
      layerPosition: 0,
      components: [
        {
          id: '56734',
          paths: [
            {
              name: 'default-image',
              path: 'default-image.jpg',
            },
          ],
          componentType: 1,
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
        },
      ],
      textDataSet: null,
      defaultImage: null,
      useVariants: false,
    },
    {
      id: '003',
      layerType: 1,
      useTransformKeys: false,
      layerPosition: 0,
      components: [
        {
          id: '52852',
          paths: [
            {
              name: 'default-image',
              path: 'default-image.jpg',
            },
          ],
          componentType: 1,
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
        },
      ],
      textDataSet: null,
      defaultImage: null,
      useVariants: false,
    },
    {
      id: '004',
      layerType: 2,
      useTransformKeys: false,
      layerPosition: 1,
      components: [
        {
          id: '34243',
          paths: null,
          componentType: 2,
          position: {
            x: 0,
            y: 0,
            width: 1208,
            height: 1208,
          },
          textFormat: '{dataSetValue}',
          defaultText: 'default text',
          variants: [],
          sets: [
            {
              setAccount: 'keyrings',
              setName: 'keyring_this_human_belongs_to_name',
            },
          ],
        },
      ],
      textDataSet: {
        name: 'data set name',
      },
      defaultImage: {
        files: [
          {
            name: 'default-image',
            path: 'default.png',
          },
        ],
      },
      useVariants: false,
    },
  ],
  etag: '\u00220100d59c-0000-1100-0000-65c4eeba0000\u0022',
};
