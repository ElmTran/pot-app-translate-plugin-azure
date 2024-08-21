async function translate(text, from, to, options) {
  const { config, utils } = options;
  const { tauriFetch: fetch } = utils;
  let { region, apiKey } = config;
  let plain_text = text.replaceAll("/", "@@");
  let endpoint = "https://api.cognitive.microsofttranslator.com";
  let url = `${endpoint}/translate?api-version=3.0&from=${from}&to=${to}`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Ocp-Apim-Subscription-Key": apiKey,
      "Ocp-Apim-Subscription-Region": region,
      "Content-Type": "application/json",
      "X-ClientTraceId": "c54424b2-b946-46f9-b726-46a60b3c9ce1",
    },
    body: { payload: [{ text: plain_text }], type: "Json" },
  });

  if (res.ok) {
    let result = res.data;
    const { translations } = result[0];
    if (translations) {
      const { text } = translations[0];
      return text.replaceAll("@@", "/");
    } else {
      throw JSON.stringify(result);
    }
  } else {
    throw `Http Request Error\nHttp Status: ${res.status}\n${JSON.stringify(
      res.data,
    )}`;
  }
}