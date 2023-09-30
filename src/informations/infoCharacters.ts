import Chopper from "../assets/imagens/personagem-tony-chopper.png";
import Zoro from "../assets/imagens/personagem-roronoa-zoro.png";
import Luffy from "../assets/imagens/personagem-monkey-d-luffy.png";
import Nami from "../assets/imagens/personagem-nami.png";
import Sanji from "../assets/imagens/personagem-sanji.png";
import CrewChopper from "../assets/imagens/tripulacao-chopper.png";
import CrewZoro from "../assets/imagens/tripulacao-zoro.png";
import CrewLuffy from "../assets/imagens/tripulacao-luffy.png";
import CrewNami from "../assets/imagens/tripulacao-nami.png";
import CrewSanji from "../assets/imagens/tripulacao-sanji.png";

export const infoCharacters = [
  {
    id: Math.floor(Math.random() * 1_000_000_000),
    image: Chopper,
    crewImage: CrewChopper,
    characterName: "Tony Chopper",
    characterDescription: `
      Esta pequena rena ganhou a habilidade de mudar sua forma e de pensar como humanos após
      comer a fruto Hito Hito no Mi. Chopper é um valioso membro da tripulação dos Piratas do
      Chapéu de Palha, atuando como médico da tripulação.
    `,
  },
  {
    id: Math.floor(Math.random() * 1_000_000_000),
    image: Zoro,
    crewImage: CrewZoro,
    characterName: "Roronoa Zoro",
    characterDescription: `
      Primeiro pirata (segundo membro se contarmos com Luffy) a se juntar à tripulação de
      Piratas do Chapéu de Palha, Zoro aceitou o convite de Luffy após o capitão salvar sua vida.
    `,
  },
  {
    id: 3,
    image: Luffy,
    crewImage: CrewLuffy,
    characterName: "Monkey D. Luffy",
    characterDescription: `
      "Luffy do Chapéu de Palha", como ficou conhecido, é o protagonista do anime, e o fundador
      e capitão da tripulação Piratas do Chapéu de Palha. Desde muito jovem, tem como  seu maior
      sonho um dia encontrar o lendário tesouro de Gol D. Roger, para se tornar o novo Rei dos
      Piratas.
    `,
  },
  {
    id: Math.floor(Math.random() * 1_000_000_000),
    image: Nami,
    crewImage: CrewNami,
    characterName: "Nami",
    characterDescription: `
      Uma orfã de guerra, ainda criança Nami foi adotada por Bell-mère, uma mulher da Marinha.
      Enquanto crescia ao lado de sua irmã adotiva Nojiko, Nami já demonstrava sua paixão por
      desenhar mapas, sonhando em um dia fazer o mapa de todo o mundo.
    `,
  },
  {
    id: Math.floor(Math.random() * 1_000_000_000),
    image: Sanji,
    crewImage: CrewSanji,
    characterName: "Sanji",
    characterDescription: `
      Também conhecido como "Perna Negra" Sanji, este pirata foi o quinto a integrar a tripulaçãp
      de Luffy.Suas ações como pirata lhe renderam a terceira maior recompensa entre os membrosdo
      Chapéu de Palha, além de atuar como cozinheiro oficial do grupo.
    `,
  },
];
