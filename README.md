# Proyecto ventas

Landing para ofrecer desarrollo de software a medida: paginas web, paneles de gestion y sistemas de stock.

## Ejecutar

```bash
npm install
npm run dev
```

Abrir `http://localhost:3008` si se usa el puerto iniciado por Codex, o el puerto que indique Next.

## Cambiar datos de contacto

Editar estas constantes en `src/app/page.tsx`:

```ts
const whatsappNumber = "5492234264682";
const email = "nicolasmarsetg@gmail.com";
const agrovetProjectUrl = "";
```

Usar el numero en formato internacional sin `+`, espacios ni guiones.
Cuando Agrovet este online, pegar el link completo en `agrovetProjectUrl`.
