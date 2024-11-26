import Image from "next/image";
import React from "react";

export function Footer() {
  return (
        <div className="my-10 flex-col items-center text-sm text-center text-gray-600 dark:text-gray-400">
        <div className="flex flex-col items-center">
        <Image src={"/img/febracis-logo.png"} width={200} height={200} alt="Febracis Logo"/>
        <p>
        Copyright © 2024 FEBRACIS LISBOA<br/><br/>
              Ritmo Adequado Unipessoal Lda – <br/><br/>
              NIF: PT515916943<br/><br/>
              Todos os direitos reservados.<br/><br/>
              Av. Cel. Eduardo Galhardo 16, 1170-105 Lisboa<br/><br/>
              Avisos legais | Política de privacidade | Referencias científicas<br/><br/>
              Este site não é afiliado ao Facebook,
              Meta, Google ou qualquer rede social ou recursos de marketing.<br/>
              A compra desse material não garante nenhum tipo de resultado.
              Fazemos todos os esforços para indicar<br/>claramente e mostrar todas as provas do produto e usamos
              resultados reais de alunos.
        </p>
        </div>
          
        </div>
  );
}


