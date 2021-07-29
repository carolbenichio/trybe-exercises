// src/helper/index.js
import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import fetchAPI from '../reducers';

const createMockStore = (initialState) => (
  createStore(combineReducers({ fetchAPI }), initialState, applyMiddleware(thunk))
);

const renderWithRedux = (
  component, { initialState, store = createMockStore(initialState) } = {},
) => ({
  ...render(<Provider store={ store }>{component}</Provider>),
  store});

export default renderWithRedux;