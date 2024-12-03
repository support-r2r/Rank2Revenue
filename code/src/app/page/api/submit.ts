import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  success: boolean;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    const endpoints = [
      "https://service1.com/api/submit",
      "https://service2.com/api/submit",
      "https://service3.com/api/submit",
    ];

    const selectedEndpoint =
      endpoints[Math.floor(Math.random() * endpoints.length)];

    try {
      const response = await fetch(selectedEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        return res.status(200).json({ success: true });
      } else {
        return res
          .status(response.status)
          .json({ success: false, error: "Submission failed at the external service." });
      }
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end("Method Not Allowed");
  }
}
