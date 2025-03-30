FROM php:8.1-fpm

# Instalar dependencias del sistema
RUN apt-get update && apt-get install -y \
    nginx \
    mysql-server \
    libpng-dev \
    libzip-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libonig-dev \
    zip unzip curl nano && \
    apt-get clean

# Instalar extensiones PHP necesarias
RUN docker-php-ext-install pdo_mysql gd zip mbstring soap

# Copiar configuración de PHP
COPY php.ini /usr/local/etc/php/php.ini

# Configurar Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Configurar permisos para MySQL
RUN mkdir -p /var/lib/mysql /var/run/mysqld && \
    chown -R mysql:mysql /var/lib/mysql /var/run/mysqld && \
    chmod 755 /var/lib/mysql /var/run/mysqld

# Inicializar MySQL con la base de datos y usuario
RUN service mysql start && \
    mysql -uroot -e "CREATE DATABASE IF NOT EXISTS rest_db;" && \
    mysql -uroot -e "CREATE USER 'rest_user'@'localhost' IDENTIFIED BY '1984Avv!';" && \
    mysql -uroot -e "GRANT ALL PRIVILEGES ON rest_db.* TO 'rest_user'@'localhost';" && \
    mysql -uroot -e "FLUSH PRIVILEGES;"

# Exponer puertos
EXPOSE 80 3306

# Comando para iniciar todos los servicios
CMD service mysql start && service php8.1-fpm start && nginx -g "daemon off;"

# # Usar una imagen base de PHP 8 con Apache
# FROM php:8.1-fpm

# # Instalar dependencias del sistema y extensiones de PHP necesarias
# RUN apt-get update && apt-get install -y \
#     git \
#     curl \
#     libpng-dev \
#     libjpeg-dev \
#     libfreetype6-dev \
#     libzip-dev \
#     libxml2-dev \
#     zip \
#     unzip \
#     && docker-php-ext-configure gd --with-freetype --with-jpeg \
#     && docker-php-ext-install gd pdo pdo_mysql zip soap



# # Limpiar para reducir el tamaño de la imagen
# RUN apt-get clean && rm -rf /var/lib/apt/lists/*


# # Establecer el directorio de trabajo
# WORKDIR /var/www

# # Instalar Composer
# RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# # Instalar bibliotecas adicionales vía Composer
# RUN composer global require phpoffice/phpspreadsheet \
#     && composer global require phpoffice/phpexcel

# # Copiar el código de tu aplicación al contenedor
# COPY . .

# # Establecer permisos para el directorio
# RUN chown -R www-data:www-data /var/www && chmod -R 755 /var/www

# # Exponer el puerto 80 y ejecutar Apache
# EXPOSE 9000
# CMD ["php-fpm"]