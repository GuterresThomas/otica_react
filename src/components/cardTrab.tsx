'use client'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Button,
    Tooltip,
  } from "@material-tailwind/react";
   
  export default function DefaultCard() {
    return (
      <Card className=" font-montserrat max-w-[24rem] overflow-hidden">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className=" font-montserrat m-0 rounded-none"
        >
          <img
            src="atacadao_49.webp"
            alt="ui/ux review check"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray">
            Já pensou em trabalhar conosco?
          </Typography>
          <Typography variant="lead" color="gray" className=" font-montserrat mt-3">
            Não perca a chance de trabalhar em uma das maiores redes de óticas do estado! Envie agora mesmo seu curriculo para se tornar um(a) de nossos(a) colaboradores(a)!
          </Typography>
        </CardBody>
        <CardFooter className="font-montserrat flex items-center justify-between">
            <a href="/trabalheconosco"><Button>Clique aqui</Button></a>
        </CardFooter>
      </Card>
    );
  }