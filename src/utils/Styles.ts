import { StyleSheet } from 'react-native';
import { colors } from './Colors';

const Styles = StyleSheet.create({
  // Estilo base para o botão no header
  headerButton: {
    marginRight: 15,
  },

  // Estilo para o container do header com botões
  headerContainer: {
    flexDirection: 'row',
    marginRight: 10,
  },

  // Estilo de ícones no TabBar
  tabBarIcon: {
    fontSize: 24, // Tamanho padrão para ícones, se aplicável
  },

  // Estilo para a tela de conteúdo geral (exemplo genérico)
  screenContainer: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 16,
  },

  // Estilo para títulos de telas
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.honey,
    marginBottom: 10,
  },

  // Estilo para botões genéricos
  button: {
    backgroundColor: colors.honey,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },

  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Styles;
