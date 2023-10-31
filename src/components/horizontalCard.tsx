'use client'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export default function HorizontalCard() {
    return (
      <div className="mt-2">
        <Card className="w-full font-montserrat max-w-[48rem] flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src="/atacadao_246.jpg"
            alt="card-image"
            className="h-full w-full object-cover hover:scale-110"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            novidades
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Confira alguns de nossos novos modelos!
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius tempore nemo nam culpa nobis magnam pariatur at provident aliquid voluptas aliquam sed ab facilis porro ullam, iure quidem tempora. Iusto.
          </Typography>
          <a href="/modelos" className="inline-block">
            <Button variant="text" className="flex text-xl items-center gap-2">
              Ver modelos
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
      </div>
    );
  }