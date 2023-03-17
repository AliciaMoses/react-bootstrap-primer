import React from "react";
import { Table } from "react-bootstrap";
import spacingClassAbbreviations from "../../base-components/spacingAbbreviations";
import spacingClasses from "../../base-components/spacingClasses";
import utilityClasses from "../../base-components/utilityClasses";

const renderTableRows = (data) => {
  return data.map((item, index) => (
    <tr key={index}>
      <td>{item.abbreviation || item.class}</td>
      <td>{item.description}</td>
    </tr>
  ));
};

const BootstrapClasses = () => {
  return (
    <>
      <h1 className="display-6">Spacing Class Abbreviations</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Abbreviation</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{renderTableRows(spacingClassAbbreviations)}</tbody>
      </Table>

      <h1 className="display-6">Spacing Classes</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Class</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{renderTableRows(spacingClasses)}</tbody>
      </Table>

      <h1 className="display-6">Utility Classes</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Class</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{renderTableRows(utilityClasses)}</tbody>
      </Table>
    </>
  );
};

export default BootstrapClasses;
