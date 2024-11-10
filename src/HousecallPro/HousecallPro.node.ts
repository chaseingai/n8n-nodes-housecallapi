import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { N8NPropertiesBuilder, N8NPropertiesBuilderConfig } from '@devlikeapro/n8n-openapi-node';
import * as doc from './openapi.json';

const config: N8NPropertiesBuilderConfig = {};
const parser = new N8NPropertiesBuilder(doc, config);
const properties = parser.build();

export class HousecallPro implements INodeType {
    description: INodeTypeDescription = {
      displayName: 'Housecall Pro',
      name: 'housecallPro',
      icon: 'file:logo.svg',
      group: ['transform'],
      version: 1,
      subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
      description: 'Interact with Housecall Pro API',
      defaults: {
        name: 'Housecall Pro',
      },
      inputs: ['main'],
      outputs: ['main'],
      credentials: [
        {
            name: 'housecallProApi',
            required: true,
          },
      ],
      requestDefaults: {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: '={{"Bearer " + $credentials.apiKey}}',
        },
        baseURL: 'https://api.housecallpro.com',
      },
      properties: properties, // Move properties here
    };
  }

