// Copyright (c) 2022 Samuel Carlson All rights reserved
//
// Created by: Samuel Carlson
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates points per game.
 */
function calculate () {
  // input
  const points = parseInt(document.getElementById('points').value)
  const games = parseInt(document.getElementById('games').value)

  // process
  const ppg = points / games

  // output
  document.getElementById('ppg').innerHTML = 'This person averages ' + ppg + ' points per game. '
}