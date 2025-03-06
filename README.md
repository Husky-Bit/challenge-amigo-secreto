
# **Amigo Secreto**

![Estado](https://img.shields.io/static/v1?label=estado&message=completado&color=green)
![Licencia MIT](https://img.shields.io/static/v1?label=licencia&message=MIT&color=blue)
![Versión](https://img.shields.io/static/v1?label=versión&message=1.0.0&color=yellow)

Este es un proyecto simple de **Amigo Secreto** donde los usuarios pueden agregar nombres a una lista, visualizar los amigos ingresados y realizar un sorteo para asignar un amigo secreto a cada participante.

---

## **Funcionalidades:**

1. **Agregar amigos a la lista**  
   - El usuario puede escribir un nombre en un campo de texto y presionar el botón "Añadir" para agregarlo a la lista de amigos.
   - Si el campo está vacío o contiene solo espacios, el sistema muestra un mensaje de alerta solicitando que ingrese un nombre.

2. **Ver la lista de amigos**  
   - La lista de amigos se muestra de manera dinámica en la página, actualizándose cada vez que se agrega un nombre nuevo.
   
3. **Sortear un amigo secreto**  
   - El botón "Sortear amigo" selecciona aleatoriamente a un amigo de la lista y muestra el resultado en pantalla.

---

## **Requisitos:**

No se requieren dependencias externas para este proyecto. Solo necesitas un navegador web moderno que soporte HTML, CSS y JavaScript.

---

## **Instalación y Ejecución:**

1. **Clonar el repositorio:**

   Clona el repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu-usuario/amigo-secreto.git
   ```

2. **Abrir el proyecto:**

   Navega a la carpeta del proyecto y abre el archivo `index.html` en tu navegador:
   ```bash
   cd amigo-secreto
   open index.html
   ```

   Si prefieres usar Visual Studio Code o cualquier otro editor de código, puedes abrir la carpeta y previsualizar el proyecto directamente.

3. **Interactuar con la aplicación:**

   - Ingresa los nombres de tus amigos en el campo de texto.
   - Haz clic en "Añadir" para agregar un nombre a la lista.
   - Cuando hayas agregado todos los amigos, haz clic en "Sortear amigo" para elegir al azar un amigo secreto.

---

## **Estructura del Proyecto:**

```
amigo-secreto/
├── index.html        # Página principal con la estructura HTML
├── style.css         # Estilos de la página
├── app.js            # Lógica del juego
├── LICENSE           # Licencia
└── README.md         # Este archivo
```

---

## **Tecnologías Usadas:**

- **HTML**: Para la estructura y la presentación básica de la página.
- **CSS**: Para los estilos de la interfaz de usuario.
- **JavaScript**: Para la lógica del juego, como agregar amigos, actualizar la lista y realizar el sorteo.

---

## **Posibles Problemas y Soluciones:**

1. **El campo de nombre está vacío pero no muestra el mensaje de alerta**  
   Asegúrate de que la validación esté usando `input.value.trim()`. Esto eliminará espacios en blanco antes de verificar si el campo está vacío.

2. **El sorteo no muestra resultados**  
   Si el sorteo no funciona, verifica que la lista de amigos tenga al menos un nombre. El sorteo no puede realizarse sin amigos en la lista.

3. **La página no se ve correctamente**  
   Si hay problemas con el diseño, asegurar de que los archivos CSS estén correctamente vinculados y de que no haya errores en la consola del navegador.

---

## **Licencia:**

Este proyecto está bajo la licencia **MIT**. Puedes consultar el archivo [LICENSE](LICENSE) para más detalles.

---

## **Autor:**

| [<img src="https://avatars.githubusercontent.com/u/69829172?v=4" width=115><br><sub>Gonza</sub>](https://github.com/Husky-Bit) |
| :---: |


