import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Hierarchy from '../../components/hierarchy/hierarchy';
import Search from '../../components/search/search';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchDocumentAction } from '../../store/api-actions/document-actions';
import Text from '../../components/text/text';

function Document() {
  const { id } = useParams();
  const documentId = Number(id);

  const navigate = useNavigate();

  const { document } = useAppSelector(({ DOCUMENT }) => DOCUMENT);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (Number.isNaN(documentId)) {
      navigate(AppRoute.NotFound);
    }

    if (document === null || document?.id !== documentId) {
      dispatch(fetchDocumentAction(documentId));
    }
  }, [document, id]);

  return (
    <main className="main">
      <div className="main__wrapper">
        <h1 className="visually-hidden">Документ</h1>
        <Search />
        <Hierarchy />
        <Text document={document} />
      </div>
    </main>
  );
}

export default Document;
