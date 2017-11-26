import { fromWei, getAllAuctions } from '../util/client';
import _ from 'underscore';

// get all sales of gen 0 kitties that are below 0.003 eth
export default async function () {
  const auctions = await getAllAuctions({ type: 'sale' });

  return _.chain(auctions)
    .filter(({ kitty: { generation } }) => generation === 0)
    .filter(({ current_price }) => fromWei(current_price) < 0.005)
    .value();
}