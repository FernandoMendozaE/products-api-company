/**
 * ? Archivo encargado para que aranque la aplicación
 */
import app from './app' // * importa express
import './database' // * importa BD


app.listen(4000);

console.log('Server listen on port', 4000)