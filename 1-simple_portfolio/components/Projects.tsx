import { Card, CardContent, CardMedia, Container, Grid2, Typography } from "@mui/material"


const projects = [
    {title: "Project One", description: "Lorem ipsum dolor sit amectatur matrixus", image: "https://mui.com/static/images/cards/contemplative-reptile.jpg"},
    {title: "Project One", description: "Lorem ipsum dolor sit amectatur matrixus", image: "https://mui.com/static/images/cards/contemplative-reptile.jpg"},
    {title: "Project One", description: "Lorem ipsum dolor sit amectatur matrixus", image: "https://mui.com/static/images/cards/contemplative-reptile.jpg"},
];

const Projects = () => {
    return (
        <section id="projects">
            <Container sx={{padding: '2rem 0'}}>
                <Typography variant="h4" gutterBottom>
                    My Projects
                </Typography>
                <Grid2 container spacing={3}>
                    {projects.map((project, index) => (
                        <Grid2>
                            <Card>
                                <CardMedia 
                                    sx={{height: 200}}
                                    image={project.image}
                                    title={project.title}
                                />
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2">{project.description}</Typography>
                                </CardContent>
                            </Card>
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
        </section>
    )
}  


export default Projects;