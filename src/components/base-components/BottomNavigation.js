import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    <nav>
      <ul>
        {currentPageIndex > 0 && (
          <li>
            <button onClick={goToPreviousPage}>Previous</button>
          </li>
        )}
        <li key={currentPage.path}>
          <Link to={currentPage.path}>{currentPage.label}</Link>
        </li>
        {currentPageIndex < PageList.length - 1 && (
          <li>
            <button onClick={goToNextPage}>Next</button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default BottomNavigation;
