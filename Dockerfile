# Usar una imagen base de PHP 8 con Apache
FROM php:8.1-fpm

# Instalar dependencias del sistema y extensiones de PHP necesarias
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libzip-dev \
    libxml2-dev \
    zip \
    unzip \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql zip soap



# Limpiar para reducir el tamaño de la imagen
RUN apt-get clean && rm -rf /var/lib/apt/lists/*


# Establecer el directorio de trabajo
WORKDIR /var/www

# Instalar Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Instalar bibliotecas adicionales vía Composer
RUN composer global require phpoffice/phpspreadsheet \
    && composer global require phpoffice/phpexcel

# Copiar el código de tu aplicación al contenedor
COPY . .

# Establecer permisos para el directorio
RUN chown -R www-data:www-data /var/www

# Exponer el puerto 80 y ejecutar Apache
EXPOSE 9000
CMD ["php-fpm"]