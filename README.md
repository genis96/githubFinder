# Notes:  Hooks

Functions that allow us to hook into react state & lifecycle features from a function component

ex: 
import { useState, useEffect } from 'react';

Hooks: useState, useEffect, useReducer, useContext, useRef, useCallback

useState - allows to have state within a functional component 

useEffect - allows for sideeffects in components, if for ex.. i wanted to fetch users when a compoenent loads

useContext - bring in context into any component without rendering, setting up props and functions

useReducer - redux like w/o using redux... its a function that allows you to dispatch actions to manipulate app level state and sends it to the components that need it
