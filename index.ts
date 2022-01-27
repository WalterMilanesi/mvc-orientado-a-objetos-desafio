import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist"

function parseaParams(argv): ContactsControllerOptions {
  const comands = minimist(argv);

  return {
    action: comands.action,
    params: JSON.parse(comands.params)
  };
}

function main() {
  const controller= new ContactsController();
  const params = parseaParams(process.argv.slice(2));
  const resultado= controller.processOptions(params);
  console.log(resultado)
}

main();
