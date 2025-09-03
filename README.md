# 🚀 AurumZ - Finanças + Carreira com IA

## 📱 Visão Geral

O **AurumZ** é um aplicativo móvel inovador que combina gestão financeira pessoal com orientação de carreira, utilizando inteligência artificial para fornecer insights personalizados e recomendações inteligentes.

## ✨ Características Principais

- **Dashboard Financeiro Inteligente**: Visualização clara de salário, dívidas e objetivos financeiros
- **Orientação de Carreira com IA**: Roadmaps personalizados para transição profissional
- **Gestão de Dívidas**: Planos de quitação inteligentes e personalizados
- **Recomendações de Investimentos**: Sugestões baseadas no perfil educacional e financeiro
- **Interface Moderna**: Design elegante com tema escuro e elementos dourados
- **Suporte Multiplataforma**: Android, iOS e Web

## 🏗️ Arquitetura do Projeto

### Estrutura de Diretórios
```
AurumZ/
├── frontend/                 # Aplicação React Native/Expo
│   ├── app/                  # Sistema de roteamento baseado em arquivos
│   │   ├── (tabs)/          # Navegação por abas
│   │   ├── _layout.tsx      # Layout principal da aplicação
│   │   └── theme.ts         # Sistema de temas personalizado
│   ├── components/           # Componentes reutilizáveis
│   ├── constants/            # Constantes e configurações
│   ├── hooks/                # Hooks personalizados
│   └── assets/               # Recursos estáticos
├── backend/                  # Serviços backend (em desenvolvimento)
└── docs/                     # Documentação adicional
```

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React Native 0.79.5** - Framework para desenvolvimento móvel
- **Expo SDK 53** - Plataforma de desenvolvimento universal
- **TypeScript 5.8.3** - Tipagem estática para JavaScript
- **React Navigation 7** - Navegação entre telas
- **React Native Reanimated 3** - Animações nativas de alto desempenho

### Dependências Principais
- `expo-router` - Roteamento baseado em arquivos
- `expo-haptics` - Feedback tátil para iOS
- `expo-blur` - Efeitos de desfoque
- `expo-font` - Carregamento de fontes personalizadas
- `expo-image` - Otimização de imagens

### Ferramentas de Desenvolvimento
- **ESLint** - Análise estática de código
- **Babel** - Transpilação de JavaScript
- **Metro** - Bundler para React Native

## 🎨 Sistema de Design

### Paleta de Cores
```typescript
export const theme = {
  bg: "#0B1220",       // Fundo escuro principal
  card: "#111827",     // Fundo dos cards
  text: "#E5E7EB",     // Texto principal
  subtext: "#9CA3AF",  // Texto secundário
  gold: "#F4C430",     // Dourado Aurum (cor de destaque)
  green: "#22C55E",    // Verde para indicadores positivos
  red: "#EF4444",      // Vermelho para alertas
  blue: "#3B82F6",     // Azul para links e ações
};
```

### Tipografia
- **Fonte Principal**: SpaceMono (monospace)
- **Hierarquia**: Títulos, subtítulos, corpo de texto e dicas
- **Pesos**: Regular (400), SemiBold (600), Bold (700), ExtraBold (800)

## 📱 Funcionalidades das Telas

### 🏠 Tela Principal (Home)
- **Header**: Branding AurumZ com subtítulo descritivo
- **Cards Informativos**:
  - Salário atual com indicador de mercado
  - Objetivo de carreira com botão para roadmap
  - Status das dívidas com plano de quitação
- **Seção de Investimentos**: Sugestões baseadas no perfil educacional

### 🔍 Tela de Exploração
- **Parallax Scroll**: Efeito visual avançado
- **Componentes Colapsáveis**: Organização de informações
- **Exemplos de Funcionalidades**: Demonstração das capacidades do app
- **Suporte a Tema**: Adaptação automática claro/escuro

## 🧩 Componentes Principais

### HapticTab
- Feedback tátil para navegação por abas no iOS
- Integração com expo-haptics para experiência premium

### HelloWave
- Animação de saudação usando React Native Reanimated
- Sequência de rotação com timing personalizado

### ThemedText & ThemedView
- Componentes com suporte automático a temas
- Adaptação dinâmica entre modo claro e escuro

### ParallaxScrollView
- Scroll com efeito parallax no header
- Suporte específico para iOS com blur effects

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- Expo CLI
- Android Studio (para Android) ou Xcode (para iOS)

### Instalação
```bash
# Clonar o repositório
git clone <repository-url>
cd AurumZ/frontend

# Instalar dependências
npm install

# Iniciar o projeto
npm start
```

### Comandos Disponíveis
```bash
npm start          # Iniciar servidor de desenvolvimento
npm run android    # Executar no Android
npm run ios        # Executar no iOS
npm run web        # Executar na web
npm run lint       # Verificar qualidade do código
npm run reset-project  # Resetar para projeto limpo
```

## 📱 Plataformas Suportadas

- **Android**: Suporte completo com ícones adaptativos
- **iOS**: Suporte para iPhone e iPad com efeitos específicos
- **Web**: Versão web responsiva com bundler Metro

## 🔧 Configurações

### Expo
- **Nome**: AurumZ
- **Slug**: aurumz
- **Versão**: 1.0.0
- **Orientação**: Portrait
- **Interface**: Estilo automático (claro/escuro)

### TypeScript
- **Configuração**: Extende expo/tsconfig.base
- **Paths**: Aliases @/* para importações
- **Strict Mode**: Habilitado para maior segurança

## 🎯 Roadmap de Desenvolvimento

### Fase Atual (1.0.0)
- ✅ Interface básica implementada
- ✅ Sistema de navegação por abas
- ✅ Componentes de UI fundamentais
- ✅ Sistema de temas

### Próximas Fases
- 🔄 Backend com APIs RESTful
- 🔄 Integração com IA para recomendações
- 🔄 Sistema de autenticação
- 🔄 Sincronização em nuvem
- 🔄 Notificações push
- 🔄 Analytics e métricas

## 🤝 Contribuição

### Estrutura de Commits
- `feat:` Novas funcionalidades
- `fix:` Correções de bugs
- `docs:` Documentação
- `style:` Formatação de código
- `refactor:` Refatoração
- `test:` Testes

### Padrões de Código
- TypeScript strict mode
- ESLint com configuração Expo
- Componentes funcionais com hooks
- Props tipadas
- Nomenclatura consistente

## 📄 Licença

Este projeto está sob licença [inserir tipo de licença].

## 📞 Contato

- **Desenvolvedor**: Matheus Oliveira da Silva
- **Email**: matheus.devbackend@gmail.com
- **GitHub**: iadevmatth

---

*Desenvolvido com ❤️ usando React Native e Expo*
