Feature: Confirmación de registro exitoso

    Como usuario
    quiero ver una confirmación clara después de registrarme
    para saber que la acción se realizó correctamente.

    Scenario: Mensaje de confirmación y cierre automático
    Dado que el usuario completó correctamente el formulario de registro
    Cuando presiona el botón “Registrarse”
    Entonces el sistema muestra el mensaje “¡Registro exitoso! Bienvenido a Andeva 🌱”
    Y el formulario desaparece mostrando solo el mensaje de confirmación
    Y el modal se cierra automáticamente en pocos segundos
    Y al volver a abrirlo, los campos aparecen vacíos.