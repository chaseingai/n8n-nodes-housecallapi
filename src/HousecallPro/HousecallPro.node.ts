import { IExecuteFunctions } from 'n8n-workflow';
import { INodeExecutionData } from 'n8n-workflow';

export class HousecallProNode {
    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
        const items = this.getInputData();
        const returnData: INodeExecutionData[] = [];

        for (let i = 0; i < items.length; i++) {
            try {
                // Example of accessing credentials
                const credentials = await this.getCredentials('housecallProApi');
                const apiKey = credentials.apiKey as string;

                // Use the apiKey and make your API call here, for example:
                const response = await this.helpers.request({
                    method: 'GET',
                    url: `https://api.housecallpro.com/v2/customers`,
                    headers: {
                        Authorization: `Bearer ${apiKey}`,
                    },
                });

                // Push the response data into returnData
                returnData.push({ json: response });
            } catch (error) {
                returnData.push({ json: { error: error.message } });
            }
        }

        // Return returnData directly
        return returnData;
    }
}


