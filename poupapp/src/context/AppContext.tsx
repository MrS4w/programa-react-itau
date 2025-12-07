import { createContext, useContext, useEffect, useState } from "react";
import {
  criarTransacao,
  criarUsuario,
  obterTransacoes,
  obterUsuario,
} from "../api";
import { ITransacoes, IUsuario } from "../types";

interface AppContextType {
  usuario: IUsuario | null;
  criaUsuario: (
    usuario: Omit<IUsuario, "id" | "orcamentoDiario">
  ) => Promise<void>;
  transacoes: ITransacoes[];
  criaTransacao: (
    novaTransacao: Omit<ITransacoes, "id" | "userId">
  ) => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [usuario, setUsuario] = useState<IUsuario | null>(null);
  const [transacoes, setTransacoes] = useState<ITransacoes[]>([]);

  const carregaDadosUsuario = async () => {
    try {
      const usuarios = await obterUsuario();
      const transacoes = await obterTransacoes();

      if (usuarios.length > 0) {
        setUsuario(usuarios[0]);
        setTransacoes(transacoes);
      }
      console.log(
        "Dados do usuário e transações carregados com sucesso",
        usuarios,
        transacoes
      );
    } catch (error) {
      console.error("Erro ao carregar dados do usuário:", error);
    }
  };

  useEffect(() => {
    carregaDadosUsuario();
  });

  const criaUsuario = async (
    usuario: Omit<IUsuario, "id" | "orcamentoDiario">
  ) => {
    try {
      const novoUsuario = await criarUsuario(usuario);
      setUsuario(novoUsuario);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  };

  const criaTransacao = async (
    novaTransacao: Omit<ITransacoes, "id" | "userId">
  ) => {
    try {
      if (!usuario) {
        throw new Error("Usuário não está definido");
      }

      const { transacao, novoOrcamentoDiario } = await criarTransacao(
        novaTransacao,
        usuario
      );
      setTransacoes((prev) => [...prev, transacao]);
      setUsuario((prev) =>
        prev ? { ...prev, orcamentoDiario: novoOrcamentoDiario } : null
      );
    } catch (error) {
      console.error("Erro ao criar transação:", error);
    }
  };

  return (
    <AppContext.Provider
      value={{ usuario, criaUsuario, transacoes, criaTransacao }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext deve ser usado dentro de um AppProvider");
  }

  return context;
};
