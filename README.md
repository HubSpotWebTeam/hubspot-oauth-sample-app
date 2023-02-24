# Hubspot OAuth App Sample

This is a sample project to be used as a starting point to use the HubSpot OAuth flow for simple apps.

## Pre-requisites

- Node.js 18.x or above
- Install the Hubspot CLI
- A Developer Account on HubSpot, [click here to create one](https://developers.hubspot.com/get-started)

## Installation

```sh
npm run install
```

Then you will need to install the HubSpot CLI, simply run `npm install -g @hubspot/cli`, and verify is installed by doing `hs --version`.

## Project Configuration

In order to upload and deploy the code to an HubSpot Portal, you need to create the `hubspot.config.yml` configuration file, to create one with the first portal, simply run the following command and follow instructions:

```sh
hs init
```

If you want to add more portal to it, you can run the following command:

```sh
hs auth
```

## Create an app on HubSpot

The very first step is to create an app in your Developer Portal, go to the url `https://app.hubspot.com/developer/<PORTAL-ID>/applications` (replace the Portal ID accordingly), and click on the `Create app` button on the top right corner.

From here you will have to give a name to the App, you can add a description optionally, and then click on the `Auth` tab.

![Create App Step 1](./docs/assets/create_app_1.png)

Now you need to add the `Redirect Url` (point 1), you can put any valid address for now, you can guess also the final endpoint, that it will have a similar syntax `https://<PORTAL_ID>.hs-sites.com/_hcms/api/<ENDPOINT>` by replacing the portal ID in the subdomain, and with the path of the application you can find in the `serverless.json` file, for example it could look like this `https://12345678.hs-sites.com/_hcms/api/sample-oauth`.

If you already know what scopes you will need for your application, you can go ahead and add them in the `Scopes` section (point 2), and then click on `Create app` button (point 3).

![Create App Step 2](./docs/assets/create_app_2.png)

Once the app is created, you will see that some fields have been populated, you will need to get the `Client ID`, the `Client secret`, and the installation URL.

![Create App Step 3](./docs/assets/create_app_3.png)

## Create the secrets

## Resources

- [HubSpot CLI Docs](https://developers.hubspot.com/docs/cms/developer-reference/local-development-cli)
- [HubSpot OAuth Quick Start](https://developers.hubspot.com/docs/api/oauth-quickstart-guide)