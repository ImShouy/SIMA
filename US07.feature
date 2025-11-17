Feature: Validación de campos obligatorios en el registro

    Como usuario
    quiero recibir advertencias cuando dejo campos vacíos o con formato incorrecto
    para corregir la información antes de registrarme.

    Scenario: Envío con todos los campos completos
    Dado que el usuario abrió el modal de registro “Únete”
    Cuando completa correctamente todos los campos requeridos
    Y presiona el botón “Registrarse”
    Entonces el sistema acepta el envío
    Y se muestra el mensaje de confirmación del registro.

    Scenario: Campos obligatorios vacíos
    Dado que el usuario abrió el modal de registro
    Cuando deja uno o más campos requeridos vacíos
    Y presiona el botón “Registrarse”
    Entonces el navegador impide el envío del formulario
    Y se mantiene visible el modal para completar la información.

    Scenario: Formato de correo inválido
    Dado que el usuario abrió el modal de registro
    Cuando ingresa un correo con formato incorrecto
    Y presiona el botón “Registrarse”
    Entonces el sistema bloquea el envío
    Y no se muestra el mensaje de éxito.