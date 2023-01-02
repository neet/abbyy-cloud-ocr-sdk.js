# abbyy-cloud-ocr-sdk.js

An [Abbyy Cloud OCR SDK](https://cloud.ocrsdk.com/) API client for Node.js

## Installation

Add registry of GitHub Packages to install this package

```
echo "@neet:registry=https://npm.pkg.github.com/" >> ~/.npmrc
```

Then

```
npm install @neet/abbyy-cloud-ocr.js
```

## Usage

```ts
import fs from "node:fs";
import stream from "node:stream";
import { createClient } from "@neet/abbyy-cloud-ocr-sdk.js";

// Your API endpoint. See https://support.abbyy.com/hc/en-us/articles/360017269920-Data-processing-location
const BASE_URL = "https://cloud-westus.ocrsdk.com";

// Authorization info. See https://support.abbyy.com/hc/en-us/articles/360017326739-Authentication
const APPLICATION_ID = "<Your application id>";
const APPLICATION_PASSWORD = "<Your application password>";

const client = createClient({
  baseUrl: BASE_URL,
  applicationId: APPLICATION_ID,
  password: APPLICATION_PASSWORD,
});

// Run OCR!
const task = await client.processImage(
  stream.Readable.toWeb(createReadStream("./some_image.jpg")),
  { language: "English,Japanese" }
);
```

For observing the task status to be completed, we also offer a useful utility called `TaskObserver` which undertakes polling with a recommended interval.

```ts
import { ClientV2, TaskObserverPolling } from "@neet/abbyy-cloud-ocr-sdk.js";

const client = createClient("...");
const observer = new TaskObserverPolling(client);

//...

const { taskId } = await client.submitImage({ taskId: "..." });
await client.processDocument({ taskId });

for await (const task of observer.observe(submitImage.taskId)) {
  task.status; // "Queued" or "Completed" et cetera
}
```

## License

MIT
