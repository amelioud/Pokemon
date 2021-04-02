export interface Pokemon {
  id: string;
  name: string;
  supertype: string;
  subtypes: Array<string>;
  hp: number;
  types: Array<string>;
  evolvesTo: Array<string>;

  attacks: Array< {
    name:string
    cost: Array<string>;
    convertedEnergyCost: string;
    damage: string;
    text:string;}>
  ;

  weaknesses: Array<{
    type:string;
    value:string;
  }>;

  retreatCost: Array<string>;
  convertedRetreatCost: number;

  set: {
    id:string;
    name: string;
    series: string;
    printedTotal: number;
    total: number;
    legalities: {
      unlimited: string;
      expanded: string;
    };
    ptcgoCode: string;
    releaseDate: string;
    updatedAt: string;
    images: {
      symbol: string;
      logo: string;
    };
    _self: string;
  };

  number: string;
  artist: string;
  rarity: string;
  nationalPokedexNumbers: Array<number>;

  legalities: {
    unlimited: string;
    expanded: string;
  };

  images: {
    small: string;
    large: string;
  };

  tcgplayer: {
    url: string;
    prices: Array<{
      holofoil: {
        low: number;
        mid: number;
        high: number;
        market: number;
        directLow: number;
      };
    }>;
  };
}
