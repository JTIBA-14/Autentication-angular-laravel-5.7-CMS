# Autentication-angular-laravel-5.7-CMS
JWT-AUTH CMS laravel + Angular | Gestor de contenido


## Procedemos a configurar el backend

### Requisitos para poder instalar correctamente el backend

- PHP >= 7.1.3
- OpenSSL PHP Extension
- PDO PHP Extension
- Mbstring PHP Extension
- Tokenizer PHP Extension
- XML PHP Extension
- Ctype PHP Extension
- JSON PHP Extension
- BCMath PHP Extension

**Se recomienda** utilizar el empaquetado [xampp](https://www.apachefriends.org/es/index.html) el cual ya trae incluido `MySQL` + `APACHE`, además, deberá contar con la instalación de [composer](https://getcomposer.org/) el cual sera necesario para instalar las librerias de php.

Ingresamos a la carpeta donde se encuentra los archivos del backend

```
cd backend-laravel/
```

Ejecutamos la siguiente line para descargar todas la dependencias requeridas para el proyecto

```
composer update
```

#### Verificar key en `.env`
Si no cuenta con el archivo `.env` deberá crear el archivo, el cual quedara como se indica acontinuación.

```
APP_NAME=Laravel
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost

LOG_CHANNEL=stack

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=homestead
DB_USERNAME=homestead
DB_PASSWORD=secret

BROADCAST_DRIVER=log
CACHE_DRIVER=file
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_DRIVER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=mt1

MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
```

Reealizamos la configuración de la base de datos
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=homestead  
DB_USERNAME=homestead
DB_PASSWORD=secret
```

Una vez actualizado el archivo `.env` procedemos a ejecutar la siguiente linea de código.
```
php artisan key:generate
```
### Generar secret key
Teniendo ya configurado el anterior archivo procedemos a genera la llave secreta
```
php artisan jwt:secret                                            
```

Una vez descargadas la dependencias procedemos a ejecutar las migraciones y seeder iniciales

```
php artisan migrate --seed
```

El seeder realiza el registro de un usuarios por defecto `admin@admin.com`  y con password `adminadmin`


Con la ayuda de Postman, vamos a probar nuestra API, levantamos nuestro servidor php
    
```
php artisan serve
```
Ejecutamos postman y agregamos en body las credenciales para poder obtener el token

Al hacer login nos va a devolver un token que podemos utilizar para probar las rutas y con esto confirmar la corecta instalación del backend hasta el moento.

