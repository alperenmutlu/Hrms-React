import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import JobPositionList from "../pages/JobAdvert/JobPosition/JobPositionList";
import JobSeekerList from "../pages/User/JobSeeker/JobSeekerList";
import EmployeeList from "../pages/User/Employee/EmployeeList";
import EmployerList from "../pages/User/Employer/EmployerList";

export default function Section() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <GridColumn size={14}>
            <JobPositionList/>
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={14}>
            {/* <EmployeeList/> */}
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={14}>
            {/* <JobSeekerList/> */}
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={14}>
            <EmployerList/>
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  );
}
