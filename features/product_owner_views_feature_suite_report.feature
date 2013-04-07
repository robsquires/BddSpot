Feature: Product Owner views feature suite report
  In order to review the systems behaviour,
  As a product owner,
  I can view features, scenarios and steps within a feature suite report

  Background:
    Given the feature suite exists
     When I view the report "Secure Login System - Behaviour Report"


  Scenario: Product owner views a feature title
    Then I should see the feature "User logs in"
     And I should see the feature description:
     """
     In order to keep my profile secure
     As a user,
     I need to log in before I can view my profile
     """

  Scenario: Product owner views scenarios for a feature
    Then I should see the scenario "Users logs in successfully"

  Scenario: Product owner view steps for a scenario
    Then I should see the step "Given a user exists"


