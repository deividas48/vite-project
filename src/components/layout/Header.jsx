import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center"> {/* Style:
            - container: Applies a max-width of 100% to the element.
            - mx-auto: Applies margin-left and margin-right of auto to the element.
            - flex: Applies display: flex to the element.
            - justify-between: Applies justify-content: space-between to the element.
            - items-center: Applies align-items: center to the element.
        */}
        <Link to="/"> 
        {<> {/* Style:
            - font-bold: Sets the font-weight to bold.
            - text-2xl: Sets the font-size to 1.5rem (24px).
            - p-4: Sets padding to 1rem (16px) on all sides of the element.
            - tracking-wider: Sets letter-spacing to 0.05em.
            - font-normal: Sets the font-weight to normal.
        */}
        </>}
          <h2 className="font-bold text-2xl p-4 tracking-wider">
            <span className="">Shop</span>
            <span className="font-normal uppercase">TILL</span>
            <span className="">you</span>
            <span className="font-normal">Drop</span>
          </h2>
        </Link>
        <nav className='flex'>
            {<>{/* Style:
                - block: Sets the display property to block. This makes the element a block-level element, which means it takes up the full width available.
                - p-4: Sets padding to 1rem (16px) on all sides of the element.
                - hover:bg-gray-800: Changes the background color to gray-800 when the element is hovered. */}
                </>}
            <NavLink to="/" className='block p-4 hover:bg-gray-800'>
              Home  
            </NavLink>
            <NavLink to="/About" className='block p-4 hover:bg-gray-800'>
              About  
            </NavLink>
            <NavLink to="/Shop" className='block p-4 hover:bg-gray-800'>
              Shop  
            </NavLink>
            <NavLink to="/Cart" className='block p-4 hover:bg-gray-800'>
                {/* Make the cart link show the number of items in the cart */}
               Cart {/*{cart.length ? `(${cart.length})` : ''} */}
            </NavLink>
        </nav>
      </div>
    </header>
  );
}
