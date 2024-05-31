import React, { useEffect, useRef, useState } from "react";
import Search from "../../Atoms/Search/Search";
import {
  LoadingWrapper,
  ProductGridStyle,
  ResourcesStyle,
} from "./Resources.styled";
import Card from "../../Molecules/Card/Card";
import axios from "axios";
import InfoTypes from "../InfoTypes/InfoTypes";
import Pagination from "../Pagination/Pagination";
import LoadingImg from "../../Atoms/Loading/LoadingImg";
const data = {
  title: "Nickelson and Sons",
  icon_url: "http://loremflickr.com/640/480",
  link: "https://gaseous-pod.net",
  description:
    "Slack brings the team together, wherever you are. With all of your communication and tools in one....",
  category: "Automotive",
  tag: "request",
  id: "1",
};

const Resources = () => {
  const pageSize = 6;
  const [searchInput, setSearchInput] = useState("");
  const [pageData, setPageData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [currPage, setPage] = useState(1);
  const dataRef = useRef([]);
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

        if (response.status === 200) {
          setTimeout(() => {
            setApi({
              loading: false,
              data: JSON.parse(JSON.stringify(response.data)),
              // data: [],
              error: null,
            });
          }, 1000);

          setFilterData((prev) => JSON.parse(JSON.stringify(response.data)));
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
    <ResourcesStyle>
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
    </ResourcesStyle>
  );
};

export default Resources;
