# Sistema de Validación de Datos de Tarjeta
## 🚀 [InteractiveCardDetailsForm-FrontendMentor](https://kevencb.github.io/InteractiveCard-DetailsForm-FrontendMentor/)

Este sistema implementa una validación interactiva de los datos de una tarjeta, proporcionando retroalimentación instantánea al usuario sobre la validez de los datos ingresados. La interfaz simula la entrada de detalles de una tarjeta de crédito y realiza validaciones en tiempo real.

## Características

- **Validación del Nombre:**
  - Acepta solo letras y espacios en blanco.
  - Muestra un mensaje de error si se ingresan caracteres no permitidos.

- **Validación del Número de Tarjeta:**
  - Acepta solo números y espacios.
  - Agrupa los números en bloques de cuatro dígitos para mejorar la legibilidad.
  - Muestra un mensaje de error si se ingresan caracteres no permitidos o si el número es incorrecto.

- **Validación del Mes y Año de Vencimiento:**
  - Acepta solo números.
  - Muestra un mensaje de error si el mes es incorrecto o si el año está fuera del rango válido.

- **Validación del CVC:**
  - Acepta solo números.
  - Muestra un mensaje de error si el CVC no tiene la longitud adecuada.

- **Botón de Confirmación:**
  - Verifica que todos los campos estén llenos y contengan datos válidos antes de enviar el formulario.
  - Muestra un mensaje de éxito y oculta el formulario si todos los datos son válidos.

## Uso

1. Abre el archivo `index.html` en tu navegador.
2. Ingresa datos en los campos correspondientes.
3. Observa la retroalimentación en tiempo real sobre la validez de los datos ingresados.
4. Haz clic en el botón de confirmación cuando todos los datos sean válidos.

## Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras errores o mejoras potenciales, no dudes en abrir un problema o enviar una solicitud de extracción.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más detalles.

