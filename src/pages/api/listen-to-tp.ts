// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("[request-body]", req.body);
  console.log("[request-body-events[0]]", req.body?.events[0]?.eventData);
  console.log("[request-query]", req.query);
  res.status(200).json({ name: "John Doe" });
}
