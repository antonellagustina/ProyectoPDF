# <b>Resumen del Proyecto</b>
El objetivo de este proyecto es diseñar y desarrollar un sitio web básico utilizando HTML, CSS Y JS que permita, mediante parametros que le pasa una aplicación en ***delphi** cargar un archivo pdf desde un servidor , mostrar los algunos de estos parametros, permitir visualización web del mismo y que al usuario pueda anexar al mismo archivo otro archivo pdf desde su pc.  Debe hacer copia del archivo antes de sobreescribir y debe mostrar el archivo pdf resultante.-

#### <b>Objetivos Específicos</b>
Aprender las bases de HTML: Comprender y utilizar las etiquetas HTML básicas para crear la estructura de una página web.
Diseño de una página web: Crear una página web simple con secciones básicas como encabezado, contenido principal y pie de página.
Conversión a PDF: Exportar la página web creada en formato HTML a un archivo PDF.
Herramientas y Tecnologías Utilizadas
Editor de Código: Visual Studio Code 
Librerias y recursos: Boostrap, Flex, Multer para el manejo de archivos en el sevidor.
Editor de Código de Backend: Visual Studio.
API ASP .NET8.-

#### Estructura del Proyecto
PENDIENTE

#### Estructura de Directorios:

###### proyecto-folder
index.html
styles--folder
styles.css (opcional)
imagenes (carpeta para imágenes, opcional)

#### Idea General del proyecto.

*<b>nota sobre el backend.-will</b>*

En la página web el usuario va a poner los datos siguientes datos: 

------------

- **"letra"** del expediente, 'E' o 'K' (debe estar validado  que sean solo estos valores string -devolver cuandro de script con error solicitando se rectifique-

- **"número de expediente" **(solo valores válidos los valores enteros de no más de 6 digitos - mostrar script con el error). Si ponen menos se completa con ceros a la izquiera: ejemplo. 454 = 000454

- ** "año"** que es un valor entero de cuatro digitos.

 Con estos datos se busca en el servidor (capeta \\fs01\Digitalizacion_Jubilaciones\+nombre del expediente)  y se lo carga en la pagina para ser visualizado antes de agregar, mediante cuadro de búsqueda un archivo pdf que el usuario carga para anexar  luego de la última página del pdf cargado(usando* multer?*).
 Después de mostrar los campos del expediente y crear una copia en el mismo directorio: Ejemplo: K-000753-2024/K-000753-2024_09-04-2024_11-41-31.pdf renombrado con fecha de sistema actual K-000753-2024/K-000753-2024_09-04-2024_11-41-31.pdf Finalmente se sobreescribe el expediente cargado con ambos pdf anexados.