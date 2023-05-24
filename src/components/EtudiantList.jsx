import React, { useEffect, useState } from "react";

import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

function EtudiantList(props) {
  const [etudiantlist, setetudiantlist] = useState([]);
  const [genreData, setGenreData] = useState({
    labels: [],
    datasets: [],
  });
  const [niveauData, setNiveauData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8080/etudiant");
      const etudiants = await res.json();
      // graphe genre
      setetudiantlist([...etudiants]);
      const hommenbr = etudiants.filter(
        (data) => data.genre === "homme"
      ).length;
      const femmenbr = etudiants.filter(
        (data) => data.genre === "femme"
      ).length;
      setGenreData({
        labels: ["pourcentage par genre"],
        datasets: [
          {
            label: "homme",
            data: [hommenbr],
            backgroundColor: ["blue"],
            borderColor: "black",
            borderWidth: 2,
          },
          {
            label: "femme",
            data: [femmenbr],
            backgroundColor: ["pink"],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });
      // graphe section
      const ing = etudiants.filter((data) => data.niveau === "ing").length;
      const licence = etudiants.filter(
        (data) => data.niveau === "licence"
      ).length;
      const master = etudiants.filter(
        (data) => data.niveau === "master"
      ).length;
      setNiveauData({
        labels: ["ingénieur", "licence", "master"],
        datasets: [
          {
            label: "nombre",
            data: [ing, licence, master],
            backgroundColor: ["blue", "green", "red"],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });
    };

    fetchData();
  }, []);

  return (
    <>
      <List {...props}>
        <Datagrid>
          <TextField source="id" />
          <TextField source="nom" />
          <TextField source="prenom" />
          <TextField source="cin" />
          <TextField source="email" />
          <TextField source="genre" />
          <TextField source="niveau" />
          <TextField source="section" />
          <EditButton resource="etudiant" />
          <DeleteButton resource="etudiant" />
        </Datagrid>
      </List>
      <div style={{ margin: "0 auto" }}>
        <div style={{ width: 700 }}>
          <BarChart chartData={genreData} />
        </div>
        {/* <div style={{ width: 700, marginTop: 20 }}>
          <LineChart chartData={genreData} />
        </div> */}
        <div
          style={{
            width: 400,
            height: 400,
            marginTop: 20,
            marginBottom: 0,
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <PieChart chartData={niveauData} />
        </div>
      </div>
    </>
  );
}

export default EtudiantList;
