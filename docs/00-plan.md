# Plan: Rastreador de solicitudes de empleo (fullstack)

Proyecto de aprendizaje y portafolio. Yo escribo todo el código; Claude guía, explica y revisa.

**Stack:** Next.js · PostgreSQL · Resend · TypeScript · Better Auth · Zod · Tailwind · Vercel

**Cómo marcar el progreso:** cambia `[ ]` por `[x]` al terminar cada paso.

---

## Notas del stack (verificadas el 21-nov-2026, confirmar al empezar)

- Next.js está en la versión 16.x. En la 16, `middleware.ts` pasó a llamarse `proxy.ts` y los `params` son asíncronos. Si un tutorial no lo refleja, es anterior.
- Next.js publica parches de seguridad con regularidad: mantener las dependencias actualizadas.
- Autenticación: Better Auth (recomendado para proyectos nuevos; Auth.js v5 sigue en beta). Proteger solo con el proxy no basta: comprobar la sesión también al acceder a los datos.
- Resend: el plan gratuito incluía 3.000 emails al mes (confirmar en resend.com). Sin dominio verificado solo se puede enviar al correo de la propia cuenta.
- Vercel Cron: en el plan Hobby se limita a una ejecución diaria (confirmar en la documentación de Vercel). Para recordatorios es suficiente.

---

## Fase 0 · Preparación (partimos de cero en JavaScript)

- [ ] **0.1 Entorno.** Node.js (versión LTS), VS Code, `npm`, terminal. Repositorio `job-application-tracker` con `.gitignore` de Node y carpeta `docs/`.
- [ ] **0.2 JavaScript desde cero.** `let` y `const`, tipos y comparación (`===`), funciones y funciones flecha, arrays y objetos, `map` / `filter` / `find`, plantillas de texto, JSON, `import` / `export`, `Promise` y `async/await`, `try/catch`. Ejercicios en la terminal con Node.
- [ ] **0.3 TypeScript.** Tipos básicos, `interface` y `type`, uniones, genéricos básicos, configuración. Comparación con C#.
- [ ] **0.4 Repasos cortos.** SQL básico (`SELECT`, `JOIN`, `GROUP BY`, índices) y HTTP (métodos, códigos de estado, JSON).

## Backend

- [ ] **1. Diseño.** Requisitos, historias de usuario, modelo de datos (usuario, solicitud, historial de estados, recordatorio), estados posibles y lista de endpoints. Solo documentación.
- [ ] **2. Base de datos.** PostgreSQL local, ORM (Prisma o Drizzle; se compara al llegar), esquema, migraciones, datos de prueba e índices.
- [ ] **3. API CRUD.** Route Handlers, validación con Zod, códigos HTTP, errores, filtros y paginación.
- [ ] **4. Autenticación y autorización.** Registro, login y sesiones con Better Auth. Cada usuario solo accede a sus propias solicitudes.
- [ ] **5. Seguimiento de estado.** Transiciones válidas, historial con fechas y reglas de negocio.
- [ ] **6. Recordatorios.** Plantilla de email, Resend, ruta de cron protegida con secreto, evitar envíos duplicados, zonas horarias.
- [ ] **7. Calidad.** Tests con Vitest, logs, límite de peticiones, borrado de cuenta y datos (RGPD), CI con GitHub Actions.

## Frontend

- [ ] **8. Fundamentos de interfaz.** Repaso de HTML y CSS, React (JSX, componentes, props, `useState`, efectos), App Router de Next.js y diferencia entre Server Components y Client Components.
- [ ] **9. Base de interfaz.** Tailwind, layout, páginas de registro y login.
- [ ] **10. Lista y filtros.** Panel con solicitudes, búsqueda, filtro por estado, estados de carga y error.
- [ ] **11. Formularios.** Crear y editar con validación, reutilizando los esquemas Zod del backend.
- [ ] **12. Detalle y seguimiento.** Página de la solicitud con línea de tiempo, cambio de estado y recordatorios. Extra: tablero tipo Kanban.
- [ ] **13. Pulido.** Diseño adaptable al móvil, accesibilidad básica y un test end-to-end del flujo principal.

## Cierre

- [ ] **14. Despliegue.** Vercel, base de datos en la nube, variables de entorno, migraciones en producción, cron real.
- [ ] **15. Portafolio.** README con capturas, demo en vivo y enlace desde el perfil de GitHub.

---

## Estructura de documentación

```
docs/
  README.md        <- índice
  00-plan.md       <- este plan
  decisiones/      <- por qué elegí cada tecnología (una página cada una)
  notas/           <- una por sesión: 2026-11-22-javascript-funciones.md
  playbook/        <- recetas reutilizables: auth, emails, cron, deploy,
                      checklist-nuevo-proyecto
  errores.md       <- error -> causa -> solución
```

### Plantilla de nota de sesión

```
# Fecha · Tema

- Qué hice:
- Qué aprendí:
- Error que tuve y cómo lo resolví:
- Duda pendiente:
```

### Reglas

- Al cerrar cada fase, paso lo reutilizable de las notas a `playbook/`.
- Nunca se sube el archivo `.env`. Solo `.env.example`, con los nombres de las variables y sin valores.
- Una rama por fase y un pull request a `main`, aunque trabaje solo.
- Commits con mensajes claros que digan qué cambió.

---

## Método de trabajo

1. Claude explica el concepto con un ejemplo de otro tema.
2. Yo escribo mi versión.
3. Pego el código o el error y lo revisamos.
4. Escribo mi nota de la sesión.
5. Hago el commit.
