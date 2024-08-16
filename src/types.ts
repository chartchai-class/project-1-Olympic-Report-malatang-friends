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
}
export interface Thumbnail {
  source: string;
  width: number;
  height: number;
}

export interface CommentState {
  comments: string[];
}
