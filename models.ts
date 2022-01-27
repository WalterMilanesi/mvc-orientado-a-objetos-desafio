import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[]=[];
  load(){
    this.data= jsonfile.readFileSync("./contacts.json");
  };

  getAll(){
    return this.data
  };

  addOne(contact:Contact){
    this.data.push(contact)
  };

  save(){
    const info= this.data;
    jsonfile.writeFileSync("./contacts.json",info)
  };

  getOneById(id:number){
    return this.data.find(c=>c.id==id)
  };
  
  
}
export { ContactsCollection };