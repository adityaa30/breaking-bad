export interface Character {
  char_id: number;
  name: string;
  birthday: string;
  occupation: Array<string>;
  img: string;
  status: string;
  nickname: string;
  appearance: Array<number>;
  portrayed: string;
}

export interface Quote {
  quote_id: number;
  quote: string;
  author: string;
  series: string;
}
