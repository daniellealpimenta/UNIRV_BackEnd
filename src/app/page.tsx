import Image from "next/image";
import { Sidebar } from "@/components/sidebar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
  <main className="min-h-screen bg-white px-4 py-8 flex flex-col items-center ">
  <div className="max-w-md w-full text-center mb-2">
    <h2 className="text-xl font-semibold text-zinc-800">
      Seja bem-vindo ao portal da <span className="text-yellow-400 font-bold">T3</span>,
      <br />
      garanta seu ingresso para o <span className="text-yellow-500">ARRAÍA T3</span>!
    </h2>
  </div>

  <div className="w-full max-w-md">
    <div className="w-full h-50 bg-gray-600 mb-2"></div>
    <div className=" flex w-full items-center justify-center flex-col">
      <h4 className="text-sm">30 de Maio, Sex. | Localização | 20:00 h</h4>
      <h2 className="font-semibold mt-1">Restam <span className="text-yellow-500">15</span> ingressos no 1 Lote</h2>
    </div>
  </div>
  <div className="mt-2">
  <Card className="mb-3">
  <CardContent className="flex items-center gap-4">
    <h3 className="text-sm"><span className="text-yellow-400">1 Lote</span> <br/>Aluno</h3>
    <h1>30 R$</h1>
    <Button className="bg-yellow-500 text-black">COMPRAR</Button>
  </CardContent>
  
</Card>
<Card className="mb-3 opacity-50 ">
  <CardContent className="flex items-center gap-4">
    <h3 className="text-sm"><span className="text-yellow-400">1 Lote</span> <br/>Externo</h3>
    <h1>35 R$</h1>
    <Button className="bg-stone-500 text-black" disabled>COMPRAR</Button>
  </CardContent>
  
</Card>
<Card className="mb-3 opacity-55 bg-stone-400">
  <CardContent className="flex items-center gap-4">
    <h3 className="text-sm"><span className="text-yellow-400">2 Lote</span> <br/>Aluno</h3>
    <h1>35 R$</h1>
    <Button className="bg-yellow-500 text-black" disabled>COMPRAR</Button>
  </CardContent>
  
</Card>
  </div>

</main>

  );
}
