#Complete siguiendo las instrucciones del taller.

Feature: Registration into losestudiantes
    As an user I want to register myself within losestudiantes website in order to rate teachers

Scenario Outline: Success

  Given I go to losestudiantes home screen
    When I open the login screen
    And I fill with <nombre>, <apellido>, <correo>, <idUniversidad>, <checkbox>, <idPrograma>, <password>, <acepta>
    And I try to register
    Then I expect to see success <message>

    Examples:
      | nombre | apellido | correo                      |idUniversidad             |checkbox|idPrograma|password         |acepta|
      | prueba | prueba   | pruebaexitosa5@example.com  | universidad-de-los-andes | true   | 16       |PruebaExitosa.05 |true  |
      