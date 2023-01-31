import AddTextForm from '../../components/add-text-form/add-text-form';
import './add-text.scss';

function AddText() {
  return (
    <main className="main">
      <div className="main__wrapper">
        <h2 className="title">Загрузить текст</h2>
        <AddTextForm />
      </div>
    </main>
  );
}

export default AddText;
