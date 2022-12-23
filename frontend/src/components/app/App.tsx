import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../layout/layout';
import MainPage from '../../pages/main-page/main-page';
import About from '../../pages/about/about';
import NotFound from '../../pages/not-found/not-found';
import { AppRoute } from '../../const';
import AddText from '../../pages/add-text/add-text';
import Document from '../../pages/document/document';
import '../../sass/variables.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path={AppRoute.About} element={<About />} />
          <Route path={AppRoute.AddText} element={<AddText />} />
          <Route path={AppRoute.Document} element={<Document />} />
          <Route path={AppRoute.NotFound} element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
