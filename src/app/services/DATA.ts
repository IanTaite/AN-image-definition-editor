export const SAMPLE_DATA = {
  id: '001',
  name: 'Test Document',
  clientId: 'clientname',
  imageSizeTemplateId: 'image-template id',
  outputImageType: 2,
  variantKeys: [],
  imageLayers: [
    {
      layerType: 1,
      useTransformKeys: false,
      layerPosition: 0,
      components: [
        {
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
      layerType: 2,
      useTransformKeys: false,
      layerPosition: 1,
      components: [
        {
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
  deleted: false,
  dataStorageKey: {
    id: 'clientname',
    partition: 'Client001',
    usePartitionKey: true,
  },
  etag: '\u00220100d59c-0000-1100-0000-65c4eeba0000\u0022',
};
