import React from "react";
import { Create, SimpleForm, TextInput, NumberInput } from "react-admin";

function EtudiantCreate(props) {
  return (
    <Create title="creer un etudiant" {...props}>
      <SimpleForm>
        <NumberInput source="cin" />
        <TextInput source="nom" />
        <TextInput source="prenom" />
        <TextInput source="email" />
        <TextInput source="genre" />
        <TextInput source="niveau" />
        <TextInput source="section" />
      </SimpleForm>
    </Create>
  );
}

export default EtudiantCreate;
