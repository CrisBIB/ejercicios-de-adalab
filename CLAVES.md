**_FOR_**

- El _for clásico_ nos permite recorrer el array de cualquier forma (desde y hasta cualquier punto, en orden o a la inversa).
- El 99% de los casos lo queremos recorrer completo, y de forma incremental. Entonces, puedo usar for of.
  -Al escribir 'for', si selecciono el que dice 'for loop', me pinta todo el comando. Si escribo 'forof', también me da la posibilidad de autorellenar el comando solo.
- Para ir de un objeto complejo a una propiedad, de arriba a abajo, propiedad a propiedad, lo que tengo que hacer es usar los punto x.x.x
- Cuando en vs me poso encima del identificador de un array, me "chiva" qué tipo de datos contiene.
- Las cosas que quiero hacer una vez, fuera del for. Si lo quiero hacer muchas veces, dentro del bucle(for).
- Existe un for clásico decremental: en lugar de i = 0 -> i = promos.length -1; en lugar de i < promos.length -> i => 0; en lugar de i++ -> i--. Si quiero hacer un for solo con posiciones pares, en lugar de i++ -> i += 2.
- La segunda i, lo que contiene es un condiciones ('si menor que...'. Si se cumple, entra. Termina cuando deja de cumplirse. El tercer i, hace una operación matemática. Habitualmente, i++, o lo que es lo mismo, i = i+1.
- Dentro de un for podemos meter cualquier cosa. Pero crear una función que podemos crear fuera, es un poco raro. Me metería la creación de la función tantas veces como se repita el bucle, y eso no tiene sentido.
- Cuando tengo un array dentro de un array, si quiero recorrer ambos, tendré que hacer un _for dentro de otro for_ (siguiendo el principio de anidación).
- Cuando se da la anterior situación... En el momento de añadir las iteraciones de un for en una variable, con etiquetas varias, es recomendable hacerlo en varias líneas, de manera que sea más fácil meter el segundo for entre medias.
- Cuando se da la anterior situación... cuidadín con poner i (o index) en ambos for, porque se va a liar el segundo. Es decir, utilizar **siempre** nombre de variables iterante diferentes.
- El **for... of...** es solo para recorrer arrays. Si queremos recorrer objetos, utilizaremos el **for... in..**

**_EVENTOS_**

- Cuando usamos la etiqueta form (con sus correspondientes inputs), y queremos/necesitamos prevenir el submit (o envío del formulario), tenemos que utilizar `ev. preventDefault()` dentro de la función vinculada con el evento 'submit'.

**_VARIOS_**

- Cuando utilizo la función breakpoint en la consola, puedo pedir a la consola que se pare en un error, indicándome (y dándome pistas) acerca de qué se trata.
