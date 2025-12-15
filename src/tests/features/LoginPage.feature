Feature: Login functionality

Background:
    Given the user is on login page
    And the user clicks the login button

Scenario: Successful login with valid credentials
    When user enters the valid username
    When user enters the valid password
    Then user should be redirected to home page

Scenario: Failed login with invalid credentials
    When user enters invalid username
    When user enters invalid password
    Then popup should appear with error message

Scenario: Failed login with empty credentials field
    When user leaves empty username field
    When user leaves empty password field
    Then popup should appear with error message