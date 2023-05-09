// import { ReactNode } from 'react';
// // import {} from "react-router-dom"
// import {
//   Box,
//   Flex,
//   Avatar,
//   Link,
//   Button,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuDivider,
//   useDisclosure,
//   useColorModeValue,
//   Stack,
//   useColorMode,
//   Center,
  
// } from '@chakra-ui/react';
// import { MoonIcon, SunIcon } from '@chakra-ui/icons';

// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//     {children}
//   </Link>
// );
// const links = [
//     { path: "/", title: "Home" },
//     { path: "/about", title: "About" },
//     { path: "/contact", title: "Contact" },
//     { path: "/destination", title: "Destination" },
//     { path: "/blogs", title: "Blogs" },
//   ];

// export default function Navbar() {
//   const { colorMode, toggleColorMode } = useColorMode();
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   return (
//     <>
//       <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
//         <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
//           <Box >Travel Agency</Box>
//           {/* <Box style={{marginLeft: "50px", color: "red"}}>Home</Box>
//           <Box style={{ color: "red"}}>Destination</Box>
//           <Box style={{ color: "red"}}>About Us</Box>
//           <Box style={{ color: "red"}}>Contact Us</Box>
//           {/* <Box style={{ color: "red"}}>Blogs</Box> */}
//           {/* <Link to="/blogs" path="Blogs">Blogs</Link> */}
         

//            {links.map((e, index) => {
//                 return (
//                   <Link
                   
                    
//                     key={e.path}
//                     to={e.path}
//                   >
//                     {e.title}
//                   </Link>
//                 );
//               })} 

//           <input type="text" placeholder='search here' style={{widht: "90px", borderRadius: "10px", height: "25px", textAlign: "center" }}/>
//           <button style={{border: "2px"}}>Log In</button>
//           <button style={{border: "2px"}}>Sign In</button>

//           <Flex alignItems={'center'}>
//             <Stack direction={'row'} spacing={7}>
//               <Button onClick={toggleColorMode}>
//                 {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
//               </Button>

//               <Menu>
//                 <MenuButton
//                   as={Button}
//                   rounded={'full'}
//                   variant={'link'}
//                   cursor={'pointer'}
//                   minW={0}>
//                   <Avatar
//                     size={'sm'}
//                     src={'https://avatars.githubusercontent.com/u/109854714?v=4'}
//                   />
//                 </MenuButton>
//                 <MenuList alignItems={'center'}>
//                   <br />
//                   <Center>
//                     <Avatar
//                       size={'2xl'}
//                       src={'https://avatars.githubusercontent.com/u/109854714?v=4'}
//                     />
//                   </Center>
//                   <br />
//                   <Center>
//                     <p>Kamran</p>
//                   </Center>
//                   <br />
//                   <MenuDivider />
//                   <MenuItem>Your Servers</MenuItem>
//                   <MenuItem>Account Settings</MenuItem>
//                   <MenuItem>Logout</MenuItem>
//                 </MenuList>
//               </Menu>
//             </Stack>
//           </Flex>
//         </Flex>
//       </Box>
//     </>
//   );
// }


import { ReactNode } from "react";
// import AllRoutes from "../Routes/AllRoutes";
import { AuthContext } from "../Context/AuthContextProvider";
import { Navlink, Link } from "react-router-dom";
import {
  Box,
  Flex,
  Avatar,
  Input,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
  Spacer,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

const links = [
  { path: "/", title: "HOME" },
  { path: "/destination", title: "DESINATION" },
  { path: "/about", title: "ABOUT" },
  { path: "/blogs", title: "BLOGS" },
  { path: "/contact", title: "CONTACT" },
  
];

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const activestyle = {
    color: "red",
  };

  const defaultstyle = {
    color: "black",
  };
  return (
    <>
      <Box>
        <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
          <Flex
            h={16}
            ml={20}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box style={{ width: "140px" }}>
              <img style={{ width: "120px", height: "50px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1w-7BiQE1VQ-F9AafMs-b3kOxHXF78OsB7Q&usqp=CAU"
                alt=""
              />
            </Box>
            <Box
              style={{
                // border: "5px solid",
                alignItems: "center",
                justifyContent: "space-between",
                // margin: "auto",
                fontSize: "18px",
                width: "700px",
                marginLeft: "-100px",
                color: "#FF6F00",
                fontFamily: "sans-serif",
                fontWeight: "700"
              }}
            >
              {links.map((e, index) => {
                return (
                  <Link
                    style={{
                      activestyle,
                      marginRight: index !== links.length - 1 ? "50px" : "0",
                    }}
                    key={e.path}
                    to={e.path}
                  >
                    {e.title}
                  </Link>
                );
              })}
            </Box>
            <Box>
              <Input
                placeholder="Search Bar"
                style={{
                  border: "2px solid",
                  width: "300px",
                  marginRight: "-70px",
                }}
                htmlSize={4}
                width="auto"
              />
            </Box>

            <Flex alignItems={"center"}>
              <Stack direction={"row"} spacing={7} mr={20}>
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>

                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar
                      size={"sm"}
                      src={"https://avatars.githubusercontent.com/u/109854714?v=4"}
                    />
                  </MenuButton>
                  <MenuList alignItems={"center"}>
                    <br />
                    <Center>
                      <Avatar
                        size={"2xl"}
                        src={
                          "https://avatars.githubusercontent.com/u/109854714?v=4"
                        }
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>Username</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <Link to={"/login"}><MenuItem>Log In</MenuItem></Link>
                    <MenuItem>Sign Up</MenuItem>
                    <MenuItem>Logout</MenuItem>
                  </MenuList>
                </Menu>
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </Box>

      {/* <Footers/> */}
    </>
  );
}