Feature: People Swapi

  Scenario Outline: Get name by id
  Given User <id> and make request
  Then I should have <name>

  Examples:
  | id | name |
  | "1" | "Luke Skywalker" |
