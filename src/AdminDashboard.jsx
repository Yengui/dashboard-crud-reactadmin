import React from "react";

import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import EtudiantList from "./components/EtudiantList";
import EtudiantCreate from "./components/EtudiantCreate";
import EtudiantEdit from "./components/EtudiantEdit";
import EnseignantList from "./components/EnseignantList";
import EnseignantCreate from "./components/EnseignantCreate";
import EnseignantEdit from "./components/EnseignantEdit";
import CadreList from "./components/CadreList";
import CadreCreate from "./components/CadreCreate";
import CadreEdit from "./components/CadreEdit";

function AdminDashboard() {
  return (
    <Admin dataProvider={simpleRestProvider("http://localhost:8080")}>
      <Resource
        name="etudiant"
        list={EtudiantList}
        create={EtudiantCreate}
        edit={EtudiantEdit}
      />
      <Resource
        name="enseignant"
        list={EnseignantList}
        create={EnseignantCreate}
        edit={EnseignantEdit}
      />
      <Resource
        name="cadre_admin"
        list={CadreList}
        create={CadreCreate}
        edit={CadreEdit}
      />
    </Admin>
  );
}

export default AdminDashboard;
