# n8n-nodes-housecallapi

This is an n8n community node that enables you to use the Housecall Pro API in your n8n workflows.

Housecall Pro is a comprehensive software solution designed for home service professionals. It offers features such as customer management, scheduling, invoicing, payments, and more, to help service professionals streamline their operations and grow their businesses.

- **This API is available to any Pro on the MAX or XL Plan**

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  
[Compatibility](#compatibility)  
[Usage](#usage)  
[Resources](#resources)  
[Version history](#version-history)
[Disclaimer](#disclaimer)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

- **Get Customers**: Retrieve a list of customers.
- **Create Customer**: Add a new customer to Housecall Pro.
- **Update Customer**: Modify customer information.
- **Delete Customer**: Remove a customer from the system.
- **Get Jobs**: List all jobs.
- **Create Job**: Schedule a new job for a customer.
- **Update Job**: Adjust details for an existing job.
- **Delete Job**: Remove a job from the schedule.
- _Add any other operations your node supports here._

## Credentials

To authenticate with the Housecall Pro API, users need to:
1. Sign up for a Housecall Pro account if they haven’t already.
2. Generate an API key or OAuth token within their Housecall Pro account settings.
3. Configure these credentials in n8n for the Housecall API node.

## Compatibility

- Minimum n8n version: 1.66.0
- Tested with Housecall Pro API version 1.0
- Known compatibility issues: _List any if applicable_

## Usage

This node supports common operations with Housecall Pro. Users can build workflows that automatically retrieve, create, or manage customer data, jobs, and other resources provided by Housecall Pro.

For n8n basics, see the [Try it out](https://docs.n8n.io/try-it-out/) documentation.

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
* [Housecall Pro API documentation](https://docs.housecallpro.com/)

## Version history

* **1.0.0**: Initial release with core operations for customers and jobs.

## Disclaimer

This project is an unofficial n8n node and is not affiliated with, endorsed, or supported by Housecall Pro. Housecall Pro is a registered trademark of its respective owner. This node is provided as-is for community use, and the creator of this node does not have any affiliation with Housecall Pro.


