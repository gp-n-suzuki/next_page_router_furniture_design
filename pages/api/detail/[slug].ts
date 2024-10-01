import { ITEMS } from '@/constants/items';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { slug } = req.query;

    const item = ITEMS.find(item => item.id == parseInt(slug as string, 10));

    res.status(200).json(item);
}