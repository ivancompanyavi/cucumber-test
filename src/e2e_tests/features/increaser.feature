Feature: Increaser
  
  Scenario: Increase counter when pressed button
    Given we load the main page
    When we click on "increaser" button
    Then text "increaser_result" should be "1"