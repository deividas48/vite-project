import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/"> {/* Style: 
            - font-bold: Applies bold font weight.
            - text-2xl: Sets the font size to 2xl (extra large). 2xl usually corresponds to a font size of 1.5rem or 24px..
            - p-4: Sets padding to 1rem (16px) on all sides of the element.
            - tracking-wider: Increases letter spacing to a wider setting.  
            - font-normal: Resets the font weight to the default value.
            - uppercase: Transforms the text to uppercase.
            */}
          <h2 className="font-bold text-2xl p-4 tracking-wider">
            <span className="">Shop</span>
            <span className="font-normal uppercase">TILL</span>
            <span className="">you</span>
            <span className="font-normal">Drop</span>
          </h2>
        </Link>
      </div>
    </header>
  );
}
