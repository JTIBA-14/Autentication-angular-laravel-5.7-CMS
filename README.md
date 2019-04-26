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

Una vez descargadas la dependencias procedemos a ejecutar las migraciones y seeder iniciales

```
php artisan migrate --seed
```

El seeder realiza el registro de un usuarios por defecto `admin@admin.com`  y con password `adminadmin`

    


   
