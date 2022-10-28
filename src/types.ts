export interface ILocation {
    latitude: string;
    longitude: string;
}

export interface IResults {
    results: {
      sunrise: string;
      sunset: string;
    };
  }