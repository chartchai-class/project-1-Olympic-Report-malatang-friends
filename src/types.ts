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
  sports?: Sport[];
}
export interface Thumbnail {
  source: string;
  width: number;
  height: number;
}

export interface CountrySpring {
  id: number;
  countryName: string;
  flag: string;
  gold_medals: number;
  silver_medals: number;
  bronze_medals: number;
  total_medals: number;
  ranking: number;
  totalRank:number;
}
export interface Medal {
  id: number;
  name: string;
  flag_url: string;
  gold_medals: number;
  silver_medals: number;
  bronze_medals: number;
  total_medals: number;
  rank: number;
  rank_total_medals: number;
  sports: Sport[];
}
export interface Sport {
  name: string;
  gold: number;
  silver: number;
  bronze: number;
  total: number;
}

export interface CommentState {
  comments: string[];
}

export interface MedalRank {
  id: number;
  name: string;
  flag_url: string;
  gold_medals: number;
  silver_medals: number;
  bronze_medals: number;
  total_medals: number;
  rank: number;
  rank_total_medals: number;
}

export interface Page {
  pageOfNumber: number;
}

export interface User{
  id: number
  username: string
  email: string
  password: string
  roles: string[]
}

export interface UserState{
  user: User | null
}
export interface MessageState {
  message: string
}
