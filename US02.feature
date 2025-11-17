Feature: Inicio de sesión

    Como usuario registrado
    quiero iniciar sesión con mi correo y contraseña
    para acceder a mi cuenta.

    Scenario: Inicio de sesión exitoso
    Dado que el usuario se encuentra en la ventana de inicio de sesión
    Cuando ingresa credenciales válidas
    Entonces el sistema permite el acceso y muestra su perfil.
