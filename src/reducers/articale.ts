import { REQUEST, SUCCESS, FAILURE, IAction } from './action_type';
import { ARTICALE_DETAIL, FETCH_ARTICALE_LIST, REFRESH } from '../constant/articale';
import { IArticale } from '../asset/types/articales';

const initialState = {
  loading: false,
  item: [] as IArticale[],
  articale: {} as IArticale,
};
export type ArticaleState = Readonly<typeof initialState>;

export default (state: ArticaleState = initialState, action: IAction): ArticaleState => {
  switch (action.type) {
    case REQUEST(FETCH_ARTICALE_LIST):
    case REQUEST(ARTICALE_DETAIL):
      return {
        ...state,
        loading: true,
      };
    case SUCCESS(FETCH_ARTICALE_LIST):
      return {
        ...state,
        item: action?.payload?.data,
        loading: false,
      };
    case SUCCESS(ARTICALE_DETAIL):
      return {
        ...state,
        loading: false,
        articale: action?.payload?.data,
      };
    case FAILURE(FETCH_ARTICALE_LIST):
    case FAILURE(ARTICALE_DETAIL):
      return {
        ...state,
        loading: false,
      };
    case REFRESH:
      return {
        ...state,
        item: [],
        articale: {},
      };
    default:
      return state;
  }
};
