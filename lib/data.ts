export interface Article {
  id: number;
  title: string;
  image: string;
  description: string;
  content: string;
  link: string;
  category: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "Lámpara minimalista de diseño nórdico",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=1470&auto=format&fit=crop",
    description: "Añade calidez y estilo a tu habitación con esta lámpara moderna y funcional.",
    content: `
      Esta lámpara combina un diseño minimalista con materiales de alta calidad para crear un ambiente acogedor.
      
      Ideal para dormitorios, salas de estar o espacios de trabajo, su luz suave ayuda a relajar la mente mientras mejora la estética del espacio.
      
      ## Beneficios principales
      
      - Diseño atemporal que combina con cualquier decoración
      - Luz ajustable para diferentes momentos del día
      - Material duradero y sostenible
      - Fácil instalación y mantenimiento
      
      ## Consejos de uso
      
      1. Coloca la lámpara en una esquina para crear un ambiente acogedor
      2. Combina con otros elementos decorativos de estilo nórdico
      3. Ajusta la intensidad según la hora del día
      4. Limpia regularmente con un paño suave`,
    category: "Iluminación",
    link: "https://example.com/lampara-nordica"
  },
  {
    id: 2,
    title: "Difusor de aceites esenciales",
    image: "https://images.unsplash.com/photo-1602928298849-325cec8771c0?q=80&w=1470&auto=format&fit=crop",
    description: "Mejora tu bienestar con aromas relajantes que transforman cualquier espacio.",
    content: `
      Los difusores de aceites esenciales son perfectos para reducir el estrés y crear un ambiente relajante en tu hogar.
      Su diseño elegante lo convierte en un complemento ideal para cualquier habitación.
      
      ## Beneficios principales
      
      - Mejora la calidad del aire
      - Reduce el estrés y la ansiedad
      - Ayuda a conciliar el sueño
      - Diseño decorativo
      
      ## Consejos de uso
      
      1. Utiliza aceites esenciales de alta calidad
      2. Limpia el difusor regularmente
      3. Coloca en un lugar central de la habitación
      4. Experimenta con diferentes mezclas de aceites`,
    category: "Bienestar",
    link: "https://example.com/difusor-aceites"
  },
  {
    id: 3,
    title: "Organizador modular de bambú",
    image: "https://images.unsplash.com/photo-1594626302778-62444f79ddb9?q=80&w=1470&auto=format&fit=crop",
    description: "Mantén tu espacio ordenado con este elegante sistema de organización.",
    content: `
      Este organizador modular de bambú es la solución perfecta para mantener tu espacio ordenado sin sacrificar el estilo.
      
      ## Beneficios principales
      
      - Material sostenible y duradero
      - Diseño modular adaptable
      - Fácil limpieza y mantenimiento
      - Estética natural y elegante
      
      ## Consejos de uso
      
      1. Planifica tu espacio antes de configurar los módulos
      2. Combina diferentes tamaños según tus necesidades
      3. Utiliza los separadores para maximizar el espacio
      4. Mantén el bambú con aceite mineral regularmente`,
    category: "Organización",
    link: "https://example.com/organizador-bambu"
  }
];