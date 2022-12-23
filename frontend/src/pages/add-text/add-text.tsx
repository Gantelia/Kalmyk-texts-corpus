import AddTextForm from '../../components/add-text-form/add-text-form';
import './add-text.scss';

function AddText() {
  return (
    <main className="main">
      <h2 className="title">Загрузить текст</h2>
      <AddTextForm />
    </main>
  );
}

export default AddText;
