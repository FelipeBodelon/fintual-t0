# Tarea inicial Fintual

## Contexto

Para el desarrollo de esta tarea se utilizó Typescript, y se incluyen algunas herramientas para su ejecución, análisis estático y formateo.

Se crearon las clases `Portfolio` y `Stock` para modelar el problema descrito, cada una en su respectivo archivo en `src/`. En el archivo `main.ts` se encuentra un script sencillo para dar muestra de las funcionalidades de cada clase.

Se sugiere instalar el proyecto con `pnpm`, `npm` o algún manejador de paquetes similar:

```
pnpm install
```

Se ejecutará el archivo `main.ts` ejecutando el script `start`, definido en la config del proyecto (`package.json`):

```
pnpm start
```

o

```
npm run start
```

El resultado esperable son algunos logs mostrando el output del script de muestra.

## Supuestos

Para hacer algo interesante el ejercicio, decidí construir la clase `Stock` y asumir que obtener el precio actual o en alguna fecha implicaría quizás una consulta a un servicio de un tercero o externo al servicio que maneja el portafolio, y tener que manejar esa situación.

Mediante el método `price` esperado del objeto `Stock`, se obtiene un valor aleatorio para cada fecha consultada, con un manejo de un cache sobre el valor de la acción en dicho momento y un delay en su consulta en caso de no tener disponible el valor en cache. No se manejan casos de fallo en este caso.

Para la clase `Portfolio` se ofrece el método `profit` (valor exacto) y `annualizedProfit` (valor porcentual anualizado).
