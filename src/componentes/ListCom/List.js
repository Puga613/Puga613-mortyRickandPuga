import React, { useEffect, useState } from "react";
import "./List.css";
import Card from "../CardCom/Card";

const API = "https://rickandmortyapi.com/api/character/";

const List = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
    searchTerm: "",
    error: "",
  });
  const [searchValue, setSearchValue] = useState("");
  const [Detail, setDetail] = useState([]);

  const getPersonajes = async () => {
    const res = await fetch(`${API}`);
    const resJSON = await res.json();
    //console.log(resJSON.results);
    if (resJSON) {
      setState({
        data: resJSON.results,
        dat: resJSON.results,
        loading: false,
        error: "",
      });
    }
  };

  const fetchRyck = async (searchValue) => {
    if (searchValue === "") {
      return getPersonajes();
    }
    const list = state.data;
    console.log(list);
    const response = await list.filter(list => list.name.toUpperCase().includes(searchValue.toUpperCase()));
    console.log(response);
    const responseJson = await response;
    
    if (responseJson) {
      setState({
        data: responseJson,
      });
    }
  };
  useEffect(() => {
    fetchRyck(searchValue);
  }, [searchValue]);

  useEffect(() => {
    getPersonajes();
  }, []);

  const { data, loading } = state;

  if (loading) {
    return <div>Cargando...</div>;
  }
  return (
    <>
      <div className="input-group search">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar un personaje"
          value={state.searchTerm}
          onChange={(event) => setSearchValue(event.target.value)}
          autoFocus
        />
        <label>Buscar un personaje</label>
        <div className="req-mark">Q</div>
      </div>
      <h3>{state.error ? state.error : ""}</h3>

      <div className="grid-item">
        {data.map((personaje, id) => (
          <Card key={id} personaje={personaje} />
        ))}
      </div>
    </>
  );
};

export default List;
