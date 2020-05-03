// https://github.com/public-transport/friendly-public-transport-format/blob/master/spec/readme.md#journey
export interface Journey {
  type: string; // required
  id: string[]; // unique, required
  legs: // array of objects, required
  {
    // - station/stop/location id or object
    // - required
    origin: string;

    // station/stop/location id or object
    // - required
    destination: string;

    // - ISO 8601 string (with origin timezone)
    // - required
    departure: Date;

    // - seconds relative to scheduled departure
    // - optional
    departureDelay?: number;

    departurePlatform?: string; // string, optional

    // - ISO 8601 string (with destination timezone)
    // - required
    arrival: Date;

    // - seconds relative to scheduled arrival
    // - optional
    arrivalDelay?: number;

    arrivalPlatform?: string; // string, optional

    // - array of stopover objects
    // - optional
    stopovers?: [];

    // - schedule id or object
    // - optional
    schedule?: string;

    // - see section on modes
    // - overrides `schedule`'s `mode`
    mode: string;

    subMode?: any; // reserved for future use

    public: boolean; // is it publicly accessible?

    // - operator id or object
    // - overrides `schedule`'s `operator`
    operator: string;

    // use this if pricing information is available for specific legs
    price?: {
      // optional
      amount: number; // number, required
      currency: string; // ISO 4217 code, required
    };
  }[];
  price?: {
    // optional
    amount: number; // number, required
    currency: string; // ISO 4217 code, required
  };
}
