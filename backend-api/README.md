\# Manual: Conexión al backend de Pelu-Xing con MongoDB Atlas



\## 1. Obtener la cadena de conexión



Solicitar la siguiente URL por un canal privado (WhatsApp o Discord, nunca por GitHub ni documentos públicos):



```

mongodb://pelu\_admin:TU\_PASSWORD\_REAL@ac-lmtxcri-shard-00-00.xegqj1c.mongodb.net:27017,ac-lmtxcri-shard-00-01.xegqj1c.mongodb.net:27017,ac-lmtxcri-shard-00-02.xegqj1c.mongodb.net:27017/pelu\_xing\_db?ssl=true\&replicaSet=atlas-glnpgf-shard-0\&authSource=admin\&appName=pelu-xing

```



\## 2. Clonar el repositorio



```

git clone \[URL del repositorio de GitHub]

cd backend-api

```



\## 3. Instalar dependencias



```

npm install

```



\## 4. Crear el archivo `.env`



```

notepad .env

```



Pegar dentro (reemplazando por la URL real, sin espacios):



```

PORT=3000

MONGODB\_URI=mongodb://pelu\_admin:TU\_PASSWORD\_REAL@ac-lmtxcri-shard-00-00.xegqj1c.mongodb.net:27017,ac-lmtxcri-shard-00-01.xegqj1c.mongodb.net:27017,ac-lmtxcri-shard-00-02.xegqj1c.mongodb.net:27017/pelu\_xing\_db?ssl=true\&replicaSet=atlas-glnpgf-shard-0\&authSource=admin\&appName=pelu-xing

```



Guardar y cerrar.



\*\*Importante:\*\* verificar que no quede ningún espacio entre `:` y la contraseña.



\## 5. Probar la conexión



```

node src/server.js

```



Resultado esperado en la terminal:



```

MongoDB conectado correctamente

Servidor ejecutándose en puerto 3000

```



\## 6. Notas clave



\- El archivo `.env` nunca se sube a GitHub (ya está protegido en `.gitignore`).

\- Los datos guardados en la base de datos se comparten automáticamente entre todos los que se conecten a esta misma URL — no requiere subir ni bajar nada de GitHub.

\- El código sí se comparte por GitHub (`git push` / `git pull`), pero es independiente de los datos.

