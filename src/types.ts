export interface CountryProps {
  batchcomplete: string;
  query: Query;
}

export interface Query {
  normalized: Normalized[];
  pages: {
    [key: string]: Page;
  };
}

export interface Normalized {
  from: string;
  to: string;
}

export interface Page {
  pageid: number;
  ns: number;
  title: string;
  thumbnail: Thumbnail;
  extract: string;

  sports?:Sport[];
}
export interface Thumbnail {
  source: string;
  width: number;
  height: number;
}

export interface Medal{
  id: string,
  name: string,
  continent: string,
  flag_url: string
  gold_medals:number,
  silver_medals: number,
  bronze_medals: number,
  total_medals: number,
  rank: number,
  rank_total_medals: number,
  sports:Sport[]
}
export interface Sport{
  name:string,
  gold:number,
  silver: number,
  bronze: number,
  total: number,

}


export interface CommentState {
  comments: string[];
}

export interface MedalRank {
  id: string;
  name: string;
  flag_url: string;
  gold_medals: number;
  silver_medals: number;
  bronze_medals: number;
  total_medals: number;
  rank: number;
  rank_total_medals: number;
}