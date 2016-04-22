# XS Advanced (XS2) Boilerplate 
This is a boilerplate for the new SAP HANA XS Advanced Runtime (XS2)

Once you have your system and XSA runtime installed, you can fork/download a copy of this repo to your file system.



## Installation

1. Open the command line in the root of the folder containing the files.
2. Create the UAA service: xs create-service xsuaa default myapp-uaa
3. Create the HDI container (essentially a schema): xs create-service hana hdi-shared myapp-hdi-container
4. Excute the deployment: xs push

Once the statement completes, execute: xs a, this will display a list of running applications, you should see 3 running applications: myapp-ui, myapp-db, myapp-xsjs. If not, run xs logs myapp-ui -recent (or the app which is not running or failing).

## Testing

If everything is running OK, open your browser to the address listed next to the myapp-ui application entry. You should see a basic test Page. In my case this is: https://localhost:51006

Next test that you can see the XSJS data by using the same URL as above, but typing adding the path https://localhost:51006/xsjs/test.xsjs

The routing information we have entered into our myapp-ui application will handle the redirect/sourcing of the backend data.


