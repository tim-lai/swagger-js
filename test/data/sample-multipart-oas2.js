/**
 * Note: OAS2 spec doesn't officially support array of files
 * But specifying `type: 'string'` as a workaround (should) work in SwaggerClient
 * (though not in SwaggerUI)
 * items: {
      type: 'string',
      format: 'binary'
    }
 */

export default {
  swagger: '2.0',
  info: {
    version: '1',
    title: 'MULTI PART TEST',
    description: ''
  },
  host: '',
  basePath: '/api/v1',
  schemes: [
    'http'
  ],
  paths: {
    '/land/content/ViewOfAuthOwner': {
      post: {
        consumes: [
          'multipart/form-data'
        ],
        produces: [
          'application/json'
        ],
        summary: '',
        parameters: [
          {
            in: 'formData',
            name: 'hhlContent:sort',
            description: '',
            default: 'id',
            type: 'string',
            enum: [
              'id',
              'title'
            ]
          },
          {
            in: 'formData',
            name: 'hhlContent:order',
            description: '',
            default: 'desc',
            type: 'string',
            enum: [
              'asc',
              'desc'
            ]
          },
          {
            in: 'formData',
            name: 'email[]',
            description: 'The list of emails.',
            type: 'array',
            collectionFormat: 'multi',
            items: {
              type: 'string'
            }
          }
        ],
        responses: {
          200: {
            description: '',
            schema: {
              type: 'object'
            }
          }
        }
      },
    },
    '/land/content/uploadImage': {
      post: {
        consumes: [
          'multipart/form-data'
        ],
        produces: [
          'application/json'
        ],
        summary: 'upload image(s)',
        parameters: [
          {
            in: 'formData',
            name: 'imageId',
            description: '',
            default: 'id',
            type: 'string'
          },
          {
            in: 'formData',
            name: 'images[]',
            description: 'The list of files',
            type: 'array',
            items: {
              type: 'string',
              format: 'binary'
            }
          }
        ],
        responses: {
          200: {
            description: '',
            schema: {
              type: 'object'
            }
          }
        }
      }
    }
  }
}
