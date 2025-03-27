# Todas las clases REACT JS

---

## Para inicializar proyecto con Vite:

    npm create vite@latest

Elegir:
 - Nombre de Proyecto
 - framework: *React*
 - Variant: *JavaScript*
 - Ingresar:

        cd <nombre_carpeta>

 - Ejecutar:
    
        npm install 

  - Iniciar proyecto:
    
         npm run dev 

### Estructura:
 - **.gitignore** -> Archivos y carpetas que Git debe ignorar
 - **index.html** -> Archivo principal HTML
 - **package.json** -> Dependencias y configuración del proyecto
 - **vite.config.js** -> Configuración de Vite
 - **node_modules/** -> Contiene todas las dependencias instaladas
 - **public/** -> Recursos estáticos como imágenes y fuentes
     - **favicon.ico** -> Ícono del proyecto
 - **src/** -> Código fuente del proyecto
    - **App.jsx** -> Componente principal de la aplicación
    - **main.jsx** -> Punto de entrada de la aplicación
    - **assets/** -> Archivos estáticos como imágenes o fuentes
    - **components/** -> Componentes reutilizables
    - **pages/** -> Páginas principales de la aplicación
    - **styles/** -> Archivos CSS o SCSS para estilos
 - **.eslintrc.cjs** -> Configuración de ESLint (opcional)

---

## Envío de información de hijo a padre en React

En la carpeta `img-cuaderno`, hay dos imágenes que ilustran cómo los datos viajan desde un componente hijo a su componente padre.

### **1. Enviar un solo dato**
📌 **Imagen:** [📷 Captura](./img-cuaderno/react-formulario.jpg)  
🔹 En este caso, el formulario envía una sola pieza de información al padre.

### **2. Enviar un objeto con múltiples datos**
📌 **Imagen:** [📷 Captura](./img-cuaderno/react-formulario-2.jpg)  
🔹 Aquí, el formulario envía un objeto con varios datos al componente padre.