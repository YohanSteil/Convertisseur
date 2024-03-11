import { ChangeEvent } from 'react';
import './Header.scss';

type HeaderProps = {
  baseAmount: number;
  setBaseAmount: React.Dispatch<React.SetStateAction<number>>;
};
function Header({ baseAmount, setBaseAmount }: HeaderProps) {
  // Pour voir le champ contrôlé, on va créer une donnée d'état
  // // Directement dans le composant
  // const [num, setNum] = useState(0);

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    // Je vais récupérer la valeur de l'input
    const { value } = event.target;
    // Je vais convertir la valeur en nombre
    const numValue = Number(value);
    // Je vais mettre à jour ma donnée
    setBaseAmount(numValue);
  };

  return (
    <header className="header">
      <h1 className="header__title">Converter</h1>
      <p className="header__amount">
        <input 
        className='header__input'
          type="number"
          // On je vais fixer la valeur de l'input avec ma donnée
          value={baseAmount}
          // Au changement de valeur, je vais modifier ma donnée
          onChange={handleChangeInput}
        />
         EURO(S)
      </p>
    </header>
  );
}

export default Header;
