import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection } from "./models";

test("Testeo el constructor del controller", (t) => {
    const controler= new ContactsController();

    const model= new ContactsCollection();
    model.load();

    t.deepEqual(controler.contacts.data, model.data)
    
});

test("Testeo el método processOptions", (t) => {
    const model= new ContactsCollection();
    model.load();
    const responseModel= model.getOneById(2);

    const controler= new ContactsController();

    const mockOptions= new ContactsControllerOptions();
    mockOptions.action="get";
    mockOptions.params= {id:2, name:"Paula"};

    const responseControler= controler.processOptions(mockOptions);

    t.deepEqual(responseControler,responseModel)

});
