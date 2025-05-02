// funcoesOrganicasData.tsx
import React from "react";
import { Svg, Line, Text, Path, Circle, Polygon } from "react-native-svg";

const Tamanho = 100;
const stroke = "#fff"; // Cor branca para as linhas e texto
const strokeWidth = 2;

// --- Funções SVG Refatoradas ---

// EpóxidoSVG (anel de 3 membros com um oxigênio)
const EpoxidoSVG = () => (
  <Svg width={Tamanho} height={Tamanho} viewBox="0 0 100 100">
    {/* Representação de um triângulo (anel de 3 membros) */}
    {/* Coordenadas ajustadas para centralizar e representar um triângulo */}
    <Polygon
      points="50,25 25,75 75,75"
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill="none"
    />
    {/* Onde estaria o oxigênio no vértice superior */}
    <Text
      x="50"
      y="20" // Posição ajustada para ficar acima do vértice
      fill={stroke}
      fontSize="10"
      textAnchor="middle" // Centraliza o texto horizontalmente
    >
      O
    </Text>
  </Svg>
);

// CiclanoSVG (anel saturado, ex: Ciclohexano)
const CiclanoSVG = () => (
  <Svg width={Tamanho} height={Tamanho} viewBox="0 0 100 100">
    {/* Representação de um hexágono regular (Ciclohexano) */}
    {/* Coordenadas para um hexágono centralizado */}
    <Polygon
      points="50,17 83,33.5 83,66.5 50,83 17,66.5 17,33.5"
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill="none"
    />
  </Svg>
);

// CiclenoSVG (anel com ligação dupla, ex: Ciclohexeno)
const CiclenoSVG = () => (
  <Svg width={Tamanho} height={Tamanho} viewBox="0 0 100 100">
    {/* Representação de um hexágono (anel) */}
    <Polygon
      points="50,17 83,33.5 83,66.5 50,83 17,66.5 17,33.5"
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill="none"
    />
    {/* Ligação dupla em uma das arestas, ex: aresta superior */}
    {/* Posições ligeiramente deslocadas da aresta para representar a dupla ligação */}
    <Line
      x1="50"
      y1="17"
      x2="83"
      y2="33.5"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      x1="52" // Ajuste horizontal
      y1="20" // Ajuste vertical
      x2="85" // Ajuste horizontal
      y2="36.5" // Ajuste vertical
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  </Svg>
);

// CiclinosSVG (anel com ligação tripla - representação simplificada)
const CiclinosSVG = () => (
  <Svg width={Tamanho} height={Tamanho} viewBox="0 0 100 100">
    {/* Representação de um hexágono (anel) */}
    <Polygon
      points="50,17 83,33.5 83,66.5 50,83 17,66.5 17,33.5"
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill="none"
    />
    {/* Representação simplificada da ligação tripla em uma aresta */}
    {/* Três linhas paralelas em uma aresta */}
    <Line
      x1="50"
      y1="17"
      x2="83"
      y2="33.5"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      x1="53" // Ajuste horizontal
      y1="19" // Ajuste vertical
      x2="86" // Ajuste horizontal
      y2="35.5" // Ajuste vertical
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      x1="47" // Ajuste horizontal
      y1="15" // Ajuste vertical
      x2="80" // Ajuste horizontal
      y2="31.5" // Ajuste vertical
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  </Svg>
);

// HidrocarbonetoAromaticoSVG (anel benzênico)
const HidrocarbonetoAromaticoSVG = () => (
  <Svg width={Tamanho} height={Tamanho} viewBox="0 0 100 100">
    {/* Representação de um hexágono (anel de carbono) */}
    <Polygon
      points="50,17 83,33.5 83,66.5 50,83 17,66.5 17,33.5"
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill="none"
    />
    {/* Círculo no centro para representar a ressonância */}
    <Circle
      cx="50"
      cy="50"
      r="15"
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill="none"
    />
  </Svg>
);

// --- Funções SVG Originais (mantidas para referência ou uso contínuo) ---

const AcidoCarboxilicoSVG = () => (
  <Svg width={Tamanho} height={Tamanho} viewBox="0 0 100 100">
    <Line
      x1="20"
      y1="50"
      x2="50"
      y2="50"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      x1="50"
      y1="50"
      x2="70"
      y2="30"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Text x="72" y="28" fill={stroke} fontSize="10">
      OH
    </Text>
    <Line
      x1="50"
      y1="50"
      x2="70"
      y2="70"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Text x="72" y="72" fill={stroke} fontSize="10">
      O
    </Text>
  </Svg>
);

const CetonaSVG = () => (
  <Svg width={Tamanho} height={Tamanho} viewBox="0 0 100 100">
    <Line
      x1="20"
      y1="50"
      x2="80"
      y2="50"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      x1="50"
      y1="50"
      x2="50"
      y2="30"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Text x="52" y="28" fill={stroke} fontSize="10">
      O
    </Text>
  </Svg>
);

const AldeidoSVG = () => (
  <Svg width={Tamanho} height={Tamanho} viewBox="0 0 100 100">
    <Line
      x1="20"
      y1="50"
      x2="60"
      y2="50"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      x1="60"
      y1="50"
      x2="80"
      y2="30"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Text x="82" y="28" fill={stroke} fontSize="10">
      H
    </Text>
  </Svg>
);

const AlcoolSVG = () => (
  <Svg width={Tamanho} height={Tamanho} viewBox="0 0 100 100">
    <Line
      x1="20"
      y1="50"
      x2="70"
      y2="50"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Text x="72" y="48" fill={stroke} fontSize="10">
      OH
    </Text>
  </Svg>
);

const EterSVG = () => (
  <Svg width={Tamanho} height={Tamanho} viewBox="0 0 100 100">
    {/* Cadeia à esquerda */}
    <Line
      x1="10"
      y1="50"
      x2="40"
      y2="50"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    {/* Oxigênio no centro (usando Text para 'O') */}
    <Text
      x="50"
      y="53" // Posição ajustada para o centro
      fill={stroke}
      fontSize="14" // Tamanho maior para o 'O' central
      textAnchor="middle" // Centraliza o texto horizontalmente
    >
      O
    </Text>
    {/* Cadeia à direita */}
    <Line
      x1="60"
      y1="50"
      x2="90"
      y2="50"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  </Svg>
);

// EsterSVG
const EsterSVG = () => (
  <Svg width={Tamanho} height={Tamanho} viewBox="0 0 100 100">
    {/* Cadeia à esquerda */}
    <Line
      x1="10"
      y1="50"
      x2="40"
      y2="50"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    {/* Carbonila (C=O) */}
    <Line // Ligação C-C da carbonila
      x1="40"
      y1="50"
      x2="55"
      y2="50"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line // Ligação C=O da carbonila
      x1="55"
      y1="50"
      x2="55"
      y2="35" // Posição vertical para o oxigênio
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Text // Texto para o oxigênio da carbonila
      x="55"
      y="30" // Posição ajustada acima da linha
      fill={stroke}
      fontSize="10"
      textAnchor="middle"
    >
      O
    </Text>

    {/* Oxigênio do éster (O-R') */}
    <Line // Ligação C-O do éster
      x1="55"
      y1="50"
      x2="70"
      y2="50"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Text // Texto para o oxigênio do éster
      x="75" // Posição ajustada
      y="48"
      fill={stroke}
      fontSize="10"
    >
      O
    </Text>

    {/* Cadeia R' à direita */}
    <Line
      x1="70"
      y1="50"
      x2="90"
      y2="50"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  </Svg>
);

// AminaSVG
const AminaSVG = () => (
  <Svg width={Tamanho} height={Tamanho} viewBox="0 0 100 100">
    {/* Cadeia à esquerda */}
    <Line
      x1="10"
      y1="50"
      x2="40"
      y2="50"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    {/* Nitrogênio no centro (usando Text para 'N') */}
    <Text
      x="50"
      y="53" // Posição ajustada para o centro
      fill={stroke}
      fontSize="14" // Tamanho maior para o 'N' central
      textAnchor="middle" // Centraliza o texto horizontalmente
    >
      N
    </Text>
    {/* Hidrogênios da amina (simplificado, pode ser NH2 ou NHR/NR2) */}
    <Text
      x="65" // Posição à direita do N
      y="53" // Posição vertical alinhada com o N
      fill={stroke}
      fontSize="10"
    >
      H₂
    </Text>
    {/* Cadeia à direita (para aminas secundárias/terciárias, simplificado aqui) */}
    {/* Se for amina primária, essa linha não existiria ou seria um H */}
    {/* Mantido para representar R-NH2/NHR/NR2 genericamente */}
    <Line
      x1="55" // Começa após o N
      y1="50"
      x2="90"
      y2="50"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  </Svg>
);

// AmidaSVG
const AmidaSVG = () => (
  <Svg width={Tamanho} height={Tamanho} viewBox="0 0 100 100">
    {/* Cadeia à esquerda */}
    <Line
      x1="10"
      y1="50"
      x2="40"
      y2="50"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    {/* Carbonila (C=O) */}
    <Line // Ligação C-C da carbonila
      x1="40"
      y1="50"
      x2="55"
      y2="50"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line // Ligação C=O da carbonila
      x1="55"
      y1="50"
      x2="55"
      y2="35" // Posição vertical para o oxigênio
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Text // Texto para o oxigênio da carbonila
      x="55"
      y="30" // Posição ajustada acima da linha
      fill={stroke}
      fontSize="10"
      textAnchor="middle"
    >
      O
    </Text>

    {/* Nitrogênio da amida (-NH2) */}
    <Line // Ligação C-N da amida
      x1="55"
      y1="50"
      x2="70"
      y2="50"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Text // Texto para o grupo amina
      x="75" // Posição ajustada
      y="53"
      fill={stroke}
      fontSize="10"
    >
      NH₂
    </Text>
  </Svg>
);

// HaletoSVG
const HaletoSVG = () => (
  <Svg width={Tamanho} height={Tamanho} viewBox="0 0 100 100">
    {/* Cadeia à esquerda */}
    <Line
      x1="20"
      y1="50"
      x2="60" // Ligação ao halogênio
      y1="50"
      y2="50"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    {/* Halogênio no final */}
    <Text x="62" y="53" fill={stroke} fontSize="14">
      X
    </Text>
  </Svg>
);

const AlcanoSVG = () => (
  <Svg width={Tamanho} height={Tamanho} viewBox="0 0 100 100">
    {/* Linha reta simples representando uma cadeia de alcano */}
    <Line
      x1="20"
      y1="50"
      x2="80"
      y2="50"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  </Svg>
);

const AlcenoSVG = () => (
  <Svg width={Tamanho} height={Tamanho} viewBox="0 0 100 100">
    {/* Ligação simples antes da dupla */}
    <Line
      x1="20"
      y1="50"
      x2="40"
      y2="50"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    {/* Ligação dupla */}
    {/* Duas linhas paralelas para representar a ligação dupla entre dois carbonos */}
    <Line
      x1="40"
      y1="47" // Deslocamento para cima
      x2="60"
      y2="47" // Deslocamento para cima
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      x1="40"
      y1="53" // Deslocamento para baixo
      x2="60"
      y2="53" // Deslocamento para baixo
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    {/* Ligação simples depois da dupla */}
    <Line
      x1="60"
      y1="50"
      x2="80"
      y2="50"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  </Svg>
);

const AlcinoSVG = () => (
  <Svg width={Tamanho} height={Tamanho} viewBox="0 0 100 100">
    {/* Ligação simples antes da tripla */}
    <Line
      x1="20"
      y1="50"
      x2="40"
      y2="50"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    {/* Ligação tripla */}
    {/* Três linhas paralelas para representar a ligação tripla */}
    <Line
      x1="40"
      y1="45" // Deslocamento para cima
      x2="60"
      y2="45" // Deslocamento para cima
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      x1="40"
      y1="50" // Linha do meio
      x2="60"
      y2="50" // Linha do meio
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      x1="40"
      y1="55" // Deslocamento para baixo
      x2="60"
      y2="55" // Deslocamento para baixo
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    {/* Ligação simples depois da tripla */}
    <Line
      x1="60"
      y1="50"
      x2="80"
      y2="50"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  </Svg>
);

const FenolSVG = () => (
  <Svg width={Tamanho} height={Tamanho} viewBox="0 0 100 100">
    {/* Anel aromático */}
    <Polygon
      points="50,17 83,33.5 83,66.5 50,83 17,66.5 17,33.5"
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill="none"
    />
    {/* Círculo no centro para representar a ressonância */}
    <Circle
      cx="50"
      cy="50"
      r="15"
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill="none"
    />

    {/* Ligação ao grupo OH */}
    <Line
      x1="83" // Exemplo: ligado a um vértice
      y1="50" // Posição vertical entre os vértices direitos
      x2="95" // Posição final da linha
      y2="50"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    {/* Texto para o grupo OH */}
    <Text x="97" y="53" fill={stroke} fontSize="10">
      OH
    </Text>
  </Svg>
);

const TiolSVG = () => (
  <Svg width={Tamanho} height={Tamanho} viewBox="0 0 100 100">
    {/* Cadeia R */}
    <Line
      x1="20"
      y1="50"
      x2="60" // Ligação ao grupo SH
      y2="50"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    {/* Grupo SH */}
    <Text x="62" y="53" fill={stroke} fontSize="14">
      SH
    </Text>
  </Svg>
);

const NitrocompostoSVG = () => (
  <Svg width={Tamanho} height={Tamanho} viewBox="0 0 100 100">
    {/* Cadeia R */}
    <Line
      x1="20"
      y1="50"
      x2="50" // Ligação ao grupo NO2
      y2="50"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    {/* Grupo NO2 (representação simplificada) */}
    <Text
      x="52" // Posição próxima ao ponto de ligação
      y="53"
      fill={stroke}
      fontSize="14"
    >
      NO₂
    </Text>
  </Svg>
);

const NitrilaSVG = () => (
  <Svg width={Tamanho} height={Tamanho} viewBox="0 0 100 100">
    {/* Cadeia R */}
    <Line
      x1="20"
      y1="50"
      x2="60" // Ligação ao grupo CN
      y2="50"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    {/* Grupo CN (representação simplificada) */}
    <Text
      x="62" // Posição próxima ao ponto de ligação
      y="53"
      fill={stroke}
      fontSize="14"
    >
      CN
    </Text>
  </Svg>
);

const IsonitrilaSVG = () => (
  <Svg width={Tamanho} height={Tamanho} viewBox="0 0 100 100">
    {/* Cadeia R */}
    <Line
      x1="20"
      y1="50"
      x2="60" // Ligação ao grupo NC
      y2="50"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    {/* Grupo NC (representação simplificada) */}
    <Text
      x="62" // Posição próxima ao ponto de ligação
      y="53"
      fill={stroke}
      fontSize="14"
    >
      N≡C
    </Text>
  </Svg>
);

const SulfonacidoSVG = () => (
  <Svg width={Tamanho} height={Tamanho} viewBox="0 0 100 100">
    {/* Cadeia R */}
    <Line
      x1="20"
      y1="50"
      x2="50" // Ligação ao grupo SO3H
      y2="50"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    {/* Grupo SO3H (representação simplificada) */}
    <Text
      x="52" // Posição próxima ao ponto de ligação
      y="53"
      fill={stroke}
      fontSize="14"
    >
      SO₃H
    </Text>
  </Svg>
);

const AnidridoDeAcidoSVG = () => (
  <Svg width={Tamanho} height={Tamanho} viewBox="0 0 100 100">
    {/* Cadeia R1 */}
    <Line
      x1="10"
      y1="50"
      x2="30"
      y2="50"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    {/* Carbonila 1 */}
    <Line
      x1="30"
      y1="50"
      x2="45"
      y2="50"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      x1="45"
      y1="50"
      x2="45"
      y2="35"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Text x="45" y="30" fill={stroke} fontSize="10" textAnchor="middle">
      O
    </Text>

    {/* Oxigênio central */}
    <Text x="50" y="53" fill={stroke} fontSize="14" textAnchor="middle">
      O
    </Text>

    {/* Carbonila 2 */}
    <Line
      x1="55"
      y1="50"
      x2="70"
      y2="50"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Line
      x1="70"
      y1="50"
      x2="70"
      y2="35"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <Text x="70" y="30" fill={stroke} fontSize="10" textAnchor="middle">
      O
    </Text>

    {/* Cadeia R2 */}
    <Line
      x1="70"
      y1="50"
      x2="90"
      y2="50"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  </Svg>
);

const SalDeAcidoCarboxilicoSVG = () => (
  <Svg width={Tamanho} height={Tamanho} viewBox="0 0 100 100">
    {/* Cadeia R */}
    <Line
      x1="20"
      y1="50"
      x2="50" // Ligação ao grupo carboxilato
      y2="50"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    {/* Grupo CO2- (representação simplificada) */}
    <Text
      x="52" // Posição próxima ao ponto de ligação
      y="53"
      fill={stroke}
      fontSize="14"
    >
      CO₂⁻
    </Text>
    {/* Cátion (ex: Na+) - representação simplificada */}
    <Text
      x="75" // Posição à direita do CO2-
      y="53"
      fill={stroke}
      fontSize="10"
    >
      Mⁿ⁺ {/* M para metal, n para carga */}
    </Text>
  </Svg>
);

const PeroxidoOrganicoSVG = () => (
  <Svg width={Tamanho} height={Tamanho} viewBox="0 0 100 100">
    {/* Cadeia R1 */}
    <Line
      x1="20"
      y1="50"
      x2="40" // Ligação ao primeiro oxigênio
      y2="50"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    {/* Ligação O-O */}
    <Line
      x1="40"
      y1="50"
      x2="60" // Ligação ao segundo oxigênio
      y2="50"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    {/* Cadeia R2 */}
    <Line
      x1="60"
      y1="50"
      x2="80" // Ligação final
      y2="50"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    {/* Texto O-O (opcional, para clareza) */}
    <Text
      x="50" // Centro da ligação O-O
      y="45" // Acima da linha
      fill={stroke}
      fontSize="10"
      textAnchor="middle"
    >
      O-O
    </Text>
  </Svg>
);

// Array com todos os elementos

const funcoesOrganicas = [
  {
    nome: "Álcool",
    grupo: "Hidroxila",
    formula: "R-OH",
    descricao: "Possuem o grupo hidroxila (-OH) ligado a um carbono saturado.",
    svg: () => <AlcoolSVG />,
  },
  {
    nome: "Aldeído",
    grupo: "Carbonila",
    formula: "R-CHO",
    descricao: "Possuem o grupo carbonila na extremidade da cadeia.",
    svg: () => <AldeidoSVG />,
  },
  {
    nome: "Cetona",
    grupo: "Carbonila",
    formula: "R-CO-R'",
    descricao: "Possuem o grupo carbonila entre dois radicais orgânicos.",
    svg: () => <CetonaSVG />,
  },
  {
    nome: "Ácido carboxílico",
    grupo: "Carboxila",
    formula: "R-COOH",
    descricao:
      "Possuem o grupo carboxila, uma carbonila ligada a uma hidroxila.",
    svg: () => <AcidoCarboxilicoSVG />,
  },
  {
    nome: "Éter",
    grupo: "Éter",
    formula: "R-O-R'",
    descricao: "Apresentam um oxigênio entre dois radicais orgânicos.",
    svg: () => <EterSVG />,
  },
  {
    nome: "Éster",
    grupo: "Ester",
    formula: "R-COO-R'",
    descricao:
      "Derivados de ácidos carboxílicos em que o H da hidroxila é substituído por um radical.",
    svg: () => <EsterSVG />,
  },
  {
    nome: "Amina",
    grupo: "Amina",
    formula: "R-NH₂",
    descricao:
      "Compostos derivados da amônia em que um ou mais hidrogênios foram substituídos por radicais orgânicos.",
    svg: () => <AminaSVG />,
  },
  {
    nome: "Amida",
    grupo: "Amida",
    formula: "R-CONH₂",
    descricao:
      "Derivados de ácidos carboxílicos em que o grupo -OH é substituído por -NH₂.",
    svg: () => <AmidaSVG />,
  },
  {
    nome: "Haleto Orgânico",
    grupo: "Halogênio",
    formula: "R-X",
    descricao:
      "Compostos onde um halogênio (F, Cl, Br, I) está ligado a um carbono.",
    svg: () => <HaletoSVG />,
  },
  {
    nome: "Alcano",
    grupo: "Alcano",
    formula: "CnH2n+2", // Fórmula geral para alcano
    descricao: "Compostos saturados de carbono (apenas ligações simples).",
    svg: () => <AlcanoSVG />,
  },
  {
    nome: "Alceno",
    grupo: "Alceno",
    formula: "CnH2n", // Fórmula geral para alceno com uma dupla ligação
    descricao: "Compostos com ligação dupla entre carbonos.",
    svg: () => <AlcenoSVG />,
  },
  {
    nome: "Alcino",
    grupo: "Alcino",
    formula: "CnH2n-2", // Fórmula geral para alcino com uma tripla ligação
    descricao: "Compostos com ligação tripla entre carbonos.",
    svg: () => <AlcinoSVG />,
  },
  {
    nome: "Ciclano",
    grupo: "Ciclano",
    formula: "CnH2n", // Fórmula geral para ciclano
    descricao: "Hidrocarbonetos cíclicos saturados.",
    svg: () => <CiclanoSVG />,
  },
  {
    nome: "Cicleno",
    grupo: "Cicleno",
    formula: "CnH2n-2", // Fórmula geral para cicleno com uma dupla ligação
    descricao: "Hidrocarbonetos cíclicos com ligação dupla.",
    svg: () => <CiclenoSVG />,
  },
  {
    nome: "Ciclinos",
    grupo: "Ciclinos",
    formula: "CnH2n-4", // Fórmula geral para ciclino com uma tripla ligação
    descricao: "Hidrocarbonetos cíclicos com ligação tripla.",
    svg: () => <CiclinosSVG />,
  },
  {
    nome: "Hidrocarboneto Aromático",
    grupo: "Aromático",
    formula: "C₆H₆ (Benzeno)", // Exemplo mais comum
    descricao: "Compostos com anel benzênico (sistema pi conjugado).",
    svg: () => <HidrocarbonetoAromaticoSVG />,
  },
  {
    nome: "Fenol",
    grupo: "Fenol",
    formula: "Ar-OH", // Ar para anel aromático
    descricao:
      "Compostos com grupo hidroxila (-OH) ligado diretamente a um anel aromático.",
    svg: () => <FenolSVG />,
  },
  {
    nome: "Tiol",
    grupo: "Tiol",
    formula: "R-SH",
    descricao: "Compostos com grupo tiol (-SH), análogo sulfurado do álcool.",
    svg: () => <TiolSVG />,
  },
  {
    nome: "Nitrocomposto",
    grupo: "Nitro",
    formula: "R-NO₂",
    descricao: "Compostos contendo o grupo nitro (-NO₂).",
    svg: () => <NitrocompostoSVG />,
  },
  {
    nome: "Nitrila",
    grupo: "Nitrila",
    formula: "R-CN",
    descricao: "Compostos contendo o grupo ciano (-CN) com ligação tripla.",
    svg: () => <NitrilaSVG />,
  },
  {
    nome: "Isonitrila",
    grupo: "Isonitrila",
    formula: "R-N≡C",
    descricao: "Compostos contendo o grupo isociano (-NC) com ligação tripla.",
    svg: () => <IsonitrilaSVG />,
  },
  {
    nome: "Ácido Sulfônico",
    grupo: "Ácido Sulfônico", // Corrigido o nome do grupo
    formula: "R-SO₃H",
    descricao: "Compostos contendo o grupo sulfonila (-SO₃H).",
    svg: () => <SulfonacidoSVG />,
  },
  {
    nome: "Anidrido de Ácido",
    grupo: "Anidrido",
    formula: "(RCO)₂O", // Fórmula geral
    descricao:
      "Compostos formados pela desidratação de dois ácidos carboxílicos.",
    svg: () => <AnidridoDeAcidoSVG />,
  },
  {
    nome: "Sal de Ácido Carboxílico",
    grupo: "Sal de Ácido", // Corrigido o nome do grupo
    formula: "R-COO⁻ M⁺", // M para cátion metálico
    descricao: "Compostos iônicos derivados de ácidos carboxílicos.",
    svg: () => <SalDeAcidoCarboxilicoSVG />,
  },
  {
    nome: "Epóxido",
    grupo: "Éter Cíclico", // Grupo mais descritivo
    formula: "CnH2nO", // Fórmula geral para epóxidos cíclicos
    descricao: "Éteres cíclicos de três membros.",
    svg: () => <EpoxidoSVG />,
  },
  {
    nome: "Peróxido Orgânico",
    grupo: "Peróxido",
    formula: "R-O-O-R'",
    descricao: "Compostos contendo a ligação oxigênio-oxigênio (peróxi).",
    svg: () => <PeroxidoOrganicoSVG />,
  },
];

export default funcoesOrganicas;
