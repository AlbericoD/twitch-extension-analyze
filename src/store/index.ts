import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { csvReducer } from './csv';
import { overviewReducer } from './overview';
import { monetizationReducer } from './monetization';
import { interactionReducer } from './interaction';

const rootReducer = combineReducers({
  csv: csvReducer,
  overview: overviewReducer,
  monetization: monetizationReducer,
  interaction: interactionReducer
});
export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk));
export * from './csv';
export * from './overview';
export * from './monetization';
export * from './interaction';
