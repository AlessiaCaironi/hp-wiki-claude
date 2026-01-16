export interface Character {
  id: string;
  name: string;
  alternate_names?: string[];
  species?: string;
  gender?: string;
  house?: string;
  dateOfBirth?: string;
  yearOfBirth?: number;
  wizard?: boolean;
  ancestry?: string;
  eyeColour?: string;
  hairColour?: string;
  wand?: {
    wood?: string;
    core?: string;
    length?: number;
  };
  patronus?: string;
  hogwartsStudent?: boolean;
  hogwartsStaff?: boolean;
  actor?: string;
  alternate_actors?: string[];
  alive?: boolean;
  image?: string;
}

export interface Spell {
  id: string;
  name: string;
  description?: string;
  type?: string;
  incantation?: string;
  effect?: string;
  light?: string;
}

export interface House {
  id: string;
  name: string;
  founder?: string;
  animal?: string;
  colors?: string[];
  element?: string;
  ghost?: string;
  commonRoom?: string;
  heads?: string[];
  traits?: string[];
}

export interface Book {
  id: string;
  title: string;
  author?: string;
  releaseDate?: string;
  description?: string;
  pages?: number;
  cover?: string;
}

export interface ApiResponse<T> {
  data: T;
  meta?: {
    total?: number;
    page?: number;
    perPage?: number;
  };
}
