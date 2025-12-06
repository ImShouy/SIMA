Feature: Interacción y navegación en la landing

    Como visitante
    quiero navegar entre las secciones “Somos”, “Beneficios” y “Servicio”
    para conocer más sobre la solución SIMA.

    Scenario: Desplazamiento fluido y funcionalidad del menú
    Dado que el usuario está en la landing
    Cuando selecciona cualquier opción del menú
    Entonces la página realiza un desplazamiento suave hacia la sección correspondiente
    Y el menú se oculta automáticamente en vista móvil.
