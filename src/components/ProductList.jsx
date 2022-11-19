import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from './Products'
import Newsletter from './Newsletter'
import Footer from './Footer'
import { FilterList, Sort } from '@material-ui/icons'
import { mobile } from "../responsive";

const Container = styled.div`
    
`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    display: flex;
    ${mobile({ width: "0px 20px", marginLeft: "30px", flexDirection: "column"})}
`
const FilterText = styled.span`
    font-style: 20px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px"})}
`
const Option = styled.option`
    
`

const ProductList = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter><FilterText>Filter <FilterList style={{marginLeft:"10px"}} /> </FilterText>
            <Select>
                 <Option disabled selected>Color</Option>
                 <Option>White</Option>
                 <Option>Black</Option>
                 <Option>Red</Option>
                 <Option>Blue</Option>
                 <Option>Yellow</Option>
                 <Option>Green</Option>
            </Select>
            <Select>
                 <Option disabled selected>Size</Option>
                 <Option>XS</Option>
                 <Option>S</Option>
                 <Option>M</Option>
                 <Option>L</Option>
                 <Option>XL</Option>
            </Select>
            </Filter>
            <Filter><FilterText><Sort style={{marginRight:"5px"}}/> Sort</FilterText>
                 <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                 </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList