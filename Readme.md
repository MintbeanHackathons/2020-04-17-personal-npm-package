# @matsos/expected-wins

![npm](https://img.shields.io/npm/v/@matsos/expected-wins)

## Description

A simple javascript library based on a formula developed by baseball statistician Bill James. It attempts to determine the number of games a team should have won, by comparing the total number of runs a team has scored to the number of runs it has allowed.

## The rationale

The record of a baseball team can be expressed in a percentage. (ie: 5 wins and 5 losses would give a winning percentage of .500). This is a simple statistic however, and doesn't take into account how well a team is really playing. A team could be getting heavily outscored by their opponents, but still have a decent record because of good luck or poor officiating.

The idea behind expected-wins (the statistic) is that if you score more runs (consistently) than your opponent, your win/loss record should reflect that accordingly. And when you compare the teams actual winning percentage to your expected wins, you can better gauge the quality of team itself (not other factors contributing to the outcome).

## Install

```
$ npm install @matsos/expected-wins
```

## Usage

```js
const exp = require("@matsos/expected-wins");
const runsScored = 207;
const runsAllowed = 556;
const winningPercentage = exp(runsScored, runsAllowed);
console.log(winningPercentage);
//=> 0.122
```

## Unit Tests

A simple set of mocha unit tests can be run by using the following command:

```
npm test
```
