import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "./axios";
import Search from './StateSearch';
import FilterData from "./FilterData";
import Pages from './Pagination';
import { get, sortColumn, changeCategory } from 'D:/divyang radadiya/desktop/reactcode/fetchdata/src/Action/index.js';


function TableData() {
    const myState = useSelector((state) => state.DataProvider.details);
    const filterCol = useSelector((state) => state.DataProvider.filter.name);
    const filterOrder = useSelector((state) => state.DataProvider.filter.order);
    const col = useSelector((state) => state.DataProvider.colName);
    const cat = useSelector((state) => state.DataProvider.category);
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const item = 8;
    const [page, setPage] = useState(1);
    const itemList = ['state', 'recovered', 'confirmed', 'deaths', 'active'];
    const pageNum = [];
    const indexOfLastPost = page * item;
    const indexOfFirstPost = indexOfLastPost - item;

    const pgNumber = (pageNum) => { setPage(pageNum) };
    for (let i = 1; i <= Math.ceil(myState.length / item); i++) {
        pageNum.push(i);
    }

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get('https://data.covid19india.org/data.json');
                dispatch(get(res.data.statewise));
                console.log(res.data.statewise);
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, []);

    return (
        <>
            <div className="main">
                <h1 className='head'><span>India</span> Covid-19 Dashboard</h1>
                <div className=' d1'>
                    <div className="searchData">
                        <Search
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                    </div>
                    <div className="dropdown">
                        <FilterData
                            value={cat}
                            list={col}
                            onChange={(e, index) => dispatch(changeCategory(e))}
                        />
                    </div>
                </div>
                <table className="table table-bordered table-hover">
                    <thead className="table-dark">
                        <tr>
                            {
                                col.map((value, index) => {
                                    return (
                                        <th key={index} className='text-center' onClick={() => dispatch(sortColumn(value))}>
                                            {value}
                                            <span className="sm">
                                                {
                                                    filterCol == value ? filterOrder == "asc" ? "▲" : "▼" : null
                                                }
                                            </span>

                                        </th>
                                    )
                                })
                            }
                            <th className='text-center'>updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.isArray(myState) ?
                                myState.slice(indexOfFirstPost, indexOfLastPost)
                                    .filter((val) => {
                                        if (cat.length === 0) {
                                            return col.some(value => {
                                                let obj = val[value].toString().toLowerCase();
                                                return obj.includes(search);
                                            });
                                        } else {
                                            return cat.some(value => {
                                                let obj = val[value].toString().toLowerCase();
                                                return obj.includes(search);
                                            });
                                        }
                                    })
                                    .map((current, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{current.state}</td>
                                                <td>{current.recovered}</td>
                                                <td>{current.confirmed}</td>
                                                <td>{current.deaths}</td>
                                                <td>{current.active}</td>
                                                <td>{current.lastupdatedtime}</td>
                                            </tr>
                                        )
                                    })
                                : null
                        }
                    </tbody>
                </table>
                <div className="text-center pgnation ">
                    <Pages
                        tableRowsPerPage={pageNum}
                        pgNumber={pgNumber}
                    />
                </div>
            </div>
        </>
    );
};

export default TableData;
