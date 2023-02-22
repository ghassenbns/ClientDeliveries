export interface AddressInterface {    
    id:string,
    address:string,
    building:string,
    zipcode:string,
    door:string,
    stairs:string,
    province:string,
    username:string
}
  
  export class Address implements AddressInterface {
      public id: string;
      public address: string;
      public building: string;
      public zipcode: string;
      public door: string;
      public stairs: string;
      public province: string;
      public username: string;
  
    public constructor(params: AddressInterface) {
        this.id = params.id;
        this.address = params.address;
        this.building = params.building;
        this.zipcode = params.zipcode;
        this.door = params.door;
        this.stairs = params.stairs;
        this.province = params.province;
        this.username = params.username;
    }
  }