import { type NextApiRequest, type NextApiResponse } from "next";

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).send('heelllo');
};

export default examples;
