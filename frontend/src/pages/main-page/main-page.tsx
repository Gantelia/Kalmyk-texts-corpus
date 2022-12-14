import Breadcrumb from '../../components/breadcrumb/breadcrumb';
import Form from '../../components/form/form';

import './main-page.scss';

function MainPage() {
  return (
    <main className="main main--index">
      <h1 className="visually-hidden">Корпус текстов калмыцкого языка</h1>
      <Form />
      <section className="genre-structure">
        <h2 className="title genre-structure__title">
          Иерархическая структура жанров
        </h2>
        <Breadcrumb />
      </section>
    </main>
  );
}

export default MainPage;
