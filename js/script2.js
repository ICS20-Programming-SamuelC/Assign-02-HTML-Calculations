// Copyright (c) 2022 Samuel Carlson All rights reserved
//
// Created by: Samuel Carlson
// Created on: March 2022
// This file contains the JS functions for index2.html

'use strict'
/**
 * This function calculates point differential.
 */
function calculate () {
  // input
  const pf = parseInt(document.getElementById('pf').value)
  const pa = parseInt(document.getElementById('pa').value)

  // process
  const pd = pf - pa

  // output
  document.getElementById('pd').innerHTML = 'The point differential is ' + pd + ' . '
}