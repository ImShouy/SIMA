Feature: Validación de correo electrónico 

    Como usuario
    quiero validar mi correo electrónico
    para confirmar mi registro en el sistema.

    Scenario: Confirmación de cuenta
    Dado que el usuario ha completado su registro
    Cuando abre el correo de validación y presiona el enlace
    Entonces el sistema confirma la cuenta y permite iniciar sesión.
