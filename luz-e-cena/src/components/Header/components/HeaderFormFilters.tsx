import { FaLocationDot } from "react-icons/fa6";
import SelectorGroup from "../../Selector/SelectorGroup";
import SelectorOption from "../../Selector/SelectorOption";

const cidades = [
  { id: 1, name: "São Paulo" },
  { id: 2, name: "Rio de Janeiro" },
  { id: 3, name: "Belo Horizonte" },
  { id: 4, name: "Curitiba" },
];

const HeaderFormFilters = () => {
  return (
    <form>
      <SelectorGroup id="cidade" icon={<FaLocationDot />}>
        <SelectorOption label="Escolha sua cidade..." value="" />
        {cidades.map((cidade) => (
          <SelectorOption
            key={cidade.id}
            label={cidade.name}
            value={cidade.name}
          />
        ))}
      </SelectorGroup>
    </form>
  );
};

export default HeaderFormFilters;
