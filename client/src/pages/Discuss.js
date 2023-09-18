// import {formatISO9075} from "date-fns";
// import {Link} from "react-router-dom";
// import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
// import React, { useState, useEffect, useContext} from 'react';
// import { StyledEngineProvider } from '@mui/material/styles';
// import { Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react';  // Import Chakra UI components

// import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
// import { ChakraProvider, extendTheme } from '@chakra-ui/react';
// // import UserContext  from './UserContext'; // Import the UserContext
// import { UserContext} from './UserContext'; // Import UserContext and UserContextProvider

// export default function Post({_id,title,summary,cover,content,createdAt,author}){


//   const { loggedInUser, setLoggedInUser } = useContext(UserContext); // Get user data from context


  
//     // Fetch the like count and check if the post is liked by the user
  


//   const tala = process.env.REACT_APP_BASE_URL;
//     console.log(tala);



//     return ( 


     

// <Card maxW='sm' contentStyle={{ background: '#EEEEEE', borderRadius: '16px' }}>
//   <CardBody>
//   <Link to={`/post/${_id}`}>
//     <Image
//       src={'http://localhost:4000/'+cover}
//       alt='Green double couch with wooden legs'
//       borderRadius='7px'
//       style={{ width: '100%', height: 'auto', maxHeight: '200px' }} 
//     />
//     </Link>
//     <Stack mt='6' spacing='3'>
//     <Link to={`/post/${_id}`}>
//  <Heading size='md' textAlign='center' color='blue.600' fontWeight='bold' fontSize='30px'>
//             {title}
//           </Heading>
//           </Link>
//        <Text fontFamily='serif' textAlign='center' fontSize='16px' color='black'>
//             {summary}
//           </Text>
//           <Divider mt="4" borderColor="black" />
//           <hr style={{ borderTop: '1px solid black', margin: '20px 0' }} />
//     </Stack>
//   </CardBody>
//   <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//   <div style={{ fontSize: '14px', color: 'black' }}>
//       {loggedInUser ? (
//         liked ? (
//           <FaHeart
//             style={{ cursor: 'pointer', color: 'red' }}
//             onClick={handleLike}
//           />
//         ) : (
//           <FaRegHeart
//             style={{ cursor: 'pointer', color: 'gray' }}
//             onClick={handleLike}
//           />
//         )
//       ) : (
//         <FaRegHeart style={{ color: 'gray' }} />
//       )}
//       <span style={{ fontSize: '14px', color: 'black', marginLeft: '10px' }}>
//         {likeCount} {likeCount === 1 ? 'like' : 'likes'}
//       </span>
//     </div>
//   <span style={{ fontSize: '14px', color: 'black' }}>
    
//   </span>
//   <span style={{ fontSize: '14px', color: 'black' }}>
//   <strong style={{ display: 'inline-block', width:'90px' }}>author:</strong>
//   {author.username}
//   <br />
//   <strong style={{ display: 'inline-block', width:'90px'  }}>created at:</strong>
//   {formatISO9075(new Date(createdAt))}
// </span>

// </div>

//   <CardFooter>
  

//   </CardFooter>
// </Card>



//     )
// }