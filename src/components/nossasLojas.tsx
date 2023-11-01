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
          addressLink: "https://www.google.com/maps/place/Av.+Rio+Branco,+899+-+Centro,+Santa+Maria+-+RS,+97010-423/@-29.6853314,-53.8077008,17z/data=!3m1!4b1!4m6!3m5!1s0x9503cb421e9baea7:0x5dabd85eeda5d0c5!8m2!3d-29.6853314!4d-53.8077008!16s%2Fg%2F11thhz6mh6?entry=ttu",
          address: "Santa Maria- Av. Rio Branco, 899",
          phone: "(55) 55 99680-0862",
          whatsappLink: "https://wa.me/5555996800862",
        },
        {
          name: "Santa Maria",
          addressLink: "https://www.google.com/maps/place/R.+Jos%C3%A9+Bonif%C3%A1cio,+2726+-+Centro,+Santa+Maria+-+RS,+97015-450/data=!4m2!3m1!1s0x9503cb6b4335bca5:0x531be97e4729bccd?sa=X&ved=2ahUKEwjriJ_yiqOCAxV0ppUCHR9LBYUQ8gF6BAgNEAA",
          address: "Santa Maria- Rua José Bonifácio, 2726",
          phone: "(55) 55 99132-1573",
          whatsappLink: "https://wa.me/5555999608507",
        },
        {
          name: "Camobi",
          
          addressLink: "https://www.google.com/maps/place/Av.+Pref.+Evandro+Behr,+6830+-+Camobi,+Santa+Maria+-+RS,+97110-800/data=!4m2!3m1!1s0x9503b5eb7cb4c793:0xd0549bac2eb0f9f1?sa=X&ved=2ahUKEwiEquifi6OCAxW2l5UCHTY6AgUQ8gF6BAgKEAA",
          address: "Camobi - Evandro Behr, 6830",
          phone: "(55) 55 99132-1573",
          whatsappLink: "https://wa.me/55991321573",
        },
        {
          name: "Esteio",
          addressLink: "https://www.google.com/maps/place/Atacad%C3%A3o+do+%C3%93culos+-+Esteio/@-29.8488418,-51.1758139,15z/data=!4m2!3m1!1s0x0:0x2f515ee70ebb4665?sa=X&ved=2ahUKEwiUutvXi6OCAxU0rZUCHSIBCOQQ_BJ6BAhEEAA",
          address: "Esteio - Av. Presidente Vargas, 2033",
          phone: "(55) 51 99812-8971",
          whatsappLink: "https://wa.me/5551998128971",
        },
        {
          name: "São Sepé",
          addressLink: "https://www.google.com/maps/place/Atacad%C3%A3o+do+%C3%93culos+-+S%C3%A3o+Sep%C3%A9/@-30.1671756,-53.5724377,17z/data=!3m1!4b1!4m6!3m5!1s0x950389f2908d9cef:0x9bd15867ef6656da!8m2!3d-30.1671756!4d-53.5698628!16s%2Fg%2F11jsvnwh3h?entry=ttu",
          address: "São Sepé- Cel. Verissimo, 1120",
          phone: "(55) 55 99986-7697",
          whatsappLink: "https://wa.me/5555999867697",
        },
        {
          name: "Caçapava do Sul",
          addressLink: "https://www.google.com/maps/place/Atacad%C3%A3o+do+%C3%93culos+-+Ca%C3%A7apava+do+Sul/@-30.515178,-53.4920792,19z/data=!4m6!3m5!1s0x950467fcce044a53:0xfb933d702c7ef219!8m2!3d-30.515089!4d-53.492621!16s%2Fg%2F11tdxxjncb?entry=ttu",
          address: "Caçapava do Sul- Benjamin Constant, 509",
          phone: "(55) 55 99733-2493",
          whatsappLink: "https://wa.me/5555997332493",
        },
        {
          name: "Sapucaia do Sul",
          addressLink: "https://www.google.com/maps/place/Av.+Sapucaia,+2120+-+Jardim,+Sapucaia+do+Sul+-+RS,+93210-240/@-29.8229849,-51.1506834,17z/data=!3m1!4b1!4m6!3m5!1s0x95196f31e2775e73:0x375c9122686ff5d6!8m2!3d-29.8229896!4d-51.1481085!16s%2Fg%2F11csgh72xh?entry=ttu",
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
                  {location.address}
                  <br /><br />
                  {location.phone}
                </Typography>
                <Typography variant="paragraph" color="blue-gray" className="mb-2">
                  <div className="flex flex-row">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>
                  <a href={location.addressLink}>Confira a localização</a>
                  </div>
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
