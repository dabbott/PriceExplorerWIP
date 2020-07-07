export type Currency = {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  usd: number;
  icon: string;
};

export type HistoricalPrice = {
  date: string;
  usd: number;
};

export function currencies(): Currency[] {
  return data;
}

const data: Currency[] = [
  {
    id: 'NzcucMqj2',
    icon:
      'https://unpkg.com/cryptocurrency-icons@0.16.1/32@2x/color/btc@2x.png',
    name: 'Bitcoin',
    rank: 1,
    symbol: 'BTC',
    usd: 10403.225432572899,
  },
  {
    id: 'UNB33kmPvl',
    icon:
      'https://unpkg.com/cryptocurrency-icons@0.16.1/32@2x/color/eth@2x.png',
    name: 'Ethereum',
    rank: 2,
    symbol: 'ETH',
    usd: 321.0852636071127,
  },
  {
    id: 'Ye9v02h1yB',
    icon:
      'https://unpkg.com/cryptocurrency-icons@0.16.1/32@2x/color/xrp@2x.png',
    name: 'XRP',
    rank: 3,
    symbol: 'XRP',
    usd: 0.031146111168099146,
  },
  {
    id: 'sslKSG8UWc',
    icon:
      'https://unpkg.com/cryptocurrency-icons@0.16.1/32@2x/color/bch@2x.png',
    name: 'Bitcoint Cash',
    rank: 4,
    symbol: 'BCH',
    usd: 95.26885858400416,
  },
  {
    id: 'OzaBu5YrdR',
    icon:
      'https://unpkg.com/cryptocurrency-icons@0.16.1/32@2x/color/ltc@2x.png',
    name: 'Litecoin',
    rank: 5,
    symbol: 'LTC',
    usd: 113.26068241294408,
  },
  {
    id: 'o2qB71E5gA',
    icon:
      'https://unpkg.com/cryptocurrency-icons@0.16.1/32@2x/color/xlm@2x.png',
    name: 'Stellar Lumens',
    rank: 6,
    symbol: 'XLM',
    usd: 0.05643955012041886,
  },
  {
    id: 'Z9lX83lV88',
    icon:
      'https://unpkg.com/cryptocurrency-icons@0.16.1/32@2x/color/bnb@2x.png',
    name: 'Binance Coin',
    rank: 7,
    symbol: 'BNB',
    usd: 17.85464158639072,
  },
  {
    id: 'TE80yFVuas',
    icon:
      'https://unpkg.com/cryptocurrency-icons@0.16.1/32@2x/color/eos@2x.png',
    name: 'EOS',
    rank: 8,
    symbol: 'EOS',
    usd: 3.855903650694415,
  },
  {
    id: 'H5W6_412pI',
    icon:
      'https://unpkg.com/cryptocurrency-icons@0.16.1/32@2x/color/xtz@2x.png',
    name: 'Tezos',
    rank: 9,
    symbol: 'XTZ',
    usd: 4.517382329979666,
  },
  {
    id: 'rToxhn43tt',
    icon:
      'https://unpkg.com/cryptocurrency-icons@0.16.1/32@2x/color/xmr@2x.png',
    name: 'Monero',
    rank: 10,
    symbol: 'XMR',
    usd: 78.09242503655813,
  },
];
