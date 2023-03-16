import { ListGroup } from 'react-bootstrap';
import PageList from '../../base-components/PageList';

const ListSections = () => {
  return (
    <ListGroup>
      {PageList.filter((page) => page.path !== '/').map((page) => (
        <ListGroup.Item key={page.path} action href={page.path}>
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{page.label}</h5>
            <small className="text-muted">{page.date}</small>
          </div>
          <p className="mb-1">{page.description}</p>
          <small className="text-muted">{page.details}</small>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ListSections;