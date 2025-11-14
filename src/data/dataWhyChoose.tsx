import { FaHeadset, FaShieldAlt, FaStar, FaBolt, FaLayerGroup, FaChartLine } from "react-icons/fa"

type ReasonsProps = {
    id: number
    icon: React.ReactNode
    title:string
    description: string
}

export const reasons: ReasonsProps[] = [
  {
    id: 1,
    icon: <FaHeadset />,
    title: "Suporte Dedicado",
    description: "Atendimento rápido e humano sempre que você precisar."
  },
  {
    id: 2,
    icon: <FaShieldAlt />,
    title: "Segurança Garantida",
    description: "Seus dados e operações estão protegidos com tecnologia de ponta."
  },
  {
    id: 3,
    icon: <FaStar />,
    title: "Alta Avaliação",
    description: "Clientes satisfeitos são nossa melhor propaganda."
  },
  {
    id: 4,
    icon: <FaBolt />,
    title: "Performance Rápida",
    description: "Sistema otimizado para velocidade e eficiência máxima."
  },
  {
    id: 5,
    icon: <FaLayerGroup />,
    title: "Integração Completa",
    description: "Conecte tudo em um só lugar — simples e sem complicações."
  },
  {
    id: 6,
    icon: <FaChartLine />,
    title: "Crescimento Contínuo",
    description: "Atualizações constantes para manter você sempre à frente."
  },
  {
    id: 7,
    icon: <FaChartLine />,
    title: "Crescimento Contínuo",
    description: "Atualizações constantes para manter você sempre à frente."
  },
  {
    id: 8,
    icon: <FaChartLine />,
    title: "Crescimento Contínuo",
    description: "Atualizações constantes para manter você sempre à frente."
  },
]
