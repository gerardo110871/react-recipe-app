import {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

function Popular() {

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular()

  }, []);

  const getPopular = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=13499806251b4961b2327530266d52a7&number=9`)
    const data = await api.json()
    setPopular(data.recipes)
    console.log(data)
  }

  return (
    <div>
          <Wrapper>
            <h3>Popular Picks</h3>
            <Splide 
              options={{
                perPage: 4,
                arrows:false,
                pagination:false,
                drag:'free',
                gap:"5rem",
              }}
            >
                {popular.map((recipe) => {
                  return (
                    <SplideSlide>
                      <Card>
                          <p>{recipe.title}</p>
                            <img src={recipe.image} alt={recipe.title} />
                      </Card>
                    </SplideSlide>
                    )
                  })}
            </Splide>
          </Wrapper>
    </div>
  )
}



//adding css to the page
//then wrap the items you want to style with the variable name EX: <Wrapper> </Wrapper>

const Wrapper = styled.div`
  margin: 4rem orem;
`
const Card = styled.div`
  min-height: 25rem;
  border-radius:2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius:2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
    p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom:0;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default Popular