import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Server } from "../types";

interface Props {
  servers: Server[];
}

export const ServerList = (props: Props) => {
  const { servers } = props;

  return (
    <>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h2"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            所属サーバー
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            所属サーバー
          </Typography>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {servers.map((server) => (
            <Grid item key={server.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    pt: "36.25%",
                  }}
                  image={server.imageUrl}
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    ルーム名：{server.name}
                  </Typography>
                  <Typography>カテゴリ：{server.category}</Typography>
                  <Typography>説明：{server.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">参加申請</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
