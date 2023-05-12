/* eslint-disable react/prop-types */
import { Container, Image, Title, Year} from "./style"

export default function CardPosters({ image, altImage, title, year }) {
  return(
    <Container>
      <Image 
        src={image}
        alt={altImage} 
      />
      <Title>
        { title }
      </Title>
      <Year>
        { year }
      </Year>
    </Container>
  )
}