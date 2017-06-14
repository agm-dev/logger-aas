# logger-aas
Logger as a service is an api that accepts requests to store and retrieve your trivial logs.

Use it while you breath at https://logger.assa.services/. Check the usage section for more information on how to use it.

You can clone and run:

>`npm install`

To run the tests, writen with `jest` use:

>`npm test`

If you wanna make modifications on the code and run the tests on save run:

>`npm test -- --watch`

# Installation

You have to provide your mongo db string as indicated on .env.sample. Define other variables there and rename it to .env.

 You will need to install and run this app on a environment with mongo db and node version at least 7.6.0, because the code uses async-await.

# Usage

Set new log:

> POST /api/v1/logs {"text": "string", "hash": "yourIdentificatorString"}

Retrieve your logs:

>GET /api/v1/logs/:yourIdentificatorString

# Contributions

Feel free to pull request, but please, use `standard` to fix your code before doing it. You can install globally and fix your code with the next commands:

>`npm install standard -g`

>`standard --fix`


