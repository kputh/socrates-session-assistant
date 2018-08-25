export type Facilitator = string;
export type Location = string;

export class Session {

  constructor(
    public title: string,
    public startingTime: string,
    public endTime: string,
    public location: Facilitator,
    public facilitator: Location
  ) {
  }

}
