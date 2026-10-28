# Calificadora de admisión del Liceo Francés

Aplicación para calificar las pruebas de admisión de primero a once y realizar valoraciones pedagógicas de Prekínder, Kínder y Transición.

## Funciones

- Calificación por grado y área con las claves implementadas y los cuadernillos en PDF.
- Informes de resultados y actividades de acompañamiento para la familia.
- Valoración de preescolar por habilidades con opciones Autónomo, Con apoyo, En proceso y No observado.
- Observaciones generales escritas por el docente.
- Concepto final de admisión: Aceptado, Aceptado con compromiso o No aceptado.
- Recomendación del grado de ingreso: grado al que aspira, grado inferior, grado superior o pendiente, con justificación.
- Registro persistente en Cloudflare D1 y descarga de informes en PDF.

## Requisitos

Node.js 22.13 o superior y pnpm 11.25.0. El backend utiliza Cloudflare Workers y una base Cloudflare D1 con el enlace `DB`.

## Desarrollo

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Las migraciones SQL de `drizzle/` se aplican en orden. Las instrucciones del entorno y de las migraciones locales están en [README_DESARROLLO_SITES.md](README_DESARROLLO_SITES.md).

## Verificación

```bash
node --test tests/preschool-registry.test.mjs
pnpm exec tsc --noEmit
pnpm build
```

## Estructura

- `public/calificador/`: interfaz, cuadernillos, escudo, bancos de preguntas y criterios de valoración.
- `app/api/preescolar/`: registro y descarga del informe PDF.
- `lib/`: validación del registro y generación del informe.
- `db/` y `drizzle/`: esquema y migraciones de la base de datos.
- `tests/`: pruebas de validación, informes y recomendación de grado.

## Hosting y dominio

GitHub conserva el código. El dominio se conecta al servicio donde se aloje la aplicación.

Esta versión está preparada para el entorno de Sites sobre Cloudflare Workers con D1. No es una web estática: publicar únicamente los archivos en GitHub Pages no ejecutará el registro ni la generación de PDF del servidor.

La autenticación actual depende de la identidad proporcionada por el hosting de Sites mediante `app/chatgpt-auth.ts`. Para utilizar otro entorno de hosting se debe configurar una autenticación equivalente antes de poner el backend en producción. No se incluyen contraseñas ni claves de despliegue.

Los registros de estudiantes de la base en producción no forman parte del repositorio; la carpeta local de la base de datos y los archivos de entorno están excluidos mediante `.gitignore`.
