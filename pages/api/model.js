async function query(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/jamm55/autotrain-pidgintranslationmix-2798982563",
    {
      headers: {
        Authorization: "Bearer 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",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
}

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Method not allowed" });
    return;
  }
  inputs = req.body;
  query({ inputs: inputs }).then((response) => {
    console.log(response);
    res.status(201).send({
      prediction: response[0].translation_text
        ? response[0].translation_text
        : "Error",
    });
  });
}
