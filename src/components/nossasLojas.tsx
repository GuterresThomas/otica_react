'use client'
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";


export default function SimpleCard() {
    const locations = [
        {
          name: "Santa Maria",
          adressLink: "https://www.google.com/maps/place/Av.+Rio+Branco,+899+-+Centro,+Santa+Maria+-+RS,+97010-423/@-29.6853314,-53.8077008,17z/data=!3m1!4b1!4m6!3m5!1s0x9503cb421e9baea7:0x5dabd85eeda5d0c5!8m2!3d-29.6853314!4d-53.8077008!16s%2Fg%2F11thhz6mh6?entry=ttu",
          address: "Santa Maria- Av. Rio Branco, 899",
          phone: "(55) 55 99680-0862",
          whatsappLink: "https://wa.me/5555996800862",
        },
        {
          name: "Santa Maria",
          address: "Santa Maria- Rua José Bonifácio, 2726",
          phone: "(55) 55 99132-1573",
          whatsappLink: "https://wa.me/5555999608507",
        },
        {
          name: "Camobi",
          address: "Camobi - Evandro Behr, 6830",
          phone: "(55) 55 99132-1573",
          whatsappLink: "https://wa.me/55991321573",
        },
        {
          name: "Esteio",
          address: "Esteio - Av. Presidente Vargas, 2033",
          phone: "(55) 51 99812-8971",
          whatsappLink: "https://wa.me/5551998128971",
        },
        {
          name: "São Sepé",
          address: "São Sepé- Cel. Verissimo, 1120",
          phone: "(55) 55 99986-7697",
          whatsappLink: "https://wa.me/5555999867697",
        },
        {
          name: "Caçapava do Sul",
          address: "Caçapava do Sul- Benjamin Constant, 509",
          phone: "(55) 55 99733-2493",
          whatsappLink: "https://wa.me/5555997332493",
        },
        {
          name: "Sapucaia do Sul",
          address: "Avenida Sapucaia, 2120",
          phone: "(55) 51 98018 1685",
          whatsappLink: "https://wa.me/5551980181685",
        },
      ];
      
    return (
      <div>
        {locations.map((location, index) => (
          <div key={index}>
            <Card className="mt-6 w-96">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {location.name}
                </Typography>
                <Typography>
                  <a className="cursor-pointer" href={location.adressLink}>{location.address}</a>
                  <br /><br />
                  {location.phone}
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>
                  <a href={location.whatsappLink}>Fale com uma de nossas especialistas!</a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    );
}
