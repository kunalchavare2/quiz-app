import React, { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import { ProductGridStyle } from "../Resources/Resources.styled";
import Card from "../../Molecules/Card/Card";
import InfoTypes from "../InfoTypes/InfoTypes";
import Search from "../../Atoms/Search/Search";
import axios from "axios";
import { LoadingWrapper, RequestWrapper } from "./Request.styled";
import LoadingImg from "../../Atoms/Loading/LoadingImg";

const Request = () => {
  const pageSize = 6;
  const [searchInput, setSearchInput] = useState("");
  const [pageData, setPageData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [currPage, setPage] = useState(1);
  const [api, setApi] = useState({
    loading: true,
    data: [],
    error: null,
  });

  useEffect(() => {
    const filterDataTemp = api.data.filter((data) =>
      data.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilterData(filterDataTemp);
  }, [searchInput, api]);

  useEffect(() => {
    let startIndex = currPage * pageSize - pageSize;

    let arr = filterData.slice(startIndex, startIndex + pageSize);
    setPageData(arr);
  }, [currPage, api, filterData]);

  useEffect(() => {
    axios
      .get(
        "https://media-content.ccbp.in/website/react-assignment/resources.json"
      )
      .then((response) => {
        console.log(JSON.parse(JSON.stringify(response.data)));
        let requestData = response.data.filter(
          (data) => data.tag.toLowerCase() === "request"
        );
        if (response.status === 200) {
          setTimeout(() => {
            setApi({
              loading: false,
              data: requestData,
              error: null,
            });

            setFilterData((prev) => JSON.parse(JSON.stringify(response.data)));
          }, 1000);
        }
      })
      .catch((error) => {
        setApi({
          loading: false,
          data: [],
          error: error.message,
        });
      });
  }, []);

  if (api.loading) {
    return (
      <LoadingWrapper>
        <LoadingImg />
      </LoadingWrapper>
    );
  }

  if (api.error) {
    return (
      <div className="">
        <InfoTypes type="error" />
      </div>
    );
  }

  return (
    <RequestWrapper>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      {filterData.length === 0 && (
        <div className="">
          <InfoTypes type="nodata" />
        </div>
      )}
      {filterData.length > 0 && (
        <ProductGridStyle>
          {pageData.map((product) => (
            <Card item={product} />
          ))}
        </ProductGridStyle>
      )}
      {filterData.length > pageSize && (
        <Pagination
          totalCount={filterData.length}
          currentPage={currPage}
          changePage={setPage}
          pageSize={pageSize}
        />
      )}
    </RequestWrapper>
  );
};

export default Request;
