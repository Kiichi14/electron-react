import { BrowserRouter } from 'react-router-dom';
import '../../assets/style/App.scss';
import { Provider } from 'react-redux';
import store from '../../store/store';
// eslint-disable-next-line import/no-named-as-default
import MainRoutes from '../../routes/mainRoutes';
import 'tailwindcss/tailwind.css';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <MainRoutes />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
