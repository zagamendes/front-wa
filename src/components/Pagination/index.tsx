import React, { useContext, useEffect, useState } from "react";
import api from "../../utils/api";

import { MDBPagination, MDBPaginationItem } from "mdb-react-ui-kit";
import { Link, useSearchParams } from "react-router-dom";
import { AlertContext } from "../../contextos/AlertContext";

const Pagination: React.FC = () => {
  const [qtd, setQtd] = useState(0);

  const items = [];
  const [searchParams] = useSearchParams();
  const { setMessage, showAlert, setShowAlert, setType } =
    useContext(AlertContext);

  const getQtdMovies = async () => {
    try {
      const { data } = await api("/totalMovies").catch((e: Error) => {
        throw new Error(e.message);
      });
      setQtd(data.total);
    } catch (e) {
      console.log(e);
      setMessage(e as string);
      setShowAlert(!showAlert);
      setType("danger");
    }
  };
  useEffect(() => {
    getQtdMovies();
  }, [qtd]);
  for (let i = 1; i <= Math.round(qtd / 8); i++) {
    items.push(i);
  }

  return (
    <nav
      aria-label="Page navigation example  "
      className="d-flex justify-content-center my-3"
    >
      <MDBPagination className="mb-0">
        {items.map((item) => {
          return (
            <MDBPaginationItem
              className={
                parseInt(searchParams.get("page") as string) == item
                  ? "active"
                  : ""
              }
            >
              <Link to={`/?page=${item}`}>{item}</Link>
            </MDBPaginationItem>
          );
        })}
      </MDBPagination>
    </nav>
  );
};

export default Pagination;
