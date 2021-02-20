const playwright = require("playwright-aws-lambda");

const buildUri = ({ queryStringParameters = {} }) => {
  const {
    pagepath = "https://use-hooks.alves.dev/use-previous",
    selector = "body",
    marginTop = "40px",
    marginBottom = "40px",
  } = queryStringParameters;

  return {
    selector,
    marginTop,
    marginBottom,
    path: `${pagepath}?selector=${selector}`,
  };
};

exports.handler = async function (event) {
  try {
    const uri = buildUri(event);
    console.log("uri", uri.path);
    const browser = await playwright.launchChromium();
    const context = await browser.newContext();
    const page = await context.newPage();
    const navigationPromise = page.waitForNavigation();
    await page.goto(uri.path);
    await navigationPromise;
    await page.waitForSelector(`${uri.selector}`, { timeout: 1000 });

    const pdfBuffer = await page.pdf({
      margin: {
        top: uri.marginTop,
        bottom: uri.marginBottom,
      },
      printBackground: true,
    });
    await browser.close();
    const base64Pdf = pdfBuffer.toString("base64");

    return {
      isBase64Encoded: true,
      statusCode: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Length": `${pdfBuffer.length}`,
      },
      body: base64Pdf,
    };
  } catch (error) {
    console.log(error);
    return { statusCode: error.statusCode || 500, body: error.message };
  }
};
