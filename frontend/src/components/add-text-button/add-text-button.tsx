import { ChangeEvent } from 'react';
import { useAppDispatch } from '../../hooks';
import { showText } from '../../store/actions';
import './add-text-button.scss';

type AddTextButtonProps = {
  isDisabled: boolean;
};

function AddTextButton({ isDisabled }: AddTextButtonProps) {
  const dispatch = useAppDispatch();

  // Читает контент из загруженного файла
  const handleFileLoad = async (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    const reader = new FileReader();
    evt.target.files && reader.readAsText(evt.target.files[0]);
    reader.onload = async (evt) => {
      if (typeof evt.target?.result === 'string') {
        const text = evt.target?.result as string;
        dispatch(showText(text));
      }
    };
  };

  return (
    <>
      <input
        className="visually-hidden"
        type="file"
        id="load-file"
        name="text"
        accept=".txt"
        onClick={(evt) => (evt.currentTarget.value = '')}
        onChange={(evt) => {
          handleFileLoad(evt);
        }}
        disabled={isDisabled}
      />
      <label className="add-text__text-label button" htmlFor="load-file">
        Загрузить из файла
      </label>
    </>
  );
}

export default AddTextButton;
