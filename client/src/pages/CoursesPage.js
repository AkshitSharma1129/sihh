import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './courses.css'
import { Link } from '@mui/material';
function ImgMediaCard({src,name,desc,link}) {
  return (
    <Card sx={{ maxWidth: 345, margin: '20px' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={src}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <a href={link}>Learn More</a>
      </CardActions>
    </Card>
  );
}

const CoursesPage=()=>{
    const coursesM=[
        {
            img:"",
            name:"multiplication",
            link:"https://www.youtube.com/watch?v=lANQZLEwsr8",
            desc:"Multiplication is a fundamental mathematical operation that involves repeated addition. It's a process of combining numbers to find the total of multiple equal groups or sets. In essence, it's a shortcut for adding a number to itself multiple times and is used extensively in mathematics to solve various real-world problems."
        },
        {
            img:"",
            name:"subtraction",
            link:"https://www.youtube.com/watch?v=lANQZLEwsr8",
            desc:"Subtraction is a fundamental mathematical operation used to find the difference between two numbers. It represents the process of taking one quantity away from another. Subtraction is essential for solving problems involving comparisons, reductions, or finding the remaining quantity after some has been removed."
        },
        {
            img:"",
            name:"fractions",
            link:"https://www.youtube.com/watch?v=ls177X_iZO0",
            desc:"Fractions are mathematical representations of part of a whole. They consist of a numerator (the number representing the part) and a denominator (the number representing the whole). Fractions are used to express quantities that are not whole numbers, allowing us to describe and work with portions or ratios of a whole."
        }
    ]
    const coursesG=[
        {
            img:"",
            name:"use of plants",
            link:"https://www.youtube.com/watch?v=5cNnqBWDOcU&list=PLiPy3hM238v4DqsRMNMonZl0ghikIfSym&index=1&ab_channel=PebblesCBSEBoardSyllabus",
            desc:"Plants are versatile organisms with diverse applications. They provide food, medicine, and essential environmental services. They are the foundation of agriculture and contribute to landscaping, industry, renewable resources, education, and cultural significance worldwide."
        },
        {
            img:"",
            name:"my family",
            link:"https://www.youtube.com/watch?v=D-CIunGpV7M&list=PLiPy3hM238v4DqsRMNMonZl0ghikIfSym&index=2&ab_channel=PebblesCBSEBoardSyllabus",
            desc:"My family is a source of love, support, and connection. They provide emotional and practical assistance in times of need. We share experiences, traditions, and values, forming a strong bond. My family is a vital part of my life, offering a sense of belonging and shaping my identity."
        },{
            img:"",
            name:"more about plants",
            link:"https://www.youtube.com/watch?v=WWAjM9TuDWw&list=PLiPy3hM238v4DqsRMNMonZl0ghikIfSym&index=3&ab_channel=PebblesCBSEBoardSyllabus",
            desc:"Plants are essential for sustenance and life on Earth. They provide food, medicine, and maintain our environment. Plants support agriculture, enhance aesthetics, and offer a renewable resource for biofuels. They are subjects of scientific study and hold cultural and religious significance worldwide."
        }
    ]
    const coursesS=[
        {
            img:"",
            name:"food",
            link:"https://www.youtube.com/watch?v=UM5QO9LHBjM&list=PLiPy3hM238v4DqsRMNMonZl0ghikIfSym&index=4&ab_channel=PebblesCBSEBoardSyllabus",
            desc:"Food is a fundamental necessity that sustains life. It provides nourishment, energy, and pleasure. Food culture reflects diversity and traditions, fostering social connections. Access to safe and nutritious food is vital for physical and mental well-being, making it a cornerstone of human existence."
        },
        {
            img:"",
            name:"air around us",
            link:"https://www.youtube.com/watch?v=Txe20hKs13U&list=PLiPy3hM238v4DqsRMNMonZl0ghikIfSym&index=5&ab_channel=PebblesCBSEBoardSyllabus",
            desc:"The air around us is essential for life, providing the oxygen needed for respiration. It also plays a role in climate regulation and weather patterns. Air quality impacts human health, and its composition affects the natural world. The atmosphere is a vital component of our environment, influencing both our daily lives and the planet's overall well-being."
        },{
            img:"",
            name:"means of transport",
            link:"https://www.youtube.com/watch?v=UoFes7B2jn4&list=PLiPy3hM238v4DqsRMNMonZl0ghikIfSym&index=6&ab_channel=PebblesCBSEBoardSyllabus",
            desc:"Means of transport are the lifelines of our modern society, facilitating the movement of people and goods. They connect communities, enable economic activity, and provide access to essential services. Transport systems, whether by road, rail, air, or sea, play a crucial role in our daily lives, fostering mobility and global connectivity."
        }
    ]
    return(
        <>
          <h2 style={{"textAlign":"center"}}>General Knowledge</h2>
            <div className='gk' >
              
                {coursesG.map((courseG,i)=>(
                    <ImgMediaCard src={courseG.img} name={courseG.name} link={courseG.link} desc={courseG.desc} style={{"padding":"20px"}}/>
                ))}
            </div>
            <h2 style={{"textAlign":"center"}}>Science</h2>
            <div className='gk'>
                
                {coursesS.map((courseS,i)=>(
                    <ImgMediaCard src={courseS.img} name={courseS.name} link={courseS.link} desc={courseS.desc}/>
                ))}
            </div>
            <h2 style={{"textAlign":"center"}}>Mathematics</h2>
            <div className='gk'>
                
                {coursesM.map((courseM,i)=>(
                    <ImgMediaCard src={courseM.img} name={courseM.name} link={courseM.link} desc={courseM.desc}/>
                ))}
            </div>
        </>
    )
}
export default CoursesPage;