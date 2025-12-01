import { createContext, useContext, useEffect, useState } from "react";
import { criarUsuario, obterUsuario } from "../api";
import { IUsuario } from "../types";

interface AppContextType {
  usuario: IUsuario | null;
  criaUsuario?: (usuario: Omit<IUsuario, "id">) => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [usuario, setUsuario] = useState<IUsuario | null>(null);

  const carregaDadosUsuario = async () => {
    try {
      const usuarios = await obterUsuario();
      if (usuarios.length > 0) {
        setUsuario(usuarios[0]);
      }
    } catch (error) {
      console.error("Erro ao carregar dados do usuário:", error);
    }
  };

  useEffect(() => {
    carregaDadosUsuario();
  });

  const criaUsuario = async (usuario: Omit<IUsuario, "id">) => {
    try {
      const novoUsuario = await criarUsuario(usuario);
      setUsuario(novoUsuario);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  };

  return (
    <AppContext.Provider value={{ usuario, criaUsuario }}>
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
