export type Facilitator = string;
export type Location = string;

export class Session {

  constructor(
    public title: string,
    public startingTime: Date,
    public endTime: Date,
    public location: Facilitator,
    public facilitator: Location
  ) {
  }

}
