'use client'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export default function BackgroundBlogCard() {
    return (
      <Card className="w-full max-w-[48rem] m-10 flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src="/atacadao_101.webp"
            alt="card-image"
            className="h-full w-full object-cover hover:scale-110"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            Nós nos preocupamos com voçe e com seus óculos!
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Separamos dicas valiosas de cuidado pra você cuidar de seus óculos!
          </Typography>
          <a href="/dicas" className="inline-block">
            <Button variant="text" className="text-xl flex items-center gap-2">
              Clique aqui
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardBody>
      </Card>
    );
  }