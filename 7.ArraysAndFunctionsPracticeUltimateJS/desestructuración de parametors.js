// El siguiente objeto contiene las configuraciones necesarias para conectarse a una API, se debe crear una funcion que retorne la URL formateada con base en la información almacenada en el objeto, ademas por defecto se debe imprimir una url alternativa, para en caso de que no tuvieramos el objeto proporcionado (Implementar desestruccturación)


let configObject = {
  url: 'https://ejemplo.io',
  bucket: 145,
  port: 8012,
}


function configuracionAPI({ url, bucket, port } = { url: 'https://ejemploDefecto.io', }) {
  return `${url}/${bucket}/${port}`;
}


console.log(configuracionAPI(ejemplo))






