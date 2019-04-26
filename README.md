# Autentication-angular-laravel-5.7-CMS
JW-AUTH CMS laravel + Angular | Gestor de contenido


### Procedemos a configurar el backend

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

Una vez actualizado el archiv `.env` procedemos a ejecutar la siguiente linea de código.
```
php artisan key:generate
```
### Generar secret key
Teniendo ya configurado el anterior archivo procedemos a genera la llave secreta
```
php artisan jwt:secret                                            
```

Ahora procedemos a generar el key para el 

Una vez descargadas la dependencias procedemos a ejecutar las migraciones y seeder iniciales

```
php artisan migrate --seed
```

El seeder realiza el registro de un usuarios por defecto `admin@admin.com`  y con password `adminadmin`

    


   
