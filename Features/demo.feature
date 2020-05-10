Feature: Validate the calculator Application developed in angularjs
@Calculator
  Scenario Outline: Test Add functionality
    Given User Navigates to "Calculator" Application
    When User adds two numbers "<FirstNumber>" and "<SecondNumber>"
    Then output displayed should be "<Result>"
Examples:
  |FirstNumber|SecondNumber|Result|
    |3          |5           |8     |
  |30          |50           |80     |
  Scenario Outline: Test subtract functionality
    Given User Navigates to "Calculator" Application
    When User subtracts two numbers "<FirstNumber>" and "<SecondNumber>"
    Then output displayed should be "<Result>"
    Examples:
      |FirstNumber|SecondNumber|Result|
      |30          |20           |10     |
      |12          |8          |4    |
  Scenario Outline: Test Multiplication functionality
    Given User Navigates to "Calculator" Application
    When User multiplies two numbers "<FirstNumber>" and "<SecondNumber>"
    Then output displayed should be "<Result>"
    Examples:
      |FirstNumber|SecondNumber|Result|
      |3          |20           |60     |
      |2          |8          |16    |
  Scenario Outline: Test Division functionality
    Given User Navigates to "Calculator" Application
    When User divides two numbers "<FirstNumber>" and "<SecondNumber>"
    Then output displayed should be "<Result>"
    Examples:
      |FirstNumber|SecondNumber|Result|
      |9          |3           |3     |
      |16          |   4       |4|
@Angular
   Scenario Outline: Navigate to Angular Site and Enter hello in Search box
    Given User Navigates to "Angularjs" Application
    When User Clicked on header Angular Io link
    Then user navigates to angular page
    And User Enters "<SearchText>" in the search box
     Examples:
       |SearchText|
     |Hello     |
     |Hi        |