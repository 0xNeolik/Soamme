# Soamme Books Challenge
# App Link 
https://soamee-books.herokuapp.com/

# Descripción

Soamee Books Challenge consiste en una prueba tecnica realizada para la empresa tecnologica Soamee. En ella se presenta la construccion de una pagina web basada en la construccion de una base de datos, tanto de libros como de autores.

En ellas se presentan barias pantallas, empezando por una pagina de inicio que nos permite ir a la secci;on de libros o de autores:
  - En la seccion de libros apareceran todos los libros disponibles en la base de datos. Clickando sobre uno de ellos se nos cargaran los detalles de este libro asi como un enlace directo al autor de este mismo libro.
  - En la seccion de auotres, apareceran todos los autores disponibles en la secci;on de autores. Clickando sobre uno de ellos se nos cargaran los detalles de este autor.

Como usuario de Soamee Books, podremos crearnos una cuenta con la cual desbloquearemos varias posibilidades de interactuar en la Web:
  - Se nos permitira Editar autores y libros.
  - Se nos permitira añadir libros a nuestros favoritos.
  - Contaremos de un perfil de usuario donde poder ver nuestros libros favoritos.

La realizacion de este proyecto ha sido de 3 días.

# Tecnologías
<ul >
<li>React</li> 
<li>Node.Js</li> 
<li>MongoDB</li>  
<li>Express</li> 
<li>Tailwind</li> 
</ul>

# Server Install
```
npm install
```

# Server Usage
```
npm run dev
```

Accede a la ruta de client del proyecto y escribe los siguientes comandos.

# Cient Install
```
npm install
```

# Client Usage
```
npm run start
```


# Backend Endpoints
 
|	Method	|	Path	|	Description	|
|	-	|	-	|	-	|	
|	POST	|	/api/auth/signUp	|	Crea un usuario en la base de datos	|
|	POST	|	/api/auth/login	|	Logea a un usuario de la base de datos |
|	GET	|	/api/auth/isloggedin	|	Comprueba que la sesión del usuario logeado es correcta |
|	GET	|	/api/auth/logout	|	Destruye la sesión del usuario |
|		|		|	|
|	GET	|	/api/author	|	Toma a todos los autores de la base de datos	|
|	GET	|	/api/author/details/:id	|	Toma los detalles de un autor en especifico de la base de datos	|
|	PUT	|	/api/author/updateAuthor	|	Modifica los detalles de un autor	|
|	POST |	/api/author/create-new-author	|	Crea un nuevo autor con sus detalles especificos en la base de datos	|
|		|		|	|
|	GET	|	/api/book	|	Toma todos los libros de la base de datos	|
|	GET	|	/api/book/details/:id	|	Toma los detalles de un libro en especifico de la base de datos	|
|	PUT	|	/api/book/edit	|	Modifica los detalles de un libro	|
|	POST	|	/api/book/create-new-book	|	Crea un nuevo libro con sus detalles especificos en la base de datos	|
|		|		|	|
|	GET	|	/api/user/user/:id	| Toma los detalles de un usuario	|
|	GET	|	/api/user/addFavorites/:id	|	Añade el libro se leccionado a los favoritos del usuario	|
|		|		|	|
|	GET	|	/api/api/upload/image	|	Carga una imagen en el servicio de Cloudinary	|

# Front Endpoints 

|	Path	|	Description	|
|	-	|	-	|	
|	/	|	Pagina de inicio	|
|	/libros	|	Muestra todos los libros	|
|	/libros/:id	|	Muestra un libro con sus detalles	|
|	/autores	|	Muestra todos los autores	|
|	/autores/:id	|	Muestra un autor con sus detalles	|
|	/login	|	Muestra el panel de inicio de sesión	|
|	/signUp	|	Muestra el panel de registro de un usuario	|
|	/usuario/:id	|	Muestra el perfil de un usuario en especifico	|

