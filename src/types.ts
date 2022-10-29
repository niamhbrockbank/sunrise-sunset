export interface IResults {
  results: {
    sunrise: string;
    sunset: string;
  };
}

export interface IPostcodeResults {
  result: {
    longitude: number;
    latitude: number;
  };
}

export interface IValidate {
  result: boolean;
}
