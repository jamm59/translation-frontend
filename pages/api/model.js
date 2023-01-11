async function query(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/jamm55/autotrain-improved-pidgin-model-2837583189",
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
  const { inputs } = JSON.parse(req.body);
  query({ inputs }).then((response) => {
    try {
      res.status(201).send({
        prediction: response[0].translation_text,
      });
    } catch (error) {
      console.log(response);
      res.status(201).send({
        prediction:
          "Can you please refresh the page, you encountered an error!",
      });
    }
  });
}
