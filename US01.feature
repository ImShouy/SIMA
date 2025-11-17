Feature: Registro de usuario

    Como usuario
    quiero registrarme con mi nombre, correo y contraseña
    para poder acceder al sistema.
    
    Scenario: Registro exitoso con datos válidos
    Dado que el usuario está en la landing page y visualiza el botón “Únete”
    Cuando hace clic en el botón y se abre el modal de registro
    Y completa los campos “Nombre completo”, “Correo electrónico” y “Contraseña” con datos válidos
    Y presiona el botón “Registrarse”
    Entonces el sistema muestra el mensaje “¡Registro exitoso! Bienvenido a Andeva 🌱”
    Y el formulario se oculta mostrando solo el mensaje de confirmación
    Y el modal se cierra automáticamente después de unos segundos.
