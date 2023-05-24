import React from "react";
import { Edit, SimpleForm, TextInput, NumberInput } from "react-admin";

function EnseignantEdit(props) {
  return (
    <Edit title="modifier un enseignant" {...props}>
      <SimpleForm>
        <NumberInput disabled source="cin" />
        <TextInput source="nom" />
        <TextInput source="prenom" />
        <TextInput source="email" />
      </SimpleForm>
    </Edit>
  );
}

export default EnseignantEdit;
