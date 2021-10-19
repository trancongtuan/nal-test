import { combineReducers } from 'redux';
import articale, { ArticaleState } from './articale';

export interface IRootState {
  readonly articale: ArticaleState;
}

const rootReducer = combineReducers<IRootState>({ articale });

export default rootReducer;
