import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap"
import PageList from "./PageList";

function BottomNavigation() {
  const navigate = useNavigate();
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const currentPage = PageList[currentPageIndex];

  const goToNextPage = () => {
    if (currentPageIndex < PageList.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
      navigate(PageList[currentPageIndex + 1].path);
    }
  };

  const goToPreviousPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
      navigate(PageList[currentPageIndex - 1].path);
    }
  };

  return (
    <Navbar bg="light" expand="md" fixed="bottom">
    <Nav className="mx-auto">
      {currentPageIndex > 0 && (
        <Nav.Item>
          <Nav.Link onClick={goToPreviousPage}>Previous</Nav.Link>
        </Nav.Item>
      )}
      <Nav.Item>
        <Nav.Link disabled>{currentPage.label}</Nav.Link>
      </Nav.Item>
      {currentPageIndex < PageList.length - 1 && (
        <Nav.Item>
          <Nav.Link onClick={goToNextPage}>Next</Nav.Link>
        </Nav.Item>
      )}
    </Nav>
  </Navbar>
  );
}

export default BottomNavigation;
