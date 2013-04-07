@wip
Feature: Project manager views test suite results
  In order to understand the status of the current build,
  As a project manager,
  I can view the results of a test suite

  Background:
    Given the feature suite exists

  Scenario: Project manager views a passed feature
    Given the feature "User logs in" has passed
     When I view the report "Secure Login System - Behaviour Report"
     Then the feature "User logs in" should be shown as passed

  Scenario: Project manager views scenario results

  Scenario: Project manager view step results


