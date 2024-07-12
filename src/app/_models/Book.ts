export class Actor {
    constructor(
      public id: number,
      public title: string,
      public brief: string,
      public author: string,
      public imgURL:string,
      public category: string,
      public price: number,
      public version: number,
      public ISBN: number,
      public edition?: number,
      public release_date?: Date,
      public older_version?: number,
    ) {}
  }