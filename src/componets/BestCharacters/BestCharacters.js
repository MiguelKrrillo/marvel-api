import { Header, Button, Grid, Image } from "semantic-ui-react";
import Container from "../Container";
import marvelImage from "../../img/marvel.png";

import "./BestCharacters.scss";
import useFetch from "../../hooks/useFetch";

export default function BestCharacters() {

  function verData(){
    const CharaList = useFetch(
      `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=b0aafe73968f2f447244ef6ae229e246&hash=2a13e7ef5afd0a6230f93f85829af193`)
  };

  return (
    <Container>
      <div className="best-characters">
        <Grid columns={2} divided="vertically">
          <Grid.Column>
            <Header as="h1">
              Los mejores personajes de Marvel de los que todo el mundo habla
            </Header>
            <Header as="h3">Disfruta del mejor contenido.</Header>
            <button
              class="ui primary button"
              onClick={verData}>
              Ver todos los personajes
            </button>
            {/* <Button>Ver todos los personajes</Button> */}
          </Grid.Column>
          <Grid.Column className="image-container">
            <Image src={marvelImage} alt="Marvel APP" />
          </Grid.Column>
        </Grid>
      </div>
    </Container>
  );
}
