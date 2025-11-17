Feature: Recuperación de contraseña

    Como usuario
    quiero recuperar mi contraseña mediante correo de restablecimiento
    para volver a ingresar a mi cuenta.

    Scenario: Solicitud de recuperación
    Dado que el usuario selecciona "Olvidé mi contraseña"
    Cuando ingresa un correo válido
    Entonces el sistema envía un enlace de recuperación a su bandeja.