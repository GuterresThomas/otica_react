'use client'
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Video from "./videoContainer";
 
export default function AccordionCustomStyles() {
  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value: React.SetStateAction<number>) => setOpen(open === value ? 0 : value);
 
  return (
    <>
      <Accordion open={open === 1} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors ${
            open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          Limpeza
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        Para garantir a clareza da visão e prolongar a vida útil dos seus
óculos de grau e solar, é essencial realizar uma limpeza adequada.
No Atacadão dos Óculos, entendemos a importância desse
cuidado e queremos compartilhar algumas dicas úteis para ajudálo a manter seus óculos limpos e em ótimo estado:
          <br/>
          <Video/>
          <br/>
          Você pode higienizar suas lentes com uma solução de limpeza
especifica para lentes. Nesse caso, borrife a solução sobre as
lentes, espalhe com o dedo em ambos os lados da lente e seque
com papel higiênico macio ou pano de microfibra.
<br/>
Você, também, pode fazer a limpeza de suas lentes com água
corrente e sabão neutro. Nesse caso, lave as lentes com agua
corrente e espalhe com o dedo, em ambos os lados da lente, o
sabão neutro e depois enxague, novamente, em agua corrente e
seque com papel higiênico macio ou pano de microfibra
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors ${
            open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          Dicas de cuidados com seus óculos
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        No Atacadão dos Óculos, sabemos que seus óculos de sol e de
    grau são itens essenciais para a sua visão e estilo. Para garantir
    sua durabilidade e desempenho máximo, é importante seguir
    algumas dicas de cuidados. Aqui estão algumas orientações
    valiosas para ajudar você a manter seus óculos sempre em ótimo
    estado:
    <ul>
        <li>Sempre utilize as duas mãos ao colocar e
remover seus óculos. Isso evita a pressão desnecessária em uma
única haste ou dobradiça, mantendo a estrutura dos óculos
alinhada e minimizando o risco de danos. </li>
        <li>
        Quando você não estiver usando seus
óculos, guarde-os em um estojo protetor adequado. Isso ajuda a
proteger as lentes de arranhões e a armação de danos. Certifiquese de que o estojo esteja limpo antes de guardá-los.  
        </li>
        <li>
        Evite deixar seus óculos em locais expostos a temperaturas extremas,
como dentro do carro em um dia muito quente. Temperaturas
excessivamente altas ou baixas podem danificar os materiais das
armações e afetar o desempenho das lentes
        </li>
        <li>
        Ao colocar os óculos sobre uma superfície, evite
colocá-los com as lentes viradas para baixo. Isso pode arranhar as
lentes. Coloque-os com as lentes viradas para cima ou utilize um
pano macio como base.
        </li>
        <li>
        Se você sentir que seus óculos estão
desalinhados, não se encaixam corretamente ou precisam de
algum ajuste, visite um profissional em uma de nossas lojas. Nossa
equipe estará pronta para fazer os ajustes necessários para
garantir um encaixe perfeito e confortável. 
        </li>
    </ul>
        </AccordionBody>
    </Accordion>
    </>
  );
}