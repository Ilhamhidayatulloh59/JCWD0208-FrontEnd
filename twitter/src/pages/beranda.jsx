import { Grid, GridItem } from "@chakra-ui/react";
import { BerandaComp } from "../components/beranda";
import { Sidebar } from "../components/sidebar";
import { Users } from "../components/users";

export const Beranda = () => {
  return (
    <Grid templateColumns="30vw 40vw 30vw">
      <GridItem h="100vh">
        <Sidebar />
      </GridItem>
      <GridItem h="100vh">
        <BerandaComp />
      </GridItem>
      <GridItem h="100vh">
        <Users />
      </GridItem>
    </Grid>
  );
};
