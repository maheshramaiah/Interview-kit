const Context = React.createContext();
const initialState = {
  items: [],
  query: {
    search: '',
    filters: {},
    page: 0,
    size: 25
  }
};

function reducer(state, action) {
  switch (action) {
    case 'load': {
      return {
        ...state,
        items: action.items
      };
    }
    case 'query': {
      return {
        ...state,
        query: {
          ...state.query,
          [action.query]: action.value
        }
      };
    }
  }
}

function TableService(props) {
  const [state] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getData() {
      const items = await props.fetchData(state.query);

      dispatch({ type: 'load', items });
    }

    getData();
  }, [state.query]);

  return <Context.Provider value={state}>{props.children}</Context.Provider>;
}

function useTableService() {
  const [state, dispatch] = useContext(Context);

  return {
    ...state,
    updateQuery(query) {
      dispatch({ type: 'query', query });
    }
  };
}

function Example() {
  return (
    <TableService fetchData={() => {}}>
      <Table />
    </TableService>
  );
}

function Table() {
  const state = useTableService();

  return <div>{state.items}</div>;
}
