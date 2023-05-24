import React from "react";
import { Edit, SimpleForm, TextInput, NumberInput } from "react-admin";

function EtudiantEdit(props) {
  return (
    <Edit title="modifier un etudiant" {...props}>
      <SimpleForm>
        <NumberInput disabled source="cin" />
        <TextInput source="nom" />
        <TextInput source="prenom" />
        <TextInput source="email" />
        <TextInput source="genre" />
        <TextInput source="niveau" />
        <TextInput source="section" />
      </SimpleForm>
    </Edit>
  );
}

export default EtudiantEdit;
