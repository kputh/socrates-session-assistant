export class Session {

  constructor(
    public title: string,
    public startingTime: Date,
    public endTime: Date,
    public location: string,
    public facilitator: string
  ) {
  }

}
