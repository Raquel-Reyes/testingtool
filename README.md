
# API Testing Tool — Proyecto final

Esta aplicación es una herramienta web desarrollada en Angular que replica las funcionalidades básicas de soluciones como Postman o ReqBin. Permite realizar pruebas a APIs REST directamente desde el navegador, sin necesidad de un backend, utilizando únicamente HttpClient.

---

## Características

* Aplicación SPA (Single Page Application).
* Permite enviar peticiones HTTP: GET, POST, PUT, DELETE y PATCH.
* Campo para ingresar la URL del endpoint.
* Selector de método HTTP.
* Sección de headers totalmente configurable.
* Sección de body en formato JSON (solo para métodos que lo requieren).
* Visualización detallada de la respuesta:

  * Código de estado.
  * Tiempo de respuesta.
  * Formato de respuesta JSON legible.
* Diseño moderno, minimalista y responsivo.

---

## Tecnologías utilizadas

* Angular 19+
* TypeScript
* RxJS
* HTML5 y CSS3
* Módulo HttpClient de Angular

---

## Estructura del proyecto

```
src/
 ├── app/
 │   ├── components/
 │   │   ├── request-form/
 │   │   │   ├── request-form.component.html
 │   │   │   ├── request-form.component.css
 │   │   │   ├── request-form.component.spec.ts
 │   │   │   ├── request-form.component.ts
 │   │   ├── response-viewer/
 │   │       ├── response-viewer.component.html
 │   │       ├── response-viewer.component.css
 │   │       ├── response-viewer.component.spec.ts
 │   │       ├── response-viewer.component.ts
 │   ├── services/
 │   │   ├── api.service.spec.ts
 │   │   ├── api.service.ts
 │   ├── interfaces/
 │       ├── api-request.ts
 │       ├── api-response.ts
 |


```
## Ejecución del proyecto

Para ejecutar esta aplicación localmente:

1. Instalar dependencias:

```
npm install
```

2. Ejecutar la aplicación en modo desarrollo:

```
ng serve
```

3. Abrir en el navegador:

```
http://localhost:4200
```

---

## Autor

Proyecto desarrollado por Raquel Reyes para el curso Programación Web II.

---
