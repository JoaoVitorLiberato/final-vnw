
import CardPosters from "../../components/CardPosters"
import { Container, ContainerMovies, ContainerSeries } from "./styles"

export default function Home() {
  return(
    <Container>
        <ContainerMovies>
          <h2>F</h2>
          <CardPosters/>
        </ContainerMovies>
        <ContainerSeries>
          <h2>s</h2>
          <CardPosters/>
        </ContainerSeries>
    </Container>
  )
}