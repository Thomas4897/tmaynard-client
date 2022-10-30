import { Box, Image, useMantineColorScheme } from '@mantine/core'
import React, { useState } from 'react'
// import APIaxios from '../../Axios'
// import { useUser } from '../../redux/userState'
import Layout from '../Layout'
// import PortfolioCard from '../PortfolioCard'
import logoWhite from '../logo-white.png';
import { useMode } from '../../redux/modeState'
import LogoImage from '../logoImage';

export default function HomePage() {
  // const { colorScheme } = useMantineColorScheme();
  // const logoColor = colorScheme === "light" ? "100" : "0"
  // const { darkMode } = useMode();
//   const { user } = useUser();
//   const [portfolioData, setPortfolioData] = useState([]);
//   const [userFavorites, setUserFavorites] = useState([]);
//   const [updateFavorites, setUpdatedFavorites] = useState(true);
//   const homePage = true;


  // This is what runs after the first render:
//   useEffect(() => {
//     const getAllPortfolioItems = async () => {
//       APIaxios.post('/portfolioItems/get-all-portfolio-items', {
//         user
//       })
//         .then((response) => {
//           setUserFavorites(response.data.userFavorites)
//           setPortfolioData(response.data.foundPortfolioItems);
//         })
//         .catch((error) => console.log('error: ', error));
//     };
//     getAllPortfolioItems();
//   }, [user, updateFavorites]
//   );



  return (
    <Layout>
      <Box style={{ 
        display: "flex", 
        flexDirection: "column", 
        height: "100vh", 
        width: "100%",
        border: "solid 4px blue",
         }}>
        <Box 
        pl={20}
        style={{
          border: "solid 4px green",
        }}
        >
          <h2>Thomas Maynard</h2>
        </Box>
          <Box 
          className="example" 
          style={{ 
            height: "100vh",
            display: "flex", 
            border: "solid 4px red",
            justifyContent: "center",
            alignItems: "center",
            // overflow: "scroll"
           }}
          >

            <LogoImage ht="100px" wd="100px"/>
            
          {/* <Image
                src={logoWhite}
                style={{
                  border: "solid 4px gold",
                  height: "100px",
                  width: "100px",
                  filter: `invert(${logoColor}%)`
                  // justifySelf: "center",
                  // alignSelf: "center"
                  // filter: `invert(${logoColor}%)`
                  // alignSelf: "center",
                  // overflow: "scroll"

                 }}
                />  */}
          </Box>
      </Box>
    </Layout>
  )
}
